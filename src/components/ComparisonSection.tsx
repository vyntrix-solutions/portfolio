"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FeatureItemProps {
  text: string;
  icon: string;
  index: number;
  isWarning?: boolean;
}

const FeatureItem = ({ text, icon, index, isWarning = false }: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="flex items-center gap-4 mb-6"
    >
      <div className={`flex-shrink-0 w-6 h-6 ${isWarning ? 'text-amber-500' : 'text-emerald-500'}`}>
        {isWarning ? '⚠️' : '✅'}
      </div>
      <span className="text-[#1a2b3b]/80 text-base">{text}</span>
    </motion.div>
  );
};

export default function ComparisonSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const vyntrixFeatures = [
    "Tailor-made, high-performance web & mobile solutions",
    "Design-first approach with pixel-perfect UI/UX",
    "Built using industry tools: Figma, Framer, and modern stacks",
    "Micro-interactions & seamless motion design",
    "Scalable architecture for future growth",
    "Blazing-fast load speeds & conversion-focused UX",
    "Advanced SEO strategies for real results",
    "Ongoing support & tech consultation"
  ];

  const typicalFeatures = [
    "Reliance on generic templates",
    "Basic or inconsistent UI skills",
    "Limited flexibility or customization",
    "Sluggish performance under load",
    "Minimal thought on scalability",
    "Outdated, static designs",
    "SEO as an afterthought",
    "One-time delivery, no future-proofing"
  ];

  return (
    <section className="py-20 px-6 bg-[#D8DFE5]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm mb-4">
            <span className="text-sm font-medium text-[#1a2b3b]">Comparison</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-[#1a2b3b]">
            Precision vs. Conventional
          </h2>
          <p className="text-[#1a2b3b]/70 max-w-3xl mx-auto text-lg">
            Crafted with obsession for quality. Compared to the usual — we don't just deliver websites, we engineer digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-[24px] p-8 shadow-sm"
          >
            <h3 className="text-2xl font-medium text-[#1a2b3b] mb-8">VYNTRIX Solution</h3>

            {vyntrixFeatures.map((feature, index) => (
              <FeatureItem
                key={index}
                text={feature}
                icon=""
                index={index}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-[24px] p-8 shadow-sm"
          >
            <h3 className="text-2xl font-medium text-[#1a2b3b] mb-8">Typical Providers</h3>

            {typicalFeatures.map((feature, index) => (
              <FeatureItem
                key={index}
                text={feature}
                icon=""
                index={index}
                isWarning={true}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link
            href="/contact"
            className="bg-[#1f2937] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1f2937]/90 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </Link>
          <Link
            href="/projects"
            className="bg-white/80 backdrop-blur-sm shadow-sm px-6 py-3 rounded-full font-medium hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            See Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
