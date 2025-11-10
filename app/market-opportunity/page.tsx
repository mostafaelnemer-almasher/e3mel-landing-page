"use client";

import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";

const MarketOpportunityPage = () => {
  return (
    <section className="flex w-full h-full bg-white mt-20">
      <div className="flex flex-col space-y-5 w-full container mx-auto py-20 px-10">
        <SectionTitle title="Market Opportunity" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-4 pt-10"
        >
          <h3 className="text-xl font-semibold text-black">
            A Global Shift Toward Digital Learning
          </h3>
          <p className="text-base text-black/60">
            The global e-learning industry is undergoing rapid transformation,
            driven by digital transformation, remote work, and the demand for
            continuous upskilling. By 2030, the global e-learning market is
            projected to surpass $800 billion, growing at a CAGR of over 14%.
            This growth is fueled by the rise of mobile learning, flexible
            education models, and digital-first workforces all of which align
            directly with E3melBusiness' mission to deliver accessible,
            practical, and career-focused education.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">
            The Web3 Transformation in Education
          </h3>
          <p className="text-base text-black/60">
            While e-learning adoption has become mainstream, Web3 technologies
            are introducing the next evolution: ownership, transparency, and
            reward-based participation. Blockchain-powered education allows
            learners to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>
              Own their credentials through verifiable digital certificates.
            </li>
            <li>
              Earn value for engagement via utility tokens and loyalty models.
            </li>
            <li>
              Participate in governance and growth through decentralized
              ecosystems.
            </li>
          </ul>
          <p className="text-base text-black/60">
            The Web3 education market is still in its early stages but is
            expected to reach $50 billion+ by 2030, as traditional e-learning
            platforms begin adopting tokenized learning models and decentralized
            certification systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">
            Untapped Potential in Emerging Markets
          </h3>
          <p className="text-base text-black/60">
            E3melBusiness is uniquely positioned to lead this transition
            especially across Asia, Africa, and Latin America, where access to
            quality business education remains limited and expensive. With over
            50,000 active learners across 80 countries, E3melBusiness already
            has a strong foundation in emerging economies, where:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>Language barriers limit access to global programs.</li>
            <li>High tuition costs restrict professional education.</li>
            <li>Practical, job-relevant skills are in high demand.</li>
          </ul>
          <p className="text-base text-black/60">
            By offering localized, multilingual, and affordable programs,
            E3melBusiness bridges these gaps transforming underserved regions
            into thriving learning markets powered by blockchain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">
            Strategic Focus Regions
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>
              <strong>MENA & GCC:</strong> Rapidly expanding demand for
              workforce development and entrepreneurship training.
            </li>
            <li>
              <strong>Asia:</strong> Large, young populations eager for
              career-focused digital learning (Indonesia, India, Malaysia).
            </li>
            <li>
              <strong>Africa:</strong> Fastest-growing mobile user base and
              increasing adoption of online education solutions.
            </li>
            <li>
              <strong>Latin America:</strong> Strong potential for tokenized
              education models and affordable professional certifications.
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
            Competitive Advantage
          </h3>
          <p className="text-base text-black/60">
            Unlike traditional e-learning platforms, E3melBusiness combines:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-black/60 ml-4">
            <li>Proven success in education (operating since 2017).</li>
            <li>
              Multilingual global expansion strategy (6 key languages by 2030).
            </li>
            <li>
              Web3-powered participation model, turning learners into
              contributors and token holders.
            </li>
          </ul>
          <p className="text-base text-black/60">
            This positions E3melBusiness as a first mover in tokenized business
            education, bridging the gap between e-learning and decentralized
            ownership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-xl font-semibold text-black">Conclusion</h3>
          <p className="text-base text-black/60">
            The convergence of e-learning and Web3 creates one of the most
            promising opportunities of the decade. With its strong foundation,
            diverse learner base, and token-enabled vision, E3melBusiness is
            ready to lead the global transformation of education from passive
            consumption to active, rewarded participation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketOpportunityPage;
