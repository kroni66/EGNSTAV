import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "wouter";
import logoPath from "@assets/EGN_stavby.webp";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <img
                src={logoPath}
                alt="EGN STAVBY s.r.o."
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-2 text-sm font-medium cursor-pointer">
                  Domů
                </span>
              </Link>
              
              <Link href="/stavebni-cinnost">
                <span className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-2 text-sm font-medium cursor-pointer">
                  Stavební činnost
                </span>
              </Link>
              
              <Link href="/autodoprava">
                <span className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-2 text-sm font-medium cursor-pointer">
                  Autodoprava
                </span>
              </Link>
              
              <Link href="/energetika">
                <span className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-2 text-sm font-medium cursor-pointer">
                  Energetika
                </span>
              </Link>
              
              <Link href="/zamerovani-budov">
                <span className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-2 text-sm font-medium cursor-pointer">
                  Zaměřování
                </span>
              </Link>
              
              <Link href="/ekostavby">
                <span className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-2 text-sm font-medium cursor-pointer">
                  Ekostavby
                </span>
              </Link>
              
              <Link href="/revize-elektriny">
                <span className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-2 text-sm font-medium cursor-pointer">
                  Revize
                </span>
              </Link>
              
              <Link href="/uctovnictvi">
                <span className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-2 text-sm font-medium cursor-pointer">
                  Účetnictví
                </span>
              </Link>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-accent ml-2"
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
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
