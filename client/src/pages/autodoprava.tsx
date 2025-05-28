import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Truck, Package, Clock, MapPin, Shield, Users } from "lucide-react";

export default function Autodoprava() {
  const services = [
    {
      icon: Truck,
      title: "Nákladní doprava",
      description: "Přeprava stavebních materiálů a komponentů na staveniště s vlastním vozovým parkem.",
      features: ["Nákladní vozidla do 40t", "Nakládací hydraulická ruka", "Rychlé dodání materiálu"]
    },
    {
      icon: Package,
      title: "Speciální přeprava",
      description: "Přeprava nadrozměrných a těžkých stavebních komponentů s potřebným povolením.",
      features: ["Nadrozměrný náklad", "Těžká mechanizace", "Doprovodná vozidla"]
    },
    {
      icon: MapPin,
      title: "Místní rozvoz",
      description: "Rychlé dodání materiálu v rámci města a okolí s možností časové koordinace.",
      features: ["Expresní dodání", "Časové okno", "GPS tracking"]
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
              Autodoprava
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Spolehlivé dopravní služby pro stavebnictví. Zajistíme rychlé a bezpečné 
              dodání materiálu přímo na vaše staveniště.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Naše dopravní služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moderní vozový park a zkušení řidiči pro všechny typy stavebních přeprav.
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

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Proč naše autodoprava
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Dodržení termínů</h3>
                    <p className="text-muted-foreground">
                      Garantujeme včasné dodání materiálu podle domluvených termínů a časových oken.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Pojištěná přeprava</h3>
                    <p className="text-muted-foreground">
                      Veškerý převážený materiál je pojištěn proti poškození nebo ztrátě během přepravy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Zkušení řidiči</h3>
                    <p className="text-muted-foreground">
                      Náš tým tvoří profesionální řidiči s dlouholetými zkušenostmi s přepravou stavebního materiálu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Nákladní vozidlo" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Potřebujete přepravu materiálu?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Kontaktujte nás pro cenovou nabídku dopravních služeb.
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
              Zavolat: +420 987 654 321
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}