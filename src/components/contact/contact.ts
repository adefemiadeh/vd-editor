import { Component } from "@/components/base/base.ts";

export class Contact extends Component {
  constructor(targetId: string) {
    super(targetId);
  }

  render(): string {
    return `
      <footer id="contact" class="w-full bg-black pt-12 pb-12 px-6 md:px-12 border-t border-zinc-900 select-none">
        <div class="max-w-6xl mx-auto flex flex-col justify-between h-full">
          
          <div class="w-full text-left mb-2">
            <span class="text-zinc-600 text-xs uppercase tracking-[0.4em] font-bold block mb-3">
              contact
            </span>
          </div>

          <div class="w-full flex flex-col items-center text-center py-10 px-6 select-none bg-black">

            <div class="w-32 h-32 rounded-full overflow-hidden border border-zinc-900 mb-5 shadow-2xl bg-zinc-900">
              <img
                src="/assets/images/Adeyemi.jpg" 
                alt="Adeyemi Adeyanju Profile"
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.parentNode.classList.add('bg-orange-500')" 
              />
            </div>

            <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter max-w-5xl leading-none mb-4 drop-shadow-md">
              Got a project? Let's connect.
            </h2>

            <p class="text-zinc-500 text-sm md:text-base tracking-wide max-w-xl leading-relaxed mb-12">
              If you'd like to talk about a project just drop me a message. I'm currently available.
            </p>

            <div class="flex justify-center items-center">
              <a
                href="mailto:ahdemedia@gmail.com"
                class="inline-flex items-center gap-3 text-gray-100 hover:text-gray-500 font-mono text-sm font-bold uppercase tracking-widest transition-colors duration-300 group"
              >
                <span class="w-2.5 h-2.5 rounded-full bg-white block transition-transform duration-300 group-hover:scale-125"></span>
                ahdemedia@gmail.com
              </a>
            </div>

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
    // Interactivity is handled entirely via native mailto: anchors.
  }
}