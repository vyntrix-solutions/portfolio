"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const ProcessCard = ({ number, title, description, index }: ProcessCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      className="group bg-white/80 backdrop-blur-sm rounded-[24px] p-8 shadow-sm hover:shadow-lg transition-all duration-500"
    >
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-[#1a2b3b] to-[#1a2b3b]/40 bg-clip-text text-transparent">
            {number}
          </span>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-[#1a2b3b]/20 to-transparent" />
        </motion.div>
        <h3 className="text-2xl font-medium text-[#1a2b3b] mb-4">{title}</h3>
        <p className="text-[#1a2b3b]/70 text-lg leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const processes = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We begin with a deep dive into your vision, goals, and requirements. Our team analyzes your needs and crafts a strategic roadmap."
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating pixel-perfect designs and interactive prototypes that align with your brand and deliver exceptional user experiences."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Our expert team transforms designs into robust, scalable solutions with rigorous testing at every stage."
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Seamless deployment of your project with ongoing maintenance, optimization, and dedicated technical support."
    }
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
            <span className="text-sm font-medium text-[#1a2b3b]">Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-[#1a2b3b]">
            From Vision to Reality
          </h2>
          <p className="text-[#1a2b3b]/70 max-w-3xl mx-auto text-lg">
            Our refined development process ensures consistent quality and exceptional results for every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              number={process.number}
              title={process.title}
              description={process.description}
              index={index}
            />
          ))}
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
            Start Your Project
          </Link>
          <Link
            href="/projects"
            className="bg-white/80 backdrop-blur-sm shadow-sm px-6 py-3 rounded-full font-medium hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
