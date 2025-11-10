"use client";

import SectionTitle from "@/components/ui/section-title";
import { FEATURES } from "@/lib/constants";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LearnMore from "@/components/ui/learn-more";
import FloatingCircle from "@/components/ui/floating-circle";

const Features = () => {
  return (
    <section className="flex w-full h-full bg-white">
      <div className="flex w-full container mx-auto flex-col py-20 px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-5">
            <SectionTitle>
              <p className="text-4xl lg:text-5xl font-bold text-black">
                Features / Usage of the{" "}
                <span className="text-e3mel-blue">Utility Token</span>
              </p>
            </SectionTitle>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.5,
                  },
                },
              }}
              className="flex flex-col space-y-4 mt-5 pb-10"
            >
              {FEATURES.map((item, idx) => (
                <motion.div
                  key={`${item}-${idx}`}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row space-x-3 items-center justify-start cursor-default"
                >
                  <div className="flex w-fit h-fit bg-e3mel-blue p-0.5 rounded-sm">
                    <CheckIcon className="size-5 text-white" />
                  </div>
                  <p className="text-base text-black">{item}</p>
                </motion.div>
              ))}
            </motion.div>
            <LearnMore href="/utility-token" />
          </div>

          <div className="relative grid grid-cols-2 gap-5">
            <FloatingCircle className="absolute -top-1/12 -right-5 z-40 size-40 border-[40px] bg-white border-e3mel-green rounded-full" />
            <FloatingCircle className="absolute top-4/12 right-1/4 z-10 size-72 border-[70px] bg-white border-e3mel-blue rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 col-span-2 rounded-md overflow-hidden z-30"
            >
              <Image
                src={"/images/about-college-at-work.webp"}
                alt={"Female college student at work"}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </motion.div>

            <div className="flex w-full h-full items-start justify-center z-30">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative h-52 w-5/6 rounded-md overflow-hidden"
              >
                <Image
                  src={"/images/about-graduate.webp"}
                  alt={"College graduate"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </motion.div>
            </div>

            <div className="flex w-full h-full items-start justify-start z-30">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative h-40 w-4/6 rounded-md overflow-hidden"
              >
                <Image
                  src={"/images/about-college-going-home.webp"}
                  alt={"College student going home"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
