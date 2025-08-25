import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Users, Clock, ThumbsUp, Leaf } from "lucide-react";

const features = [
  { icon: Award, text: "ISO 9001:2015" },
  { icon: Shield, text: "Pojištění odpovědnosti" },
  { icon: Users, text: "Kvalifikovaný tým" },
  { icon: Clock, text: "24/7 podpora" },
  { icon: ThumbsUp, text: "5 let záruka" },
  { icon: Leaf, text: "Ekologické materiály" }
];

export default function AboutSection() {
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

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">O společnosti EGN-STAV</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Jsme moderní stavební společnost s více než patnáctiletými zkušenostmi 
              v oboru. Specializujeme se na komplexní stavební práce od návrhu 
              až po finální dokončení projektů.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Naším cílem je poskytovat kvalitní služby, dodržovat termíny 
              a překračovat očekávání našich klientů. Využíváme nejmodernější 
              technologie a materiály pro dosažení nejlepších výsledků.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                {features.slice(0, 3).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="w-5 h-5 text-primary mr-3" />
                      <span className="font-semibold text-foreground">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-3">
                {features.slice(3, 6).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="w-5 h-5 text-primary mr-3" />
                      <span className="font-semibold text-foreground">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 font-semibold"
            >
              Kontaktujte nás
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional construction team" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
              loading="lazy"
              width="800"
              height="600"
            />
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Let zkušeností</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Zaměstnanců</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
