"use client";

import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";

const UtilityTokenPage = () => {
  return (
    <section className="flex w-full h-full bg-white mt-20">
      <div className="flex flex-col space-y-5 w-full container mx-auto py-20 px-10">
        <SectionTitle title="E3mel Business Token (EBT) Utilities" />

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base text-black/60 pt-10"
        >
          We will organize the E3mel Business Token (EBT) utilities along two
          axes:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="ml-4"
        >
          <ol className="list-decimal list-inside space-y-2 text-base text-black/60">
            <li>
              <strong>Ease of Application</strong> (how simple/low-cost to
              implement).
            </li>
            <li>
              <strong>Attractiveness to Investors</strong> (impact on adoption,
              demand, and long-term value).
            </li>
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">
            Tier 1 – Easiest to Apply & Highly Attractive
          </h3>
          <p className="text-base text-black/60">
            These utilities are low-friction to deploy and instantly appealing
            to learners, trainers, and investors.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>
              <strong>Staking & Rewards:</strong> Simple DeFi smart contracts
              offering passive yield. Attracts both investors and students who
              want to grow their holdings.
            </li>
            <li>
              <strong>Tuition Discounts:</strong> Direct fee reductions when
              paying for courses, certifications, or consulting using EBT.
              Creates real utility and instant token demand.
            </li>
            <li>
              <strong>Referral Rewards:</strong> Users earn tokens for bringing
              new students, trainers, or corporate clients. Quick to implement
              and drives network growth.
            </li>
            <li>
              <strong>Pay-to-Learn:</strong> Students who pay in tokens get
              cashback in EBT, tying token usage to educational sales. Highly
              attractive to investors.
            </li>
            <li>
              <strong>Feedback & Review Rewards:</strong> Learners who review
              courses or trainers get token incentives, boosting trust and
              platform quality.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">
            Tier 2 – Moderate Effort & Strong Investor Pull
          </h3>
          <p className="text-base text-black/60">
            Require partnerships or additional integration, but add strong pull
            for adoption and circulation.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>
              <strong>Skill Staking Multipliers:</strong> Learners who stake EBT
              get multipliers (discounts, premium support, faster
              certifications). Builds gamification into education.
            </li>
            <li>
              <strong>Corporate Partnership Rewards:</strong> Companies that
              upskill employees via E3mel Business earn rebates in EBT. Expands
              adoption into the B2B sector.
            </li>
            <li>
              <strong>Premium Course Access:</strong> Exclusive masterclasses,
              certifications, or events available only via EBT. Creates scarcity
              and strong investor demand.
            </li>
            <li>
              <strong>Community Governance (DAO):</strong> Token holders vote on
              which courses, topics, or trainers get prioritized, legitimizing
              token and deepening engagement.
            </li>
            <li>
              <strong>Gamified Challenges:</strong> Skill competitions and
              learning streak challenges rewarding EBT. Boosts motivation and
              engagement.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">
            Tier 3 – Higher Complexity but Big Differentiators
          </h3>
          <p className="text-base text-black/60">
            Require more resources, but create long-term ecosystem and branding
            advantages.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>
              <strong>NFT Certificates & Badges:</strong> Blockchain-verified
              proof of skill or certification as NFTs. Enhances credibility and
              creates collectible appeal.
            </li>
            <li>
              <strong>E3mel Business Marketplace:</strong> Token-powered
              marketplace for e-learning content, books, consulting services,
              and digital tools.
            </li>
            <li>
              <strong>Learning Points & Career Growth Challenges:</strong>{" "}
              Integration with career platforms where tokens reward continuous
              learning and milestones.
            </li>
            <li>
              <strong>Trainer Ambassador Access:</strong> Token-gated access to
              one-on-one sessions or mentorship with top trainers. Builds
              community stickiness.
            </li>
            <li>
              <strong>Subscription Tiers:</strong> Token-based monthly packages
              offering unlimited learning, premium courses, or career coaching.
              Recurring demand attracts investors.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">
            Tier 4 – Complex B2B / Long-Term Plays
          </h3>
          <p className="text-base text-black/60">
            Strategic, resource-intensive initiatives designed for institutional
            adoption and long-term value.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>
              <strong>Corporate Training Staking:</strong> Enterprises stake EBT
              to access discounted bulk training packages for employees. Strong
              institutional lock-in.
            </li>
            <li>
              <strong>Regional Franchise Rights:</strong> Partners can
              stake/lock tokens to secure regional rights to distribute E3mel
              Business programs. Requires legal structuring.
            </li>
            <li>
              <strong>Blockchain Career Tracking:</strong> Full
              student/professional profile stored on-chain for employers to
              verify skills instantly. Long-term differentiator.
            </li>
            <li>
              <strong>Supply Chain & HR Integration:</strong> Token-gated HR
              platforms and L&D pipelines for enterprises. Requires robust B2B
              integration.
            </li>
            <li>
              <strong>ESG & Social Learning Rewards:</strong> Tokens given for
              social impact learning (CSR training, NGO skills development).
              Strong narrative but needs partnerships.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">
            Recommendation for Rollout
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>
              <strong>Phase 1 (Quick Wins):</strong> Staking, Tuition Discounts,
              Referrals, Pay-to-Learn, Reviews.
            </li>
            <li>
              <strong>Phase 2 (Growth & Hype):</strong> NFTs for certificates,
              Governance, Premium Courses, Gamified Challenges.
            </li>
            <li>
              <strong>Phase 3 (Differentiation):</strong> Career-linked
              challenges, Ambassadors, Subscription Tiers.
            </li>
            <li>
              <strong>Phase 4 (Enterprise Expansion):</strong> Corporate
              staking, Franchise rights, Career blockchain, HR integrations.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default UtilityTokenPage;
