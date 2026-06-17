"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import {
  SiReact,
  SiSpringboot,
  SiPostman,
  SiGithubactions,
  SiHibernate,
  SiRedis,
  SiMongodb,
  SiTailwindcss,
  SiLinux,
  SiApachekafka,
  SiDocker,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

import { FaJava, FaGitAlt, FaGithub, FaAws, FaNodeJs } from "react-icons/fa6";

const stackItems = [
  {
    id: 1,
    name: "Java",
    icon: <FaJava />,
    color: "text-orange-500",
  },
  {
    id: 2,
    name: "Spring Boot",
    icon: <SiSpringboot />,
    color: "text-green-500",
  },
  {
    id: 3,
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-400",
  },
  {
    id: 4,
    name: "React",
    icon: <SiReact />,
    color: "text-cyan-400",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
  },
  {
    id: 6,
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
  },
  {
    id: 7,
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-blue-400",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
  },
  {
    id: 9,
    name: "Redis",
    icon: <SiRedis />,
    color: "text-red-500",
  },
  {
    id: 10,
    name: "Kafka",
    icon: <SiApachekafka />,
    color: "text-white",
  },
  {
    id: 11,
    name: "Docker",
    icon: <SiDocker />,
    color: "text-blue-500",
  },
  {
    id: 12,
    name: "AWS",
    icon: <FaAws />,
    color: "text-yellow-500",
  },
  {
    id: 13,
    name: "Hibernate",
    icon: <SiHibernate />,
    color: "text-yellow-500",
  },
  {
    id: 14,
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-600",
  },
  {
    id: 15,
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
    id: 16,
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-400",
  },
  {
    id: 17,
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-500",
  },
  {
    id: 18,
    name: "Linux",
    icon: <SiLinux />,
    color: "text-yellow-200",
  },
];

const itemVariant = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 40,
    scale: 0.9,
  }),

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.05,
    },
  }),
};

const Stack = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="stack" className="py-32 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-purple-400 mb-4 text-sm">
            Technologies
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Technologies & <span className="text-purple-500">Tools</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Modern technologies and tools I use to build full-stack
            applications, backend APIs, and scalable software systems.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          ref={ref}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-6
          "
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={itemVariant}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="
                group
                relative
                overflow-hidden
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                gap-5
                hover:border-purple-500/40
                transition-all
                duration-500
              "
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* ICON */}
              <div
                className={`
                  relative z-10
                  text-5xl md:text-6xl
                  ${item.color}
                  group-hover:scale-110
                  transition duration-500
                `}
              >
                {item.icon}
              </div>

              {/* NAME */}
              <p className="relative z-10 text-white font-semibold text-lg text-center">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
