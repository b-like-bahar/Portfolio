"use client";

import { motion } from "framer-motion";
import { Binary } from "lucide-react";

export default function AnimatedSeparator() {
  return (
    <div className="my-4 flex flex-col items-center gap-4">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "33%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-[#8B8CF6]/60 to-transparent"
      />
      <div className="flex items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Binary size={20} className="text-[#8B8CF6] opacity-60" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Binary size={24} className="text-[#8B8CF6]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Binary size={20} className="text-[#8B8CF6] opacity-60" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "33%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="h-px bg-gradient-to-r from-transparent via-[#8B8CF6]/60 to-transparent"
      />
    </div>
  );
}
