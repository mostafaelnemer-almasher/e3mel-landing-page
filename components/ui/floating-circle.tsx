"use client";

import { motion } from "framer-motion";
import React from "react";

interface FloatingCircleProps {
  className?: string;
}

const FloatingCircle = ({ className }: FloatingCircleProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Green Circle */}
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 0.5, delay: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
          x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />
    </div>
  );
};

export default FloatingCircle;
