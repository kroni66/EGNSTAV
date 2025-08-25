import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/zod-schemas";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: "Děkujeme za vaši poptávku! Ozveme se vám co nejdříve.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Prosím vyplňte všechna povinná pole správně.",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Nastala chyba při odesílání formuláře. Zkuste to prosím znovu." 
        });
      }
    }
  });

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const { category } = req.query;
      
      let projects;
      if (category && typeof category === 'string' && category !== 'all') {
        projects = await storage.getProjectsByCategory(category);
      } else {
        projects = await storage.getProjects();
      }
      
      res.json(projects);
    } catch (error) {
      console.error("Projects fetch error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Nastala chyba při načítání projektů." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
