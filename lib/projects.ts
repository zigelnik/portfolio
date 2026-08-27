export type ProjectCategory = "Backend & APIs" | "Cloud & DevOps" | "AI & Automations";

export interface ProjectSeed {
  slug: string;
  repo: string; // owner/repo for GitHub API
  title: string;
  tagline: string;
  bullets: string[];
  categories: ProjectCategory[];
  techTags: string[];
}

export const PROJECT_SEEDS: ProjectSeed[] = [
  {
    slug: "oosht",
    repo: "zigelnik/oosht-public",
    title: "Oosht",
    tagline: "Real-time photo sharing during live events via QR code.",
    bullets: [
      "Designed and built a scalable backend using REST APIs and Firebase/Firestore for real-time data synchronization.",
      "Supported 50+ concurrent users uploading media simultaneously with real-time updates across clients.",
      "Deployed production application on Vercel with an automated CI/CD pipeline triggered by GitHub pushes.",
      "Worked with cloud-based storage (Cloudflare) and distributed services.",
    ],
    categories: ["Backend & APIs", "Cloud & DevOps"],
    techTags: ["Node.js", "Firebase", "Firestore", "Vercel", "Cloudflare", "REST API"],
  },
  {
    slug: "fracture-capture",
    repo: "zigelnik/Fracture-Capture",
    title: "FractureCapture",
    tagline: "Web application detecting bone fractures from X-ray images.",
    bullets: [
      "Built backend architecture using Node.js, Express, and MongoDB with clear separation of concerns.",
      "Implemented an asynchronous processing pipeline for near real-time inference results.",
      "Led a team of 6, including task planning, code reviews, and integration (Agile).",
    ],
    categories: ["Backend & APIs", "AI & Automations"],
    techTags: ["Node.js", "Express", "MongoDB", "Agile"],
  },
  {
    slug: "scrabble",
    repo: "zigelnik/Scrabble",
    title: "Scrabble Game",
    tagline: "Real-time multiplayer game with a client-server architecture.",
    bullets: [
      "Developed a real-time multiplayer game with a multi-threaded client-server architecture.",
      "Implemented design patterns (Singleton, Observer) to ensure a modular and maintainable system design.",
      "Managed concurrent player interactions and real-time game state synchronization.",
      "Collaborated in a team using Git and Agile workflows (Jira).",
    ],
    categories: ["Backend & APIs"],
    techTags: ["Java", "JavaFX", "Multithreading", "Client-Server"],
  },
  {
    slug: "phonebook",
    repo: "zigelnik/WebApp-Phone-Store",
    title: "Phonebook",
    tagline: "Full-stack e-commerce platform with auth, products, and cart.",
    bullets: [
      "Built the backend using Node.js, Express, and MongoDB for scalable and efficient data handling.",
      "Integrated Google Maps, Facebook, and GNews APIs to enhance functionality and user engagement.",
      "Developed a responsive UI with modern web technologies, ensuring cross-device compatibility.",
    ],
    categories: ["Backend & APIs"],
    techTags: ["Node.js", "Express", "MongoDB", "Google Maps API"],
  },
];
