import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.E. Computer Engineering", institution: "UPL University of Sustainable Technology", year: "2022 – 2026", score: "SPI: 9.10/10" },
  { degree: "HSC (12th)", institution: "Higher Secondary Education", year: "2021", score: "81.17%" },
  { degree: "SSC (10th)", institution: "Secondary School", year: "2019", score: "73.16%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-12"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 md:p-10 mb-12 space-y-4 text-secondary-foreground leading-relaxed"
        >
          <p>I'm a final-year B.E. Computer Engineering student (2022–2026) from UPL University of Sustainable Technology with a strong foundation in programming and web development.</p>
          <p>My interests lie in full-stack development (MERN stack), responsive design, authentication systems, and creating clean, intuitive user interfaces.</p>
          <p><strong className="text-foreground">Strengths:</strong> Quick learner, hardworking, strong problem-solving skills, positive attitude, and I always complete work on time.</p>
          <p><strong className="text-foreground">Growth area:</strong> I tend to focus on perfection, but I'm actively improving my time management skills.</p>
          <p><strong className="text-foreground">Short-term goal:</strong> Start my career in a good IT company to strengthen my technical and UI/UX skills.</p>
          <p><strong className="text-foreground">Long-term goal:</strong> Become a skilled software developer and achieve meaningful personal and professional growth.</p>
        </motion.div>

        {/* Education Timeline */}
        <h3 className="text-2xl font-bold font-display text-center mb-8">
          <span className="gradient-text">Education</span>
        </h3>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {education.map((edu, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 mb-10 ${
                i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
              }`}
            >
              <div className="flex-1" />
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border z-10">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 ml-16 md:ml-0">
                <div className="glass-card rounded-xl p-5">
                  <p className="text-xs text-accent font-semibold mb-1">{edu.year}</p>
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm font-medium text-accent mt-1">{edu.score}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
