import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Project } from "@shared/schema";

const filterOptions = [
  { value: "all", label: "Vše" },
  { value: "residential", label: "Rodinné domy" },
  { value: "commercial", label: "Průmyslové" },
  { value: "renovation", label: "Rekonstrukce" }
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects", activeFilter],
  });

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
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Naše realizace</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Podívejte se na některé z našich nejnovějších projektů. 
            Každý projekt je důkazem naší preciznosti a kvality práce.
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-2xl p-2 inline-flex">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "ghost"}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeFilter === option.value 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-card"
                }`}
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="card-hover border-border bg-card">
                <div className="animate-pulse">
                  <div className="w-full h-64 bg-muted rounded-t-2xl"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-muted rounded w-20"></div>
                      <div className="h-4 bg-muted rounded w-4"></div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group card-hover border-border bg-card overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">
                      {project.area} • {project.year}
                    </span>
                    <Button variant="ghost" size="icon" className="text-primary hover:text-accent">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-all duration-300 font-semibold"
          >
            Více projektů
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
