import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema } from "@shared/zod-schemas";

const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: z.string().min(1, "Jméno je povinné"),
  lastName: z.string().min(1, "Příjmení je povinné"),
  email: z.string().email("Neplatný email"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Typ projektu je povinný"),
  budget: z.string().optional(),
  message: z.string().min(10, "Popis projektu musí mít alespoň 10 znaků"),
  privacyConsent: z.boolean().refine(val => val === true, "Souhlas je povinný")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
      privacyConsent: false
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Úspěch!",
        description: result.message,
      });
      form.reset();
    },
    onError: async (error: any) => {
      let errorMessage = "Nastala chyba při odesílání formuláře. Zkuste to prosím znovu.";
      
      if (error.message) {
        try {
          const errorData = JSON.parse(error.message.split(': ')[1]);
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = error.message;
        }
      }
      
      toast({
        title: "Chyba",
        description: errorMessage,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Kontaktujte nás</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Máte projekt na stavbu nebo rekonstrukci? Rádi vám připravíme 
            nezávaznou nabídku a poradíme s realizací vašeho záměru.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Kontaktní informace</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Adresa</div>
                    <div className="text-muted-foreground">
                      Čujkovova 1714/21<br />
                      700 30 Ostrava<br />
                      Česká republika
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Telefon</div>
                    <div className="text-muted-foreground">
                      <a href="tel:+420777069363" className="hover:text-primary transition-colors">+420 777 069 363</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <div className="text-muted-foreground">
                      <a href="mailto:egnstavebni@email.cz" className="hover:text-primary transition-colors">egnstavebni@email.cz</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Pracovní doba</div>
                    <div className="text-muted-foreground">
                      Po - Pá: 7:00 - 17:00<br />
                      So: 8:00 - 12:00<br />
                      Ne: Zavřeno
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Rychlý kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Technický ředitel</span>
                    <a href="tel:+420777069363" className="text-primary font-semibold hover:text-accent transition-colors">+420 777 069 363</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Obchodní ředitel</span>
                    <a href="tel:+420777069363" className="text-primary font-semibold hover:text-accent transition-colors">+420 777 069 363</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Nonstop linka</span>
                    <a href="tel:+420777069363" className="text-primary font-semibold hover:text-accent transition-colors">+420 777 069 363</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Poptávkový formulář</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jméno *</FormLabel>
                          <FormControl>
                            <Input placeholder="Vaše jméno" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Příjmení *</FormLabel>
                          <FormControl>
                            <Input placeholder="Vaše příjmení" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="vas@email.cz" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+420 777 069 363" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Typ projektu *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Vyberte typ projektu" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="rodinny-dum">Rodinný dům</SelectItem>
                            <SelectItem value="prumyslovy-objekt">Průmyslový objekt</SelectItem>
                            <SelectItem value="rekonstrukce">Rekonstrukce</SelectItem>
                            <SelectItem value="infrastruktura">Infrastruktura</SelectItem>
                            <SelectItem value="jine">Jiné</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Orientační rozpočet</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Vyberte rozpočet" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="do-1m">Do 1 mil. Kč</SelectItem>
                            <SelectItem value="1-5m">1 - 5 mil. Kč</SelectItem>
                            <SelectItem value="5-10m">5 - 10 mil. Kč</SelectItem>
                            <SelectItem value="nad-10m">Nad 10 mil. Kč</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Popis projektu *</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            placeholder="Popište váš projekt, požadavky a časový horizont..." 
                            className="resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="privacyConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange} 
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-muted-foreground">
                            Souhlasím se zpracováním osobních údajů podle{" "}
                            <a href="#" className="text-primary hover:text-accent transition-colors">zásad ochrany osobních údajů</a> *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 font-semibold"
                  >
                    {contactMutation.isPending ? "Odesílám..." : "Odeslat poptávku"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
