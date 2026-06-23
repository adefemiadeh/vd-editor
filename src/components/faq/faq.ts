import { Component } from "@/components/base/base.ts";
import { type FAQItem } from "@/types/portfolio.ts";

export class FAQ extends Component {
  private faqs: FAQItem[];
  private openIds: Set<string> = new Set();

  constructor(targetId: string, faqs: FAQItem[]) {
    super(targetId);
    this.faqs = faqs;
  }

  render(): string {
    return `
      <section id="faq" class="w-full bg-black py-24 px-6 md:px-12 border-t border-zinc-900 select-none">
        <div class="max-w-7xl mx-auto">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div class="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
              <span class="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em] block">
                Faq
              </span>
              <h2 class="text-white text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
                Frequently Asked questions
              </h2>
              <p class="text-zinc-400 text-xs md:text-sm tracking-wide max-w-sm leading-relaxed pt-2">
                Have a burning question regarding production variables, rates, or delivery logistics? Explore the standard operational matrices below.
              </p>
              
              <div class="pt-6">
                <a href="#contact" class="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200 group">
                  Still Curious? Ask directly
                  <svg class="w-3.5 h-3.5 stroke-current fill-none stroke-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              ${this.faqs
                .map((faq) => {
                  const isOpen = this.openIds.has(faq.id);
                  return `
                  <div 
                    data-faq-id="${faq.id}"
                    class="faq-tile-card bg-zinc-950/40 border transition-all duration-300 p-6 rounded-lg cursor-pointer group flex flex-col justify-between min-h-25
                    ${isOpen ? "border-zinc-700 bg-zinc-900/20 shadow-xl" : "border-zinc-900 hover:border-zinc-800"}"
                  >
                    
                    <div class="flex justify-between items-start gap-4 w-full">
                      <h4 class="text-white text-sm font-bold uppercase tracking-wide leading-snug group-hover:text-zinc-200 transition-colors duration-200">
                        ${faq.question}
                      </h4>
                      
                      <div class="w-5 h-5 rounded-full border border-zinc-800 group-hover:border-zinc-600 flex items-center justify-center shrink-0 text-zinc-400 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-white border-zinc-500" : ""}">
                        <svg class="w-3 h-3 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                          ${
                            isOpen
                              ? `<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />`
                              : `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />`
                          }
                        </svg>
                      </div>
                    </div>

                    <div class="overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100 mt-4 pt-4 border-t border-zinc-900/60" : "max-h-0 opacity-0"}">
                      <p class="text-zinc-400 text-xs md:text-sm font-medium tracking-wide leading-relaxed">
                        ${faq.answer}
                      </p>
                    </div>

                  </div>
                `;
                })
                .join("")}
            </div>

          </div>

        </div>
      </section>
    `;
  }

  public bindEvents(): void {
    const cards = document.querySelectorAll(".faq-tile-card");

    cards.forEach((card) => {
      card.addEventListener("click", (_e) => {
        const id = card.getAttribute("data-faq-id");
        if (!id) return;

        // Toggle state sequence configuration inside collection mask
        if (this.openIds.has(id)) {
          this.openIds.delete(id);
        } else {
          this.openIds.add(id);
        }

        // Render update loop execution tracking
        this.update();
      });
    });
  }
}
