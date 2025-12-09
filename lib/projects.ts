import { Project } from "@/types";

/**
 * Add your projects here! This is the main data source for your portfolio.
 * 
 * To add a new project:
 * 1. Copy the structure below
 * 2. Fill in all the details
 * 3. Add relevant tags
 * 4. Set the featured flag to true to highlight it
 */
export const projects: Project[] = [
  {
    id: "aml-survival-analysis",
    title: "AML Survival & Cure Modeling",
    shortDescription: "Advanced survival analysis using semiparametric and mixture cure models",
    longDescription: "Developed comprehensive survival models to understand long-term remission and recurrence patterns in Acute Myeloid Leukemia (AML) patients. Used R with survival analysis packages to build semiparametric models and mixture cure models, providing insights into patient outcomes and treatment effectiveness.",
    category: "machine-learning",
    tags: ["R", "Survival Analysis", "Cure Models", "Statistics", "Healthcare"],
    featured: true,
    year: 2024,
    image: "", // Add your project images to /public/projects/ - leave empty for gradient placeholder
    githubUrl: "https://github.com/yourusername/aml-survival",
    liveUrl: "https://your-demo.com",
    technologies: ["R", "tidyverse", "survival", "ggplot2"],
    metrics: {
      accuracy: "92%",
      sampleSize: "1,200+ patients",
      timeframe: "5-year follow-up"
    }
  },
  {
    id: "homelessness-risk-index",
    title: "Homelessness Risk Index Dashboard",
    shortDescription: "Geospatial dashboard for identifying at-risk neighborhoods",
    longDescription: "Built an interactive dashboard combining eviction filings, demographic data, and vulnerability indices to create an interpretable risk indicator. The tool helps local decision-makers identify neighborhoods at highest risk of homelessness and allocate resources effectively.",
    category: "data-visualization",
    tags: ["Python", "Geospatial", "Dashboards", "Public Policy", "DataViz"],
    featured: true,
    year: 2024,
    image: "",
    githubUrl: "https://github.com/yourusername/homelessness-risk",
    liveUrl: "https://your-dashboard.com",
    technologies: ["Python", "Plotly", "Pandas", "GeoPandas", "Streamlit"],
    metrics: {
      neighborhoods: "500+",
      dataSources: "8",
      updateFrequency: "Monthly"
    }
  },
  {
    id: "nepal-education-mapping",
    title: "Education Access Mapping – Nepal",
    shortDescription: "Remote sensing and accessibility analysis for school placement",
    longDescription: "Used Google Earth Engine and supervised classification to analyze remote sensing data, combined with travel-time analysis to identify underserved communities. This project helped inform strategic placement of new schools in rural Nepal, improving educational access for thousands of children.",
    category: "geospatial",
    tags: ["Google Earth Engine", "CART", "Accessibility", "Remote Sensing", "GIS"],
    featured: true,
    year: 2023,
    image: "",
    githubUrl: "https://github.com/yourusername/nepal-education",
    liveUrl: null,
    technologies: ["Google Earth Engine", "Python", "QGIS", "R"],
    metrics: {
      areaCovered: "147,000 km²",
      communitiesIdentified: "150+",
      impact: "10,000+ students"
    }
  },
  {
    id: "bootstrap-inference-playground",
    title: "Bootstrap Inference Playground",
    shortDescription: "Interactive educational tool for statistical resampling",
    longDescription: "Created an interactive web application to visualize bootstrap distributions, confidence intervals, and compare them to classical parametric assumptions. This teaching tool helps students understand the power and intuition behind bootstrap methods in statistical inference.",
    category: "education",
    tags: ["R", "Statistics", "Teaching", "Interactive", "Shiny"],
    featured: false,
    year: 2023,
    image: "",
    githubUrl: "https://github.com/yourusername/bootstrap-playground",
    liveUrl: "https://your-shiny-app.com",
    technologies: ["R", "Shiny", "ggplot2", "dplyr"],
    metrics: {
      users: "500+ students",
      simulations: "Unlimited",
      responseTime: "< 1s"
    }
  }
];

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Get featured projects only
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

/**
 * Get project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(projects.map(project => project.category)));
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const allTags = projects.flatMap(project => project.tags);
  return Array.from(new Set(allTags)).sort();
}

/**
 * Search projects by query
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowerQuery) ||
    project.shortDescription.toLowerCase().includes(lowerQuery) ||
    project.longDescription.toLowerCase().includes(lowerQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

