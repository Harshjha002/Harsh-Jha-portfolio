"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import proj1 from "../../public/assets/proj5.png";
import proj2 from "../../public/assets/proj6.png";

const projects = [
  {
    id: 1,
    year: 2026,
    title: "Nivora Pay — Distributed Wallet System",
    github: "https://github.com/Harshjha002/nivora-wallet",

    tech: [
      "Spring Boot",
      "MySQL",
      "ShardingSphere",
      "Saga Pattern",
      "Concurrency",
    ],

    description:
      "Built a scalable distributed wallet system using Spring Boot and MySQL with ShardingSphere. Implemented idempotent transactions to ensure exactly-once execution and prevent duplicate debits. Designed Saga-based workflows for consistency across multi-step transactions and handled concurrency using database-level locking.",

    src: proj1,
  },

  {
    id: 2,
    year: 2026,
    title: "Nivora Ask — Scalable Q&A Backend Platform",
    github: "https://github.com/Harshjha002/Nivora-Ask",

    tech: [
      "Spring WebFlux",
      "MongoDB",
      "Kafka",
      "Elasticsearch",
      "Reactive APIs",
    ],

    description:
      "Designed and built a scalable backend platform using Java, Spring Boot WebFlux, and MongoDB with non-blocking request handling. Implemented an event-driven architecture using Apache Kafka and integrated Elasticsearch for high-performance search.",

    src: proj2,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section
      id="portfolio"
      className="
        relative
        py-32
        overflow-hidden
        text-white
      "
    >
      {/* HERO STYLE GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-purple-300 mb-4 text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Selected <span className="text-purple-300">Projects</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className={`
                  cursor-pointer
                  rounded-3xl
                  p-7
                  transition-all
                  duration-300
                  border
                  backdrop-blur-xl

                  ${selectedProject.id === project.id
                    ? "bg-[#1B1026]/80 border-purple-400/20 shadow-[0_0_35px_rgba(168,85,247,0.12)]"
                    : "bg-[#140B1D]/70 border-white/10 hover:border-purple-400/20"
                  }
                `}
              >
                {/* YEAR */}
                <p className="text-purple-300 text-sm tracking-[0.2em] uppercase mb-4">
                  {project.year}
                </p>

                {/* TITLE */}
                <h3
                  className={`
                    text-2xl md:text-3xl
                    font-semibold
                    transition-colors
                    duration-300

                    ${selectedProject.id === project.id
                      ? "text-white"
                      : "text-white/80"
                    }
                  `}
                >
                  {project.title}
                </h3>

                {/* ACTIVE CONTENT */}
                <AnimatePresence>
                  {selectedProject.id === project.id && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      {/* LINE */}
                      <div className="w-full h-px bg-gradient-to-r from-purple-400/50 to-transparent my-6" />

                      {/* DESCRIPTION */}
                      <p className="text-white/60 leading-relaxed">
                        {project.description}
                      </p>

                      {/* TECH STACK */}
                      <div className="flex flex-wrap gap-3 mt-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="
                              px-4
                              py-2
                              rounded-full
                              bg-purple-500/10
                              border
                              border-purple-400/20
                              text-sm
                              text-purple-200
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* BUTTON */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
  inline-flex
  items-center
  gap-2
  mt-6
  px-6
  py-3
  rounded-full
  font-medium
  bg-gradient-to-r
  from-purple-700
  to-purple-500
  text-white
  hover:scale-105
  hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
  transition-all
  duration-300
"
                      >
                        View on GitHub →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            layout
            className="
              sticky
              top-24
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#140B1D]/70
                  backdrop-blur-xl
                  p-4
                  shadow-[0_0_40px_rgba(168,85,247,0.12)]
                "
              >
                <Image
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  width={1200}
                  height={700}
                  className="
                    rounded-2xl
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-[1.02]
                  "
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
