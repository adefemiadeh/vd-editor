import { Component } from "@/components/base/base.ts";
import { type ProjectItem } from "@/types/portfolio.ts";

export class Portfolio extends Component {
  private projects: ProjectItem[];
  private currentIndex: number = 0;
  private isPlaying: { [key: string]: boolean } = {};

  constructor(targetId: string, projects: ProjectItem[]) {
    super(targetId);
    this.projects = projects;
  }

  render(): string {
    const currentProject = this.projects[this.currentIndex];
    if (!currentProject)
      return `<section id="portfolio" class="bg-black py-24"></section>`;

    const hasVideoStarted = this.isPlaying[currentProject.id];

    return `
      <section class="w-full bg-black pt-16 pb-12 overflow-hidden select-none relative">
        <div class="max-w-7xl mx-auto px-6 md:px-12 mb-6">
          <span class="text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold block">
            Trusted By Brands
          </span>
        </div>
        
        <div class="w-full relative py-4 border-b border-zinc-900/60">
          <div class="absolute inset-y-0 left-0 w-24 bg-linear-to-rom-black to-transparent z-10 pointer-events-none"></div>
          <div class="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div class="flex whitespace-nowrap w-max gap-16 md:gap-24 animate-marquee hover:[animation-play-state:paused]">
            <div class="flex items-center gap-16 md:gap-24 shrink-0">
              <div class="flex items-center gap-3 font-black tracking-[0.3em] text-xs text-zinc-500 hover:text-white transition-colors duration-200"><svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M12 4.5v15m7.5-7.5h-15"/></svg>RED BULL</div>
              <div class="flex items-center gap-3 font-black tracking-[0.3em] text-xs text-zinc-500 hover:text-white transition-colors duration-200"><svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m16.5 7.5-9 9M7.5 7.5l9 9"/></svg>DJI CINEMA</div>
              <div class="flex items-center gap-3 font-black tracking-[0.3em] text-xs text-zinc-500 hover:text-white transition-colors duration-200"><svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M21 7.5 12 3 3 7.5M21 7.5v9l-9 4.5m9-13.5-9 4.5m0 0L3 7.5m9 4.5v9m0-9L3 16.5"/></svg>GOPRO</div>
              <div class="flex items-center gap-3 font-black tracking-[0.3em] text-xs text-zinc-500 hover:text-white transition-colors duration-200"><svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="m4.5 16.5 7.5-7.5 7.5 7.5m-15-6 7.5-7.5 7.5 7.5"/></svg>GYMSHARK</div>
            </div>
            <div class="flex items-center gap-16 md:gap-24 shrink-0" aria-hidden="true">
              <div class="flex items-center gap-3 font-black tracking-[0.3em] text-xs text-zinc-500 hover:text-white transition-colors duration-200"><svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M12 4.5v15m7.5-7.5h-15"/></svg>RED BULL</div>
              <div class="flex items-center gap-3 font-black tracking-[0.3em] text-xs text-zinc-500 hover:text-white transition-colors duration-200"><svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m16.5 7.5-9 9M7.5 7.5l9 9"/></svg>DJI CINEMA</div>
              <div class="flex items-center gap-3 font-black tracking-[0.3em] text-xs text-zinc-500 hover:text-white transition-colors duration-200"><svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M21 7.5 12 3 3 7.5M21 7.5v9l-9 4.5m9-13.5-9 4.5m0 0L3 7.5m9 4.5v9m0-9L3 16.5"/></svg>GOPRO</div>
              <div class="flex items-center gap-3 font-black tracking-[0.3em] text-xs text-zinc-500 hover:text-white transition-colors duration-200"><svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="m4.5 16.5 7.5-7.5 7.5 7.5m-15-6 7.5-7.5 7.5 7.5"/></svg>GYMSHARK</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" class="w-full bg-black py-20 px-6 md:px-12 select-none text-center">
        <div class="max-w-5xl mx-auto flex flex-col items-center">
          
          <span class="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em] block mb-3">Portfolio</span>
          <h2 class="text-white text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">See some of my work</h2>
          <p class="text-zinc-400 text-xs md:text-sm tracking-wide font-medium mb-12">Don't believe me? Check these projects out!</p>

          <div class="relative w-full aspect-video bg-zinc-950 overflow-hidden rounded-2xl border border-zinc-900/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] group mb-8">
            
            ${!hasVideoStarted
        ? `
              <div class="absolute inset-0 w-full h-full z-20 transition-opacity duration-500">
                <img 
                  src="https://img.youtube.com/vi/${currentProject.youtubeId}/maxresdefault.jpg" 
                  alt="${currentProject.title}" 
                  class="w-full h-full object-cover brightness-[0.75] transition-transform duration-700 group-hover:scale-101"
                />
                
                <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                <div class="absolute bottom-8 left-8 text-left max-w-lg z-30">
                  <h3 class="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-md mb-1">${currentProject.title}</h3>
                  <span class="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold block">'${currentProject.year.substring(2)} // ${currentProject.category}</span>
                </div>

                <button id="play-video-trigger" class="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110 cursor-pointer focus:outline-none z-30">
                  <svg class="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            `
        : `
              <iframe 
                class="absolute inset-0 w-full h-full z-10" 
                src="https://www.youtube.com/embed/${currentProject.youtubeId}?autoplay=1&rel=0" 
                title="${currentProject.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
              ></iframe>
            `
      }
          </div>

          <div class="flex items-center justify-center gap-6 mt-4">
            <span class="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              Next video <span class="text-white font-bold ml-1">${this.currentIndex + 1}/${this.projects.length}</span>
            </span>

            <div class="flex items-center gap-3">
              <button id="prev-slide-btn" class="w-10 h-10 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none">
                <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button id="next-slide-btn" class="w-10 h-10 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none">
                <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  public bindEvents(): void {
    const playBtn = document.getElementById("play-video-trigger");
    const prevBtn = document.getElementById("prev-slide-btn");
    const nextBtn = document.getElementById("next-slide-btn");

    playBtn?.addEventListener("click", () => {
      const currentProject = this.projects[this.currentIndex];
      if (currentProject) {
        this.isPlaying[currentProject.id] = true;
        this.update();
      }
    });

    prevBtn?.addEventListener("click", () => {
      // Clean up playing loops before jumping tracks
      this.resetVideoStates();
      this.currentIndex =
        (this.currentIndex - 1 + this.projects.length) % this.projects.length;
      this.update();
    });

    nextBtn?.addEventListener("click", () => {
      this.resetVideoStates();
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.update();
    });
  }

  private resetVideoStates(): void {
    this.isPlaying = {};
  }
}
