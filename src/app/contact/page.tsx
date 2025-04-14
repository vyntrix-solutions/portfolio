"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Message: ${formData.message}`
    );

    // Open default email client with pre-filled content
    window.location.href = `mailto:vyntrixsolutions@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-[#e2e5ec]/80 rounded-full px-4 py-2 mb-4">
              <img
                src="https://ext.same-assets.com/141559467/3130387964.svg"
                alt="Contact"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm font-medium">Contact</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
              Reach Us Anytime
            </h1>
            <p className="text-[#1e292d]/80 max-w-2xl mx-auto">
              Have questions or need help? We're here for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start mb-4">
                <img
                  src="https://ext.same-assets.com/141559467/15865303.svg"
                  alt="Email"
                  className="w-6 h-6 mr-4 mt-1"
                />
                <div>
                  <h3 className="text-xl font-medium mb-2">Email Me</h3>
                  <p className="text-[#1e292d]/80 mb-3">
                    Feel free to email me if you have any questions or need more details!
                  </p>
                  <a
                    href="vyntrixsolutions@gmail.com"
                    className="font-medium hover:underline"
                  >
                    vyntrixsolutions@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start mb-4">
                <img
                  src="https://ext.same-assets.com/141559467/3067542398.svg"
                  alt="Call"
                  className="w-6 h-6 mr-4 mt-1"
                />
                <div>
                  <h3 className="text-xl font-medium mb-2">Prefer to Call?</h3>
                  <p className="text-[#1e292d]/80 mb-3">
                    Feel free to book a call if that's more convenient and easier for you
                  </p>
                  <a
                    href="https://calendly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    Book a call
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm md:col-span-2">
              <div className="flex items-start mb-6">
                <img
                  src="https://ext.same-assets.com/141559467/3881503158.svg"
                  alt="Message"
                  className="w-6 h-6 mr-4 mt-1"
                />
                <div>
                  <h3 className="text-xl font-medium mb-2">I'd love to help! Let me know how</h3>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#e2e5ec]/40 border border-[#e2e5ec] focus:outline-none focus:ring-2 focus:ring-[#1e292d]/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#e2e5ec]/40 border border-[#e2e5ec] focus:outline-none focus:ring-2 focus:ring-[#1e292d]/20"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject Of Interest
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#e2e5ec]/40 border border-[#e2e5ec] focus:outline-none focus:ring-2 focus:ring-[#1e292d]/20"
                    placeholder="Regarding Project"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    How may we assist you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-[#e2e5ec]/40 border border-[#e2e5ec] focus:outline-none focus:ring-2 focus:ring-[#1e292d]/20"
                    placeholder="Give us more info..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e292d] text-white px-6 py-4 rounded-md font-medium hover:bg-[#1e292d]/90 transition-colors"
                >
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
