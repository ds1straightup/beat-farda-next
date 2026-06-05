"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function PromptsPage() {
  const [copied, setCopied] = useState(false);

  const promptText = "Two men standing side by side they both skin wear meta ray ban sunglasses inside a dark upscale nightclub, the first man closest to camera and the second man beside him, both lit by moody neon cyan and emerald club lighting, photorealistic 8k cinematic photography, shot on 35mm film stock, raw real-world texture, high contrast, crushed blacks, deep shadows, glossy reflections, atmospheric haze, floating dust motes and glowing data-like particles suspended in the air, surreal near-future nightlife energy. The first man wears Meta Ray-Ban Wayfarer sunglasses with a classic silhouette, stylish black luxury streetwear with rich fabric texture, calm confident presence, detailed skin and realistic facial features. The second man stands naturally next to him in complementary dark fashion, sharp silhouette, subtle expression, both framed with slow deliberate cinematic composition. Background filled with blurred club lights, LED strips, dark metallic surfaces, reflective glass, soft smoke, and floating geometric debris defying gravity. Focus on realistic skin, fabric, stone, and metal textures. No cartoon, no illustration, no plastic, no fake CGI look.";

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 border-b border-[#222] pb-6 flex justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2">The Vault: Prompts</h1>
            <p className="text-[#888] text-sm tracking-widest uppercase">Proprietary Cinematic Pipeline</p>
          </div>
          <Link href="/" className="text-[#ccff00] hover:text-white transition-colors text-sm uppercase tracking-wider font-semibold">
            &larr; Back to Base
          </Link>
        </header>

        <div className="space-y-12">
          {/* Prompt 1 */}
          <article className="bg-[#080808] border border-[#222] p-8 rounded-sm hover:border-[#ccff00] transition-colors duration-300">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-white">001: The Meta Nightclub Render</h2>
              <span className="text-[#ccff00] text-xs font-mono border border-[#ccff00] px-2 py-1 rounded">V1.0</span>
            </div>
            
            <p className="text-[#888] text-sm mb-4">
              <strong>Engineered for:</strong> Surreal near-future aesthetic, high contrast cinematic photography, and Meta Ray-Ban integration.
            </p>

            <div className="bg-[#030303] p-6 rounded-sm border border-[#111] relative group">
              <p className="font-mono text-sm leading-relaxed text-[#ddd] break-words">
                {promptText}
              </p>
            </div>
            
            <div className="mt-6 flex gap-4">
              <button 
                onClick={handleCopy}
                className="bg-[#ccff00] text-black px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                {copied ? "Copied!" : "Copy Prompt"}
              </button>
            </div>
          </article>
        </div>

      </div>
    </div>
  );
}
