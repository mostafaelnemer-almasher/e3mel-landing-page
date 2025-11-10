"use client";

import React from "react";
import { Button } from "./button";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";

interface LearnMoreProps {
  isHeader?: boolean;
  href?: string;
}

const LearnMore = ({ isHeader, href = "/about-us" }: LearnMoreProps) => {
  const initialAnimation = isHeader
    ? { opacity: 0, x: 50 }
    : { opacity: 0, y: 50 };

  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <Link href={href}>
        <Button
          className="w-fit h-fit px-6 py-2 bg-e3mel-green text-white text-base rounded-full hover:bg-e3mel-green/90 duration-300 ease-in-out cursor-pointer z-50"
          aria-label="Learn more about E3MEL Token"
        >
          Learn More
          <div className="flex bg-white rounded-full p-0.5">
            <CaretRightIcon className="size-3 text-black" aria-hidden="true" />
          </div>
        </Button>
      </Link>
    </motion.div>
  );
};

export default LearnMore;
