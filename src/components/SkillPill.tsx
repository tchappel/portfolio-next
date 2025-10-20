import { motion } from "framer-motion";

interface SkillPillProps {
  name: string;
  index: number;
}

const SkillPill = ({ name, index }: SkillPillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.08, y: -3 }}
      className="relative px-5 py-2.5 rounded-full text-sm font-medium cursor-default bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-accent/30 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20"
    >
      <span className="relative z-10">{name}</span>
    </motion.div>
  );
};

export default SkillPill;
