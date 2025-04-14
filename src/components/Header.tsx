"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${isScrolled ? 'bg-[#e2e5ec]/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl italic text-[#1e292d]">
          Vyntrix 
        </Link>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center mr-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            <span className="text-sm text-[#1e292d] font-light">available for work</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-[#1e292d] hover:text-[#1e292d]/80 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-[#1e292d] hover:text-[#1e292d]/80 transition-colors">
              Projects
            </Link>
            <Link href="/#services" className="text-[#1e292d] hover:text-[#1e292d]/80 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-[#1e292d] hover:text-[#1e292d]/80 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e292d] hover:text-[#1e292d]/80 transition-colors"
            >
              <img
                src="https://ext.same-assets.com/141559467/3783633550.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.instagram.com/vyntrix_solutions?igsh=MWowN3FkNDJ5YjlsZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e292d] hover:text-[#1e292d]/80 transition-colors"
            >
              <img
                src="https://ext.same-assets.com/141559467/2563901416.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/vyntrix-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e292d] hover:text-[#1e292d]/80 transition-colors"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-logo-icon-download-in-svg-png-gif-file-formats--business-finance-office-social-media-pack-logos-icons-1466165.png?f=webp&w=512"
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
