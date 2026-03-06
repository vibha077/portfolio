import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Intern",
    company: "Arena Animation",
    period: "Jan 2024 – 1 week",
    points: [
      "Worked on animation and editing.",
      "Developed interactive UI components using React.js.",
      "Collaborated with senior developers to enhance user experience.",
    ],
  },
  {
    role: "React Intern",
    company: "Sparkstoide",
    period: "Feb 2024 – March 2024",
    points: [
      "Worked on React-based applications.",
      "Gained exposure to animation tools and UI improvements.",
      "Participated in collaborative development and performance optimization.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-14"
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative pl-16 mb-12"
            >
              <div className="absolute left-6 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border z-10">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <div className="glass-card rounded-xl p-6">
                <p className="text-xs font-semibold text-accent mb-1">{exp.period}</p>
                <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                <ul className="space-y-1">
                  {exp.points.map((p, pi) => (
                    <li key={pi} className="text-sm text-secondary-foreground flex gap-2">
                      <span className="text-accent mt-1">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
