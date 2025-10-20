"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution built with React, TypeScript, and Stripe integration for seamless payments.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates using Supabase and React Query.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A beautiful, responsive portfolio template with dark mode and smooth animations using Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
