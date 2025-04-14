import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PortfoyProjectPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Images */}
            <div className="space-y-6">
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289531/APP1_q5axfs.jpg"
                alt="E-commerce Dashboard"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289542/Screenshot_2025-04-10_182141_asxlqf.png"
                alt="E-commerce Features"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744292477/app3_wkwv1u.webp"
                alt="E-commerce Mobile View"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-serif">E-commerce Application</h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-medium">Project Overview</h2>
                <p className="text-gray-600">
                  A modern e-commerce platform that provides a seamless shopping experience for both customers and merchants. This full-featured application includes everything from product management to order processing and customer engagement tools.
                </p>

                <h2 className="text-2xl font-medium">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Product Catalog Management</li>
                  <li>Shopping Cart System</li>
                  <li>Secure Payment Processing</li>
                  <li>Order Management</li>
                  <li>Inventory Tracking</li>
                  <li>Customer Reviews and Ratings</li>
                  <li>Wishlist Management</li>
                </ul>

                <h2 className="text-2xl font-medium">Customer Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>User Profile Management</li>
                  <li>Order History and Tracking</li>
                  <li>Personalized Recommendations</li>
                  <li>Multiple Payment Options</li>
                  <li>Address Management</li>
                </ul>

                <h2 className="text-2xl font-medium">Admin Dashboard</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Sales Analytics</li>
                  <li>Inventory Management</li>
                  <li>Customer Management</li>
                  <li>Promotion and Discount Tools</li>
                  <li>Returns Processing</li>
                </ul>

                <h2 className="text-2xl font-medium">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "Redux",
                    "Express.js",
                    "Stripe",
                    "Firebase",
                    "AWS S3"
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