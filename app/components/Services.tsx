"use client";

import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaPlug,
  FaLayerGroup,
} from "react-icons/fa6";

const areas = [
  {
    id: "01",
    icon: <FaServer />,
    title: "Backend Engineering",
    description:
      "Building APIs, backend services, authentication flows, transaction systems, and automation workflows primarily with Node.js and TypeScript.",
    technologies:
      "Node.js · TypeScript · Express.js · REST APIs",
  },

  {
    id: "02",
    icon: <FaDatabase />,
    title: "Databases & Data",
    description:
      "Working with relational and NoSQL databases to model application data, build reliable queries, manage state, and support scalable backend systems.",
    technologies:
      "PostgreSQL · MongoDB · Redis",
  },

  {
    id: "03",
    icon: <FaLayerGroup />,
    title: "Full-Stack Development",
    description:
      "Building complete applications from backend APIs to responsive interfaces, connecting frontend experiences with reliable backend systems.",
    technologies:
      "React · Next.js · Tailwind CSS",
  },

  {
    id: "04",
    icon: <FaPlug />,
    title: "APIs & Integrations",
    description:
      "Designing and integrating REST APIs, authentication systems, third-party services, and application workflows while focusing on reliability and clean interfaces.",
    technologies:
      "REST · Authentication · API Integration · Postman",
  },

  {
    id: "05",
    icon: <FaCloud />,
    title: "Deployment & Infrastructure",
    description:
      "Learning and applying modern deployment practices to run applications reliably across development and cloud environments.",
    technologies:
      "Docker · AWS · Linux · GitHub Actions",
  },

  {
    id: "06",
    icon: <FaCode />,
    title: "Exploring Different Systems",
    description:
      "Alongside my Node.js focus, I have built backend systems with Java and Spring Boot to understand different approaches to APIs, architecture, persistence, and distributed systems.",
    technologies:
      "Java · Spring Boot · Kafka · Hibernate",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <div className="grid md:grid-cols-[300px_1fr] gap-16">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="h-fit md:sticky top-24"
        >
          {/* LABEL */}

          <p className="uppercase tracking-[0.3em] text-purple-400 mb-4 text-sm">
            Areas of Focus
          </p>

          {/* HEADING */}

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            What I{" "}
            <span className="text-purple-500">
              Work With
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="text-gray-400 mt-6 leading-relaxed">
            I&apos;m building a broad full-stack foundation while going deeper
            into backend engineering, APIs, databases, and the systems behind
            modern applications.
          </p>

          {/* SMALL NOTE */}

          <div className="mt-8 border-l border-purple-500/40 pl-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              My current direction is backend-focused full-stack development,
              with Node.js and TypeScript as my primary stack.
            </p>
          </div>
        </motion.div>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="grid gap-6">

          {areas.map((area, index) => (
            <motion.div
              key={area.id}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -4,
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
                p-7
                md:p-8
                hover:border-purple-500/40
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


              <div className="relative z-10 flex items-start gap-6">

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div
                  className="
                    hidden
                    sm:block
                    text-4xl
                    md:text-5xl
                    font-extrabold
                    text-white/10
                    group-hover:text-purple-500/20
                    transition
                    duration-500
                    min-w-[55px]
                  "
                >
                  {area.id}
                </div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="flex-1">

                  {/* TITLE ROW */}

                  <div className="flex items-center gap-4 mb-4">

                    {/* ICON */}

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-purple-500/10
                        border
                        border-purple-500/20
                        flex
                        items-center
                        justify-center
                        text-purple-400
                        text-xl
                        group-hover:scale-110
                        transition
                        duration-500
                      "
                    >
                      {area.icon}
                    </div>


                    {/* TITLE */}

                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-bold
                        text-white
                        group-hover:text-purple-300
                        transition
                        duration-300
                      "
                    >
                      {area.title}
                    </h3>

                  </div>


                  {/* DESCRIPTION */}

                  <p
                    className="
                      text-gray-400
                      leading-relaxed
                      text-base
                      md:text-lg
                    "
                  >
                    {area.description}
                  </p>


                  {/* TECHNOLOGIES */}

                  <div className="mt-5 flex flex-wrap gap-2">

                    {area.technologies
                      .split(" · ")
                      .map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-lg
                            border
                            border-white/10
                            bg-white/5
                            px-3
                            py-1.5
                            text-xs
                            text-gray-500
                            group-hover:text-gray-300
                            transition
                            duration-300
                          "
                        >
                          {technology}
                        </span>
                      ))}

                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;