import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    hoverEffect?: boolean
}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ className, children, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass-panel relative overflow-hidden rounded-2xl p-8 transition-all duration-300",
                    hoverEffect && "group hover:border-void-purple/50",
                    className
                )}
                {...props}
            >
                {hoverEffect && <div className="scanner-line" />}
                {children}
            </div>
        )
    }
)
GlassPanel.displayName = "GlassPanel"

export { GlassPanel }
