"use client";

import SectionTitle from "@/components/ui/section-title";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingOfficeIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  PhoneCallIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  PLATFORM_FOOTER_LINKS,
  COMPANY_FOOTER_LINKS,
  RESOURCES_FOOTER_LINKS,
  FOOTER_LINKS,
  SOCIAL_MEDIA_LINKS,
  FOOTER_TEXT,
  OFFICE_ADDRESS,
  PHONE_NUMBER,
  OFFICE_MAP_LINK,
} from "@/lib/constants";

const Footer = () => {
  return (
    <section
      id="contact"
      className="flex flex-col w-full h-full bg-e3mel-green"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full container mx-auto py-20 px-10">
        <div className="flex flex-col space-y-5 pr-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center bg-white rounded-lg w-fit h-fit"
          >
            <Link href="/">
              <Image
                src="/images/e3mel-logo.png"
                alt="E3mel Logo"
                width={100}
                height={100}
                className="object-contain cursor-pointer hover:saturate-150 duration-300 ease-in-out"
              />
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-white/60"
          >
            {FOOTER_TEXT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row space-x-3 items-center justify-start"
          >
            <BuildingOfficeIcon className="text-white size-6" />
            <Link
              href={OFFICE_MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white whitespace-pre-line hover:underline"
            >
              {OFFICE_ADDRESS}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-row space-x-3 items-center justify-start"
          >
            <PhoneCallIcon className="text-white size-6" />
            <Link
              href={`tel:${PHONE_NUMBER}`}
              className="text-base text-white hover:underline"
            >
              {PHONE_NUMBER}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col space-y-4 items-start justify-start"
          >
            <p className="text-base text-white">Stay Connect:</p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.9,
                  },
                },
              }}
              className="grid grid-cols-4 gap-5"
            >
              {SOCIAL_MEDIA_LINKS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={`${item.href}-social-${idx}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow E3MEL on ${item.platform}`}
                    >
                      <Button
                        size="icon"
                        className="bg-white hover:bg-white/90 cursor-pointer"
                        aria-label={`Follow E3MEL on ${item.platform}`}
                      >
                        <Icon
                          weight="regular"
                          className="text-black size-6 cursor-pointer hover:scale-110 duration-300 ease-in-out"
                        />
                      </Button>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-3 items-start justify-start"
          >
            <h3 className="text-lg font-bold text-white mb-4">Platform</h3>

            {PLATFORM_FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-3 items-start justify-start"
          >
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>

            {COMPANY_FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col space-y-3 items-start justify-start"
          >
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>

            {RESOURCES_FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col w-full h-full bg-black/60">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0 w-full container mx-auto p-5">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-white whitespace-nowrap"
          >
            © 2025 E3MEL
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            className="flex flex-row space-x-5 ml-auto w-full items-center justify-center lg:justify-end"
          >
            {FOOTER_LINKS.map((link) => (
              <motion.li
                key={link.href}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  className="text-base text-white hover:underline cursor-pointer"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
