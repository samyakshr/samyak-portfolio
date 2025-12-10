"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProjectById } from "@/lib/projects";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (params?.id && typeof params.id === "string") {
      const foundProject = getProjectById(params.id);
      if (!foundProject) {
        router.push("/404");
      } else {
        setProject(foundProject);
      }
    }
  }, [params, router]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="mb-4 text-lg text-slate-400">Loading project...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-cyan-300"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {project.featured && <Badge variant="primary">Featured</Badge>}
            <Badge variant="secondary">{project.year}</Badge>
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300">{project.shortDescription}</p>
        </motion.header>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-12 h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
        >
          {project.image && project.image.trim() !== "" ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mb-4 text-6xl">📊</div>
                <div className="text-lg font-medium text-slate-300">{project.title}</div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-slate-50">About This Project</h2>
              <p className="leading-relaxed text-slate-300 whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-50">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {Object.keys(project.metrics).length > 0 && (
              <div>
                <h3 className="mb-4 text-xl font-semibold text-slate-50">Key Metrics</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                      <div className="text-sm text-slate-400">{key}</div>
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Paper/Poster Previews */}
            {(project.paperUrl || project.posterUrl) && (
              <div className="space-y-6">
                {project.paperUrl && (
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-slate-50">Project Paper</h3>
                    <div className="rounded-lg border border-slate-800 bg-slate-900/50 overflow-hidden">
                      <iframe
                        src={`${project.paperUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-[600px]"
                        title="Project Paper Preview"
                      />
                      <div className="border-t border-slate-800 p-4 bg-slate-900/50">
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Open Paper in New Tab
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {project.posterUrl && (
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-slate-50">Research Poster</h3>
                    <div className="rounded-lg border border-slate-800 bg-slate-900/50 overflow-hidden">
                      <iframe
                        src={`${project.posterUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-[800px]"
                        title="Research Poster Preview"
                      />
                      <div className="border-t border-slate-800 p-4 bg-slate-900/50">
                        <a
                          href={project.posterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Open Poster in New Tab
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-50">Project Links</h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 text-slate-950 font-medium transition-colors hover:bg-cyan-400"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Demo
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Project Paper
                  </a>
                )}
                {project.posterUrl && (
                  <a
                    href={project.posterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Research Poster
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-50">Project Info</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-slate-400">Category</dt>
                  <dd className="text-slate-200 capitalize">{project.category.replace("-", " ")}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Year</dt>
                  <dd className="text-slate-200">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Tags</dt>
                  <dd className="mt-1 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </article>
    </div>
  );
}

