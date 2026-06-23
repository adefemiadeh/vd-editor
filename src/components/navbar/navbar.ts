import { Component } from "@/components/base/base.ts";
import { type NavLink } from "@/types/portfolio.ts";

export class Navbar extends Component {
  private links: NavLink[];
  private isOpen: boolean = false;

  constructor(targetId: string, links: NavLink[]) {
    super(targetId);
    this.links = links;
  }

  render(): string {
    return `
      <!-- Fixed Shell with smooth background scrolling transitions -->
      <nav id="main-navbar" class="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-5 flex justify-between items-center transition-all duration-300 ease-in-out bg-transparent backdrop-blur-none border-b border-transparent select-none">
        
        <!-- MOBILE VIEW MODE ONLY (< md Viewport) -->
        <div class="flex items-center justify-between w-full md:hidden">
        <a href="#"
          <!-- Subtle Floating Mobile Brand Signature -->
          <span class="text-white font-black uppercase text-sm tracking-widest mix-blend-difference">KØLD</span>
        </a>
          <button id="menu-toggle" class="group flex items-center gap-4 text-white focus:outline-none cursor-pointer mix-blend-difference" aria-label="Toggle Menu">
            <div class="flex flex-col gap-1.5 w-6 overflow-hidden">
              <span id="mobile-bar-1" class="w-6 h-0.5 bg-white transform transition-transform duration-300 origin-left"></span>
              <span id="mobile-bar-2" class="w-4 h-0.5 bg-white transform transition-transform duration-300 origin-left self-end group-hover:w-6"></span>
            </div>
            <span id="menu-text" class="text-[10px] uppercase font-bold tracking-[0.3em]">Menu</span>
          </button>
          
          
        </div>

        <!-- DESKTOP VIEW MODE ONLY (>= md Viewport - Structured exactly like image_354edb.png) -->
        <div class="hidden md:flex items-center justify-between w-full mix-blend-difference">
          
          <!-- Left Logo Branding -->
          <a href="#" class="text-white text-xl md:text-2xl font-black tracking-tighter uppercase font-serif hover:opacity-80 transition-opacity duration-200">
            køld
          </a>

          <!-- Right-Aligned Navigation Cluster -->
          <div class="flex items-center gap-8 lg:gap-10">
            <div class="flex items-center gap-6 lg:gap-8">
              ${this.links
                .filter((link) => link.label.toLowerCase() !== "contact") // Pull contact out to style as button separately
                .map(
                  (link) => `
                  <a href="${link.url}" class="desktop-nav-link text-white text-[11px] lg:text-xs font-bold uppercase tracking-[0.25em] hover:text-zinc-400 transition-colors duration-200">
                    ${link.label}
                  </a>
                `,
                )
                .join("")}
            </div>

            <!-- Sleek Horizontal Separator Rule -->
            <div class="h-4 w-px bg-zinc-800"></div>

            <!-- Dynamic Pill Contact Action Button Callout -->
            <a 
              href="#contact" 
              id="desktop-contact-btn"
              class="bg-white text-black text-[10px] font-bold uppercase tracking-[0.25em] py-2.5 px-6 rounded-md hover:bg-zinc-200 transition-colors duration-200 shadow-md"
            >
              Contact
            </a>
          </div>

        </div>
      </nav>

      <!-- MOBILE FULLSCREEN DRAWER OVERLAY -->
      <div id="menu-overlay" class="fixed inset-0 bg-zinc-950/98 z-40 flex flex-col justify-center items-center opacity-0 pointer-events-none transition-all duration-500 ease-out backdrop-blur-md md:hidden">
        <div class="flex flex-col space-y-6 text-center">
          ${this.links
            .map(
              (link, index) => `
            <div class="overflow-hidden py-1">
              <a href="${link.url}" class="nav-item-link block text-zinc-500 hover:text-white text-4xl font-black uppercase tracking-tighter transition-colors duration-300 transform translate-y-full" style="transition-delay: ${index * 50}ms">
                ${link.label}
              </a>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  public bindEvents(): void {
    const navbar = document.getElementById("main-navbar");
    const toggleBtn = document.getElementById("menu-toggle");
    const overlay = document.getElementById("menu-overlay");
    const menuText = document.getElementById("menu-text");
    const bar1 = document.getElementById("mobile-bar-1");
    const bar2 = document.getElementById("mobile-bar-2");

    // Select links across both layout variations
    const mobileLinks = document.querySelectorAll(".nav-item-link");
    const desktopLinks = document.querySelectorAll(".desktop-nav-link");
    const desktopContactBtn = document.getElementById("desktop-contact-btn");

    // Scroll Background Morph Engine
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar?.classList.remove(
          "bg-transparent",
          "backdrop-blur-none",
          "border-transparent",
          "py-4",
          "md:py-5",
        );
        navbar?.classList.add(
          "bg-black/60",
          "backdrop-blur-lg",
          "border-zinc-900/40",
          "py-3",
          "md:py-3.5",
        );
      } else {
        navbar?.classList.remove(
          "bg-black/60",
          "backdrop-blur-lg",
          "border-zinc-900/40",
          "py-3",
          "md:py-3.5",
        );
        navbar?.classList.add(
          "bg-transparent",
          "backdrop-blur-none",
          "border-transparent",
          "py-4",
          "md:py-5",
        );
      }
    });

    // Mobile Hamburger Toggle Logic
    const toggleMenu = () => {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        overlay?.classList.remove("opacity-0", "pointer-events-none");
        overlay?.classList.add("opacity-100", "pointer-events-auto");
        if (menuText) menuText.innerText = "Close";
        bar1?.classList.add(
          "rotate-45",
          "translate-x-[3px]",
          "translate-y-[1px]",
        );
        bar2?.classList.add(
          "-rotate-45",
          "w-6",
          "translate-x-[3px]",
          "translate-y-[-1px]",
        );
        mobileLinks.forEach((link) => {
          link.classList.remove("translate-y-full");
          link.classList.add("translate-y-0");
        });
      } else {
        overlay?.classList.remove("opacity-100", "pointer-events-auto");
        overlay?.classList.add("opacity-0", "pointer-events-none");
        if (menuText) menuText.innerText = "Menu";
        bar1?.classList.remove(
          "rotate-45",
          "translate-x-[3px]",
          "translate-y-[1px]",
        );
        bar2?.classList.remove(
          "-rotate-45",
          "w-6",
          "translate-x-[3px]",
          "translate-y-[1px]",
        );
        mobileLinks.forEach((link) => {
          link.classList.remove("translate-y-0");
          link.classList.add("translate-y-full");
        });
      }
    };

    toggleBtn?.addEventListener("click", toggleMenu);

    // Setup Global Smooth Anchor Traversal across all anchors
    const handleSmoothScroll = (e: Event) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (this.isOpen) toggleMenu(); // shut drawer if open

      if (href?.startsWith("#")) {
        e.preventDefault();
        document
          .getElementById(href.substring(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    mobileLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll),
    );
    desktopLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll),
    );
    desktopContactBtn?.addEventListener("click", handleSmoothScroll);
  }
}
