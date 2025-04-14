"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Designers", "Developers", "Strategists", "Marketers", "Innovators"];

  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Fitness HUB",
      image: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744124058/Fitnesshub1_bcdpgq.jpg",
      bgColor: "bg-[#8b5c6f]/20",
      link: "/projects/landeros"
    },
    {
      title: "Health Care",
      image: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744228844/healthcare1_gn0pfk.webp",
      bgColor: "bg-[#5095b2]/20",
      link: "/projects/alter"
    },
    {
      title: "B2B CRM",
      image: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289240/CRM2_kkdfaf.png",
      bgColor: "bg-[#c395a4]/20",
      link: "/projects/crm"
    },
    {
      title: "E-commerce Application",
      image: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289531/APP1_q5axfs.jpg",
      bgColor: "bg-[#8b5c6f]/20",
      link: "/projects/portfoy"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startAnimation = async () => {
      if (!isHovered) {
        await controls.start({
          x: ["0%", "-50%"],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    };

    startAnimation();
  }, [controls, isHovered]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Ray Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
            style={{
              left: `${(i * 12.5) + 12.5}%`,
              transform: 'rotate(45deg)',
              transformOrigin: 'bottom',
            }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ 
              y: '-100%',
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="container mx-auto text-center relative"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] opacity-50 blur-3xl bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-300 rounded-full -z-10"
          />

          <motion.div
            variants={fadeIn}
            className="relative bg-[url('https://ext.same-assets.com/1288700763/2012144085.png')] bg-contain bg-center bg-no-repeat w-20 h-20 mb-4"
          />

          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-7xl font-serif mb-1 tracking-tight"
          >
            WE ARE
          </motion.h1>
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
          >
            {texts[currentTextIndex]}
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-base md:text-lg text-[#1e292d]/80 max-w-2xl mb-8"
          >
            We take your 'what ifs' and turn them into 'holy sh*t, it works!
          </motion.p>

          <motion.div
            variants={fadeIn}
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
        </div>

        <motion.div
          variants={fadeIn}
          className="mt-20 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-8"
            animate={controls}
          >
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative min-w-[400px]"
              >
                <Link href={project.link} className={`relative ${project.bgColor} rounded-lg p-4 aspect-video overflow-hidden block transition-all duration-300 hover:shadow-lg`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 text-lg font-medium text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                    {project.title}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
