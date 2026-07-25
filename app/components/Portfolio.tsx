"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: number;
  year: string;
  title: string;
  subtitle: string;

  github: string;
  live: string;

  shortDescription: string;
  description: string;

  highlights: string[];

  tech: {
    backend: string[];
    database: string[];
    devops: string[];
  };
};

const projects: Project[] = [
  {
    id: 1,
    year: "2026",

    title: "Nivora Finance",

    subtitle: "Production-Grade Digital Wallet Backend",

    github: "https://github.com/Harshjha002/nivora-finance-backend",

    live: "",

    shortDescription:
      "Production-grade fintech backend powering secure wallet management, digital payments and concurrency-safe financial transactions.",

    description:
      "Built a production-ready digital wallet backend using Java and Spring Boot featuring JWT authentication, OTP verification, wallet management, secure money transfers, QR payments, Redis rate limiting, pessimistic locking, idempotency keys, Docker deployment and CI/CD with GitHub Actions.",

    highlights: [
      "JWT Authentication",
      "OTP Verification",
      "Wallet Management",
      "Money Transfer",
      "QR Payments",
      "Redis Rate Limiting",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "Pessimistic Locking",
      "Idempotency Keys",
    ],

    tech: {
      backend: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
      ],

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

  {
    id: 2,
    year: "2026",

    title: "Nivora Ask",

    subtitle: "Reactive Event-Driven Q&A Platform",

    github: "https://github.com/Harshjha002/Nivora-Ask",

    live: "",

    shortDescription:
      "Reactive backend platform designed for scalable discussions, asynchronous messaging and high-performance search.",

    description:
      "Developed a fully reactive backend using Spring WebFlux, MongoDB, Apache Kafka and Elasticsearch. Designed an event-driven architecture with non-blocking APIs, asynchronous processing and scalable search indexing.",

    highlights: [
      "Spring WebFlux",
      "Reactive Programming",
      "Apache Kafka",
      "MongoDB",
      "Elasticsearch",
      "REST APIs",
      "Event Driven",
      "Async Processing",
      "Full Text Search",
    ],

    tech: {
      backend: [
        "Spring WebFlux",
        "Reactive APIs",
      ],

      database: [
        "MongoDB",
        "Elasticsearch",
      ],

      devops: [
        "Apache Kafka",
      ],
    },
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

interface ProjectTabsProps {
  projects: Project[];
  activeProject: number;
  onSelect: (index: number) => void;
}

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-20 text-center"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[90px]" />

      {/* Small Title */}
      <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
        Portfolio
      </span>

      {/* Main Heading */}
      <h2 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
        Featured{" "}
        <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        A curated collection of production-ready backend applications focused
        on scalable architecture, secure APIs, distributed systems, cloud
        deployment, and performance-driven engineering.
      </p>
    </motion.div>
  );
}

interface ProjectTabsProps {
  projects: Project[];
  activeProject: number;
  onSelect: (index: number) => void;
}

function ProjectTabs({
  projects,
  activeProject,
  onSelect,
}: ProjectTabsProps) {
  return (
    <div className="mb-16 flex justify-center">
      <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
        {projects.map((project, index) => {
          const active = activeProject === index;

          return (
            <motion.button
              key={project.id}
              onClick={() => onSelect(index)}
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
                relative
                overflow-hidden
                rounded-xl
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  active
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {active && (
                <>
                  {/* Active Background */}
                  <motion.div
                    layoutId="active-project-tab"
                    className="absolute inset-0 rounded-xl border border-purple-500/40 bg-purple-500/15"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  />

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-xl bg-purple-500/10 blur-xl" />
                </>
              )}

              <span className="relative z-10">
                {project.title}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
interface ProjectCardProps {
  project: Project;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.35 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        {/* Glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="relative z-10 p-8 md:p-12 lg:p-14">
          {/* Badge */}

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
              {project.year}
            </span>

            <span className="text-sm text-gray-400">
              {project.subtitle}
            </span>
          </div>

          {/* Title */}

          <h3 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h3>

          {/* Description */}

          <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300">
            {project.shortDescription}
          </p>

          <p className="mt-6 max-w-4xl leading-8 text-gray-400">
            {project.description}
          </p>

          {/* Buttons */}

          <ActionButtons project={project} />

          {/* Divider */}

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Tech Stack */}

          <div>
            <h4 className="mb-8 text-2xl font-semibold text-white">
              Tech Stack
            </h4>

            <div className="grid gap-6 md:grid-cols-3">
              <TechSection
                title="Backend"
                tech={project.tech.backend}
              />

              <TechSection
                title="Database"
                tech={project.tech.database}
              />

              <TechSection
                title="DevOps"
                tech={project.tech.devops}
              />
            </div>
          </div>

          {/* Divider */}

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Features */}

          <FeatureGrid
            highlights={project.highlights}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
interface ActionButtonsProps {
  project: Project;
}

function ActionButtons({ project }: ActionButtonsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20"
      >
        View Source →
      </motion.a>

      {project.live && (
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-purple-400 hover:bg-white/10"
        >
          Live Demo ↗
        </motion.a>
      )}
    </div>
  );
}

interface TechSectionProps {
  title: string;
  tech: string[];
}

function TechSection({ title, tech }: TechSectionProps) {
  return (
    <div className="mb-8 last:mb-0">
      <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple-300">
        {title}
      </h5>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <motion.span
            key={item}
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 transition-all hover:border-purple-500/30 hover:text-white"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

interface FeatureGridProps {
  highlights: string[];
}

function FeatureGrid({ highlights }: FeatureGridProps) {
  return (
    <div>
      <h4 className="mb-6 text-xl font-semibold text-white">
        Key Features
      </h4>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((feature) => (
          <motion.div
            key={feature}
            whileHover={{
              y: -3,
            }}
            transition={{
              duration: 0.2,
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10"
          >
            <span className="text-sm font-medium text-gray-200">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  const project = projects[activeProject];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const pauseSlider = () => {
    setIsPaused(true);

    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
  };

  const resumeSlider = () => {
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }

    resumeTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section
      id="portfolio"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-20 bg-black" />

      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[180px]" />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader />

        <ProjectTabs
          projects={projects}
          activeProject={activeProject}
          onSelect={(index) => {
            setActiveProject(index);

            pauseSlider();

            resumeSlider();
          }}
        />

        <ProjectCard project={project} />
      </div>
    </section>
  );
}