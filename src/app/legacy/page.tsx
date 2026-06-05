import React from 'react';

export default function LegacyCommissionPage() {
  return (
    <div className="bg-[#030303] text-white font-sans antialiased selection:bg-[#b89865] selection:text-black min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
        
        .film-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');
            opacity: 0.04;
            pointer-events: none;
            z-index: 50;
        }
        .gold-gradient-text {
            background: linear-gradient(to right, #eaddcf, #b89865, #eaddcf);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .font-cinzel { font-family: 'Cinzel', serif; }
      `}} />
      
      <div className="film-overlay"></div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#030303]/80 backdrop-blur-md z-40 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <a href="/" className="font-cinzel text-xl tracking-widest font-bold hover:text-[#b89865] transition">FARDAVISION</a>
              <a href="#packages" className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition duration-300">Commission a Score</a>
          </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303] to-[#0a0a0a] z-0"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#b89865]/20 via-transparent to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
              <h4 className="text-[#b89865] tracking-[0.3em] text-sm uppercase mb-6 font-cinzel">The Legacy Commission</h4>
              <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight gold-gradient-text">
                  IMMORTALIZE <br/>THEIR STORY.
              </h1>
              <p className="text-[#a1a1aa] text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                  A bespoke, cinematic audio-visual tribute designed to celebrate a life. We don’t just make a song; we score their legacy.
              </p>
              <a href="#packages" className="inline-block bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#b89865] hover:text-white transition duration-500">
                  View The Packages
              </a>
          </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="font-cinzel text-3xl md:text-4xl gold-gradient-text mb-4">How It Works</h2>
                  <p className="text-[#a1a1aa] font-light">A streamlined, respectful process to capture their essence.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                  <div className="p-8 border border-white/10 bg-[#030303] hover:border-[#b89865]/50 transition duration-500">
                      <div className="text-[#b89865] font-cinzel text-2xl mb-4">01. The Intake</div>
                      <p className="text-[#a1a1aa] font-light text-sm leading-relaxed">
                          Complete a brief but deep questionnaire. Tell me about their favorite genres, their defining moments, and the core emotion you want to evoke (Triumphant, Peaceful, Reflective).
                      </p>
                  </div>
                  <div className="p-8 border border-white/10 bg-[#030303] hover:border-[#b89865]/50 transition duration-500">
                      <div className="text-[#b89865] font-cinzel text-2xl mb-4">02. The Voice Note</div>
                      <p className="text-[#a1a1aa] font-light text-sm leading-relaxed">
                          Send a raw audio recording sharing a memory or speaking about them. This can be subtly woven into the intro or outro of the cinematic score to make it deeply personal.
                      </p>
                  </div>
                  <div className="p-8 border border-white/10 bg-[#030303] hover:border-[#b89865]/50 transition duration-500">
                      <div className="text-[#b89865] font-cinzel text-2xl mb-4">03. The Score</div>
                      <p className="text-[#a1a1aa] font-light text-sm leading-relaxed">
                          I compose, mix, and master the tribute in the FardaVision studios, delivering a premium, cinematic package ready for the memorial service or private family archive.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-[#030303] relative">
          <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="font-cinzel text-4xl md:text-5xl gold-gradient-text mb-4">The Commissions</h2>
                  <p className="text-[#a1a1aa] font-light">Select the tier that best honors their memory.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {/* Tier 1 */}
                  <div className="border border-white/10 bg-[#0a0a0a] p-8 flex flex-col hover:-translate-y-2 transition duration-500">
                      <h3 className="font-cinzel text-2xl mb-2 text-white">The Audio Keepsake</h3>
                      <div className="text-3xl font-light mb-6 text-[#b89865]">£299</div>
                      <ul className="text-[#a1a1aa] text-sm space-y-4 mb-8 flex-grow font-light">
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Fully custom-produced track (Instrumental or Vocal)</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Tailored to their story and favorite genres</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> High-end FardaVision Mix & Master</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Delivered as a high-resolution master file</li>
                      </ul>
                      <a href="mailto:thebeatfarda@gmail.com?subject=The Legacy Commission: Audio Keepsake" className="block w-full text-center border border-white/20 py-3 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition">Commission Audio</a>
                  </div>

                  {/* Tier 2 */}
                  <div className="border border-[#b89865]/50 bg-[#030303] p-8 flex flex-col hover:-translate-y-2 transition duration-500 relative shadow-[0_0_30px_rgba(184,152,101,0.1)]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b89865] text-black text-xs font-bold uppercase tracking-widest py-1 px-4">Most Honored</div>
                      <h3 className="font-cinzel text-2xl mb-2 text-white mt-2">The AI Music Video</h3>
                      <div className="text-3xl font-light mb-6 text-[#b89865]">from £149</div>
                      <ul className="text-[#a1a1aa] text-sm space-y-4 mb-8 flex-grow font-light">
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Covers a verse and chorus of your song</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Full cinematic AI music video via FardaVision engine</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Surreal, near-future environments built around your music</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Directed and styled by Farda for ultimate visual impact</li>
                      </ul>
                      <a href="mailto:thebeatfarda@gmail.com?subject=The Legacy Commission: AI Music Video" className="block w-full text-center bg-[#b89865] text-black py-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition">Commission The Video</a>
                  </div>

                  {/* Tier 3 */}
                  <div className="border border-white/10 bg-[#0a0a0a] p-8 flex flex-col hover:-translate-y-2 transition duration-500">
                      <h3 className="font-cinzel text-2xl mb-2 text-white">The Director's Cut</h3>
                      <div className="text-3xl font-light mb-6 text-[#b89865]">£899</div>
                      <ul className="text-[#a1a1aa] text-sm space-y-4 mb-8 flex-grow font-light">
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Everything in The Audio Keepsake</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Full start-to-finish cinematic AI music video</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> A visual journey telling their life story, directed by Farda</li>
                          <li className="flex items-start"><span className="text-[#b89865] mr-2">✦</span> Highest tier of legacy preservation</li>
                      </ul>
                      <a href="mailto:thebeatfarda@gmail.com?subject=The Legacy Commission: The Director's Cut" className="block w-full text-center border border-white/20 py-3 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition">Commission The Film</a>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#030303] text-center text-xs text-white/30 uppercase tracking-widest">
          &copy; 2026 FardaVision. All Rights Reserved.
      </footer>
    </div>
  );
}
