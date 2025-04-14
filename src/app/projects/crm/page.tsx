import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CrmProjectPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Images */}
            <div className="space-y-6">
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289240/CRM2_kkdfaf.png"
                alt="B2B CRM Dashboard"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289253/CRM3_ssrzlv.webp"
                alt="B2B CRM Features"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289240/CRM_khxxnj.png"
                alt="B2B CRM Analytics"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-serif">B2B CRM</h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Project Overview</h2>
                <p className="text-gray-600">
                  A powerful B2B Customer Relationship Management system designed to optimize business relationships, streamline sales processes, and enhance customer engagement. This platform provides comprehensive tools for managing business clients, leads, and partnerships.
                </p>

                <h2 className="text-2xl font-medium">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Lead Management and Scoring</li>
                  <li>Sales Pipeline Tracking</li>
                  <li>Account Management</li>
                  <li>Quote and Proposal Generation</li>
                  <li>Contract Management</li>
                  <li>Sales Analytics and Forecasting</li>
                  <li>Email Marketing Integration</li>
                </ul>

                <h2 className="text-2xl font-medium">Sales Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Deal Tracking and Management</li>
                  <li>Sales Team Performance Metrics</li>
                  <li>Territory Management</li>
                  <li>Commission Calculation</li>
                  <li>Meeting Scheduler</li>
                </ul>

                <h2 className="text-2xl font-medium">Administrative Tools</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>User Role Management</li>
                  <li>Workflow Automation</li>
                  <li>Custom Report Builder</li>
                  <li>Document Management</li>
                  <li>Integration Management</li>
                </ul>

                <h2 className="text-2xl font-medium">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "TailwindCSS",
                    "Redux",
                    "Express.js",
                    "Socket.io",
                    "AWS Services"
                  ].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}