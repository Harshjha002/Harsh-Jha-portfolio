"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa6";

import profilepic from "../../public/assets/profilepic.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000,#1A0824_30%,#3B1152_55%,#9D4EDD_100%)]" />

      {/* GLOW */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[140px] rounded-full" />

      {/* BOTTOM CURVE */}
      <div className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_82%,#9E4AC5)] top-[650px] border border-purple-400/20" />

      <div className="relative z-10 container mx-auto px-6 pt-10 pb-24">
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-10 mt-10"
          >
            {/* GLOW RING */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-3xl scale-110" />

            {/* ROTATING BORDER */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-8px] rounded-full border border-dashed border-purple-400/30"
            />

            <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-xl">
              <Image
                src={profilepic}
                alt="Harsh Jha profile"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-white/5 backdrop-blur-xl mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-white/70 tracking-wide">
                Backend Developer • Java • Spring Boot
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-8">
              Building{" "}
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
                scalable
              </span>
              <br />
              backend systems
            </h1>

            {/* SUBTEXT */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
              I design and develop high-performance backend architectures,
              scalable APIs, and modern full stack applications using Java,
              Spring Boot, React, and cloud technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                href="/assets/Harsh_MCA.pdf"
                target="_blank"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-semibold flex items-center gap-3 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition duration-500"
              >
                View Resume
                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                href="#portfolio"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl font-semibold hover:bg-white/10 transition duration-500"
              >
                View Projects
              </motion.a>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center justify-center gap-6">
              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -4,
                }}
                href="https://github.com/Harshjha002"
                target="_blank"
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl hover:border-purple-400/40 hover:text-purple-300 transition duration-500"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -4,
                }}
                href="https://www.linkedin.com/in/harsh-jha-85722b254/"
                target="_blank"
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl hover:border-purple-400/40 hover:text-purple-300 transition duration-500"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
