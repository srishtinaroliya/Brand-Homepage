import { motion } from "framer-motion";

export function About() {
  const stats = [
    { value: "500+", label: "Practitioners Trained" },
    { value: "12", label: "Industry Partners" },
    { value: "3", label: "University Partnerships" }
  ];

  return (
    <section id="about" className="py-24 bg-background relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About IDR</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Bridging the gap between theory and execution.
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                The Institute of Digital Risk is an industry-led training and deployment institute dedicated to closing the skills gap in digital, cyber, and technology risk roles within regulated environments.
              </p>
              <p>
                We collaborate directly with leading UK universities and global enterprises to provide hands-on industry projects, ensuring our practitioners are battle-tested and ready to navigate high-consequence threat landscapes from day one.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-primary/80 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
