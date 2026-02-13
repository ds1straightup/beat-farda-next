"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send, UploadCloud, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlassPanel } from "@/components/ui/glass-panel"
import { projectSchema, type ProjectFormValues } from "@/lib/schemas"

export function ProjectForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [serverError, setServerError] = useState<string | null>(null)

    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            services: [],
            contact_method: "Email",
            timeline: "ASAP",
            budget: "Under £100",
        },
    })

    async function onSubmit(data: ProjectFormValues) {
        setIsSubmitting(true)
        setServerError(null)

        try {
            const response = await fetch("/api/submit-project", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong")
            }

            setIsSuccess(true)
            form.reset()
        } catch (error) {
            if (error instanceof Error) {
                setServerError(error.message)
            } else {
                setServerError("An unexpected error occurred")
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <GlassPanel className="p-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="font-display text-3xl text-white">REQUEST RECEIVED</h2>
                <p className="text-gray-300 max-w-md mx-auto">
                    Your project details have been securely transmitted to FardaVision Systems.
                    We will review your brief and establish contact within 24 hours.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="mt-8"
                >
                    Submit Another Project
                </Button>
            </GlassPanel>
        )
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <GlassPanel className="p-8 md:p-12 space-y-10 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

                {/* Section 1: Contact Details */}
                <div className="space-y-6 relative z-10">
                    <h2 className="font-display text-2xl text-void-purple border-b border-white/10 pb-2">01 // Identity</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <Input placeholder="Your full name" {...form.register("name")} />
                            {form.formState.errors.name && (
                                <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                                Who are you? <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="flex h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-void-purple focus-visible:bg-void-purple/5"
                                {...form.register("role")}
                            >
                                <option value="" disabled className="bg-black text-gray-400">Select your role...</option>
                                <option value="Artist" className="bg-black">Artist</option>
                                <option value="Brand" className="bg-black">Brand</option>
                                <option value="Talent" className="bg-black">Talent</option>
                                <option value="Influencer" className="bg-black">Influencer</option>
                                <option value="Label or Agency" className="bg-black">Label or Agency</option>
                                <option value="Other" className="bg-black">Other</option>
                            </select>
                            {form.formState.errors.role && (
                                <p className="text-red-500 text-xs">{form.formState.errors.role.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <Input type="email" placeholder="you@example.com" {...form.register("email")} />
                            {form.formState.errors.email && (
                                <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <Input type="tel" placeholder="+44 7123 456789" {...form.register("phone")} />
                            {form.formState.errors.phone && (
                                <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                                Social Handle <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-3 text-gray-500">@</span>
                                <Input className="pl-10" placeholder="username" {...form.register("social_handle")} />
                            </div>
                            {form.formState.errors.social_handle && (
                                <p className="text-red-500 text-xs">{form.formState.errors.social_handle.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                                Website
                            </label>
                            <Input type="url" placeholder="https://yourwebsite.com" {...form.register("website")} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                            Preferred Contact Method <span className="text-red-500">*</span>
                        </label>
                        <div className="flex space-x-6 pt-2">
                            {["Email", "WhatsApp"].map((method) => (
                                <label key={method} className="flex items-center space-x-3 cursor-pointer group">
                                    <input
                                        type="radio"
                                        value={method}
                                        {...form.register("contact_method")}
                                        className="w-5 h-5 accent-void-purple bg-gray-900 border-gray-700"
                                    />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{method}</span>
                                </label>
                            ))}
                        </div>
                        {form.formState.errors.contact_method && (
                            <p className="text-red-500 text-xs">{form.formState.errors.contact_method.message}</p>
                        )}
                    </div>
                </div>

                {/* Section 2: Project Details */}
                <div className="space-y-6 relative z-10">
                    <h2 className="font-display text-2xl text-void-purple border-b border-white/10 pb-2">02 // The Vision</h2>

                    <div className="space-y-3">
                        <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                            What services are you interested in?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                "Cover Art", "Animated Cover Art", "AI Avatar/Portrait",
                                "AI Music Video", "Promo Clips", "Branding",
                                "Web Design", "Mixing and Mastering", "Recording Vocals", "AI IG/TikTok Reel"
                            ].map((service) => (
                                <label key={service} className="flex items-center space-x-3 p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value={service}
                                        {...form.register("services")}
                                        className="w-5 h-5 accent-void-purple bg-gray-900 border-gray-700 rounded"
                                    />
                                    <span className="text-gray-300">{service}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                            Project Name / Song Title
                        </label>
                        <Input placeholder="e.g. 'Midnight Vibes' or 'Summer Campaign'" {...form.register("project_name")} />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                            Your Idea
                        </label>
                        <Textarea rows={4} placeholder="Describe your vision, themes, or concept..." {...form.register("idea_description")} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                                Timeline <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-2">
                                {["ASAP", "Within 1 month", "1 to 3 months", "Just planning ahead"].map((t) => (
                                    <label key={t} className="flex items-center space-x-3 cursor-pointer group">
                                        <input type="radio" value={t} {...form.register("timeline")} className="w-5 h-5 accent-void-purple" />
                                        <span className="text-gray-400 group-hover:text-white transition-colors">{t}</span>
                                    </label>
                                ))}
                            </div>
                            {form.formState.errors.timeline && (
                                <p className="text-red-500 text-xs">{form.formState.errors.timeline.message}</p>
                            )}
                        </div>

                        <div className="space-y-3">
                            <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                                Budget Range <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-2">
                                {["Under £100", "£100 to £500", "£500 to £1,000", "£1,000 to £3,000", "£3,000+"].map((b) => (
                                    <label key={b} className="flex items-center space-x-3 cursor-pointer group">
                                        <input type="radio" value={b} {...form.register("budget")} className="w-5 h-5 accent-void-purple" />
                                        <span className="text-gray-400 group-hover:text-white transition-colors">{b}</span>
                                    </label>
                                ))}
                            </div>
                            {form.formState.errors.budget && (
                                <p className="text-red-500 text-xs">{form.formState.errors.budget.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Section 3: Details */}
                <div className="space-y-6 relative z-10">
                    <h2 className="font-display text-2xl text-void-purple border-b border-white/10 pb-2">03 // Details</h2>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                            Reference Links
                        </label>
                        <p className="text-xs text-gray-500 mb-1">Music, visuals, moodboards, socials, etc.</p>
                        <Textarea rows={3} placeholder="Paste links here..." {...form.register("reference_links")} />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                            Anything else?
                        </label>
                        <Textarea rows={3} placeholder="Any other details we should know..." {...form.register("extra_info")} />
                    </div>

                    <div className="space-y-2 opacity-50 pointer-events-none">
                        <label className="block text-sm font-bold tracking-wide uppercase text-gray-300">
                            Upload Files (Coming Soon)
                        </label>
                        <div className="w-full p-8 rounded-lg flex flex-col items-center justify-center text-center border-2 border-dashed border-white/10 bg-black/70">
                            <UploadCloud className="w-10 h-10 text-gray-500 mb-3" />
                            <p className="text-gray-500 font-medium">File upload will be available in the next update.</p>
                            <p className="text-gray-700 text-xs mt-1">Please provide download links in References.</p>
                        </div>
                    </div>
                </div>

                {/* Action */}
                <div className="pt-6 border-t border-white/10 space-y-6 relative z-10">
                    {serverError && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
                            {serverError}
                        </div>
                    )}

                    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                TRANSMITTING...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5 mr-2" />
                                Submit Project Request
                            </>
                        )}
                    </Button>
                </div>

            </GlassPanel>
        </form>
    )
}
