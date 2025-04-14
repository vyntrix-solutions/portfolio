"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-[#e2e5ec] text-[#1e292d]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} vyntrixsolutions. All rights reserved.
        </div>

        {/* <div className="flex items-center space-x-6 text-sm">
          <span>Made by <a href="https://x.com/framebase_" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1e292d]/80 transition-colors">Framebase</a></span>
          <span>Built in <a href="https://www.framer.com/?via=nb12" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1e292d]/80 transition-colors">Framer</a></span>
        </div> */}
      </div>
    </footer>
  );
}
