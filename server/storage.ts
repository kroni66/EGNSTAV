import { users, type User, type InsertUser, contactSubmissions, type ContactSubmission, type InsertContactSubmission, projects, type Project, type InsertProject } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getProjects(): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private projects: Map<number, Project>;
  private currentUserId: number;
  private currentContactId: number;
  private currentProjectId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.projects = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentProjectId = 1;
    
    // Initialize with sample projects
    this.initializeProjects();
  }

  private initializeProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "Vila v Praze",
        description: "Moderní rodinný dům s energetickou třídou A",
        category: "residential",
        area: "250 m²",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        location: "Praha"
      },
      {
        title: "Výrobní hala Ostrava",
        description: "Ocelová konstrukce s moderním opláštěním",
        category: "commercial",
        area: "1200 m²",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        location: "Ostrava"
      },
      {
        title: "Rekonstrukce centra Brna",
        description: "Kompletní obnova historické budovy",
        category: "renovation",
        area: "800 m²",
        year: "2022",
        imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        location: "Brno"
      },
      {
        title: "Bytový dům Karlín",
        description: "Moderní bytový komplex s 24 jednotkami",
        category: "residential",
        area: "1800 m²",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        location: "Praha"
      },
      {
        title: "Kancelářské centrum",
        description: "Moderní administrativní budova",
        category: "commercial",
        area: "2500 m²",
        year: "2022",
        imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        location: "Praha"
      },
      {
        title: "Luxusní vila Liberec",
        description: "Kompletní rekonstrukce s bazénem",
        category: "renovation",
        area: "400 m²",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        location: "Liberec"
      }
    ];

    sampleProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      project => project.category === category
    );
  }

  private async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
