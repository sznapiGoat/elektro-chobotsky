"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Přežije přechody mezi stránkami, protože template se remountuje.
// Při prvním načtení se nic neanimuje, aby se nezdržel první vykreslený obsah.
let visited = false;

/** Krátký nájezd obsahu při přechodu mezi stránkami, kvůli orientaci. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const animate = React.useRef(visited);

  React.useEffect(() => {
    visited = true;
  }, []);

  if (reduce || !animate.current) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
