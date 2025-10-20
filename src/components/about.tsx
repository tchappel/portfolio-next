"use client";

import { motion } from "framer-motion";
import SkillPill from "./SkillPill";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "Git",
  "Responsive Design",
  "REST APIs",
  "GraphQL",
  "Framer Motion",
  "shadcn/ui",
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass p-8 rounded-2xl space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate Frontend-Focused Full Stack Developer with a
              keen eye for creating beautiful, intuitive user experiences. My
              expertise lies in building responsive, performant web applications
              using modern technologies. I love transforming complex problems
              into simple, elegant solutions that users enjoy interacting with.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new web
              technologies, contributing to open-source projects, or sharing my
              knowledge with the developer community. I believe in continuous
              learning and staying up-to-date with the latest industry trends.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <SkillPill key={skill} name={skill} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
