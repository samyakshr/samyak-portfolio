"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectType = "all" | "ml" | "viz" | "research" | "dashboard";

type Project = {
  id: string;
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  type: ProjectType;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    id: "aml-survival",
    title: "AML Survival & Cure Modeling",
    blurb: "Modeling long-term survival and recurrence patterns.",
    description:
      "Semiparametric survival and mixture cure models to understand long-term remission and recurrence in leukemia cohorts.",
    tags: ["R", "Survival Analysis", "Cure Models"],
    type: "ml",
    link: "#"
  },
  {
    id: "homelessness-risk",
    title: "Homelessness Risk Index",
    blurb: "Neighborhood-level risk dashboard.",
    description:
      "Combined eviction filings, demographic data, and vulnerability indices into an interpretable risk indicator for local decision makers.",
    tags: ["Python", "Geospatial", "Dashboards"],
    type: "dashboard",
    link: "#"
  },
  {
    id: "nepal-education",
    title: "Education Access Mapping – Nepal",
    blurb: "Remote sensing + accessibility analysis.",
    description:
      "Used supervised classification and travel-time analysis to highlight under-served communities for new school placement.",
    tags: ["Google Earth Engine", "CART", "Accessibility"],
    type: "viz",
    link: "#"
  },
  {
    id: "bootstrapping",
    title: "Bootstrap Inference Playground",
    blurb: "Interactive exploration of resampling ideas.",
    description:
      "Visual demos of bootstrap distributions, confidence intervals, and comparisons to classical parametric assumptions.",
    tags: ["R", "Statistics", "Teaching"],
    type: "research",
    link: "#"
  }
];

const FILTERS: { id: ProjectType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ml", label: "Machine Learning" },
  { id: "viz", label: "Visualization" },
  { id: "dashboard", label: "Dashboards" },
  { id: "research", label: "Research" }
];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background gradient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 transform rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 transform rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 transform rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        {/* nav */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/60 text-xs font-semibold tracking-tight text-cyan-300 ring-1 ring-slate-800">
              SS
            </span>
            <div className="text-sm text-slate-300">
              <div className="font-semibold text-slate-100">
                Samyak (Sammy) Shrestha
              </div>
              <div className="text-xs text-slate-400">
                Data Science · ML · Statistics
              </div>
            </div>
          </div>
          <nav className="hidden gap-4 text-xs sm:flex">
            <a href="#hero" className="text-slate-300 hover:text-cyan-300">
              Home
            </a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-300">
              Projects
            </a>
            <a href="#stack" className="text-slate-300 hover:text-cyan-300">
              Stack
            </a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-300">
              Contact
            </a>
          </nav>
        </header>

        {/* hero with picture in the middle */}
        <section
          id="hero"
          className="flex flex-1 flex-col items-center justify-center gap-10 py-10 text-center"
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* glow ring */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/40 via-fuchsia-500/40 to-emerald-400/40 blur-2xl" />
            <motion.div
              className="relative h-40 w-40 overflow-hidden rounded-full border border-slate-700 bg-slate-900/60 shadow-xl shadow-cyan-500/20 sm:h-48 sm:w-48"
              whileHover={{ scale: 1.03, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Replace src with your real photo in /public */}
              <img
                src="/profile.jpg"
                alt="Samyak portrait placeholder"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-2xl space-y-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 shadow-sm shadow-slate-950/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to data science, ML, and research roles
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              I build data-driven tools to make{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                health & civic systems
              </span>{" "}
              more fair and intelligent.
            </h1>
            <p className="text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
              This portfolio is a living lab of my work in survival analysis, ML,
              geospatial analytics, and dashboards. Explore projects, peek under
              the hood, and see how I think with data.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
            >
              Let&apos;s collaborate
            </a>
          </motion.div>
        </section>

        {/* projects with filters */}
        <section id="projects" className="mt-8 space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Featured projects
              </h2>
              <p className="text-xs text-slate-400 sm:text-sm">
                Click a filter to see different flavors of work. All text and
                links are placeholders for now.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-3 py-1 text-xs transition ${
                    activeFilter === filter.id
                      ? "border-cyan-400 bg-cyan-500/10 text-cyan-200"
                      : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid gap-4 md:grid-cols-2"
            >
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  whileHover={{ y: -4 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/80 backdrop-blur-sm"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    {project.blurb}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300 ring-1 ring-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <a
                      href={project.link ?? "#"}
                      className="text-cyan-300 hover:text-cyan-200"
                    >
                      View project →
                    </a>
                    <span className="text-slate-500">
                      Metrics, code & write-up
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* tech stack */}
        <section id="stack" className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Stack & favorite tools
          </h2>
          <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <h3 className="mb-2 text-xs font-semibold text-slate-100 sm:text-sm">
                Modeling & analysis
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "R", "tidyverse", "scikit-learn", "Survival models"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <h3 className="mb-2 text-xs font-semibold text-slate-100 sm:text-sm">
                Data & infrastructure
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["SQL", "APIs", "Git/GitHub", "Vercel", "Cloud notebooks"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <h3 className="mb-2 text-xs font-semibold text-slate-100 sm:text-sm">
                Communication & frontend
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "TypeScript", "Tailwind CSS", "Dashboards", "Technical writing"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="mt-10 space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Let&apos;s talk about data
          </h2>
          <p className="max-w-xl text-xs text-slate-300 sm:text-sm">
            Interested in collaborating, hiring, or just nerding out about
            survival analysis or civic data? Drop me a message and I&apos;ll
            happily share more detailed write-ups, repos, and experiments.
          </p>
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
            <a
              href="mailto:placeholder@email.com"
              className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-cyan-100 hover:bg-cyan-500/20"
            >
              Email me
            </a>
            <a
              href="https://github.com/placeholder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/placeholder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-200"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-[11px] text-slate-500">
            © {new Date().getFullYear()} Samyak Shrestha. Built with Next.js,
            TypeScript, Tailwind, and Framer Motion.
          </p>
        </section>
      </main>
    </div>
  );
}
