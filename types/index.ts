/**
 * Core type definitions for the portfolio
 */

export type ProjectCategory = 
  | "statistics"
  | "data-science"
  | "artificial-intelligence"
  | "computer-science"
  | "all";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ProjectCategory | ProjectCategory[];
  tags: string[];
  featured: boolean;
  year: number;
  image: string;
  githubUrl: string | null;
  liveUrl: string | null;
  posterUrl?: string | null;
  paperUrl?: string | null;
  technologies: string[];
  metrics: Record<string, string>;
}

export interface ProjectFilters {
  category: ProjectCategory;
  tags: string[];
  searchQuery: string;
  featuredOnly: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

