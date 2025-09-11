"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    category: "E-commerce Platform",
    description:
      "A scalable and performant e-commerce platform built with Next.js and integrated with a headless CMS. Features real-time inventory updates and a seamless checkout experience.",
    imageUrl: "/project-thumb-1.svg",
    tags: ["Next.js", "TypeScript", "Stripe", "GraphQL", "Vercel"],
    link: "#",
  },
  {
    id: 2,
    title: "Project Beta",
    category: "SaaS Dashboard",
    description:
      "An advanced data analytics and visualization dashboard for businesses. Provides deep insights into user behavior, sales metrics, and performance tracking.",
    imageUrl: "/project-thumb-2.svg",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "Mobile Application",
    description:
      "A cross-platform mobile app for a social networking service, designed to connect people with shared interests. Built with React Native for a consistent experience on iOS and Android.",
    imageUrl: "/project-thumb-3.svg",
    tags: ["React Native", "Firebase", "Redux", "CI/CD"],
    link: "#",
  },
];

const PortfolioSection = () => {
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="portfolio" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="max-w-3xl mx-auto text-lg text-white/70">
            We&apos;ve partnered with amazing clients to build products that solve
            real-world problems. Here&apos;s a selection of our proudest work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Project List */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 lg:col-span-1"
          >
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  selectedId === project.id
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-transparent hover:bg-white/10"
                } border backdrop-blur-sm`}
              >
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-white/60">{project.category}</p>
              </button>
            ))}
          </motion.div>

          {/* Project Details */}
          <div className="lg:col-span-2 sticky top-28">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm"
                >
                  <motion.div
                    className="mb-6 rounded-lg overflow-hidden"
                    layoutId={`project-image-${selectedProject.id}`}
                  >
                    <Image
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/70 mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={selectedProject.link}
                    className="inline-flex items-center font-medium text-white group"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;