import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Event Management System",
    description:
      "A web application that helps users create and manage events easily. Users can add new events with details like title, date, and location, as well as edit or delete events and view all events in a list.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    features: ["CRUD operations", "Structured components", "Event listing", "Edit & delete events"],
    github: "https://github.com/vibha077/Event-management",
  },
  {
    title: "React CRUD App with Redux Toolkit",
    description:
      "A full CRUD web application with protected routes, authentication, and clean state management using Redux Toolkit.",
    tech: ["React", "Redux Toolkit", "Hooks"],
    features: ["Protected routes", "Authentication", "Modern UI", "State management"],
    github: "https://github.com/vibha077",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-14"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col transition-shadow hover:shadow-[0_0_30px_hsl(250_80%_65%/0.15)]"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{proj.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-accent font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-1 mb-6 flex-1">
                {proj.features.map((f, fi) => (
                  <li key={fi} className="text-sm text-secondary-foreground flex gap-2">
                    <span className="text-accent">✦</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
