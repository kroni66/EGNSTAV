import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Jan Novák",
    location: "Praha, rodinný dům",
    content: "Výstavbu našeho rodinného domu zvládla firma EGN-STAV naprosto profesionálně. Vše bylo dokončeno v termínu a kvalita práce předčila naše očekávání.",
    rating: 5
  },
  {
    name: "Marie Svobodová",
    location: "Brno, kancelářské prostory",
    content: "Rekonstrukce našich kanceláří proběhla bez problémů. Oceňujeme profesionální přístup a ochotu vyhovět našim specifickým požadavkům.",
    rating: 5
  },
  {
    name: "Petr Dvořák",
    location: "Ostrava, průmyslový objekt",
    content: "Stavba naší výrobní haly byla realizována rychle a kvalitně. Můžeme EGN-STAV doporučit všem, kteří hledají spolehlivého partnera.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Co o nás říkají klienti</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Spokojenost našich klientů je pro nás nejdůležitější. 
            Přečtěte si, co říkají o naší práci.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
