import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Interest Registered Successfully",
      description: "Thank you! Our team will be in touch shortly.",
      variant: "default",
    });
    
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto bg-background border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative abstract shape */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[50px] pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Register Your Interest</h3>
            <p className="text-muted-foreground">
              Join our network of practitioners, partners, and academic institutions.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Full Name</label>
                <input 
                  {...register("name")}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Email Address</label>
                <input 
                  {...register("email")}
                  type="email"
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Message (Optional)</label>
              <textarea 
                {...register("message")}
                rows={4}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tell us about your goals or organization..."
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? "Submitting..." : "Submit Interest"}
              {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-border/50 text-center relative z-10">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Prefer direct email? Reach us at <a href="mailto:hello@instituteofdigitalrisk.com" className="text-primary hover:underline">hello@instituteofdigitalrisk.com</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
