"use client";

import { motion } from "framer-motion";
import ContactOptions from "@/components/contact-options";
import WavingCharacter from "@/components/waving-character";
import { Heading2, Text } from "@/components/ui/typography";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heading2 className="section-title mb-4">Get In Touch</Heading2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Text variant="muted" size="lg" className="mb-12">
            Interested in working together or just want to talk tech? Let's
            connect.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10 relative"
        >
          <ContactOptions className="justify-center" />
        </motion.div>
      </div>

      {/* Waving Character */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 mb-8"
      >
        <WavingCharacter className="h-32 w-32 md:h-40 md:w-40 text-[#8B8CF6] flex-shrink-0" />
        <Text variant="muted" size="lg" className="italic max-w-xs">
          Hover me! I'll wave back 👋
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center mt-12"
      >
        <Text variant="muted">
          © {new Date().getFullYear()}. Made with passion.
        </Text>
      </motion.div>
    </section>
  );
}
