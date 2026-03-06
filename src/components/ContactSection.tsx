import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "vibhapatel255@gmail.com", href: "mailto:vibhapatel255@gmail.com" },
  { icon: Phone, label: "7990155030", href: "tel:7990155030" },
  { icon: MapPin, label: "Ankleshwar, Gujarat", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/vibha-patel-b767332b0" },
  { icon: Github, label: "GitHub", href: "https://github.com/vibha077" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_dxv94y9",
        "template_j4pvz8l",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "YK7g5SdT0FqFUIdkY"
      );
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-14"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-secondary-foreground leading-relaxed mb-6">
              I'd love to hear from you! Whether it's a project opportunity, collaboration, or just a friendly hello — feel free to reach out.
            </p>
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
            <button type="submit" disabled={loading} className="glow-button text-primary-foreground font-semibold w-full flex items-center justify-center gap-2 disabled:opacity-60">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
