/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "accent";
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", variant = "light", ...props }) => {
  const baseClasses = variant === "dark" 
    ? "bento-card-dark" 
    : variant === "accent" 
    ? "bento-card-accent" 
    : "bento-card";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
