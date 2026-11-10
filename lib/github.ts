import { PROJECT_SEEDS, type ProjectSeed } from "./projects";

export interface RepoInfo {
  stars: number;
  primaryLanguage: string | null;
  updatedAt: string | null;
  htmlUrl: string;
}

export interface Project extends ProjectSeed, Omit<RepoInfo, "htmlUrl"> {
  htmlUrl: string | null;
}

interface GitHubRepoResponse {
  html_url: string;
  stargazers_count: number;
  language: string | null;
  pushed_at: string | null;
}

export async function fetchRepoInfo(repo: string): Promise<RepoInfo> {
  const fallback: RepoInfo = {
    stars: 0,
    primaryLanguage: null,
    updatedAt: null,
    htmlUrl: `https://github.com/${repo}`,
  };

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;

    const data = (await res.json()) as GitHubRepoResponse;
    return {
      stars: data.stargazers_count,
      primaryLanguage: data.language,
      updatedAt: data.pushed_at,
      htmlUrl: data.html_url,
    };
  } catch {
    return fallback;
  }
}

export async function getProjects(): Promise<Project[]> {
  return Promise.all(
    PROJECT_SEEDS.map(async (seed): Promise<Project> => {
      if (!seed.repo) {
        return { ...seed, stars: 0, primaryLanguage: null, updatedAt: null, htmlUrl: null };
      }
      return { ...seed, ...(await fetchRepoInfo(seed.repo)) };
    })
  );
}
