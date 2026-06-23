import { Component } from "@/components/base/base.ts";
import { type HeroData } from "@/types/portfolio.ts";

export class Hero extends Component {
  private data: HeroData;

  constructor(targetId: string, data: HeroData) {
    super(targetId);
    this.data = data;
  }

  render(): string {
    return `
      <section class="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between p-6 md:p-12 select-none">
        
        <div class="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <div class="absolute inset-0 bg-black/50 bg-linear-to-b from-black/40 via-transparent to-black/80 z-10"></div>
          <video 
            id="hero-reel"
            class="w-full h-full object-cover scale-[1.01] transition-transform duration-700"
            autoplay 
            muted 
            loop 
            playsinline
            poster="${this.data.fallbackImageUrl}">
            <source src="${this.data.videoUrl}" type="video/mp4">
          </video>
        </div>

        

        <div class="relative z-20 w-full text-center my-auto max-w-5xl mx-auto px-4">
          <h1 class="text-white text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none drop-shadow-2xl opacity-0 animate-fade-in-up">
            ${this.data.title}
          </h1>
          <p class="text-zinc-300 text-xs md:text-sm uppercase tracking-[0.4em] mt-6 opacity-0 animate-fade-in delay-500 max-w-xl mx-auto leading-relaxed">
            ${this.data.subtitle}
          </p>
        </div>

        <div class="relative z-20 w-full flex justify-between items-end mix-blend-difference">
          <a href="#work" id="discover-btn" class="group flex items-center gap-3 text-white tracking-[0.2em] text-xs uppercase font-semibold transition-all duration-300 hover:text-zinc-400">
            <span class="relative overflow-hidden inline-block h-4">
              <span class="inline-block transition-transform duration-300 group-hover:-translate-y-full">${this.data.ctaText}</span>
              <span class="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-white">${this.data.ctaText}</span>
            </span>
            <svg class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>

          <div class="flex flex-col items-center gap-2">
            
            <div class="w-px h-12 bg-zinc-700 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line"></div>
            </div>
          </div>
        </div>

      </section>
    `;
  }

  bindEvents(): void {
    const video = document.getElementById("hero-reel") as HTMLVideoElement;
    const discoverBtn = document.getElementById("discover-btn");

    if (video) {
      // Ensure the video plays immediately smoothly
      video.play().catch(() => {
        console.log(
          "Autoplay blocked by browser; waiting for user interaction layer.",
        );
      });
    }

    if (discoverBtn) {
      discoverBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = document.getElementById("portfolio");
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }
}
