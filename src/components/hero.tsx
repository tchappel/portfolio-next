"use client";

import heroBackground from "@/assets/hero-bg-modern-dev-setup.jpg";
import { DELAY, DISTANCE, DURATION } from "@/lib/motion/constants";
import { fadeInUp } from "@/lib/motion/variants";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image Layer */}
      <Image
        src={heroBackground}
        alt="Hero background"
        fill
        className="object-cover"
        priority
        quality={75}
      />

      {/* Overlay */}

      {/* Content */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/80 z-[1]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          <motion.h1
            variants={fadeInUp({
              distance: DISTANCE.sm,
              duration: DURATION.slow,
              delay: DELAY.xs,
            })}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold"
          >
            Hello, I&apos;m <span className="gradient-text">Thomas</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp({
              distance: DISTANCE.sm,
              duration: DURATION.slow,
              delay: DELAY.sm,
            })}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Frontend-Focused Full Stack Developer
          </motion.p>

          <motion.div
            variants={fadeInUp({
              distance: DISTANCE.sm,
              duration: DURATION.slow,
              delay: DELAY.md,
            })}
            initial="hidden"
            animate="visible"
            className="pt-4"
          >
            <a
              href="#about"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
