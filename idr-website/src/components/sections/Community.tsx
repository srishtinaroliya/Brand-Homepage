import { motion } from "framer-motion";
import { Users, Briefcase, Award } from "lucide-react";

export function Community() {
  const personas = [
    {
      title: "Students & Graduates",
      icon: <Users className="w-6 h-6 text-primary" />,
      desc: "University talent seeking specialized knowledge to break into the tech risk industry with practical experience."
    },
    {
      title: "Early-Career Professionals",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      desc: "Individuals pivoting into cyber risk, looking to formalize their knowledge with industry-recognized frameworks."
    },
    {
      title: "Senior Practitioners",
      icon: <Award className="w-6 h-6 text-primary" />,
      desc: "Leaders in financial services and critical infrastructure aiming to stay ahead of emerging AI & digital threats."
    }
  ];

  return (
    <section id="community" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Who We Serve</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A community of future-ready risk leaders.
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our community is built for individuals and organizations operating in high-stakes environments. Whether you're just starting your journey or looking to upskill your existing teams, IDR provides the ecosystem to thrive in digital and cyber risk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {personas.map((persona, index) => (
              <div 
                key={persona.title}
                className="flex gap-6 bg-card border border-border p-6 rounded-2xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {persona.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{persona.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{persona.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
