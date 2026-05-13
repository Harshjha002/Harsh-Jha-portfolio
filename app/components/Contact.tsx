"use client"

import { motion } from "framer-motion"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Get in{" "}
            <span className="text-purple-500">
              touch
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-3xl space-y-8 border border-white/10"
          >
            {/* PHONE */}
            <div className="space-y-2">
              <p className="text-purple-300 text-sm uppercase tracking-widest">
                Phone
              </p>

              <a
                href="tel:+917002714761"
                className="flex items-center gap-3 text-xl font-semibold hover:text-purple-400 transition duration-300"
              >
                <FaPhoneAlt
                  className="text-purple-400"
                  size={18}
                />
                +91 70027 14761
              </a>
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <p className="text-purple-300 text-sm uppercase tracking-widest">
                Email
              </p>

              <a
                href="mailto:harshjha8453@gmail.com"
                className="flex items-center gap-3 text-xl font-semibold hover:text-purple-400 transition duration-300 break-all"
              >
                <FaEnvelope
                  className="text-purple-400"
                  size={18}
                />
                harshjha8453@gmail.com
              </a>
            </div>

            {/* LOCATION */}
            <div className="space-y-2">
              <p className="text-purple-300 text-sm uppercase tracking-widest">
                Location
              </p>

              <div className="flex items-start gap-3 text-lg leading-relaxed">
                <FaMapMarkerAlt
                  className="mt-1 text-purple-400"
                  size={18}
                />

                <address className="not-italic">
                  Guwahati, Assam <br />
                  India
                </address>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl hover:scale-[1.01] transition duration-500 h-[450px]"
        >
          <iframe
            title="Guwahati Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.728489996836!2d91.73014475!3d26.158197549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5bcbd8572621%3A0x51f61bb9774f05da!2sFatasil%20Ambari%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1778671475117!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact