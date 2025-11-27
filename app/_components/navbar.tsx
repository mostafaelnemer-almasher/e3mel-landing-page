"use client";

import { NAVIGATION_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CaretRightIcon, ListIcon, XIcon } from "@phosphor-icons/react/ssr";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LearnMore from "@/components/ui/learn-more";

const DesktopNavbar = ({ activeSection }: { activeSection: string }) => {
  return (
    <div className="hidden lg:flex flex-row justify-between items-center w-full">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link href="/">
          <Image
            src="/images/E3-Blockraise-2.svg"
            alt="E3mel Logo"
            width={60}
            height={60}
            className="object-contain cursor-pointer hover:saturate-150 duration-300 ease-in-out"
          />
        </Link>
      </motion.div>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.5,
            },
          },
        }}
        className="flex flex-row space-x-6"
      >
        {NAVIGATION_LINKS.map((link, index) => {
          const sectionId = link.href === "/" ? "home" : link.href.slice(2);
          const isActive = activeSection === sectionId;
          return (
            <motion.li
              key={`${link.label}-${index}`}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 transition-colors duration-200 rounded-lg hover:bg-white/10"
              whileHover={{
                skewX: -2,
                x: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ skewX: 0, x: 0 }}
            >
              <Link
                href={link.href}
                className={`${
                  isActive ? "font-bold text-black" : "text-black/60"
                } hover:text-black duration-300 ease-in-out`}
              >
                <motion.span
                  className={`text-lg ${
                    isActive
                      ? "font-bold text-black"
                      : "font-light text-black/60"
                  } hover:font-semibold transition-all duration-300 ease-out`}
                  whileHover={{
                    skewX: -3,
                    transition: { duration: 0.3 },
                  }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>

      <LearnMore isHeader />
    </div>
  );
};

const MobileNavbar = ({ activeSection }: { activeSection: string }) => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="container flex items-center justify-between w-full h-full px-5 mx-auto lg:hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link href="/">
          <Image
            src="/images/E3-Blockraise-2.svg"
            alt="E3mel Logo"
            width={60}
            height={60}
            className="object-contain cursor-pointer hover:saturate-150 duration-300 ease-in-out"
          />
        </Link>
      </motion.div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger aria-label="Open navigation menu">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ListIcon className="size-8 text-black" />
          </motion.div>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="w-full h-screen backdrop-blur-md bg-transparent"
        >
          <SheetHeader className="flex flex-row items-center justify-between w-full h-20 container mx-auto">
            <SheetTitle className="pt-2.5">
              <Link href="/">
                <Image
                  src="/images/E3-Blockraise-2.svg"
                  alt="E3mel Logo"
                  width={60}
                  height={60}
                  className="object-contain cursor-pointer hover:saturate-150 duration-300 ease-in-out"
                />
              </Link>
            </SheetTitle>
            <SheetClose
              className="flex items-start justify-start"
              aria-label="Close navigation menu"
            >
              <XIcon className="size-8 text-white" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetHeader>

          <div className="flex flex-col w-full h-full space-y-5 container mx-auto">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                  },
                },
              }}
              className="flex flex-col items-start justify-start w-full h-full space-y-5 text-lg font-semibold text-black"
            >
              {NAVIGATION_LINKS.map((link, idx) => {
                const sectionId =
                  link.href === "/" ? "home" : link.href.slice(2);
                const isActive = activeSection === sectionId;
                return (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: -30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="flex w-full h-16 px-5 transition-colors duration-200 rounded-lg"
                    whileHover={{
                      skewX: -2,
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    whileTap={{ skewX: 0, x: 0 }}
                  >
                    <Link
                      href={link.href}
                      className="flex w-full items-center justify-between space-x-2"
                      onClick={() => setSheetOpen(false)}
                    >
                      <div className="flex flex-row items-center space-x-3">
                        <motion.span
                          className={`text-2xl ${
                            isActive
                              ? "font-bold text-black"
                              : "font-semibold text-white"
                          }`}
                          whileHover={{
                            skewX: -3,
                            transition: { duration: 0.3 },
                          }}
                        >
                          {link.label}
                        </motion.span>
                      </div>
                      <motion.div
                        whileHover={{
                          opacity: [1, 0.5, 1],
                          x: 12,
                          transition: { duration: 0.6 },
                        }}
                      >
                        <CaretRightIcon
                          className="size-6 text-white"
                          weight="duotone"
                        />
                      </motion.div>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Don't hide navbar when at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const setupObserver = () => {
      const sections = document.querySelectorAll("section[id]");
      const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    };

    if (pathname === "/") {
      // Delay setup to ensure sections are rendered
      const timeoutId = setTimeout(setupObserver, 100);
      return () => clearTimeout(timeoutId);
    } else {
      setActiveSection("");
    }
  }, [pathname]);

  return (
    <motion.div
      className="fixed top-0 w-full h-[10vh] bg-white shadow-lg z-50"
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="flex container mx-auto flex-row justify-between items-center p-4">
        <DesktopNavbar activeSection={activeSection} />
        <MobileNavbar activeSection={activeSection} />
      </div>
    </motion.div>
  );
};

export default Navbar;
