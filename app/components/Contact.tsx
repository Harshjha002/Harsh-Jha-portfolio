"use client";

import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">

        {/* =================================================
            LEFT CARD — GET IN TOUCH
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            glass
            p-8
            rounded-3xl
            border
            border-white/10
          "
        >

          {/* HEADING */}

          <h3 className="text-3xl font-bold mb-3">
            Get In{" "}
            <span className="text-purple-400">
              Touch
            </span>
          </h3>


          {/* DESCRIPTION */}

          <p className="text-white/50 mb-8 leading-relaxed">
            I&apos;m currently looking for opportunities where I can contribute,
            keep learning, and grow as a software engineer. If you&apos;d like
            to talk about an opportunity or my work, feel free to reach out.
          </p>


          {/* CONTACT DETAILS */}

          <div className="space-y-4">

            {/* PHONE */}

            <a
              href="tel:+917002714761"
              className="
                group
                flex
                items-center
                gap-4
                p-5
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:border-purple-500/40
                hover:bg-purple-500/10
                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-purple-500/20
                  bg-purple-500/10
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <FaPhoneAlt className="text-purple-400 text-xl" />
              </div>

              <div>
                <p className="text-sm text-white/40 mb-1">
                  Phone
                </p>

                <p className="font-medium text-lg group-hover:text-purple-300 transition">
                  +91 70027 14761
                </p>
              </div>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:harshjha8453@gmail.com"
              className="
                group
                flex
                items-center
                gap-4
                p-5
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:border-purple-500/40
                hover:bg-purple-500/10
                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-purple-500/20
                  bg-purple-500/10
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <FaEnvelope className="text-purple-400 text-xl" />
              </div>

              <div className="min-w-0">

                <p className="text-sm text-white/40 mb-1">
                  Email
                </p>

                <p className="font-medium break-all group-hover:text-purple-300 transition">
                  harshjha8453@gmail.com
                </p>

              </div>

            </a>

          </div>
        </motion.div>


        {/* =================================================
            RIGHT CARD — EXPLORE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            glass
            p-8
            rounded-3xl
            border
            border-white/10
          "
        >

          {/* HEADING */}

          <h3 className="text-3xl font-bold mb-3">
            Explore My{" "}
            <span className="text-purple-400">
              Work
            </span>
          </h3>


          {/* DESCRIPTION */}

          <p className="text-white/50 mb-8 leading-relaxed">
            Take a look at the projects I&apos;ve built, the problems I&apos;m
            solving, and the progress I&apos;m making as I continue developing
            my engineering skills.
          </p>


          {/* LINKS */}

          <div className="grid grid-cols-2 gap-4">

            {/* GITHUB */}

            <a
              href="https://github.com/Harshjha002"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                gap-3
                p-6
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-purple-500/10
                hover:border-purple-500/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaGithub
                className="
                  text-4xl
                  text-purple-400
                  group-hover:scale-110
                  transition
                "
              />

              <span className="font-medium">
                GitHub
              </span>

              <span className="text-xs text-white/30">
                Projects & Code
              </span>
            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/harsh-jha-85722b254/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                gap-3
                p-6
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-purple-500/10
                hover:border-purple-500/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaLinkedin
                className="
                  text-4xl
                  text-purple-400
                  group-hover:scale-110
                  transition
                "
              />

              <span className="font-medium">
                LinkedIn
              </span>

              <span className="text-xs text-white/30">
                Professional Profile
              </span>
            </a>


            {/* LEETCODE */}

            <a
              href="https://leetcode.com/u/Harsh884/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                gap-3
                p-6
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-purple-500/10
                hover:border-purple-500/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <SiLeetcode
                className="
                  text-4xl
                  text-purple-400
                  group-hover:scale-110
                  transition
                "
              />

              <span className="font-medium">
                LeetCode
              </span>

              <span className="text-xs text-white/30">
                Problem Solving
              </span>
            </a>


            {/* RESUME */}

            <a
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                gap-3
                p-6
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-purple-500/10
                hover:border-purple-500/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaFilePdf
                className="
                  text-4xl
                  text-purple-400
                  group-hover:scale-110
                  transition
                "
              />

              <span className="font-medium">
                Resume
              </span>

              <span className="text-xs text-white/30">
                Download CV
              </span>
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;