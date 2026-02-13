import { ProjectForm } from "@/components/project-form";

export default function StartProjectPage() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-void-purple/20 rounded-full blur-[128px] animate-pulse-fast"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-void-purple/10 rounded-full blur-[128px]"></div>
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}>
                </div>
                {/* Note: grid-pattern.png might not exist, I should use CSS or SVG if possible, 
             or just rely on the CSS grid I used in global.css if any. 
             Actually index.html used a div with class 'cyber-grid'. I should implement that component or class.
             For now, just the gradients are fine. 
         */}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white neon-text-white">
                        START A PROJECT
                    </h1>
                    <p className="font-body text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Tell us about your vision. We&apos;ll help you build it.
                    </p>
                </div>

                <ProjectForm />
            </div>
        </main>
    );
}
