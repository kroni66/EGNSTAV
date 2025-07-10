import { storage } from '../server/storage.js';
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

  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

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
} 