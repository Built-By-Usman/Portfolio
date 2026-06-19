import {
  Zap,
  Code2,
  ShieldCheck,
  Server,
  Smartphone,
  Globe
} from 'lucide-react';

export const SERVICES = [
  {
    title: "High-Performance Apps",
    description: "Building blazing-fast, optimized applications that provide a fluid and responsive user experience.",
    icon: Zap
  },
  {
    title: "Clean Architecture",
    description: "Developing maintainable, scalable, and modular codebases using industry-standard best practices.",
    icon: Code2
  },
  {
    title: "Secure Backend Solutions",
    description: "Architecting robust APIs and server-side logic with a heavy emphasis on security and data integrity.",
    icon: ShieldCheck
  },
  {
    title: "Scalable Infrastructure",
    description: "Designing systems that grow with your business, handling increasing loads with ease and stability.",
    icon: Server
  },
  {
    title: "Flutter Mobile Mastery",
    description: "Crafting native-quality cross-platform mobile applications for iOS and Android using Flutter.",
    icon: Smartphone
  },
  {
    title: "Seamless API Integration",
    description: "Expertly connecting frontends with complex backends through optimized and well-documented REST APIs.",
    icon: Globe
  }
];

export const PROJECTS = [
  {
    title: "ChatHub – Real-Time Chat App",
    description: "A real-time messaging app featuring OTP authentication, media sharing, and auto-delete status.",
    tech: ["Flutter", "Firebase"],
  },
  {
    title: "Smart Campus Management",
    description: "Role-based system for educational institutions featuring course and assignment management.",
    tech: ["Flutter", "FastAPI", "REST APIs"],
  },
  {
    title: "AI Parental Control",
    description: "AI-powered application providing intelligent child activity guidance using Gemini API.",
    tech: ["Flutter", "Gemini API", "REST APIs"],
  },
  {
    title: "Durood Counter",
    description: "Religious tracking app with daily synchronization, reward systems, and real-time updates.",
    tech: ["Flutter", "Firebase", "Supabase"],
  },
  {
    title: "E-commerce Store with Admin Panel",
    description: "Full-stack ordering system with product browsing, cart management, and order tracking.",
    tech: ["Flutter", "FastAPI", "Supabase"],
  },
  {
    title: "Event Registration",
    description: "Ticketing system featuring QR-based entry validation and admin approval workflows.",
    tech: ["Flutter", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Random Jokes App",
    description: "Lightweight application fetching and categorizing humor from external REST endpoints.",
    tech: ["Flutter", "REST API"],
  }
];

export const SKILLS = {
  Mobile: ["Flutter (Dart)"],
  Backend: ["FastAPI (Python)"],
  Databases: ["Firebase", "Supabase", "PostgreSQL", "SQLite"],
  Tools: ["Git", "GitHub", "Postman", "Codemagic"],
  Other: ["REST APIs", "JWT Authentication"],
  "Soft Skills": ["Problem Solving", "Teamwork", "Communication", "Time Management"]
};
