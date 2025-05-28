import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logoPath from "@assets/EGN_stavby.webp";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logoPath} 
              alt="EGN STAVBY s.r.o." 
              className="h-12 w-auto"
            />
            <p className="text-muted leading-relaxed">
              Moderní stavební společnost s důrazem na kvalitu, 
              spolehlivost a spokojenost klientů.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary hover:text-background" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary hover:text-background" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary hover:text-background" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Služby</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  Rodinné domy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  Průmyslové objekty
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  Rekonstrukce
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  Infrastruktura
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  Poradenství
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-muted hover:text-primary transition-colors text-left"
                >
                  O nás
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="text-muted hover:text-primary transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-muted hover:text-primary transition-colors text-left"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  Kariéra
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Kontakt</h3>
            <div className="space-y-2 text-muted">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">Stavební 123, Praha 1</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">+420 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">info@egn-stav.cz</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted text-sm">
            © 2024 EGN-STAV.CZ. Všechna práva vyhrazena.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted hover:text-primary text-sm transition-colors">
              Ochrana osobních údajů
            </a>
            <a href="#" className="text-muted hover:text-primary text-sm transition-colors">
              Podmínky použití
            </a>
            <a href="#" className="text-muted hover:text-primary text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
