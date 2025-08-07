// src/components/ui/button.tsx
import React from "react"
import { cn } from "@/lib/utils"

// Simplified variant definitions
const buttonStyles = {
  base: "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50",
  variants: {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
  },
  sizes: {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  },
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles.variants
  size?: keyof typeof buttonStyles.sizes
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      className,
      variant = "primary",
      size = "md",
      ...props 
    }, 
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonStyles.base,
          buttonStyles.variants[variant],
          buttonStyles.sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }