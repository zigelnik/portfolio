import { PROJECT_SEEDS, type ProjectSeed } from "./projects";

export interface Project extends ProjectSeed {
  stars: number;
  primaryLanguage: string | null;
  updatedAt: string | null;
  htmlUrl: string;
}

interface GitHubRepoResponse {
  html_url: string;
  stargazers_count: number;
  language: string | null;
  pushed_at: string | null;
}

async function fetchRepo(seed: ProjectSeed): Promise<Project> {
  const fallback: Project = {
    ...seed,
    stars: 0,
    primaryLanguage: null,
    updatedAt: null,
    htmlUrl: `https://github.com/${seed.repo}`,
  };

  try {
    const res = await fetch(`https://api.github.com/repos/${seed.repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;

    const data = (await res.json()) as GitHubRepoResponse;
    return {
      ...seed,
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
  return Promise.all(PROJECT_SEEDS.map(fetchRepo));
}
