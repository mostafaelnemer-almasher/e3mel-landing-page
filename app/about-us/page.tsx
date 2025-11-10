"use client";

import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <section className="flex w-full h-full bg-white mt-20">
      <div className="flex flex-col space-y-5 w-full container mx-auto py-20 px-10">
        <SectionTitle title="About Us" />

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base text-black/60 pt-10"
        >
          E3mel Business Token (EBT) is built on the foundation of E3mel
          Business, a leading corporate training and educational services
          provider operating across the Middle East and North Africa. With over
          a decade of experience in delivering professional training,
          certifications, and tailored corporate solutions, E3mel Business has
          empowered tens of thousands of learners and hundreds of organizations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base text-black/60"
        >
          By introducing EBT, we expand our impact through blockchain
          technology. EBT is designed to:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="list-disc list-inside space-y-2 text-base text-black/60 ml-4"
        >
          <li>Provide tuition discounts and cashback for learners.</li>
          <li>Reward engagement through staking, referrals, and reviews.</li>
          <li>
            Enable NFT-based certificates and blockchain-verified skill
            tracking.
          </li>
          <li>
            Create exclusive access to premium masterclasses, trainers, and
            events.
          </li>
          <li>
            Build a governance model where token holders shape the future of
            education.
          </li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base text-black/60"
        >
          Our vision is to democratize career growth: from individuals who want
          to learn, to companies that want to upskill their teams, EBT bridges
          the gap between education and finance. We aim to create a
          self-sustaining ecosystem where learning is not just an investment—but
          also a reward.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUsPage;
