"use client";

import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { PRIVACY_POLICY } from "@/lib/constants";
import { TextWithLinks } from "@/components/ui/text-with-links";

const PrivacyPolicyPage = () => {
  return (
    <section className="flex w-full h-full bg-white mt-20">
      <div className="flex flex-col space-y-5 w-full container mx-auto py-20 px-10">
        <SectionTitle title="Privacy Policy" />

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
          At E3mel Business, we are committed to protecting your personal
          information and ensuring transparency in how we collect, use, and
          safeguard your data. This Privacy Policy applies to users of both the
          E3mel Business training platform and the E3mel Business Token (EBT)
          ecosystem.
        </motion.p>

        <div className="flex flex-col space-y-8">
          {PRIVACY_POLICY.map((item, index) => (
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

export default PrivacyPolicyPage;
