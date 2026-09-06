"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Posun v pixelech, ze kterého obsah nabíhá. */
  y?: number;
  delay?: number;
};

/**
 * Jediná scrollová mikroanimace na stránce: krátký nájezd obsahu.
 * initial a whileInView jsou vždy stejné props, mění se jen délka přechodu.
 * Kdyby se struktura větvila podle prefers-reduced-motion, zůstal by
 * serverem vyrenderovaný opacity: 0 po hydrataci nezrušený.
 */
export function Reveal({ children, className, y = 18, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0.2 : 0.55,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
