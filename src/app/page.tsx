import { ProjectForm } from "@/components/project-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-void-purple selection:text-white flex items-center justify-center p-4">
      {/* 
         Standalone Form Page for Embedding.
         Centered vertically and horizontally. 
         No header, footer, or complex layout. 
       */}
      <div className="w-full max-w-4xl">
        <ProjectForm />
      </div>
    </main>
  )
}
