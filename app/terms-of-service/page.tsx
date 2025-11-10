"use client";

import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { TERMS_OF_SERVICE } from "@/lib/constants";
import { TextWithLinks } from "@/components/ui/text-with-links";

const TermsOfServicePage = () => {
  return (
    <section className="flex w-full h-full bg-white mt-20">
      <div className="flex flex-col space-y-5 w-full container mx-auto py-20 px-10">
        <SectionTitle title="Terms of Service" />

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base text-black/60 pt-10"
        >
          Last Updated: 22/10/2025
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base text-black/60"
        >
          These Terms of Service ("Terms") govern your use of the E3mel Business
          platform and the E3mel Business Token (EBT). By accessing, purchasing,
          staking, or transacting with EBT, you agree to these Terms.
        </motion.p>

        <div className="flex flex-col space-y-8">
          {TERMS_OF_SERVICE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-xl font-semibold text-black">
                {index + 1}. {item.title}
              </h3>
              {item.desc && (
                <p className="text-base text-black/80">
                  <TextWithLinks>{item.desc}</TextWithLinks>
                </p>
              )}
              {item.items && (
                <ul className="list-disc list-inside space-y-2 text-base text-black/70">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex}>
                      <TextWithLinks>{listItem}</TextWithLinks>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
