export type ProjectCategory =
  | "Backend"
  | "Full-Stack"
  | "Frontend"
  | "Automation";

export type PrimaryStack = "Node.js" | "Java" | "React" | "Next.js";

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
 * The FIRST project in this array is the one shown by default
 * (Portfolio.tsx uses activeProject = 0 on load). Keep your
 * strongest / most relevant project first — currently Nivora
 * Ledger (Node.js), to match the Node-focused resume and hero.
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
  // 01 — NIVORA LEDGER (featured — Node.js)
  // =======================================================

  {
    id: 4,

    year: "2026",

    title: "Nivora Ledger",

    subtitle: "Node.js Ledger & Wallet Service",

    category: "Backend",

    primaryStack: "Node.js",

    github: "https://github.com/Harshjha002/nivora-ledger",

    live: "",

    shortDescription:
      "Production-grade fintech ledger backend with concurrency-safe, idempotent fund transfers and zero-overdraft guarantees under simultaneous load.",

    description:
      "Built a double-entry, append-only ledger backend using Node.js, Express, and MongoDB, with balances derived from immutable entries to eliminate balance drift by construction. Implemented concurrency-safe, idempotent fund transfers using MongoDB transactions and account-level locking/versioning, administrator-authorized transaction reversal with atomic compensating entries, and secured operations with JWT authentication, HTTP-only cookies, token blacklisting, and Zod validation. Covered by a 43-test Jest/Supertest suite and deployed via Docker with GitHub Actions CI/CD.",

    highlights: [
      "Double-Entry Ledger",
      "Idempotent Transfers",
      "Concurrency Control",
      "JWT Authentication",
      "Token Blacklisting",
      "Zod Validation",
      "Rate Limiting",
      "43-Test Suite",
      "Docker",
      "GitHub Actions",
    ],

    tech: {
      backend: ["Node.js", "Express", "Zod", "JWT"],

      frontend: [],

      database: ["MongoDB"],

      devops: ["Docker", "GitHub Actions", "GHCR"],
    },
  },

  // =======================================================
  // 02 — NIVORA FINANCE
  // =======================================================

  {
    id: 1,

    year: "2026",

    title: "Nivora Finance",

    subtitle: "Production-Grade Digital Wallet Backend",

    category: "Backend",

    primaryStack: "Java",

    github: "https://github.com/Harshjha002/nivora-finance-backend",

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
      backend: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA"],

      frontend: [],

      database: ["PostgreSQL", "Redis"],

      devops: ["Docker", "GitHub Actions", "AWS"],
    },
  },

  // =======================================================
  // 03 — NIVORA ASK
  // =======================================================

  {
    id: 2,

    year: "2026",

    title: "Nivora Ask",

    subtitle: "Reactive Event-Driven Q&A Platform",

    category: "Backend",

    primaryStack: "Java",

    github: "https://github.com/Harshjha002/Nivora-Ask",

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
      backend: ["Java", "Spring WebFlux", "Reactive APIs"],

      frontend: [],

      database: ["MongoDB", "Elasticsearch"],

      devops: ["Apache Kafka"],
    },
  },

  // =======================================================
  // 04 — NIVORA WALLET
  // =======================================================

  {
    id: 3,

    year: "2026",

    title: "Nivora Wallet",

    subtitle: "Fault-Tolerant Wallet Transaction System",

    category: "Backend",

    primaryStack: "Java",

    github: "https://github.com/Harshjha002/nivora-wallet",

    live: "",

    shortDescription:
      "Fault-tolerant backend built to guarantee exactly-once wallet transfers, protecting against duplicate transactions, failures, and race conditions.",

    description:
      "Built a wallet transaction backend using Java and Spring Boot that implements the Saga pattern for multi-step debit/credit workflows, idempotency keys to prevent duplicate processing, database-level locking for concurrency control, and basic database sharding via ShardingSphere for scalability.",

    highlights: [
      "Idempotent Transactions",
      "Saga Pattern",
      "Async Processing",
      "Concurrency Control",
      "Failure Handling",
      "Database Sharding",
      "Spring Data JPA",
    ],

    tech: {
      backend: ["Java", "Spring Boot", "Spring Data JPA", "Lombok"],

      frontend: [],

      database: ["MySQL", "ShardingSphere"],

      devops: [],
    },
  },
];