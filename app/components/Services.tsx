"use client"

import { motion } from "framer-motion"
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaPlug,
  FaLayerGroup,
} from "react-icons/fa"

const services = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and highly interactive interfaces using React, Next.js, Tailwind CSS, and JavaScript.",
  },
  {
    id: "02",
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Creating scalable backend systems and secure REST APIs using Java, Spring Boot, Hibernate, and microservice architecture.",
  },
  {
    id: "03",
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Designing optimized database structures using MySQL, MongoDB, and Redis for scalable high-performance applications.",
  },
  {
    id: "04",
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications using AWS, Docker, Linux, CI/CD pipelines, and GitHub Actions workflows.",
  },
  {
    id: "05",
    icon: <FaPlug />,
    title: "API Testing & Integration",
    description:
      "Testing, debugging, and integrating APIs efficiently using Postman and modern backend development practices.",
  },
  {
    id: "06",
    icon: <FaLayerGroup />,
    title: "Full Stack Applications",
    description:
      "Developing complete end-to-end web applications with frontend, backend, databases, authentication, and deployment.",
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <div className="grid md:grid-cols-[300px_1fr] gap-16">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="h-fit md:sticky top-24"
        >
          <p className="uppercase tracking-[0.3em] text-purple-400 mb-4 text-sm">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            What I{" "}
            <span className="text-purple-500">
              Build
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I create scalable, modern, and visually polished digital
            experiences with strong backend architecture and clean frontend
            systems.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group glass border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 hover:-translate-y-1 transition duration-500"
            >
              <div className="flex items-start gap-6">
                
                {/* NUMBER */}
                <div className="text-5xl font-extrabold text-white/10 group-hover:text-purple-500/20 transition duration-500">
                  {service.id}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold group-hover:text-purple-400 transition duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services