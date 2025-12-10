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
    title: "Analyzing and Visualizing Data in Virtual Reality",
    shortDescription: "Immersive VR data visualization using Unity to explore eye gaze and behavioral data from virtual reality studies",
    longDescription: "Developed an immersive virtual reality data visualization system that transforms behavioral data from the Eye Gaze Study into an interactive solar system metaphor. The project processes raw eye gaze and response time data using Python scripts to structure datasets into manageable CSV files. Built in Unity with C#, the visualization creates two distinct experiences: Visualization 1 tracks participants' eye gaze direction over time, represented as sun rays extending from the participant (sun) toward target objects (planets), while Visualization 2 uses response times to control planet revolution speeds, enabling comparison of object detection difficulty and participant performance variability. The system includes a customizable user interface within VR, allowing users to interact with and explore the data in three-dimensional space. This immersive approach to data visualization reveals patterns and relationships that traditional 2D visualizations might miss, providing unique insights for improving VR experience design and understanding user behavior in virtual environments.",
    category: "data-visualization",
    tags: ["Unity", "C#", "Python", "Virtual Reality", "Data Visualization", "XR", "Eye Tracking"],
    featured: true,
    year: 2024,
    image: "/vr.jpg",
    githubUrl: "https://github.com/yourusername/vr-data-visualization",
    liveUrl: null,
    technologies: ["Unity", "C#", "Python", "VR", "CSV Processing"],
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
    year: 2024,
    image: "/fa.png",
    githubUrl: "https://github.com/samyakshr/franklin-county-homelessnessrisk-analysis-risk",
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
    category: "research",
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

