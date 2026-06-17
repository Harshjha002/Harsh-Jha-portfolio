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
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border border-white/10"
        >
          <h3 className="text-3xl font-bold mb-3">
            Get In <span className="text-purple-400">Touch</span>
          </h3>

          <p className="text-white/50 mb-8">
            Open to software engineering opportunities and exciting
            projects. Feel free to reach out.
          </p>

          <div className="space-y-4">
            <a
              href="tel:+917002714761"
              className="
                flex items-center gap-4
                p-5
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:border-purple-500/40
                hover:bg-purple-500/10
                transition-all duration-300
              "
            >
              <FaPhoneAlt className="text-purple-400 text-2xl" />

              <div>
                <p className="text-sm text-white/50">Phone</p>
                <p className="font-medium text-lg">
                  +91 70027 14761
                </p>
              </div>
            </a>

            <a
              href="mailto:harshjha8453@gmail.com"
              className="
                flex items-center gap-4
                p-5
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:border-purple-500/40
                hover:bg-purple-500/10
                transition-all duration-300
              "
            >
              <FaEnvelope className="text-purple-400 text-2xl" />

              <div>
                <p className="text-sm text-white/50">Email</p>
                <p className="font-medium break-all">
                  harshjha8453@gmail.com
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border border-white/10"
        >
          <h3 className="text-3xl font-bold mb-3">
            Connect With{" "}
            <span className="text-purple-400">Me</span>
          </h3>

          <p className="text-white/50 mb-8">
            Explore my work, coding profiles, and professional
            experience.
          </p>

          <div className="grid grid-cols-2 gap-4">
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
              <FaGithub className="text-4xl text-purple-400 group-hover:scale-110 transition" />
              <span>GitHub</span>
            </a>

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
              <FaLinkedin className="text-4xl text-purple-400 group-hover:scale-110 transition" />
              <span>LinkedIn</span>
            </a>

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
              <SiLeetcode className="text-4xl text-purple-400 group-hover:scale-110 transition" />
              <span>LeetCode</span>
            </a>

            <a
              href="/assets/Harshjha_MCA2026.pdf"
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
              <FaFilePdf className="text-4xl text-purple-400 group-hover:scale-110 transition" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;