"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title?: string;
  children?: React.ReactNode;
  noDots?: boolean;
  noCenter?: boolean;
}

const SectionTitle = ({
  title,
  children,
  noDots,
  noCenter,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "flex flex-row space-x-2 items-start justify-center w-full",
        noCenter && "justify-start"
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={cn(
          "grid grid-cols-2 gap-2 mt-2 aspect-square self-start w-8 h-8",
          noDots && "invisible"
        )}
      >
        <div className="flex bg-transparent size-3 rounded-full" />
        <div className="flex bg-e3mel-blue/50 size-3 rounded-full" />
        <div className="flex bg-e3mel-blue/50 size-3 rounded-full" />
        <div className="flex bg-e3mel-blue size-3 rounded-full" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={
          title ? "text-4xl lg:text-5xl text-center font-bold text-black" : ""
        }
      >
        {title || children}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
