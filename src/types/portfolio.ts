export interface HeroData {
  title: string;
  subtitle: string;
  videoUrl: string;
  fallbackImageUrl: string;
  ctaText: string;
}

export interface NavLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  youtubeId: string; // e.g., "dQw4w9WgXcQ"
  description?: string;
}

// src/types/portfolio.ts
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// src/types/portfolio.ts
export interface TestimonialItem {
  quote: string;
  author: string;
  avatarUrl: string;
  role: string;
  verifiedPlatform?: "instagram" | null;
}

// src/types/portfolio.ts
export interface ServiceTab {
  id: string;
  title: string;
  imageFileName: string;
  bulletPoints: string[];
}
