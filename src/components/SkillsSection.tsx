"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  "Product Design",
  "UX Design",
  "UI Design",
  "Framer",
  "Interaction Design",
  "Branding",
  "Webflow",
  "UX Research",
  "No-Code",
  "Web Dev",
  "App Dev",
  "Blockchain",
  "Cloud Services",
  "SEO/Digital Marketing"
];

const experience = [
  {
    role: "Full-Stack Development",
    company: "Enterprise Solutions",
    year: "2023"
  },
  {
    role: "Mobile App Development",
    company: "Cross-Platform Apps",
    year: "2022"
  },
  {
    role: "Cloud Architecture",
    company: "Scalable Systems",
    year: "2024"
  },
  {
    role: "Blockchain Solutions",
    company: "Web3 Integration",
    year: "2023"
  }
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-6 bg-[#D8DFE5]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-[24px] p-8 shadow-sm"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070"
                  alt="Vyntrix Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-medium text-[#1a2b3b]">Vyntrix</h2>
                <p className="text-[#1a2b3b]/70">Digital Innovation Agency</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-sm text-[#1a2b3b]/70">Available for projects</span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-[#1a2b3b]/80">
                  We are a dynamic digital agency specializing in cutting-edge technology solutions and creative design services.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full bg-[#1f2937] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1f2937]/90 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <p className="text-[#1a2b3b] text-lg leading-relaxed">
                  We blend creative design with precise technical execution to deliver outstanding digital experiences for businesses worldwide.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#1a2b3b] text-sm font-medium hover:bg-white transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Experience List */}
              <div className="space-y-4">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between py-4 border-b border-[#1a2b3b]/10"
                  >
                    <div>
                      <h4 className="text-[#1a2b3b] font-medium">{item.role}</h4>
                      <p className="text-[#1a2b3b]/70">{item.company}</p>
                    </div>
                    <span className="text-[#1a2b3b]/40">{item.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 