import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AlterProjectPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Images */}
            <div className="space-y-6">
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744228844/healthcare1_gn0pfk.webp"
                alt="Health Care Dashboard"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744228844/healthcare2_pdohqn.webp"
                alt="Health Care Features"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744291787/healthcare4_dkyep4.png"
                alt="Health Care Mobile Interface"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-serif">Health Care</h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Project Overview</h2>
                <p className="text-gray-600">
                  A comprehensive healthcare management system designed to streamline patient care, medical records management, and hospital operations. This platform connects healthcare providers, patients, and administrators through a unified digital interface.
                </p>

                <h2 className="text-2xl font-medium">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Electronic Health Records (EHR) Management</li>
                  <li>Patient Appointment Scheduling</li>
                  <li>Telemedicine Integration</li>
                  <li>Prescription Management</li>
                  <li>Lab Results Tracking</li>
                  <li>Billing and Insurance Processing</li>
                  <li>Medical Inventory Management</li>
                </ul>

                <h2 className="text-2xl font-medium">Provider Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Patient History Access</li>
                  <li>Digital Prescription Writing</li>
                  <li>Treatment Plan Management</li>
                  <li>Collaborative Care Tools</li>
                  <li>Medical Imaging Integration</li>
                </ul>

                <h2 className="text-2xl font-medium">Patient Portal</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Online Appointment Booking</li>
                  <li>Medical Records Access</li>
                  <li>Prescription Refill Requests</li>
                  <li>Secure Messaging with Providers</li>
                  <li>Test Results Viewing</li>
                </ul>

                <h2 className="text-2xl font-medium">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "TailwindCSS",
                    "Redux",
                    "Express.js",
                    "HIPAA Compliance",
                    "HL7 Integration"
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