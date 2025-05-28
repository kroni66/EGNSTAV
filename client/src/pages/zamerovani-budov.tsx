import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Crosshair, Map, Ruler, Target, Camera, FileText } from "lucide-react";

export default function ZamerovaniBudov() {
  const services = [
    {
      icon: Crosshair,
      title: "Geodetické zaměření",
      description: "Přesné geodetické zaměření pozemků a staveb pomocí moderních přístrojů.",
      features: ["GPS měření", "Totální stanice", "Laserové skenování"]
    },
    {
      icon: Map,
      title: "Výškopisné zaměření",
      description: "Podrobné zaměření výškopisu terénu pro projektové a stavební účely.",
      features: ["Digitální model terénu", "Vrstevnicové plány", "Objemové výpočty"]
    },
    {
      icon: Ruler,
      title: "Zaměření interiérů",
      description: "Detailní zaměření vnitřních prostor pro rekonstrukce a projektování.",
      features: ["3D skenování", "Půdorysy", "Řezy a pohledy"]
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
              Zaměřování budov
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Profesionální geodetické a stavební zaměření s využitím nejmodernějších 
              technologií pro maximální přesnost výsledků.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Naše zaměřovací služby</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komplexní zaměřovací služby pro všechny fáze stavebního procesu.
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

      {/* Technology Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Moderní technologie
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Target className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Vysoká přesnost</h3>
                    <p className="text-muted-foreground">
                      Používáme nejmodernější geodetické přístroje s přesností na milimetry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Camera className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">3D skenování</h3>
                    <p className="text-muted-foreground">
                      Laserové 3D skenování pro komplexní digitalizaci objektů.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="w-8 h-8 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Digitální výstupy</h3>
                    <p className="text-muted-foreground">
                      Veškerá dokumentace v digitální podobě kompatibilní s CAD systémy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Geodetické zaměření" 
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
            Potřebujete zaměřit objekt?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Kontaktujte nás pro přesné geodetické zaměření vašeho projektu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 font-semibold text-lg"
            >
              Objednat zaměření
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg"
            >
              Zavolat: +420 555 666 777
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}