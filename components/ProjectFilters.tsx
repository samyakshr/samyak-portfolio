"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCategory, Project } from "@/types";
import { getAllCategories, getAllTags } from "@/lib/projects";
import { getCategoryDisplayName } from "@/lib/utils";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Badge } from "./ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  projects: Project[];
  onFilterChange: (filtered: Project[]) => void;
}

export function ProjectFilters({ projects, onFilterChange }: ProjectFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [showTagFilter, setShowTagFilter] = useState(false);

  const categories = ["all", ...getAllCategories()] as ProjectCategory[];
  const allTags = getAllTags();

  // Filter logic
  useEffect(() => {
    let filtered = [...projects];

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => {
        if (Array.isArray(p.category)) {
          return p.category.includes(selectedCategory);
        }
        return p.category === selectedCategory;
      });
    }

    // Tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(p =>
        selectedTags.some(tag => p.tags.includes(tag))
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.longDescription.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Featured filter
    if (showFeaturedOnly) {
      filtered = filtered.filter(p => p.featured);
    }

    onFilterChange(filtered);
  }, [selectedCategory, selectedTags, searchQuery, showFeaturedOnly, projects, onFilterChange]);

  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedCategory(category);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-10"
        />
        <svg
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              selectedCategory === category
                ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                : "border border-slate-700 bg-slate-900/50 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300"
            )}
          >
            {getCategoryDisplayName(category)}
          </button>
        ))}
      </div>

      {/* Featured Toggle */}
      <div className="flex items-center gap-3">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={showFeaturedOnly}
            onChange={(e) => {
              setShowFeaturedOnly(e.target.checked);
            }}
            className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-400"
          />
          <span className="text-sm text-slate-300">Featured only</span>
        </label>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowTagFilter(!showTagFilter)}
        >
          {showTagFilter ? "Hide" : "Show"} Tags
        </Button>
      </div>

      {/* Tag Filters */}
      <AnimatePresence>
        {showTagFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3"
          >
            <p className="text-sm font-medium text-slate-300">Filter by tags:</p>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "primary" : "default"}
                  className={cn(
                    "cursor-pointer transition-all hover:scale-105",
                    selectedTags.includes(tag) && "ring-2 ring-cyan-400"
                  )}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedTags([]);
                }}
              >
                Clear tags
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

