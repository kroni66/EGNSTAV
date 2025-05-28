import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, CheckCircle, AlertTriangle, FileCheck, Clock } from "lucide-react";

export default function RevizeElektriny() {
  const services = [
    {
      icon: CheckCircle,
      title: "Periodické revize",
      description: "Pravidelné kontroly elektrických instalací podle platných norem a předpisů.",
      features: ["Roční revize", "Pětileté revize", "Mimořádné revize"]
    },
    {
      icon: Shield,
      title: "Bezpečnostní kontroly",
      description: "Kontrola dodržení bezpečnostních předpisů a funkčnosti ochranných prvků.",
      features: ["Proudové chrániče", "Uzemnění", "Přepěťové ochrany"]
    },
    {
      icon: FileCheck,
      title: "Protokoly a certifikáty",
      description: "Vystavení revizních zpráv a certifikátů o bezpečnosti elektrických zařízení.",
      features: ["Revizní zprávy", "Certifikáty bezpečnosti", "Doporučení pro opravu"]
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
              Revize elektřiny
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Profesionální revize elektrických instalací pro zajištění bezpečnosti 
              a dodržení platných norem a předpisů.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Revizní služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komplexní kontroly elektrických instalací pro vaši bezpečnost.
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

      {/* Why Revisions Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Proč jsou revize důležité
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Bezpečnost</h3>
                    <p className="text-muted-foreground">
                      Pravidelné revize předcházejí úrazům elektrickým proudem a požárům.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Legislativa</h3>
                    <p className="text-muted-foreground">
                      Povinné revize podle vyhlášky č. 50/2012 Sb. a ČSN 33 1500.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Včasná prevence</h3>
                    <p className="text-muted-foreground">
                      Odhalíme potenciální problémy dříve, než způsobí vážné škody.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Revize elektroinstalace" 
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
            Potřebujete revizi elektroinstalace?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Objednejte si profesionální revizi u autorizovaných techniků.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 font-semibold text-lg"
            >
              Objednat revizi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg"
            >
              Zavolat: +420 111 222 333
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}