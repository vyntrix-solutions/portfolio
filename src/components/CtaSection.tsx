"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="py-20 px-6 relative">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1,
            },
          },
        }}
        className="container mx-auto text-center max-w-4xl"
      >
        <motion.div
          variants={fadeUp}
          className="rounded-full w-16 h-16 flex items-center justify-center bg-[#1e292d] mx-auto mb-8"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut"
            }}
            src="https://ext.same-assets.com/141559467/2728223229.svg"
            alt="Handshake"
            className="w-8 h-8"
          />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4"
        >
          Have an idea that deserves the spotlight?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[#1e292d]/80 mb-8 max-w-2xl mx-auto"
        >
          Let’s shape it into a sleek, powerful experience that resonates with your audience—beautifully and meaningfully
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="bg-[#1e292d] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1e292d]/90 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Me
          </Link>
          <Link
            href="/projects"
            className="bg-transparent border border-[#1e292d] text-[#1e292d] px-6 py-3 rounded-md font-medium hover:bg-[#1e292d]/5 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            See Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
