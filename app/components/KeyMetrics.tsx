"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  FaCode,
  FaLayerGroup,
  FaServer,
  FaBrain,
} from "react-icons/fa6";

const metrics = [
  {
    id: 1,
    value: "20+",
    label: "Projects Built",
    icon: <FaCode />,
    description:
      "A collection of projects built while learning and experimenting across backend engineering, full-stack development, APIs, databases, automation, and modern web technologies.",
  },

  {
    id: 2,
    value: "100+",
    label: "DSA Problems Solved",
    icon: <FaBrain />,
    description:
      "Continuously practicing problem solving through LeetCode, working through data structures, algorithmic patterns, and progressively more challenging problems.",
  },

  {
    id: 3,
    value: "2",
    label: "Software Internships",
    icon: <FaServer />,
    description:
      "Professional experience across frontend development, full-stack applications, Node.js backend development, REST APIs, and backend automation workflows.",
  },

  {
    id: 4,
    value: "10+",
    label: "Technologies Explored",
    icon: <FaLayerGroup />,
    description:
      "Hands-on experience across Node.js, TypeScript, React, Java, Spring Boot, PostgreSQL, MongoDB, Redis, Docker, AWS, and other tools explored throughout my learning journey.",
  },
];

const KeyMetrics = () => {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div className="absolute inset-0 bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="mb-20 text-center"
        >
          {/* SECTION LABEL */}

          <p className="uppercase tracking-[0.3em] text-purple-400 mb-4 text-sm">
            My Journey
          </p>

          {/* MAIN HEADING */}

          <h2 className="text-5xl md:text-7xl font-extrabold text-white">
            What I&apos;ve{" "}
            <span className="text-purple-500">
              Built So Far
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            A snapshot of what I&apos;ve built, practiced, and experienced so
            far while continuously learning and becoming a better engineer.
          </p>
        </motion.div>

        {/* =================================================
            METRICS GRID
        ================================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}

              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }

              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                hover:border-purple-500/30
                transition-all
                duration-500
              "
            >

              {/* =================================================
                  HOVER GLOW
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-purple-500/0
                  via-transparent
                  to-purple-500/10
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              />

              {/* =================================================
                  TOP
              ================================================= */}

              <div className="relative z-10 flex items-start justify-between mb-8">

                {/* VALUE */}

                <motion.h3
                  initial={{
                    scale: 0.8,
                  }}

                  animate={
                    isInView
                      ? {
                          scale: 1,
                        }
                      : {}
                  }

                  transition={{
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}

                  className="
                    text-6xl
                    md:text-7xl
                    font-extrabold
                    text-purple-400
                  "
                >
                  {metric.value}
                </motion.h3>

                {/* ICON */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-purple-500/20
                    bg-purple-500/10
                    flex
                    items-center
                    justify-center
                    text-purple-400
                    text-2xl
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                >
                  {metric.icon}
                </div>
              </div>

              {/* =================================================
                  LABEL
              ================================================= */}

              <h4
                className="
                  relative
                  z-10
                  text-2xl
                  font-bold
                  text-white
                  mb-4
                  group-hover:text-purple-300
                  transition
                  duration-300
                "
              >
                {metric.label}
              </h4>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                className="
                  relative
                  z-10
                  text-gray-400
                  leading-relaxed
                  text-lg
                "
              >
                {metric.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;