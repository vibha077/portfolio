import { motion } from "framer-motion";
import {
  Code, FileCode, Paintbrush, Cpu, GitBranch, Layout,
  Shield, Database, Figma, Palette, Layers, Users, MessageSquare,
  Monitor, FileText, Brain
} from "lucide-react";

const categories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: Paintbrush },
      { name: "JavaScript", icon: Code },
      { name: "React.js", icon: Code },
      { name: "SQL", icon: Database },
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Responsive Design", icon: Layout },
      { name: "Auth Systems", icon: Shield },
    ],
  },
  {
    title: "UI/UX Basics",
    skills: [
      { name: "Wireframing", icon: Figma },
      { name: "Basic Prototyping", icon: Layers },
      { name: "User-Centered Design", icon: Users },
      { name: "Color Theory", icon: Palette },
      { name: "Layout & Spacing", icon: Layout },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "DSA & Logic", icon: Brain },
      { name: "Documentation", icon: FileText },
      { name: "Windows & Linux", icon: Monitor },
      { name: "Communication", icon: MessageSquare },
      { name: "Teamwork", icon: Users },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-14"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <h3 className="text-xl font-semibold font-display text-center mb-6 text-accent">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.05 }}
                      whileHover={{ y: -4, boxShadow: "0 0 25px hsl(250 80% 65% / 0.2)" }}
                      className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 text-center cursor-default transition-colors"
                    >
                      <Icon className="w-6 h-6 text-accent" />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
