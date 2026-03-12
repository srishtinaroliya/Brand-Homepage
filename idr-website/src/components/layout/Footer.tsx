import { Logo } from "@/components/Logo";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center gap-3 cursor-pointer group mb-4"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Logo className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold tracking-tight text-white">
                Institute of Digital Risk
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Advancing the Future of Digital Risk. Bridging academic insight with real-world industry projects.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Community', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@instituteofdigitalrisk.com</li>
              <li>London, United Kingdom</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Institute of Digital Risk. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
