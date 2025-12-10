"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";
import { getAllProjects } from "@/lib/projects";
import { Project } from "@/types";

export default function HomePage() {
  const allProjects = getAllProjects();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Explore my work in data science, machine learning, and analytics
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12">
          <ProjectFilters
            projects={allProjects}
            onFilterChange={setFilteredProjects}
          />
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-slate-400">No projects found matching your filters.</p>
          </div>
        )}
      </section>

      {/* Education Section */}
      <section id="education" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-center text-3xl font-bold text-slate-50 sm:text-4xl">Education</h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">BA in Mathematics and Statistics </h3>
                <p className="text-slate-300">Concentration in Computer Science and Digital Humanities</p>
                <p className="text-slate-300">Kenyon College, Ohio</p>
               {/*} <p className="text-sm text-slate-400">Graduation Date</p> */}
              </div>
              <div className="border-t border-slate-800 pt-4">
                <p className="mb-2 text-sm font-medium text-slate-400">GPA</p>
                <p className="text-lg text-cyan-400">3.83 / 4.0</p>
              </div>
              <div className="border-t border-slate-800 pt-4">
                <p className="mb-3 text-sm font-medium text-slate-400">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Statistical Computing",
                    "Data Structures and Program Design",
                    "Database Systems",
                    "Linear Algebra",
                    "Probability", 
                    "Software Development",
                    "Software & System Design",
                    "Artificial Intelligence",
                    "SQL Fundamentals",
                    "GenAI, Multi-Agent Systems, and Digital Twins",
                    "Experimental Design",
                    "Data Analysis",
                  ].map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* About Section */}
      {/* <section id="about" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">About Me</h2>
          <p className="text-lg leading-relaxed text-slate-300">
            I&apos;m a recent data science graduate passionate about using statistical methods and machine
            learning to solve real-world problems. During my studies, I completed projects in machine learning, 
            statistical analysis, and data visualization. I&apos;m excited to apply my skills in a professional 
            setting and continue learning from experienced data scientists.
          </p>
        </motion.div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Let&apos;s Connect</h2>
          <p className="text-lg text-slate-300">
            Interested in collaborating or have a project in mind? I&apos;d love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your.email@example.com"
              className="rounded-full border border-cyan-400/60 bg-cyan-500/10 px-6 py-3 text-cyan-100 transition-colors hover:bg-cyan-500/20"
            >
              Email Me
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-slate-200 transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-slate-200 transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section> */}
    </div>
  );
}
