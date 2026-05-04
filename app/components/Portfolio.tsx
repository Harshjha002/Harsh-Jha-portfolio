"use client"

import { useState } from "react"
import Image from "next/image"

import proj1 from "../../public/assets/proj5.png"
import proj2 from "../../public/assets/proj6.png"

const projects = [
  {
    id: 1,
    year: 2026,
    title: "Nivora Pay — Distributed Wallet System",
    github: "https://github.com/Harshjha002/nivora-wallet",
    description:
      "Built a scalable distributed wallet system using Spring Boot and MySQL with ShardingSphere. Implemented idempotent transactions to ensure exactly-once execution and prevent duplicate debits. Designed Saga-based workflows for consistency across multi-step transactions and handled concurrency using database-level locking. Optimized performance with asynchronous processing to reduce latency and support high-throughput financial operations.",
    src: proj1
  },
  {
    id: 2,
    year: 2026,
    title: "Nivora Ask — Scalable Q&A Backend Platform",
    github: "https://github.com/Harshjha002/Nivora-Ask",
    description:
      "Designed and built a scalable backend platform using Java, Spring Boot WebFlux, and MongoDB with non-blocking request handling. Implemented an event-driven architecture using Apache Kafka for asynchronous updates and notifications. Integrated Elasticsearch for fast, accurate full-text search and developed reactive REST APIs to handle high concurrency efficiently. Structured the system with clean separation of API, service, and data layers for maintainability and scalability.",
    src: proj2
  }
]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <section id="portfolio" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-400">Projects</span>
          </h2>

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-purple-400 text-lg mb-2">{project.year}</p>

              <h3
                className={`text-3xl font-semibold transition-colors duration-300
                ${selectedProject.id === project.id
                    ? "text-purple-200"
                    : "group-hover:text-purple-400"
                  }`}
              >
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <>
                  <div className="border-b-2 border-purple-200 my-4"></div>

                  <p className="text-gray-400 transition-all duration-500 ease-in-out">
                    {project.description}
                  </p>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-4 px-5 py-2 
             text-purple-400 text-sm font-medium 
             border border-purple-400/30 rounded-md 
             hover:bg-purple-500 hover:text-white 
             transition-all duration-300"
                  >
                    View on GitHub →
                  </a>
                </>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex items-center justify-center">
          <Image
            src={selectedProject.src}
            alt={selectedProject.title}
            width={800}
            height={450}
            className="rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio