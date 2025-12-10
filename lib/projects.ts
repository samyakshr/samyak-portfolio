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
    id: "vr-data-visualization",
    title: "Data Analysis and Visualization in Virtual Reality",
    shortDescription: "Immersive VR data visualization using Unity to explore eye gaze and behavioral data from virtual reality studies",
    longDescription: "Developed an immersive virtual reality data visualization system that transforms behavioral data from the Eye Gaze Study into an interactive solar system metaphor. The project processes raw eye gaze and response time data using Python scripts to structure datasets into manageable CSV files. Built in Unity with C#, the visualization creates two distinct experiences: Visualization 1 tracks participants' eye gaze direction over time, represented as sun rays extending from the participant (sun) toward target objects (planets), while Visualization 2 uses response times to control planet revolution speeds, enabling comparison of object detection difficulty and participant performance variability. The system includes a customizable user interface within VR, allowing users to interact with and explore the data in three-dimensional space. This immersive approach to data visualization reveals patterns and relationships that traditional 2D visualizations might miss, providing unique insights for improving VR experience design and understanding user behavior in virtual environments.",
    category: "data-visualization",
    tags: ["Unity", "C#", "Python", "Virtual Reality", "Data Visualization", "XR"],
    featured: true,
    year: 2023,
    image: "/vr.jpg",
    githubUrl: null,
    liveUrl: null,
    technologies: ["Unity", "C#", "Python", "VR", "MS Excel"],
    metrics: {
      visualizations: "2 distinct VR experiences",
      dataProcessing: "Python scripts for CSV structuring",
      platform: "Unity VR environment"
    }
  },
  {
    id: "homelessness-risk-index",
    title: "Franklin County Homelessness Risk Analysis",
    shortDescription: "Interactive geospatial dashboard for identifying high-risk neighborhoods and guiding community interventions",
    longDescription: "Developed an interactive R Shiny application that combines eviction data, Social Vulnerability Index (SVI), and nonprofit locations to identify census tracts at highest risk of homelessness in Franklin County, Ohio. The dashboard features bivariate mapping that simultaneously visualizes eviction rates (per 1,000 residents) and SVI scores, enabling users to identify areas where high eviction activity overlaps with high social vulnerability. The application includes statistical analysis with correlation plots, demographic breakdowns, and real-time statistics. Built with R, Shiny, Leaflet, and sf for geospatial analysis, this tool helps organizations like Smart Columbus prioritize interventions, allocate resources effectively, and support data-driven policy decisions. The analysis standardizes eviction rates by population to eliminate bias from tract size differences and integrates 1,342 nonprofit organization locations to visualize service coverage across the county.",
    category: "data-visualization",
    tags: ["R", "Python", "Geospatial", "Dashboards", "Public Policy", "DataViz", "Leaflet"],
    featured: true,
    year: 2025,
    image: "/fa.png",
    githubUrl: "https://github.com/samyakshr/franklin-county-homelessnessrisk-analysis",
    liveUrl: "https://samyakshr-smartcolumbus.shinyapps.io/app_20250904_082903/",
    technologies: ["R", "Shiny", "Leaflet", "sf", "dplyr", "ggplot2"],
    metrics: {
      censusTracts: "Franklin County, OH",
      dataSources: "4 major sources",
      nonprofits: "1,342 locations",
      timePeriod: "12 months (Sept 2024 - Aug 2025)"
    }
  },
  {
    id: "multi-agent-marketing-optimization",
    title: "Multi-Agent AI Framework for Digital Marketing Optimization",
    shortDescription: "AI-powered framework for creating, testing, and optimizing digital marketing campaigns using multi-agent systems",
    longDescription: "Developed a multi-agent artificial intelligence framework designed to help marketers quickly create, test, and understand digital marketing campaigns. The framework combines state-of-the-art language models for automated content generation, simulated audience feedback through personas, and organized data analysis to provide clear insights. By leveraging multiple AI agents working in coordination, the system enables marketers to save time, reduce guesswork, and improve campaign effectiveness. The framework automates the campaign creation process, generates targeted content, simulates audience responses through persona-based testing, and provides actionable analytics to help marketers reach the right audience more efficiently.",
    category: "machine-learning",
    tags: ["AI", "Multi-Agent Systems", "LLM", "Digital Marketing", "Automation", "NLP"],
    featured: true,
    year: 2025,
    image: "/dm.jpg",
    githubUrl: "https://github.com/samyakshr/ai-digital-optimization",
    liveUrl: null,
    posterUrl: "https://digital.kenyon.edu/dh_iphs_391/3/", 
    technologies: ["Python", "LLM", "Multi-Agent Framework", "NLP", "Data Analysis"],
    metrics: {
      agents: "Multiple coordinated agents",
      automation: "Content generation & testing",
      efficiency: "Time-saving campaign optimization"
    }
  },
  {
    id: "belize-schools-repair-dashboard",
    title: "Belize Schools Repair Dashboard",
    shortDescription: "Centralized IT support request management system for Belizean schools using Google Workspace tools",
    longDescription: "Developed a streamlined IT support system that replaces an ad-hoc WhatsApp based process with a centralized, database solution for Belizean schools. The RepairDashboard enables school staff to submit repair requests via Google Forms, with data automatically syncing to Google Sheets for storage and management. IT administrators access an interactive dashboard featuring real-time data visualization, status tracking, worker assignment capabilities, and a geographic heatmap. The system leverages Google OAuth2 authentication for secure access and is built with a modular, extensible codebase designed for resource-constrained environments. This solution improves request tracking, reduces response times, and provides actionable insights through charts and analytics, making IT support more efficient and accessible across multiple school locations.",
    category: "dashboard",
    tags: ["Google Workspace", "Dashboard", "Data Management", "IT Support", "Google Sheets", "OAuth2"],
    featured: false,
    year: 2024,
    image: "/belize.jpg",
    githubUrl: "https://github.com/fatmamahmoud02/RepairDashboard",
    liveUrl: null,
    technologies: ["Google Sheets API", "Google Forms", "OAuth2", "JavaScript", "Data Visualization"],
    metrics: {
      schools: "Multiple Belizean schools",
      features: "Real-time sync & tracking",
      authentication: "Google OAuth2"
    }
  },
  {
    id: "statapult-experimental-design",
    title: "Experimental Design: Maximizing Statapult Launch Distance",
    shortDescription: "Factorial and fractional factorial design analysis to maximize launch distance using statistical methods",
    longDescription: "Conducted a comprehensive experimental design study to maximize launch distance for a Statapult device. Implemented a full 2^5 factorial design varying five factors—arm position, ball type, ball position, draw-back height, and band attachment point—while fixing tilt. Used exploratory plots, half-normal plots, and ANOVA to identify influential effects. The analysis revealed that arm position, ball position, height, and post placement have statistically significant main effects on distance, while ball type was found to be negligible. Followed up with a 2^(5-1) half-fractional design constructed via blocking and aliasing on the highest-order interaction, which produced the same set of significant factors and recommended settings. Both designs demonstrated that maximum distance is achieved by setting Arm, Position, and Post to their high levels and Height to its low level, validating that a carefully chosen half-fractional design can deliver efficient and reliable optimization with half the experimental runs.",
    category: "research",
    tags: ["Experimental Design", "Statistics", "ANOVA", "Factorial Design", "R"],
    featured: false,
    year: 2025,
    image: "",
    githubUrl: null,
    liveUrl: null,
    posterUrl: null,
    paperUrl: "/statapult.pdf",
    technologies: ["R", "Statistical Analysis", "Factorial Design", "ANOVA"],
    metrics: {
      design: "2^5 full factorial + 2^(5-1) fractional",
      factors: "5 factors analyzed",
      efficiency: "50% reduction in runs"
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

