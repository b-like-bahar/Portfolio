"use client";

import { motion } from "framer-motion";
import ContactOptions from "@/components/contact-options";
import WavingCharacter from "@/components/waving-character";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-5xl md:text-6xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12"
        >
          Interested in working together or just want to talk tech? Let's
          connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10 relative"
        >
          <ContactOptions className="justify-center" />
        </motion.div>
      </div>

      {/* Waving Character with text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 mb-8"
      >
        <WavingCharacter className="h-32 w-32 md:h-40 md:w-40 text-[#8B8CF6] flex-shrink-0" />
        <p className="text-lg text-[#9CA3AF] italic max-w-xs">
          Hover me! I'll wave back 👋
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center text-lg text-gray-500 mt-12"
      >
        <p>© {new Date().getFullYear()}. Made with passion.</p>
      </motion.div>
    </section>
  );
}
