import Link from "next/link"
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react"
import { Hud } from "@/components/layout/hud"
import { Marquee } from "@/components/layout/marquee"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { GlassPanel } from "@/components/ui/glass-panel"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-void-purple selection:text-white overflow-x-hidden">
      <Hud />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 fixed-bg"
          style={{ backgroundImage: "url('https://thebeatfarda.com/wp-content/uploads/2026/02/c2b7db03-68a8-418e-be79-3fabb4ed3699-gigapixel-standard-v2-2x-scaled.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-void-purple animate-fade-in-up">
            <Zap className="w-3 h-3" />
            <span>System V6.5 Online</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mix-blend-overlay opacity-90">
            THE BEAT<br />FARDA
          </h1>

          <p className="font-body text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Audio Engineering. Music Production. <br />
            Visuals & Websites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/start-project">
              <Button size="lg" className="group">
                Start A Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#services">
              <button className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all text-sm font-bold uppercase tracking-widest">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-6xl text-white neon-text-white">
                SERVICES
              </h2>
              <div className="h-1 w-24 bg-void-purple mt-4"></div>
            </div>
            <span className="font-body text-sm text-void-purple tracking-widest hidden md:block neon-text">
              [ AVAILABLE PACKAGES ]
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Service 1: Recording Vocals */}
            <GlassPanel hoverEffect className="flex flex-col h-full">
              <span className="font-body text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4 group-hover:text-void-purple transition-colors">
                RECORDING VOCALS
              </span>
              <div className="font-display text-4xl md:text-6xl mb-4 text-white group-hover:neon-text-white">
                £99
              </div>
              <p className="font-body text-base text-white leading-relaxed mb-8 flex-grow">
                Full professional recording session.
              </p>
              <ul className="font-body text-base text-neutral-300 space-y-3 mb-10">
                {["3 Hours Studio Time", "Engineer Included", "Vocal Production", "Rough Mix Included", "Instant File Delivery"].map(item => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-void-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start-project" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Book Session
                </Button>
              </Link>
            </GlassPanel>

            {/* Service 2: AI Reel */}
            <GlassPanel hoverEffect className="flex flex-col h-full">
              <span className="font-body text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4 group-hover:text-void-purple transition-colors">
                AI IG/TIKTOK REEL
              </span>
              <div className="font-display text-4xl md:text-6xl mb-4 text-white group-hover:neon-text-white">
                £49
              </div>
              <p className="font-body text-base text-white leading-relaxed mb-8 flex-grow">
                Viral short-form content generated by AI.
              </p>
              <ul className="font-body text-base text-neutral-300 space-y-3 mb-10">
                {["15s - 30s Content", "AI Generated Visuals", "Trending Audio Sync", "Format: 9:16 (Vertical)", "24h Turnaround"].map(item => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-void-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start-project" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Order Reel
                </Button>
              </Link>
            </GlassPanel>

            {/* Service 3: One Page Website */}
            <GlassPanel hoverEffect className="flex flex-col h-full">
              <span className="font-body text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4 group-hover:text-void-purple transition-colors">
                ONE PAGE WEBSITE
              </span>
              <div className="font-display text-4xl md:text-6xl mb-4 text-white group-hover:neon-text-white">
                £199
              </div>
              <p className="font-body text-base text-white leading-relaxed mb-8 flex-grow">
                Your essential online home.
              </p>
              <ul className="font-body text-base text-neutral-300 space-y-3 mb-10">
                {["All links in one place", "Music & Video Players", "Bio & Booking Sections", "Mobile Optimized", "3 Day Turnaround"].map(item => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-void-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/start-project" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Start Build
                </Button>
              </Link>
            </GlassPanel>

            {/* Service 4: Virtual Music Video (Full Width) */}
            <GlassPanel hoverEffect className="lg:col-span-3 min-h-[400px] flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-void-purple text-white text-xs font-bold px-4 py-2 uppercase tracking-widest z-30">
                MOST POPULAR
              </div>

              <div className="flex-1 text-left relative z-20">
                <span className="font-body text-sm uppercase tracking-[0.2em] text-neutral-400 mb-4 block group-hover:text-void-purple transition-colors">
                  VIRTUAL MUSIC VIDEO
                </span>
                <div className="font-display text-5xl md:text-7xl mb-6 text-void-purple neon-text">
                  £499
                </div>
                <p className="font-body text-lg text-white leading-relaxed mb-6 font-bold">
                  We build a unique 3D world for your song.
                </p>
                <p className="text-neutral-400 text-sm max-w-xl mb-8">
                  No camera crew needed. We treat your song like a movie script—creating environments, characters, and lighting that match the vibe perfectly.
                </p>
                <Link href="/start-project">
                  <Button size="lg">
                    Create Video
                  </Button>
                </Link>
              </div>

              {/* Visual Placeholder for Video/Image */}
              <div className="flex-1 w-full h-64 md:h-full min-h-[300px] bg-void-purple/10 rounded-xl border border-void-purple/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-void-purple/50">
                  <Zap className="w-16 h-16 animate-pulse" />
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
