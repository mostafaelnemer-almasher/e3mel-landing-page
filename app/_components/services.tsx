"use client";

import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title";

const Services = () => {
  return (
    <section id="services" className="flex w-full h-full bg-e3mel-ice">
      <div className="flex w-full container mx-auto flex-col py-20">
        <SectionTitle title="Our Services" />

        <div className="flex flex-col mt-5 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            className="z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 lg:p-20 lg:py-10"
          >
            {SERVICES.map((item, idx) => (
              <motion.div
                key={`${item.title}-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="cursor-pointer"
              >
                <Card className="h-full overflow-hidden">
                  <CardHeader>
                    <motion.div className="flex relative h-32 w-full rounded-md overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="bg-cover rounded-md"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardTitle className="text-center text-xl lg:text-2xl mt-4">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-center mt-2">
                        {item.description}
                      </CardDescription>
                    </motion.div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-0 z-0 w-full h-full lg:h-72 bg-[url('/images/book-pattern.webp')] bg-cover bg-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
