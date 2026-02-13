import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-void-purple disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-white text-void-purple border border-white/20 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:bg-void-purple hover:text-white hover:border-void-purple hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] active:scale-[0.98]":
                            variant === "primary",
                        "border border-void-purple/20 bg-transparent text-white hover:bg-void-purple/10":
                            variant === "outline",
                        "hover:bg-void-purple/10 hover:text-white": variant === "ghost",
                        "text-void-purple underline-offset-4 hover:underline":
                            variant === "link",
                        "h-12 px-8 py-3": size === "default",
                        "h-9 rounded-md px-3": size === "sm",
                        "h-14 rounded-xl px-10 text-lg": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
