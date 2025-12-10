"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { scrollToElement } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Side: Profile Image & Skills */}
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-emerald-400 blur-2xl opacity-50" />
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 sm:h-56 sm:w-56"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Samyak Shrestha"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Core Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full space-y-4"
            >
              <h3 className="text-center text-lg font-semibold text-slate-50">Core Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Python", "R", "SQL", "Git", "C#", "C/C++","Microsoft Office (Excel, PowerPoint, Word)", "AWS", "Tableau", "Machine Learning", "Data Visualization", "Statistical Modeling"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Recent graduate seeking data science opportunities
            </motion.div> */}

            <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              I build{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                data solutions
              </span>{" "}
              that make a difference in the world.
            </h1>

            <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
            Hi there! I’m a Data Innovation Intern at Smart Columbus and a recent Mathematics and Statistics graduate from 
            Kenyon College, OH. I have experience in data analysis, data engineering, and statistical modeling. I also enjoy building practical automation and software tools. 
            I’m especially excited about applying artificial intelligence in real-world settings and am driven by curiosity and continual learning, 
            always exploring new tools, methods, and ideas to grow.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToElement("projects", 80)}
              >
                View My Work
              </Button>
              {/* <div className="flex items-center gap-3">
                <a
                  href="https://github.com/samyakshr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-slate-700 bg-slate-900/60 p-3 text-slate-300 transition-all hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
                  aria-label="GitHub"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/samyak-shrestha-5050371ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-slate-700 bg-slate-900/60 p-3 text-slate-300 transition-all hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

