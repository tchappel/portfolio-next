import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, demoUrl, githubUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden p-6 md:p-8"
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Content Section */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-muted-foreground text-lg">{description}</p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            {demoUrl && (
              <Button variant="default" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
