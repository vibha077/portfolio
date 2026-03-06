import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";
import { ArrowDown, Sparkles, Code2, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-[100px]" style={{ background: "hsl(250, 80%, 65%)" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-[120px]" style={{ background: "hsl(190, 90%, 55%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[80px]" style={{ background: "hsl(280, 70%, 60%)" }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(250, 80%, 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(250, 80%, 65%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-secondary/40 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="gradient-text relative">
                Vibha Patel
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-4 font-medium"
            >
              Final Year Computer Engineering Student
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
            >
              {["Web Developer", "UI/UX Learner", "React Enthusiast"].map((tag) => (
                <span key={tag} className="text-sm px-3 py-1 rounded-full bg-primary/10 text-accent border border-primary/20 font-medium">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-secondary-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              I build responsive, user-friendly applications using modern web technologies and continuously improve my UI/UX skills to create delightful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="glow-button text-primary-foreground font-semibold inline-flex items-center gap-2">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="group px-6 py-3 rounded-lg border border-border font-semibold text-foreground hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(250_80%_65%/0.2)] inline-flex items-center gap-2"
              >
                Contact Me
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "2+", label: "Internships" },
                { value: "5+", label: "Projects" },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 rounded-full border border-dashed border-accent/10"
            />

            {/* Floating icons */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card rounded-xl p-2.5 border border-border/50 shadow-lg z-20"
            >
              <Code2 className="w-5 h-5 text-accent" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 glass-card rounded-xl p-2.5 border border-border/50 shadow-lg z-20"
            >
              <Palette className="w-5 h-5 text-primary" />
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(250, 80%, 65%)" }} />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(190, 90%, 55%)" }} />

            {/* Photo container */}
            <div className="relative w-72 h-80 md:w-80 md:h-[24rem] rounded-3xl overflow-hidden shadow-2xl group">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[2px] z-10 pointer-events-none" style={{ background: "var(--gradient-primary)", mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "2px" }} />
              <img
                src={profileImg}
                alt="Vibha Patel - Computer Engineering Student and Web Developer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-4 md:-right-10 glass-card rounded-2xl px-5 py-3 border border-border/50 shadow-xl z-20"
            >
              <p className="text-xs text-muted-foreground">Focused on</p>
              <p className="text-sm font-bold gradient-text">React & UI/UX</p>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -top-5 -left-4 md:-left-10 glass-card rounded-2xl px-5 py-3 border border-border/50 shadow-xl z-20"
            >
              <p className="text-2xl font-bold gradient-text">2+</p>
              <p className="text-xs text-muted-foreground">Internships</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
