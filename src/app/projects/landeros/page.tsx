import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LanderosProjectPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Images */}
            <div className="space-y-6">
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744124058/Fitnesshub1_bcdpgq.jpg"
                alt="Fitness HUB Dashboard"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744124492/fitnesshub2_gqaqrt.jpg"
                alt="Fitness HUB Features"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744291382/fitnesshub4_t2orks.webp"
                alt="Fitness HUB Mobile View"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-serif">Fitness HUB</h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Project Overview</h2>
                <p className="text-gray-600">
                  Fitness HUB is an all-in-one gym management and customer relationship management (CRM) system. It streamlines gym operations while providing members with a seamless fitness tracking experience. The platform bridges the gap between gym administrators, trainers, and members through an intuitive interface.
                </p>

                <h2 className="text-2xl font-medium">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Interactive workout dashboard with progress tracking</li>
                  <li>Personalized training programs and schedules</li>
                  <li>Real-time exercise tracking and analytics</li>
                  <li>Nutrition planning and meal tracking</li>
                  <li>Community features and trainer connections</li>
                  <li>Membership management and billing system</li>
                  <li>Automated attendance tracking</li>
                  <li>Staff scheduling and payroll management</li>
                  <li>Equipment maintenance tracking</li>
                  <li>Performance analytics and reports</li>
                </ul>

                <h2 className="text-2xl font-medium">Admin Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Member database management</li>
                  <li>Subscription and payment tracking</li>
                  <li>Lead management and follow-ups</li>
                  <li>Automated email marketing campaigns</li>
                  <li>Revenue and expense tracking</li>
                </ul>

                <h2 className="text-2xl font-medium">Member Portal</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Personal dashboard with fitness metrics</li>
                  <li>Class booking system</li>
                  <li>Digital locker management</li>
                  <li>Workout history and achievement tracking</li>
                  <li>Direct messaging with trainers</li>
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
                    "JWT Auth"
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