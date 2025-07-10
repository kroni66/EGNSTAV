import { storage } from '../server/storage.js';
import { insertContactSubmissionSchema } from '../shared/schema.js';
import { z } from 'zod';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

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
} 