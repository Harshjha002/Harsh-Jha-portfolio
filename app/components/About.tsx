"use client";

import { Progress } from "@/components/ui/progress";
import project1 from "../../public/assets/proj5.png";
import project2 from "../../public/assets/proj6.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-purple-300">Me</span>
      </h2>

      {/* TOP GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* 01 Background */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="text-white/50 mb-6">
            Software engineer with experience building full-stack applications,
            backend APIs, and modern web solutions using Java, Spring Boot,
            Node.js, React, Next.js, PostgreSQL, and MongoDB. I enjoy solving
            complex problems and turning ideas into reliable software.
          </p>

          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <pre className="overflow-x-auto">
              <code className="text-purple-200/50 text-sm whitespace-pre-wrap">
                {`const skills = [
  "Java",
  "Spring Boot",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS"
]`}
              </code>
            </pre>
          </div>
        </div>

        {/* 02 Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="text-white/50 mb-4">
            I build full-stack applications with a strong focus on backend
            engineering, API development, database design, and system
            performance.
          </p>

          <div className="relative border border-white/20 rounded-lg h-[220px] overflow-hidden">
            <Image
              src={project1}
              alt="Project 1"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 03 Skills */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="text-white/50 mb-4">
            I work across a range of technologies and continuously improve my
            skills to build scalable and efficient applications.
          </p>

          <div className="grid gap-4">
            {/* 
              Core Backend = my main strength
              Only include technologies I have used in real backend projects
            */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">
                Core Engineering
              </h4>

              <ul className="text-white/50 space-y-1 text-sm">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            {/* 
              Supporting Technologies = tools I can work with
              Not my primary focus, but comfortable using them
            */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">
                Frontend & Tools
              </h4>

              <ul className="text-white/50 space-y-1 text-sm">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND GRID */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label>Backend</label>
              <Progress
                value={85}
                className="bg-purple-500/20 [&>div]:bg-purple-100/80"
              />
            </div>
            <div>
              <label>Frontend</label>
              <Progress
                value={70}
                className="bg-purple-500/20 [&>div]:bg-purple-100/80"
              />
            </div>
            <div>
              <label>DevOps</label>
              <Progress
                value={50}
                className="bg-purple-500/20 [&>div]:bg-purple-100/80"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-4 mb-2">04. Learning Journey</h3>

          <p className="text-white/50">
            During my MCA, I completed three internships that shaped my
            engineering journey. I started as a Frontend Developer Intern
            working with React, later transitioned into full-stack development
            with Spring Boot and PostgreSQL, and eventually worked on backend
            automation and API development using Node.js. These experiences
            helped me build strong foundations in frontend, backend, databases,
            and modern software development.
          </p>
        </div>

        {/* 05 Goals */}
        <div className="border border-white/20 rounded-lg p-6">
          <div className="h-[200px] overflow-hidden border border-white/20 relative rounded-lg mb-4">
            <Image
              src={project2}
              alt="Project 2"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2">05. Goals</h3>
          <p className="text-white/50">
            My goal is to grow as a software engineer by building scalable
            applications, solving challenging problems, and contributing to
            products that create real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
