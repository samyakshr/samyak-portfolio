const projectData = [
  {
    title: "Cohort Survival Atlas",
    subtitle: "Oncology | Time-to-event",
    description: "Mixture cure + AFT survival modeling to surface patient subgroups that benefit most from early interventions.",
    stack: ["Python", "lifelines", "pandas", "MLflow"],
    metric: "↓ time-to-visit by 19%",
    tags: ["health", "ml"],
    cover: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    links: { demo: "#", code: "#" }
  },
  {
    title: "Civic Signals Dashboard",
    subtitle: "Housing stability index",
    description: "Risk scoring for eviction and homelessness using public filings, mobility, and social vulnerability indices.",
    stack: ["Python", "LightGBM", "dbt", "dashboards"],
    metric: "AUC 0.82 on held-out counties",
    tags: ["civic", "ml"],
    cover: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
    links: { demo: "#", code: "#" }
  },
  {
    title: "Product Uplift Lab",
    subtitle: "Causal inference",
    description: "Heterogeneous treatment effect modeling to find segments with strong retention lift under new onboarding.",
    stack: ["DoWhy", "Causal ML", "Python", "PostgreSQL"],
    metric: "+3.8 p.p. uplift",
    tags: ["ml"],
    cover: "https://images.unsplash.com/photo-1508387024700-9fe5c0b37f5c?auto=format&fit=crop&w=1200&q=80",
    links: { demo: "#", code: "#" }
  },
  {
    title: "Geo Access Lab",
    subtitle: "Education & health",
    description: "Isochrone and travel-time modeling to pinpoint underserved regions and simulate new facility locations.",
    stack: ["OSM", "QGIS", "Python", "networkx"],
    metric: "Coverage +22% in sim",
    tags: ["geo", "civic"],
    cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    links: { demo: "#", code: "#" }
  },
  {
    title: "Research Brief Bot",
    subtitle: "NLP summarization",
    description: "Retrieval-augmented summaries for care teams that compress literature into 3-minute clinical briefs.",
    stack: ["Python", "NLP", "RAG", "FastAPI"],
    metric: "Cuts reading time by 60%",
    tags: ["nlp", "health"],
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    links: { demo: "#", code: "#" }
  },
  {
    title: "Model Health Console",
    subtitle: "Ops & observability",
    description: "Monitoring for drift, fairness, and latency with alerts and quick rollbacks.",
    stack: ["Python", "Great Expectations", "Evidently", "Grafana"],
    metric: "p95 latency < 150ms",
    tags: ["ml"],
    cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    links: { demo: "#", code: "#" }
  }
];

const projectGrid = document.getElementById("project-grid");
const searchInput = document.getElementById("search");
const chipButtons = document.querySelectorAll(".chip");

let activeFilter = "all";

const matchesFilter = (project, query) => {
  const matchesTag = activeFilter === "all" || project.tags.includes(activeFilter);
  if (!matchesTag) return false;

  if (!query) return true;
  const haystack = [
    project.title,
    project.subtitle,
    project.description,
    project.stack.join(" "),
    project.metric
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
};

const renderProjects = () => {
  const query = searchInput.value.trim().toLowerCase();
  projectGrid.innerHTML = "";
  const filtered = projectData.filter((project) => matchesFilter(project, query));

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "section-lede";
    empty.textContent = "No projects yet. Add more to projectData in script.js.";
    projectGrid.appendChild(empty);
    return;
  }

  filtered.forEach((project) => {
    projectGrid.appendChild(createProjectCard(project));
  });
};

const createProjectCard = (project) => {
  const article = document.createElement("article");
  article.className = "project-card";

  const cover = document.createElement("div");
  cover.className = "project-cover";
  const img = document.createElement("img");
  img.src = project.cover;
  img.alt = `${project.title} cover image`;
  cover.appendChild(img);

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = project.title;

  const subtitle = document.createElement("p");
  subtitle.className = "project-sub";
  subtitle.textContent = project.subtitle;

  const description = document.createElement("p");
  description.textContent = project.description;

  const chipset = document.createElement("div");
  chipset.className = "project-chipset";
  project.stack.forEach((tech) => {
    const chip = document.createElement("span");
    chip.className = "project-chip";
    chip.textContent = tech;
    chipset.appendChild(chip);
  });

  const meta = document.createElement("div");
  meta.className = "project-meta";
  meta.innerHTML = `<span class="project-stat">${project.metric}</span>`;

  const tags = document.createElement("div");
  tags.className = "project-chipset";
  project.tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "project-chip";
    chip.textContent = `#${tag}`;
    tags.appendChild(chip);
  });

  const links = document.createElement("div");
  links.className = "project-links";
  if (project.links.demo) {
    const demoLink = document.createElement("a");
    demoLink.href = project.links.demo;
    demoLink.target = "_blank";
    demoLink.rel = "noreferrer";
    demoLink.textContent = "Demo";
    links.appendChild(demoLink);
  }
  if (project.links.code) {
    const codeLink = document.createElement("a");
    codeLink.href = project.links.code;
    codeLink.target = "_blank";
    codeLink.rel = "noreferrer";
    codeLink.textContent = "Code";
    links.appendChild(codeLink);
  }

  article.append(
    cover,
    title,
    subtitle,
    description,
    chipset,
    tags,
    meta,
    links
  );
  return article;
};

chipButtons.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    chipButtons.forEach((btn) => btn.classList.toggle("active", btn === chip));
    renderProjects();
  });
});

searchInput.addEventListener("input", renderProjects);

renderProjects();
