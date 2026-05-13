"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import {
  FaCode,
  FaLayerGroup,
  FaServer,
  FaBrain,
} from "react-icons/fa6"

const metrics = [
  {
    id: 1,
    value: "15+",
    label: "Projects Built",
    icon: <FaCode />,
    description:
      "Built scalable full stack applications and backend systems including distributed architectures like Nivora Pay.",
  },
  {
    id: 2,
    value: "99%",
    label: "Code Quality",
    icon: <FaLayerGroup />,
    description:
      "Focused on clean architecture, maintainable code structure, modularity, and production-ready development practices.",
  },
  {
    id: 3,
    value: "100%",
    label: "System Understanding",
    icon: <FaServer />,
    description:
      "Strong understanding of APIs, distributed systems, CI/CD pipelines, databases, scalability, and backend workflows.",
  },
  {
    id: 4,
    value: "24/7",
    label: "Learning Mindset",
    icon: <FaBrain />,
    description:
      "Constantly learning through building real-world projects, exploring new technologies, and improving engineering skills.",
  },
]

const KeyMetrics = () => {
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  })

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* BG GLOW */}
      <div className="absolute inset-0 bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-purple-400 mb-4 text-sm">
            Highlights
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white">
            Key{" "}
            <span className="text-purple-500">
              Metrics
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            A snapshot of my technical journey, engineering mindset,
            and backend-focused development experience.
          </p>
        </motion.div>

        {/* GRID */}
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
              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* TOP */}
              <div className="relative z-10 flex items-start justify-between mb-8">

                {/* VALUE */}
                <motion.h3
                  initial={{ scale: 0.8 }}
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
                  className="text-6xl md:text-7xl font-extrabold text-purple-400"
                >
                  {metric.value}
                </motion.h3>

                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl border border-purple-500/20 bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl group-hover:scale-110 transition duration-500">
                  {metric.icon}
                </div>
              </div>

              {/* LABEL */}
              <h4 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition duration-300">
                {metric.label}
              </h4>

              {/* DESCRIPTION */}
              <p className="relative z-10 text-gray-400 leading-relaxed text-lg">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyMetrics