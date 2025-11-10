"use client";

import FloatingCircle from "@/components/ui/floating-circle";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TokenSaleForm from "./token-sale/token-sale";
import { useQuery } from "@tanstack/react-query";

const Hero = () => {
  const companies = [
    "android.png",
    "aws.png",
    "google.png",
    "ift.png",
    "macos.png",
    "microsoft.png",
    "skyq.png",
  ];

  const { data, isLoading, error } = useQuery<APITokenInfoResponse, Error>({
    queryKey: ["tokenInfo"],
    queryFn: async () => {
      const response = await fetch("/api/token");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json() as Promise<APITokenInfoResponse>;
    },
  });

  // Date calculations
  const startDate = data ? data?.response.start : null;
  const endDate = data ? data?.response.end : null;
  const isLive =
    startDate && endDate
      ? new Date() >= new Date(startDate) && new Date() <= new Date(endDate)
      : false;

  return (
    <section
      id="home"
      className="flex flex-col w-full bg-white h-screen relative"
    >
      <div className="flex w-full bg-[url('/images/e3mel-hero.webp')] bg-cover bg-center h-[90vh]">
        <FloatingCircle className="absolute top-1/15 -right-10 size-40 border-[40px] border-e3mel-green rounded-full" />
        <FloatingCircle className="absolute top-4/15 right-30 size-20 border-[20px] border-white rounded-full" />
        <div className="container mx-auto w-full h-full items-center justify-center flex flex-col-reverse px-5 py-20 z-40">
          <TokenSaleForm isLoading={isLoading} data={data} error={error} />
        </div>
      </div>

      <div className="w-full bg-e3mel-ice">
        <div className="flex container mx-auto overflow-hidden relative">
          <div className="flex animate-marquee">
            {Array(10)
              .fill(companies)
              .flat()
              .map((company, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 mx-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Image
                    src={`/images/companies/${company}`}
                    alt={company.replace(".png", "")}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
              ))}
          </div>
          {/* Left fade edge */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-e3mel-ice to-transparent pointer-events-none z-10"></div>
          {/* Right fade edge */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-e3mel-ice to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
