import { motion } from "framer-motion";
import { Globe, Code, Shield, Palette, ArrowRightLeft } from "lucide-react";

const items = [
  { icon: Globe, label: "Build responsive websites" },
  { icon: Code, label: "Create modern React applications" },
  { icon: Shield, label: "Implement authentication systems" },
  { icon: Palette, label: "Design clean, user-friendly interfaces" },
  { icon: ArrowRightLeft, label: "Convert UI designs into functional web apps" },
];

const WhatICanDoSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-14"
        >
          What I <span className="gradient-text">Can Do</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card rounded-xl p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/15">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatICanDoSection;
