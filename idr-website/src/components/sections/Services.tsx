import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, ShieldCheck, ChevronRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Academy",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      description: "Training programmes, bootcamps, and structured learning pathways for students and professionals in cyber and digital risk."
    },
    {
      title: "Innovation & Incubation",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      description: "Developing IP, future risk models, and frameworks around AI governance and emerging technology threats."
    },
    {
      title: "Advisory Services",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      description: "Helping organisations implement robust risk frameworks including NIST, ISO 27001, and NIS2 compliance."
    }
  ];

  const pipeline = ["Train", "Hire", "Innovate", "Deploy"];

  return (
    <section id="services" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Model</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive Risk Solutions</h3>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 hover:shadow-[0_10px_30px_-15px_rgba(249,115,22,0.2)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pipeline / Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background border border-border rounded-3xl p-8 md:p-12"
        >
          <h4 className="text-center text-lg font-semibold text-white mb-10">The IDR Talent Pipeline</h4>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
            
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-border -translate-y-1/2 z-0" />

            {pipeline.map((step, index) => (
              <div key={step} className="flex flex-col md:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold text-lg shadow-[0_0_15px_rgba(249,115,22,0.2)] mb-3">
                    0{index + 1}
                  </div>
                  <span className="font-semibold text-white tracking-wide">{step}</span>
                </div>
                
                {index < pipeline.length - 1 && (
                  <div className="md:hidden my-2 text-primary/50">
                    <ChevronRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
