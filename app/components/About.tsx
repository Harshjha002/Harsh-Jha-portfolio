"use client";

import { Progress } from "@/components/ui/progress";
import project1 from "../../public/assets/proj5.png";
import project2 from "../../public/assets/proj6.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="text-white p-8">
      {/* HEADER */}
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-purple-300">Me</span>
      </h2>

      {/* TOP GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* 01. Background */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">
            01. Background
          </h3>

          <p className="text-white/50 mb-6">
            Full-stack developer specializing in backend engineering. I build
            scalable APIs, automation workflows, database-driven systems, and
            modern web applications primarily with Node.js and TypeScript,
            while working across React, PostgreSQL, MongoDB, and Redis.
          </p>

          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <pre className="overflow-x-auto">
              <code className="text-purple-200/50 text-sm whitespace-pre-wrap">
                {`const stack = {
  backend: [
    "Node.js",
    "TypeScript",
    "Express.js"
  ],
  frontend: [
    "React",
    "Next.js"
  ],
  data: [
    "PostgreSQL",
    "MongoDB",
    "Redis"
  ],
  infrastructure: [
    "Docker",
    "AWS"
  ]
};`}
              </code>
            </pre>
          </div>
        </div>

        {/* 02. Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">
            02. Expertise
          </h3>

          <p className="text-white/50 mb-4">
            My primary strength is backend engineering. I design REST APIs,
            work with databases, build authentication and transaction flows,
            handle concurrency and reliability concerns, and develop
            automation systems using Node.js and TypeScript.
          </p>

          <div className="relative border border-white/20 rounded-lg h-[220px] overflow-hidden">
            <Image
              src={project1}
              alt="Backend engineering project"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 03. Skills */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">
            03. Skills
          </h3>

          <p className="text-white/50 mb-4">
            A backend-focused full-stack skill set built through professional
            experience, projects, and hands-on engineering.
          </p>

          <div className="grid gap-4">

            {/* PRIMARY BACKEND */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">
                Backend Engineering
              </h4>

              <ul className="text-white/50 space-y-1 text-sm">
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>Authentication & Authorization</li>
                <li>API Design</li>
              </ul>
            </div>

            {/* DATA */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">
                Data & Infrastructure
              </h4>

              <ul className="text-white/50 space-y-1 text-sm">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>

            {/* FULL STACK */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">
                Full-Stack
              </h4>

              <ul className="text-white/50 space-y-1 text-sm">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* ADDITIONAL BACKEND */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">
                Additional Backend
              </h4>

              <ul className="text-white/50 space-y-1 text-sm">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>JPA / Hibernate</li>
                <li>Kafka</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND GRID */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">

        {/* 04. Learning Journey */}
        <div className="border border-white/20 rounded-lg p-6">

          {/* AREAS OF FOCUS */}
          <div className="space-y-5 mb-8">

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">
                  Backend Engineering
                </span>
                <span className="text-purple-300 text-sm">
                  Primary
                </span>
              </div>

              <Progress
                value={90}
                className="bg-purple-500/20 [&>div]:bg-purple-100/80"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">
                  Full-Stack Development
                </span>
                <span className="text-purple-300 text-sm">
                  Strong
                </span>
              </div>

              <Progress
                value={75}
                className="bg-purple-500/20 [&>div]:bg-purple-100/80"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">
                  Databases & Infrastructure
                </span>
                <span className="text-purple-300 text-sm">
                  Strong
                </span>
              </div>

              <Progress
                value={75}
                className="bg-purple-500/20 [&>div]:bg-purple-100/80"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-2">
            04. Learning Journey
          </h3>

          <p className="text-white/50">
            My engineering journey started with frontend development using
            React before expanding into full-stack and backend engineering.
            Through internships and projects, I worked with Java and Spring
            Boot, PostgreSQL, and later moved deeper into Node.js backend
            development, API engineering, and automation. These experiences
            gave me a broad full-stack foundation while helping me specialize
            in backend systems.
          </p>
        </div>

        {/* 05. Goals */}
        <div className="border border-white/20 rounded-lg p-6">

          <div className="h-[200px] overflow-hidden border border-white/20 relative rounded-lg mb-4">
            <Image
              src={project2}
              alt="Software engineering project"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2">
            05. Goals
          </h3>

          <p className="text-white/50">
            I want to grow into a strong backend-focused full-stack engineer
            by building reliable systems, solving complex engineering
            problems, and developing deep expertise in Node.js, distributed
            systems, databases, and scalable application architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;