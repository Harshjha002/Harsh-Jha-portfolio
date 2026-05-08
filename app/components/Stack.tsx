"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import {
  SiReact,
  SiMysql,
  SiSpringboot,
  SiJavascript,
  SiPostman,
  SiGithubactions,
  SiHibernate,
  SiRedis,
  SiMongodb,
  SiTailwindcss,
  SiLinux,
  SiApachekafka,
  SiDocker,
} from "react-icons/si";

import {
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa6";

const stackItems = [
  {
    id: 1,
    name: "Java",
    icon: <FaJava size={70} />,
    color: "text-orange-500",
  },
  {
    id: 2,
    name: "Spring Boot",
    icon: <SiSpringboot size={70} />,
    color: "text-green-500",
  },
  {
    id: 3,
    name: "Hibernate",
    icon: <SiHibernate size={70} />,
    color: "text-yellow-500",
  },
  {
    id: 4,
    name: "React",
    icon: <SiReact size={70} />,
    color: "text-cyan-400",
  },
  {
    id: 5,
    name: "JavaScript",
    icon: <SiJavascript size={70} />,
    color: "text-yellow-300",
  },
  {
    id: 6,
    name: "Tailwind",
    icon: <SiTailwindcss size={70} />,
    color: "text-sky-400",
  },
  {
    id: 7,
    name: "MySQL",
    icon: <SiMysql size={70} />,
    color: "text-blue-400",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: <SiMongodb size={70} />,
    color: "text-green-400",
  },
  {
    id: 9,
    name: "Redis",
    icon: <SiRedis size={70} />,
    color: "text-red-500",
  },
  {
    id: 10,
    name: "Kafka",
    icon: <SiApachekafka size={70} />,
    color: "text-white",
  },
  {
    id: 11,
    name: "Docker",
    icon: <SiDocker size={70} />,
    color: "text-blue-500",
  },
  {
    id: 12,
    name: "AWS",
    icon: <FaAws size={70} />,
    color: "text-yellow-500",
  },
  {
    id: 13,
    name: "Git",
    icon: <FaGitAlt size={70} />,
    color: "text-orange-600",
  },
  {
    id: 14,
    name: "GitHub",
    icon: <FaGithub size={70} />,
    color: "text-white",
  },
  {
    id: 15,
    name: "GitHub Actions",
    icon: <SiGithubactions size={70} />,
    color: "text-blue-400",
  },
  {
    id: 16,
    name: "Postman",
    icon: <SiPostman size={70} />,
    color: "text-orange-500",
  },
  {
    id: 17,
    name: "Linux",
    icon: <SiLinux size={70} />,
    color: "text-yellow-200",
  },
];

const itemVariant = {
  hidden: (index:number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
    y: 40,
  }),

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Stack = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-20">
          My Tech Stack
        </h2>

        <div
          ref={ref}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-8
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
                scale: 1.08,
                y: -8,
              }}
              className="
                bg-white/10
                backdrop-blur-lg
                border
                border-white/10
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                gap-5
                shadow-lg
                transition-all
              "
            >
              <div className={item.color}>
                {item.icon}
              </div>

              <p className="text-white text-lg font-semibold text-center">
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