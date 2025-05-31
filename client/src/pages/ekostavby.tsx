import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Recycle, Droplets, TreePine, Home, Award } from "lucide-react";

export default function Ekostavby() {
  const services = [
    {
      icon: Home,
      title: "Pasivní domy",
      description: "Výstavba energeticky pasivních domů s minimální spotřebou energie.",
      features: ["Tepelná izolace", "Rekuperace vzduchu", "Kvalitní okna a dveře"]
    },
    {
      icon: TreePine,
      title: "Dřevostavby",
      description: "Ekologické stavění z obnovitelných přírodních materiálů.",
      features: ["Certifikované dřevo", "Přírodní izolace", "Zdravé bydlení"]
    },
    {
      icon: Droplets,
      title: "Hospodaření s vodou",
      description: "Systémy pro sběr a využití dešťové vody v domácnostech.",
      features: ["Retenční nádrže", "Závlahové systémy", "Úspora vody"]
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
              Ekostavby
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Udržitelné stavění pro budoucnost. Specializujeme se na ekologické stavební 
              materiály a energeticky efektivní řešení.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ekologické stavby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stavíme s ohledem na životní prostředí a budoucnost našich dětí.
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

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Výhody ekostaveb
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Leaf className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Šetrnost k přírodě</h3>
                    <p className="text-muted-foreground">
                      Používáme pouze certifikované a obnovitelné materiály s minimálním dopadem na životní prostředí.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Recycle className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Recyklovatelnost</h3>
                    <p className="text-muted-foreground">
                      Stavební materiály jsou navrženy tak, aby mohly být po skončení životnosti recyclovány.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Certifikace</h3>
                    <p className="text-muted-foreground">
                      Všechny naše ekostavby splňují přísné ekologické standardy a certifikace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Moderní ekologická dřevostavba" 
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
            Postavíme váš ekodom
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Kontaktujte nás pro konzultaci o ekologických stavebních řešeních.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 font-semibold text-lg"
            >
              Konzultace zdarma
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg"
            >
              Zavolat: +420 222 333 444
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}