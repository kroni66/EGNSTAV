import { Card, CardContent } from "@/components/ui/card";
import { Home, Factory, Wrench, TrafficCone, Leaf, HandHeart, Check } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Rodinné domy",
    description: "Výstavba rodinných domů na klíč. Od základů po střechu, včetně všech instalací a dokončovacích prací.",
    features: [
      "Projektová dokumentace",
      "Stavební povolení",
      "Kompletní realizace"
    ]
  },
  {
    icon: Factory,
    title: "Průmyslové objekty",
    description: "Stavba skladů, výrobních hal a komerčních objektů. Specializujeme se na velkoplošné konstrukce.",
    features: [
      "Ocelové konstrukce",
      "Betonové práce",
      "Technické instalace"
    ]
  },
  {
    icon: Wrench,
    title: "Rekonstrukce",
    description: "Kompletní rekonstrukce bytů, domů a komerčních prostor. Moderní design s ohledem na energetickou úsporu.",
    features: [
      "Interiérové úpravy",
      "Zateplení budov",
      "Výměna oken"
    ]
  },
  {
    icon: TrafficCone,
    title: "Infrastruktura",
    description: "Výstavba a rekonstrukce komunikací, chodníků, parkovišť a další infrastrukturní projekty.",
    features: [
      "Asfaltové práce",
      "Betonové plochy",
      "Veřejné osvětlení"
    ]
  },
  {
    icon: Leaf,
    title: "Ekologické stavby",
    description: "Pasivní domy a ekologické stavby s důrazem na udržitelnost a energetickou efektivitu.",
    features: [
      "Solární panely",
      "Tepelná čerpadla",
      "Zelené střechy"
    ]
  },
  {
    icon: HandHeart,
    title: "Poradenství",
    description: "Konzultace a poradenství v oblasti stavebnictví. Pomáháme s výběrem správných řešení pro váš projekt.",
    features: [
      "Stavební dozor",
      "Technické posudky",
      "Cenové kalkulace"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Naše služby</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Poskytujeme komplexní stavební služby od návrhu až po dokončení. 
            Každý projekt realizujeme s maximální péčí a profesionalitou.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <Check className="w-4 h-4 text-primary mr-2" />
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
  );
}
