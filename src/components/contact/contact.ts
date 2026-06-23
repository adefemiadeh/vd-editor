import { Component } from "@/components/base/base.ts";

export class Contact extends Component {
  constructor(targetId: string) {
    super(targetId);
  }

  render(): string {
    return `
      <footer id="contact" class="w-full bg-black pt-32 pb-12 px-6 md:px-12 border-t border-zinc-900 select-none">
        <div class="max-w-6xl mx-auto flex flex-col justify-between h-full">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
            <div class="lg:col-span-5">
              <span class="text-zinc-500 text-xs uppercase tracking-[0.4em] font-semibold block mb-4">Inquiries</span>
              <h3 class="text-white text-4xl font-black uppercase tracking-tighter">Let's build a narrative.</h3>
              <p class="text-zinc-500 text-xs mt-4 tracking-wide max-w-xs leading-relaxed mb-8">
                Available worldwide for commercial production, creative direction, and high-end post-production.
              </p>

              <div class="pt-2 border-t border-zinc-900/50">
                <a 
                  href="mailto:mail@wiedemann.media" 
                  class="inline-flex items-center gap-3 text-white hover:text-gray-400 font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-300 group"
                >
                  <span class="w-2 h-2 rounded-full bg-purple-500 block transition-transform duration-300 group-hover:scale-125"></span>
                  mail@wiedemann.media
                </a>
              </div>
            </div>

            <form id="contact-form" class="lg:col-span-7 w-full flex flex-col space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" required class="bg-zinc-950 border border-zinc-900 text-white text-xs uppercase tracking-widest p-4 focus:outline-none focus:border-zinc-500 transition-colors duration-300 rounded-md" />
                <input type="email" placeholder="Email Address" required class="bg-zinc-950 border border-zinc-900 text-white text-xs uppercase tracking-widest p-4 focus:outline-none focus:border-zinc-500 transition-colors duration-300 rounded-md" />
              </div>
              <textarea placeholder="Tell me about your project" rows="4" required class="bg-zinc-950 border border-zinc-900 text-white text-xs uppercase tracking-widest p-4 focus:outline-none focus:border-zinc-500 transition-colors duration-300 resize-none rounded-md"></textarea>
              <button type="submit" class="group flex items-center gap-3 bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] py-4 px-8 self-end transition-all duration-300 hover:bg-zinc-300 cursor-pointer rounded-md">
                Send Message
                <svg class="w-3.5 h-3.5 stroke-current fill-none stroke-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>

          <div class="border-t border-zinc-900 pt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div class="flex items-center gap-8 text-zinc-500 text-xs tracking-widest uppercase">
              <a href="#" class="hover:text-white transition-colors duration-200">YouTube</a>
              <a href="#" class="hover:text-white transition-colors duration-200">Instagram</a>
              <a href="#" class="hover:text-white transition-colors duration-200">Vimeo</a>
            </div>
            <span class="text-zinc-600 font-mono text-[10px] tracking-widest uppercase">
              &copy; ${new Date().getFullYear()} ADEYEMI ADEYANJU
            </span>
          </div>

        </div>
      </footer>
    `;
  }

  public bindEvents(): void {
    const form = document.getElementById("contact-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Form submission captured cleanly! Ready to route payload to your API endpoint.",
      );
      (form as HTMLFormElement).reset();
    });
  }
}
