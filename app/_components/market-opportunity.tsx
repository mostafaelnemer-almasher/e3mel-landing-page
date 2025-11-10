"use client";

import SectionTitle from "@/components/ui/section-title";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LearnMore from "@/components/ui/learn-more";
import FloatingCircle from "@/components/ui/floating-circle";

const MarketOpportunity = () => {
  return (
    <section className="flex w-full h-full bg-e3mel-ice">
      <div className="flex w-full container mx-auto flex-col py-20 px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-5">
            <SectionTitle title="Market Opportunity" />

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-black/60"
            >
              Global demand for e-learning is projected to exceed $800 billion
              by 2030. In emerging markets, affordable business education is
              limited, with academic programs often disconnected from market
              needs. E3melBusiness bridges this gap with tokenized,
              multilingual, and practical training offerings.
            </motion.p>

            <LearnMore href="/market-opportunity" />
          </div>

          <div className="relative grid gap-5">
            <FloatingCircle className="absolute -top-1/12 -right-5 z-30 size-40 border-[40px] bg-white border-e3mel-green rounded-full" />
            <FloatingCircle className="absolute -bottom-1/12 -left-5 z-30 size-20 bg-e3mel-blue rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 rounded-md overflow-hidden"
            >
              <Image
                src={"/images/country-flags.webp"}
                alt={"Country flags"}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
