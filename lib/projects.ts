export type ProjectCategory = "Backend & APIs" | "Cloud & DevOps" | "AI & Automations";

export interface ProjectSeed {
  slug: string;
  repo?: string; // owner/repo for GitHub API; omit for private projects
  title: string;
  tagline: string;
  bullets: string[];
  categories: ProjectCategory[];
  techTags: string[];
}

export const PROJECT_SEEDS: ProjectSeed[] = [
  {
    slug: "kitchen-agent",
    title: "Kitchen Agent",
    tagline: "Agentic Telegram bot that turns a Hebrew voice note into a priced PDF quotation.",
    bullets: [
      "Uses the Claude API with structured tool-use to extract a job spec from a Whisper transcription, biased with a custom Hebrew carpentry-trade glossary for accuracy.",
      "Keeps pricing logic deterministic and separate from the LLM by design, then generates an RTL PDF quote and delivers it back over the Telegram Bot API.",
      "Built for a real small-business customer, a freelance kitchen carpenter, with its own automated test suite.",
    ],
    categories: ["AI & Automations", "Backend & APIs"],
    techTags: ["Python", "FastAPI", "Claude API", "Whisper", "Telegram Bot API", "ReportLab"],
  },
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
    tagline: "Web application detecting and localizing bone fractures in X-ray images with YOLOv8.",
    bullets: [
      "Reached 81% fracture detection accuracy with YOLOv8, after leading data gathering and labeling and resolving inconsistent bounding-box labels and polygon annotation formats.",
      "Led a team of 6, including task planning, code reviews, and integration (Agile).",
      "Built backend architecture using Node.js, Express, and MongoDB, with an asynchronous processing pipeline for near real-time inference results.",
      "Experimented with CNN, Mask R-CNN, and Faster R-CNN architectures for detection, classification, and localization.",
    ],
    categories: ["AI & Automations", "Backend & APIs"],
    techTags: ["YOLOv8", "PyTorch", "TensorFlow", "OpenCV", "Node.js", "MongoDB", "React"],
  },
  {
    slug: "pneumonia-detection",
    repo: "zigelnik/Pneumonia-Detection-Using-Chest-x-rays",
    title: "Pneumonia Detection",
    tagline: "Deep learning classifier detecting pneumonia from chest X-rays.",
    bullets: [
      "Built a CNN using transfer learning on InceptionV3, benchmarked against a scikit-learn KNN baseline.",
      "Evaluated with precision, recall, F1-score, ROC-AUC, and confusion matrices, using augmentation and hyperparameter tuning to improve generalization.",
      "Visualized the learned feature space with t-SNE.",
    ],
    categories: ["AI & Automations"],
    techTags: ["TensorFlow", "Keras", "scikit-learn", "Transfer Learning"],
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
