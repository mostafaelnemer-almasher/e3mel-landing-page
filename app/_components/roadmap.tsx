"use client";

import SectionTitle from "@/components/ui/section-title";
import React from "react";
import { motion } from "framer-motion";
import { ROADMAP_ITEMS } from "@/lib/constants";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import FloatingCircle from "@/components/ui/floating-circle";

const Header = () => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:justify-between items-center justify-center w-full">
      <div className="flex lg:hidden">
        <SectionTitle title="Roadmap" noCenter />
      </div>
      <div className="hidden lg:flex">
        <SectionTitle title="Roadmap" />
      </div>
      <div className="flex space-x-5">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="rounded-full bg-e3mel-green hover:bg-e3mel-green cursor-pointer"
          aria-label="Previous roadmap item"
        >
          <CaretLeftIcon className="size-4 bg-white text-black rounded-full" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="rounded-full bg-e3mel-green hover:bg-e3mel-green cursor-pointer"
          aria-label="Next roadmap item"
        >
          <CaretRightIcon className="size-4 bg-white text-black rounded-full" />
        </Button>
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="w-full bg-[url('/images/stationary.png')] bg-cover bg-center"
    >
      <div className="flex flex-col space-y-10 w-full max-w-7xl mx-auto py-20 px-5">
        <Carousel className="w-full">
          <Header />
          <CarouselContent className="w-full mt-10 px-10">
            {ROADMAP_ITEMS.map((item, index) => (
              <CarouselItem key={index} className="lg:basis-1/3 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card
                    className={cn(
                      "h-full p-4 shadow-none relative overflow-hidden",
                      item.isActive ? "bg-e3mel-green border-none" : "bg-white"
                    )}
                  >
                    <FloatingCircle
                      className={cn(
                        "-top-2/6 -right-4/6 z-10 size-72 border-[70px] bg-white border-e3mel-blue rounded-full",
                        item.isActive ? "absolute" : "hidden"
                      )}
                    />
                    <CardHeader className="">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.2,
                              delayChildren: 0.1,
                            },
                          },
                        }}
                        className="flex flex-col space-y-3"
                      >
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.6 }}
                          className="flex items-center space-x-3"
                        >
                          <h3
                            className={cn(
                              "text-xl lg:text-2xl font-bold z-20",
                              item.isActive ? "text-white" : "text-black"
                            )}
                          >
                            {item.title}
                          </h3>
                        </motion.div>
                        <motion.p
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className={cn(
                            "text-base z-20",
                            item.isActive ? "text-white" : "text-black"
                          )}
                        >
                          {item.goal}
                        </motion.p>
                      </motion.div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Roadmap;
