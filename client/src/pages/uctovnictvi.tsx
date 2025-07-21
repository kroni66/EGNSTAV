import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calculator, FileText, TrendingUp, PieChart, Shield, Clock } from "lucide-react";

export default function Uctovnictvi() {
  const services = [
    {
      icon: Calculator,
      title: "Vedení účetnictví",
      description: "Kompletní vedení účetnictví pro stavební firmy a živnostníky v oboru.",
      features: ["Podvojné účetnictví", "Daňová evidence", "Mzdové účetnictví"]
    },
    {
      icon: FileText,
      title: "Daňové poradenství",
      description: "Optimalizace daňové zátěže a poradenství v oblasti daní a odvodů.",
      features: ["Daňová přiznání", "DPH", "Silniční daň"]
    },
    {
      icon: TrendingUp,
      title: "Finanční analýzy",
      description: "Analýza hospodářských výsledků a návrhy na zlepšení efektivity.",
      features: ["Cash flow", "Rentabilita projektů", "Finanční plánování"]
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
              Účetnictví
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Profesionální účetní služby pro stavební společnosti. Specializujeme se 
              na specifika stavebního odvětví a daňovou optimalizaci.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Účetní služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komplexní účetní agenda přizpůsobená potřebám stavebních firem.
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

      {/* Advantages Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Výhody našich služeb
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <PieChart className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Specializace na stavebnictví</h3>
                    <p className="text-muted-foreground">
                      Důkladná znalost specifik stavebního oboru a souvisejících daňových záležitostí.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Důvěryhodnost</h3>
                    <p className="text-muted-foreground">
                      Certifikovaní účetní s dlouholetými zkušenostmi a profesní odpovědností.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Včasnost</h3>
                    <p className="text-muted-foreground">
                      Dodržujeme všechny termíny pro podání přiznání a hlášení státním orgánům.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Účetnictví" 
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
            Svěřte nám své účetnictví
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Kontaktujte nás pro konzultaci a návrh účetních služeb na míru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 font-semibold text-lg"
            >
              Nezávazná konzultace
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