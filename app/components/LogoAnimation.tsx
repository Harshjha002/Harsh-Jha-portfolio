"use client"

import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRedis,
} from "react-icons/si";

import {
  FaJava,
  FaAmazon,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";


const baseIcons = [
  {
    icon: <FaJava />,
    name: "Java",
    color: "text-orange-500",
  },
  {
    icon: <SiSpringboot />,
    name: "Spring Boot",
    color: "text-green-500",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    color: "text-green-400",
  },
  {
    icon: <FaReact />,
    name: "React",
    color: "text-cyan-400",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    color: "text-white",
  },
  {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
    color: "text-blue-400",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "text-green-500",
  },
  {
    icon: <SiRedis />,
    name: "Redis",
    color: "text-red-500",
  },
  {
    icon: <SiDocker />,
    name: "Docker",
    color: "text-blue-500",
  },
  {
    icon: <FaAmazon />,
    name: "AWS",
    color: "text-yellow-400",
  },
];

const icons = [...baseIcons, ...baseIcons]

const LogoAnimation = () => {
  return (
    <section className="relative py-12 my-28 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-purple-500/5 blur-3xl" />

      {/* TOP & BOTTOM LINE */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

      <div className="relative">

        {/* MASK */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">

          <motion.div
            className="flex gap-6 md:gap-8 w-max will-change-transform"
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icons.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  flex
                  items-center
                  gap-3
                  md:gap-4
                  px-6
                  md:px-8
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-purple-500/40
                  transition-all
                  duration-500
                  min-w-fit
                "
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* ICON */}
                <div
                  className={`
                    relative z-10
                    text-3xl md:text-4xl
                    ${item.color}
                    group-hover:scale-110
                    transition duration-500
                  `}
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <span className="relative z-10 text-white/80 font-medium text-base md:text-lg whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LogoAnimation