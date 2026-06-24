import { Component } from "@/components/base/base.ts";

export class About extends Component {
  constructor(targetId: string) {
    super(targetId);
  }

  render(): string {
    return `
      <section id="about" class="w-full bg-zinc-950 py-24 px-6 md:px-12 border-t border-zinc-900 select-none">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          <!-- Left Column: Portrait Placement -->
          <div class="md:col-span-5 w-full flex justify-center">
            <div class="relative w-full aspect-4/5 max-w-sm overflow-hidden rounded-lg bg-zinc-900 shadow-2xl">
              <img 
                src="/assets/images/Adeyemi.jpg" 
                alt="Profile Portrait" 
                class="w-full h-full object-cover filter contrast-[1.05] brightness-95"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Right Column: Context Information Block -->
          <div class="md:col-span-7 flex flex-col justify-center text-left">
            <span class="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em] block mb-4">
              About Me
            </span>
            
            <h2 class="text-white text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Who's this guy?
            </h2>
            
            <div class="space-y-6 text-zinc-400 text-sm md:text-base tracking-wide leading-relaxed max-w-2xl">
              <p>
                I do not edit for decoration; I manipulate human attention spans. Operating at the sharp 
edge of high-end post-production, I engineer definitive visual assets for global brands 
and premier creators. 
              </p>
              <p>
                My creative signature balances aggressive editing cadences with 
highly immersive, multi-layered acoustic soundscapes and seamless visual effects.
              </p>
              <p>
                Whether executing cinematic direction for commercial ad campaigns or architecting automated, 
multi-platform short-form delivery pipelines, my work is optimized for a singular metric: 
holding eyes on screens. Every keyframe is deliberate. Every cut is a pulse.
              </p>
            </div>

            <!-- Updated Interactive Action Triggers Row -->
<div class="mt-10 flex flex-wrap gap-4 items-center">
  <a 
    href="#resume" 
    id="resume-btn" 
    class="flex items-center gap-3 border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black text-white text-xs uppercase tracking-[0.2em] font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-white/5 group"
  >
    <!-- Download Icon -->
    <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
    Resumé
  </a>
</div>
          </div>

        </div>
      </section>
    `;
  }

  public bindEvents(): void {
    const watchBtn = document.getElementById("watch-now-btn");
    const resumeBtn = document.getElementById("resume-btn");

    watchBtn?.addEventListener("click", () => {
      // Smoothly navigate back up to view or launch the main hero reel element
      document
        .getElementById("hero-reel")
        ?.scrollIntoView({ behavior: "smooth" });
    });

    resumeBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Resumé download sequence triggered!");
    });
  }
}
