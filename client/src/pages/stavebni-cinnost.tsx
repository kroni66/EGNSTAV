import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, Building, Hammer, Shield, Clock, Users } from "lucide-react";

export default function StavebniCinnost() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const services = [
    {
      icon: Home,
      title: "Rodinné domy",
      description: "Kompletní výstavba rodinných domů na klíč včetně projektové dokumentace a stavebního povolení.",
      features: ["Zděné konstrukce", "Dřevostavby", "Nízkoenergetické domy"]
    },
    {
      icon: Building,
      title: "Průmyslové objekty",
      description: "Stavba skladů, výrobních hal a komerčních objektů s využitím moderních technologií.",
      features: ["Ocelové konstrukce", "Betonové prefabrikáty", "Atypické konstrukce"]
    },
    {
      icon: Hammer,
      title: "Rekonstrukce",
      description: "Komplexní rekonstrukce budov s důrazem na energetickou efektivitu a moderní design.",
      features: ["Zateplení budov", "Výměna oken", "Modernizace instalací"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-bg pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Stavební činnost
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Komplexní stavební služby od návrhu až po dokončení. Realizujeme projekty 
              všech velikostí s důrazem na kvalitu, termíny a spokojenost klientů.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Naše služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poskytujeme kompletní stavební služby s využitím moderních technologií a materiálů.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-hover border-border bg-card">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Proč si vybrat EGN STAVBY
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Garantovaná kvalita</h3>
                    <p className="text-muted-foreground">
                      Používáme pouze certifikované materiály a dodržujeme všechny stavební normy a předpisy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Dodržení termínů</h3>
                    <p className="text-muted-foreground">
                      Plánujeme každý projekt detailně a dodržujeme domluvené termíny realizace.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Zkušený tým</h3>
                    <p className="text-muted-foreground">
                      Náš tým tvoří kvalifikovaní odborníci s dlouholetými zkušenostmi v oboru.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Stavební tým" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Máte stavební projekt?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 font-semibold text-lg"
            >
              Získat nabídku
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg"
            >
              Zavolat: +420 777 069 363
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}