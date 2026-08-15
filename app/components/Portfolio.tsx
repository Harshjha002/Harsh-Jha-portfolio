"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  projects,
  type Project,
  type ProjectCategory,
  type PrimaryStack,
} from "@/lib/projects";


// =========================================================
// ANIMATION
// =========================================================

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


// =========================================================
// SECTION HEADER
// =========================================================

function SectionHeader() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
        A collection of full-stack and backend systems focused on scalable
        architecture, reliable APIs, databases, automation, and
        production-oriented engineering.
      </p>
    </motion.div>
  );
}


// =========================================================
// PROJECT FILTERS
// =========================================================

type FilterValue = "All" | ProjectCategory | PrimaryStack;

const filters: FilterValue[] = [
  "All",
  "Node.js",
  "Java",
  "Full-Stack",
  "Frontend",
  "Automation",
];

interface ProjectFiltersProps {
  activeFilter: FilterValue;

  onFilterChange: (filter: FilterValue) => void;
}

function ProjectFilters({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="mb-16 flex justify-center">
      <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <motion.button
              key={filter}
              onClick={() => onFilterChange(filter)}
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className={`
                relative
                overflow-hidden
                rounded-xl
                px-5
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
                  <motion.div
                    layoutId="active-project-filter"
                    className="absolute inset-0 rounded-xl border border-purple-500/40 bg-purple-500/15"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  />

                  <div className="absolute inset-0 rounded-xl bg-purple-500/10 blur-xl" />
                </>
              )}

              <span className="relative z-10">
                {filter}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}


// =========================================================
// PROJECT TABS
// =========================================================

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
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mb-16 flex justify-center">
      <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
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
                  <motion.div
                    layoutId="active-project-tab"
                    className="absolute inset-0 rounded-xl border border-purple-500/40 bg-purple-500/15"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  />

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


// =========================================================
// PROJECT CARD
// =========================================================

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -25,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        {/* Glow */}
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

        <div className="relative z-10 p-8 md:p-12 lg:p-14">

          {/* BADGES */}
          <div className="mb-8 flex flex-wrap items-center gap-3">

            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
              {project.year}
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-gray-400">
              {project.category}
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-gray-400">
              {project.primaryStack}
            </span>

            <span className="text-sm text-gray-500">
              {project.subtitle}
            </span>
          </div>


          {/* TITLE */}

          <h3 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h3>


          {/* SHORT DESCRIPTION */}

          <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-300">
            {project.shortDescription}
          </p>


          {/* DETAILED DESCRIPTION */}

          <p className="mt-6 max-w-4xl leading-8 text-gray-400">
            {project.description}
          </p>


          {/* BUTTONS */}

          <ActionButtons project={project} />


          {/* DIVIDER */}

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


          {/* TECH STACK */}

          <div>
            <h4 className="mb-8 text-2xl font-semibold text-white">
              Tech Stack
            </h4>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              <TechSection
                title="Backend"
                tech={project.tech.backend}
              />

              <TechSection
                title="Frontend"
                tech={project.tech.frontend}
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


          {/* DIVIDER */}

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


          {/* FEATURES */}

          <FeatureGrid
            highlights={project.highlights}
          />

        </div>
      </motion.div>
    </AnimatePresence>
  );
}


// =========================================================
// ACTION BUTTONS
// =========================================================

interface ActionButtonsProps {
  project: Project;
}

function ActionButtons({
  project,
}: ActionButtonsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">

      {/* GITHUB */}

      {project.github && (
        <motion.a
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20"
        >
          View Source →
        </motion.a>
      )}


      {/* LIVE */}

      {project.live && (
        <motion.a
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
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


// =========================================================
// TECH SECTION
// =========================================================

interface TechSectionProps {
  title: string;

  tech: string[];
}

function TechSection({
  title,
  tech,
}: TechSectionProps) {
  return (
    <div>
      <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple-300">
        {title}
      </h5>

      {tech.length === 0 ? (
        <span className="text-sm text-gray-600">
          —
        </span>
      ) : (
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
      )}
    </div>
  );
}


// =========================================================
// FEATURE GRID
// =========================================================

interface FeatureGridProps {
  highlights: string[];
}

function FeatureGrid({
  highlights,
}: FeatureGridProps) {
  return (
    <div>

      <h4 className="mb-6 text-xl font-semibold text-white">
        Key Features
      </h4>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {highlights.map((feature) => (
          <motion.div
            key={feature}
            variants={fadeUp}
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
      </motion.div>

    </div>
  );
}


// =========================================================
// MAIN PORTFOLIO
// =========================================================

export default function Portfolio() {

  const [activeFilter, setActiveFilter] =
    useState<FilterValue>("All");

  const [activeProject, setActiveProject] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const resumeTimeout =
    useRef<NodeJS.Timeout | null>(null);


  // =======================================================
  // FILTER PROJECTS
  // =======================================================

  const filteredProjects = projects.filter(
    (project) => {
      if (activeFilter === "All") {
        return true;
      }

      return (
        project.category === activeFilter ||
        project.primaryStack === activeFilter
      );
    }
  );


  // =======================================================
  // RESET ACTIVE PROJECT WHEN FILTER CHANGES
  // =======================================================

  useEffect(() => {
    setActiveProject(0);
  }, [activeFilter]);


  // =======================================================
  // CURRENT PROJECT
  // =======================================================

  const project =
    filteredProjects[activeProject];


  // =======================================================
  // AUTO SLIDER
  // =======================================================

  useEffect(() => {

    if (isPaused) {
      return;
    }

    if (filteredProjects.length <= 1) {
      return;
    }

    const interval = setInterval(() => {

      setActiveProject(
        (prev) =>
          (prev + 1) %
          filteredProjects.length
      );

    }, 6000);

    return () => {
      clearInterval(interval);
    };

  }, [
    isPaused,
    filteredProjects.length,
  ]);


  // =======================================================
  // PAUSE SLIDER
  // =======================================================

  const pauseSlider = () => {

    setIsPaused(true);

    if (resumeTimeout.current) {
      clearTimeout(
        resumeTimeout.current
      );
    }
  };


  // =======================================================
  // RESUME SLIDER
  // =======================================================

  const resumeSlider = () => {

    if (resumeTimeout.current) {
      clearTimeout(
        resumeTimeout.current
      );
    }

    resumeTimeout.current =
      setTimeout(() => {
        setIsPaused(false);
      }, 10000);
  };


  // =======================================================
  // RENDER
  // =======================================================

  return (
    <section
      id="portfolio"

      onMouseEnter={pauseSlider}

      onMouseLeave={resumeSlider}

      className="relative overflow-hidden py-28"
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-20 bg-black" />

      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[180px]" />


      {/* CONTENT */}

      <div className="mx-auto max-w-6xl px-6">

        <SectionHeader />


        {/* FILTERS */}

        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={(filter) => {

            setActiveFilter(filter);

            pauseSlider();

            resumeSlider();
          }}
        />


        {/* PROJECT TABS */}

        {filteredProjects.length > 0 && (
          <ProjectTabs
            projects={filteredProjects}

            activeProject={
              activeProject
            }

            onSelect={(index) => {

              setActiveProject(index);

              pauseSlider();

              resumeSlider();
            }}
          />
        )}


        {/* PROJECT */}

        {project ? (
          <ProjectCard
            project={project}
          />
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
            <p className="text-gray-400">
              No projects found.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}