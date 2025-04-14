"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: string;
  className?: string;
  imagePosition?: 'left' | 'right';
  index: number;
}

const ServiceCard = ({ title, description, imageUrl, icon, className = "", imagePosition = 'left', index }: ServiceCardProps) => {
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
      className={`group relative ${className}`}
    >
      <div className="relative h-full bg-white rounded-[32px] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/90 to-white/50 backdrop-blur-[2px] rounded-[32px]" />
        
        <div className="relative z-10 flex flex-row items-start gap-6 h-full">
          {imagePosition === 'left' && imageUrl && (
            <div className="w-[45%] h-[180px] rounded-2xl overflow-hidden">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          )}
          
          <div className={`flex flex-col ${imageUrl ? 'w-[55%]' : 'w-full'}`}>
            <div className="flex items-center gap-3 mb-4">
              {icon && (
                <div className="w-12 h-12 rounded-full bg-[#f8f9fc] flex items-center justify-center">
                  <img src={icon} alt="" className="w-6 h-6" />
                </div>
              )}
              <h3 className="text-xl font-medium text-[#1a2b3b]">{title}</h3>
            </div>
            <p className="text-[#1a2b3b]/70 text-base">{description}</p>
          </div>

          {imagePosition === 'right' && imageUrl && (
            <div className="w-[45%] h-[180px] rounded-2xl overflow-hidden">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const services = [
    {
      title: "UX & UI",
      description: "Crafting seamless, user-friendly interfaces that enhance engagement and usability.",
      imageUrl: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744295310/ui_u8heqw.jpg",
      icon: "https://api.iconify.design/ph:paint-brush.svg",
      imagePosition: 'left' as const
    },
    {
      title: "Custom Web Development",
      description: "Building high-performance, interactive websites using Framer's powerful design tools.",
      imageUrl: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744295313/web_dev_xopiwg.jpg",
      icon: "https://api.iconify.design/ph:code.svg",
      imagePosition: 'right' as const
    },
    {
      title: "Mobile Application Development",
      description: "Creating engaging web experiences that captivate and convert visitors.",
      imageUrl: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744295327/App_dev_uv6p3q.jpg",
      icon: "https://api.iconify.design/ph:device-mobile.svg",
      imagePosition: 'left' as const
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Transforming ideas into visually stunning designs that resonate with your brand.",
      imageUrl: "https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?uid=R194414996&ga=GA1.1.918206905.1743598900&semt=ais_hybrid&w=740",
      icon: "https://api.iconify.design/ph:paint-bucket.svg",
      imagePosition: 'right' as const
    },
    {
      title: "Digital Marketing & SEO Optimization",
      description: "Transforming ideas into visually stunning designs that resonate with your brand.",
      imageUrl: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744295350/SEO_brhfq0.jpg",
      icon: "https://api.iconify.design/ph:paint-bucket.svg",
      imagePosition: 'right' as const
    },
    {
      title: "Cybersecurity & Threat Protection",
      description: "Transforming ideas into visually stunning designs that resonate with your brand.",
      imageUrl: "https://res.cloudinary.com/dcaaaqm61/image/upload/v1744295334/cybersecurity_fflqwd.jpg",
      icon: "https://api.iconify.design/ph:paint-bucket.svg",
      imagePosition: 'right' as const
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-[#eef1f6]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <span className="text-sm font-medium text-[#1a2b3b]">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-[#1a2b3b]">
            Crafting Digital Excellence
          </h2>
          <p className="text-[#1a2b3b]/70 max-w-2xl mx-auto text-lg">
            Building smooth and engaging digital interactions that elevate user satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link
            href="/contact"
            className="bg-[#1f2937] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1f2937]/90 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Me
          </Link>
          <Link
            href="/projects"
            className="bg-white shadow-sm px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            See Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
