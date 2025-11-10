"use client";

import SectionTitle from "@/components/ui/section-title";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="flex w-full h-full bg-white">
      <div className="flex flex-col space-y-10 w-full container mx-auto py-20 px-10">
        <SectionTitle title="Tokenomics" />

        <div className="relative grid gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[30vh] lg:h-[70vh] rounded-md overflow-hidden"
          >
            <Image
              src={"/images/tokenomics.png"}
              alt={"Tokenomics diagram"}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
