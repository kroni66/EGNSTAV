import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">EGN-STAV</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Domů
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Služby
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                O nás
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-accent"
              >
                Kontakt
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Domů
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Služby
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              O nás
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-base font-medium bg-primary text-primary-foreground rounded-lg m-2 w-auto"
            >
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
