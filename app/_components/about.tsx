"use client";

import SectionTitle from "@/components/ui/section-title";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LearnMore from "@/components/ui/learn-more";
import FloatingCircle from "@/components/ui/floating-circle";

const About = () => {
  return (
    <section id="about" className="flex w-full h-full bg-white">
      <div className="flex w-full container mx-auto flex-col py-20 px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FloatingCircle className="absolute top-1/12 left-5 z-30 size-40 border-[40px] bg-white border-e3mel-green rounded-full" />
          <FloatingCircle className="absolute top-4/12 left-1/4 z-10 size-72 border-[70px] bg-white border-e3mel-blue rounded-full" />
          <div className="grid grid-cols-2 gap-5 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 col-span-2 rounded-md overflow-hidden"
            >
              <Image
                src={"/images/about-female.webp"}
                alt={"Female college student"}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </motion.div>

            <div className="flex w-full h-full items-start justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative h-52 w-5/6 rounded-md overflow-hidden"
              >
                <Image
                  src={"/images/about-notes.webp"}
                  alt={"College notes"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </motion.div>
            </div>

            <div className="flex w-full h-full items-start justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative h-40 w-4/6 rounded-md overflow-hidden"
              >
                <Image
                  src={"/images/about-male.webp"}
                  alt={"Male college student"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <SectionTitle>
              <p className="text-4xl lg:text-5xl font-bold text-black">
                About Us: <span className="text-e3mel-blue">E3MEL</span>{" "}
                Business Token
              </p>
            </SectionTitle>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-black/60"
            >
              E3mel Business Token (EBT) is the utility token powering the E3mel
              Business ecosystem—an established corporate training and
              e-learning provider across the MENA region. EBT enables learners,
              trainers, and organizations to access courses, certifications, and
              career services with discounts, staking rewards, and exclusive
              access. Our mission is to combine blockchain technology with
              education, making professional upskilling transparent, accessible,
              and rewarding.
            </motion.p>

            <LearnMore href="/about-us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
