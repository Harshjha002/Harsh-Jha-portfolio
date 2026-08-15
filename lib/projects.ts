export type ProjectCategory =
  | "Backend"
  | "Full-Stack"
  | "Frontend"
  | "Automation";

export type PrimaryStack =
  | "Node.js"
  | "Java"
  | "React"
  | "Next.js";

export type Project = {
  id: number;

  year: string;

  title: string;

  subtitle: string;

  category: ProjectCategory;

  primaryStack: PrimaryStack;

  github: string;

  live: string;

  shortDescription: string;

  description: string;

  highlights: string[];

  tech: {
    backend: string[];
    frontend: string[];
    database: string[];
    devops: string[];
  };
};

/**
 * =========================================================
 * PROJECTS
 * =========================================================
 *
 * IMPORTANT:
 * Add new projects at the bottom.
 *
 * The UI automatically handles:
 * - Tabs
 * - Project switching
 * - Auto slider
 * - Tech stack
 * - Categories
 *
 * You normally DON'T need to touch Portfolio.tsx.
 */

export const projects: Project[] = [
  // =======================================================
  // 01 — NIVORA FINANCE
  // =======================================================

  {
    id: 1,

    year: "2026",

    title: "Nivora Finance",

    subtitle: "Production-Grade Digital Wallet Backend",

    category: "Backend",

    primaryStack: "Java",

    github:
      "https://github.com/Harshjha002/nivora-finance-backend",

    live: "",

    shortDescription:
      "Production-grade fintech backend powering secure wallet management, digital payments, and concurrency-safe financial transactions.",

    description:
      "Built a production-ready digital wallet backend using Java and Spring Boot featuring JWT authentication, OTP verification, wallet management, secure money transfers, QR payments, Redis rate limiting, pessimistic locking, idempotency keys, Docker deployment, and CI/CD with GitHub Actions.",

    highlights: [
      "JWT Authentication",
      "OTP Verification",
      "Wallet Management",
      "Money Transfer",
      "QR Payments",
      "Redis Rate Limiting",
      "REST APIs",
      "Pessimistic Locking",
      "Idempotency Keys",
      "Docker",
      "GitHub Actions",
    ],

    tech: {
      backend: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
      ],

      frontend: [],

      database: [
        "PostgreSQL",
        "Redis",
      ],

      devops: [
        "Docker",
        "GitHub Actions",
        "AWS",
      ],
    },
  },

  // =======================================================
  // 02 — NIVORA ASK
  // =======================================================

  {
    id: 2,

    year: "2026",

    title: "Nivora Ask",

    subtitle: "Reactive Event-Driven Q&A Platform",

    category: "Backend",

    primaryStack: "Java",

    github:
      "https://github.com/Harshjha002/Nivora-Ask",

    live: "",

    shortDescription:
      "Reactive backend platform designed for scalable discussions, asynchronous messaging, and high-performance search.",

    description:
      "Developed a fully reactive backend using Spring WebFlux, MongoDB, Apache Kafka, and Elasticsearch. Designed an event-driven architecture with non-blocking APIs, asynchronous processing, and scalable search indexing.",

    highlights: [
      "Spring WebFlux",
      "Reactive Programming",
      "Apache Kafka",
      "MongoDB",
      "Elasticsearch",
      "REST APIs",
      "Event Driven Architecture",
      "Async Processing",
      "Full Text Search",
    ],

    tech: {
      backend: [
        "Java",
        "Spring WebFlux",
        "Reactive APIs",
      ],

      frontend: [],

      database: [
        "MongoDB",
        "Elasticsearch",
      ],

      devops: [
        "Apache Kafka",
      ],
    },
  },

  // =======================================================
  // 03 — ADD YOUR NODE.JS PROJECT HERE
  // =======================================================

  
];