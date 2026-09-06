import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-display text-sm font-semibold uppercase tracking-[0.08em] transition-[background-color,border-color,color,transform] duration-200 ease-out active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Signální červená, jediný akcent na stránce.
        primary:
          "bg-signal text-white hover:bg-signal-hover border border-signal hover:border-signal-hover",
        outline:
          "border border-ink-500 bg-transparent text-steel-100 hover:border-steel-400 hover:bg-ink-800",
        ghost:
          "border border-transparent bg-transparent text-steel-300 hover:text-steel-100 hover:bg-ink-800",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, buttonVariants };
