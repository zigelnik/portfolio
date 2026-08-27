import { fetchRepoInfo, type RepoInfo } from "./github";

export interface OpenSourceSeed {
  slug: string;
  repo: string; // owner/repo for GitHub API
  title: string;
  description: string;
  contribution: string;
  techTags: string[];
}

export interface OpenSourceEntry extends OpenSourceSeed, RepoInfo {}

export const OPEN_SOURCE_SEEDS: OpenSourceSeed[] = [
  {
    slug: "before-i-die-achievements",
    repo: "zigelnik/BeforeIDieAchievements",
    title: "Before I Die — Achievements",
    description:
      "A community bucket-list web app where people share and track life achievements.",
    contribution:
      "Contributed to an open source project by adding RTL language support and user-generated content.",
    techTags: ["RTL i18n", "Open Source", "Community Contribution"],
  },
];

export async function getOpenSourceEntries(): Promise<OpenSourceEntry[]> {
  return Promise.all(
    OPEN_SOURCE_SEEDS.map(async (seed) => ({
      ...seed,
      ...(await fetchRepoInfo(seed.repo)),
    }))
  );
}
