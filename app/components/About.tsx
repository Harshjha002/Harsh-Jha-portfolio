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
            Backend-focused developer working with Java and Spring Boot, building scalable systems and APIs.
            I also have experience with the MERN stack and a solid understanding of full-stack development.
          </p>

          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <code className="text-purple-200/50 text-sm">
              {/* 
                NOTE:
                This list represents my current core skills.
                Update only when I gain real project experience.
                Avoid adding technologies I cannot confidently explain.
              */}
              const skills = [<br />
              &nbsp;&nbsp;"Java",<br />
              &nbsp;&nbsp;"Spring Boot",<br />
              &nbsp;&nbsp;"React",<br />
              &nbsp;&nbsp;"SQL",<br />
              &nbsp;&nbsp;"Kafka",<br />
              &nbsp;&nbsp;"Distributed Systems",<br />
              &nbsp;&nbsp;"MongoDB",<br />
              &nbsp;&nbsp;"Docker",<br />
              &nbsp;&nbsp;"Spring AI"<br />
              ]
            </code>
          </div>
        </div>

        {/* 02 Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="text-white/50 mb-4">
            I specialize in backend development, building scalable APIs and designing systems that handle real-world challenges like data consistency and performance.
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
            I work across a range of technologies and continuously improve my skills to build scalable and efficient applications.
          </p>

          <div className="grid gap-4">

            {/* 
              Core Backend = my main strength
              Only include technologies I have used in real backend projects
            */}
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">Core Backend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Java</li>
                <li>Spring Boot</li>
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
              <h4 className="text-purple-300 font-medium mb-2">Supporting Technologies</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Redux Toolkit</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* SECOND GRID */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">

        {/* 04 Approach */}
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label>Backend</label>
              <Progress value={85} className="bg-purple-500/20 [&>div]:bg-purple-100/80" />
            </div>
            <div>
              <label>Frontend</label>
              <Progress value={60} className="bg-purple-500/20 [&>div]:bg-purple-100/80" />
            </div>
            <div>
              <label>DevOps</label>
              <Progress value={40} className="bg-purple-500/20 [&>div]:bg-purple-100/80" />
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
          <p className="text-white/50">
            I focus on writing clean, maintainable code and following best practices. 
            My approach involves understanding system requirements, planning thoroughly, 
            and delivering high-quality backend solutions.
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
            My goal is to grow as a backend engineer by building scalable systems, 
            solving complex problems, and contributing to impactful projects.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;