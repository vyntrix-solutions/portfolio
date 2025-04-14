import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

interface ProjectCardProps {
  title: string;
  image: string;
  image2: string;
  href: string;
}

const ProjectCard = ({ title, image, image2, href }: ProjectCardProps) => {
  return (
    <Link href={href} className="group block relative">
      <div className="relative rounded-xl overflow-hidden bg-white/5 shadow-sm transition-all duration-300 group-hover:shadow-md">
        <div className="aspect-video relative">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-xl" />
          <img
            src={image2}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-t-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 tracking-tight">
            Elegance in Every Pixel
            </h1>

            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                <img
                  src="https://ext.same-assets.com/1288700763/1101685872.png"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://ext.same-assets.com/1288700763/2467434706.png"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://ext.same-assets.com/1288700763/3781701715.png"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://ext.same-assets.com/1288700763/302853868.png"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-[#1e292d]/80 text-sm">
                Trusted by 5,000+ Audience worldwide
              </span>
            </div>

            <Link
              href="/contact"
              className="bg-[#1e292d] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1e292d]/90 transition-colors inline-flex items-center"
            >
              Contact Me
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <ProjectCard
              title="Fitness HUB"
              image="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744124058/Fitnesshub1_bcdpgq.jpg"
              image2="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744124492/fitnesshub2_gqaqrt.jpg"
              href="/projects/landeros"
            />

            <ProjectCard
              title="Health Care"
              image="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744228844/healthcare1_gn0pfk.webp"
              image2="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744228844/healthcare2_pdohqn.webp"
              href="/projects/alter"
            />

            <ProjectCard
              title="B2B CRM"
              image="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289240/CRM2_kkdfaf.png"
              image2="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289253/CRM3_ssrzlv.webp"
              href="/projects/crm"
            />

            <ProjectCard
              title="E-commerce Application"
              image="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289531/APP1_q5axfs.jpg"
              image2="https://res.cloudinary.com/dcaaaqm61/image/upload/v1744289542/Screenshot_2025-04-10_182141_asxlqf.png"
              href="/projects/portfoy"
            />
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#1e292d] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1e292d]/90 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
