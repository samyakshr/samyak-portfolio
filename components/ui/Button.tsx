"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400 focus:ring-cyan-400 shadow-lg shadow-cyan-500/40",
      secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 focus:ring-slate-600",
      outline: "border-2 border-slate-700 bg-transparent text-slate-200 hover:border-cyan-400 hover:text-cyan-200 focus:ring-cyan-400",
      ghost: "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 focus:ring-cyan-400",
    };
    
    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

