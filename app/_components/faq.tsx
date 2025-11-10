"use client";

import SectionTitle from "@/components/ui/section-title";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import FloatingCircle from "@/components/ui/floating-circle";

const FAQ = () => {
  return (
    <section id="faq" className="flex relative w-full h-full bg-e3mel-ice">
      <FloatingCircle className="absolute top-1/12 -left-50 lg:-left-1/12 z-10 size-72 border-[80px] bg-white border-e3mel-green rounded-full" />
      <FloatingCircle className="absolute bottom-1/12 -right-50 lg:-right-1/12 z-10 size-72 border-[80px] bg-white border-e3mel-green rounded-full" />
      <div className="flex flex-col space-y-10 w-full container mx-auto py-20 px-10 z-20">
        <SectionTitle title="Frequently Asked Questions" noDots />

        <motion.div
          className="w-full max-w-3xl mx-auto"
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
        >
          <Accordion type="single" collapsible>
            {FAQS.map((item, idx) => (
              <motion.div
                key={item.question}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <AccordionItem
                  value={`${item.question}-${idx}`}
                  className="bg-white p-3 my-5 rounded-xl"
                >
                  <AccordionTrigger className="font-bold text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-black/60 mt-2">
                    {item.content.map((block, i) => {
                      if (block.type === "paragraph") {
                        return (
                          <p key={i} className="mb-2 leading-relaxed">
                            {block.text}
                          </p>
                        );
                      }

                      if (block.type === "list") {
                        return (
                          <ul
                            key={i}
                            className="list-disc list-inside ml-2 mb-2 space-y-1"
                          >
                            {block.items.map((li, j) => (
                              <li key={j} className="text-black/80">
                                {li}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      return null;
                    })}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
