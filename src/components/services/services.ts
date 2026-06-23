import { Component } from "@/components/base/base.ts";
import { type ServiceTab } from "@/types/portfolio.ts";

export class Services extends Component {
  private services: ServiceTab[];
  private activeId: string;

  constructor(targetId: string, services: ServiceTab[]) {
    super(targetId);
    this.services = services;
    this.activeId = services[0]?.id || "";
  }

  render(): string {
    return `
      <section id="services" class="w-full bg-black py-24 px-6 md:px-12 border-t border-zinc-900 select-none">
        <div class="max-w-6xl mx-auto">
          
          <div class="text-center mb-16">
            <span class="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em] block mb-3">Services</span>
            <h2 class="text-white text-4xl md:text-5xl font-black tracking-tight mb-4">Your one stop shop</h2>
            <p class="text-zinc-400 text-sm uppercase tracking-wider font-medium">Simplify post production</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start min-h-125">
            
            <div class="lg:col-span-4 flex flex-col space-y-4 pt-8">
              ${this.services
                .map((service) => {
                  const isActive = service.id === this.activeId;
                  return `
                  <button 
                    data-service-id="${service.id}"
                    class="service-tab-trigger text-left py-4 px-6 border-l-2 transition-all duration-300 font-bold text-base md:text-lg tracking-wide uppercase cursor-pointer block w-full
                    ${
                      isActive
                        ? "border-purple-600 text-white bg-zinc-900/40 font-black"
                        : "border-zinc-900 text-zinc-600 hover:text-zinc-300 hover:border-zinc-700"
                    }"
                  >
                    ${service.title}
                  </button>
                `;
                })
                .join("")}
            </div>

            <div class="lg:col-span-8 flex flex-col justify-between space-y-10">
              
              <div class="w-full aspect-16/10 overflow-hidden rounded-xl bg-zinc-950/40 border border-zinc-900 flex items-center justify-center p-4 shadow-2xl relative">
                ${this.services
                  .map(
                    (service) => `
                  <img 
                    src="${service.imageFileName}" 
                    alt="${service.title}"
                    class="absolute max-w-full max-h-full object-contain transition-all duration-300 ease-out p-4
                    ${service.id === this.activeId ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}"
                    loading="lazy"
                  />
                `,
                  )
                  .join("")}
              </div>

              <div class="w-full px-4">
                <div class="flex flex-col space-y-4 max-w-2xl">
                  ${
                    this.services
                      .find((s) => s.id === this.activeId)
                      ?.bulletPoints.map(
                        (point) => `
                    <div class="flex items-start gap-4 text-zinc-300 text-sm md:text-base font-medium tracking-wide leading-relaxed">
                      <svg class="w-4 h-4 text-zinc-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <span>${point}</span>
                    </div>
                  `,
                      )
                      .join("") || ""
                  }
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    `;
  }

  public bindEvents(): void {
    // Re-query the fresh DOM triggers directly
    const triggers = document.querySelectorAll(".service-tab-trigger");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const clickedId = (e.currentTarget as HTMLButtonElement).getAttribute(
          "data-service-id",
        );

        if (!clickedId || clickedId === this.activeId) return;

        // Mutate the active state token reference index link
        this.activeId = clickedId;

        // Execute dynamic redraw step instantly
        this.update();
      });
    });
  }
}
