import { Navbar } from "@/components/navbar/navbar.ts";
import { Hero } from "@/components/hero/hero.ts";
import { Portfolio } from "@/components/portfolio/portfolio.ts";
import { productionWorks } from "@/data/projects.ts";
import { About } from "@/components/about/about.ts";
import { FAQ } from "@/components/faq/faq.ts"; // Import component
import { type FAQItem } from "@/types/portfolio.ts";
import { Contact } from "@/components/contact/contact.ts";
import { Testimonials } from "@/components/testimonials/testimonials.ts";
import { type TestimonialItem } from "@/types/portfolio.ts";
import { Services } from "@/components/services/services.ts";
import { type ServiceTab } from "@/types/portfolio.ts";

document.addEventListener("DOMContentLoaded", () => {
  // Navigation mapping paths
  const navLinks = [
    // { label: "Home", url: "#" },
    { label: "Selected Reels", url: "#work" },
    { label: "About Artist", url: "#about" },
    { label: "Services", url: "#services" },
    { label: "FAQ", url: "#faq" },
    { label: "Get In Touch", url: "#contact" },
  ];

  // ... keep existing heroData and portfolioProjects configurations exactly the same ...
  const heroData = {
    title: "KOLDER",
    subtitle:
      "Filmmaker & Visual Artist pushing boundaries through creative editing",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-cinematic-mountain-landscape-with-a-river-42353-large.mp4",
    fallbackImageUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925",
    ctaText: "Explore Reel",
  };

  // Creative/Production Oriented FAQ Data Array
  const sampleFAQS: FAQItem[] = [
    {
      id: "f1",
      question: "What is your typical turnaround timeline?",
      answer:
        "Turnaround depends heavily on the project scope. Traditional high-end 60-second commercial edits typically close within 2 to 3 weeks including color passing and tracking loops.",
    },
    {
      id: "f2",
      question: "Do you travel for localized shoots?",
      answer:
        "Yes, fully licensed for worldwide commercial production, drone piloting operational loops, and capturing raw narrative asset plates globally.",
    },
    {
      id: "f3",
      question: "What editing software setups do you use?",
      answer:
        "Core work paths rely heavily on DaVinci Resolve Studio for raw color grading pipeline stages, and the Adobe Creative Cloud Suite (Premiere Pro / After Effects) for composition stages.",
    },
    {
      id: "f4",
      question: "How do you manage resource scaling and backups?",
      answer:
        "All active workflows stream across local multi-tier NVMe arrays coupled with complete offsite structural cloud replication systems to ensure asset security.",
    },
  ];

  // Image_34da5b.png matching profile reviews mock array
  const clientReviews: TestimonialItem[] = [
    {
      quote:
        "Thoroughly impressed by the depth and authenticity of the documentaries. Highly recommended for anyone serious about real-world narratives.",
      author: "Michael Thompson",
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
      role: "Freelancer",
      verifiedPlatform: "instagram",
    },
    {
      quote:
        "Perfectly captures our core messaging. The pacing, sound design, and narrative flow completely represents who we are.",
      author: "Noluthando Zuma",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
      role: "@zuma.travels",
      verifiedPlatform: "instagram",
    },
    {
      author: "Javier Fernandez",
      quote:
        "Beyond our expectations. His storytelling and attention to detail have really boosted our client's brand. Highly recommend!",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
      role: "Agency owner",
      verifiedPlatform: null,
    },
  ];
  // Image references correctly aligned to data tabs
  const engineeringCapabilities: ServiceTab[] = [
    {
      id: "s1",
      title: "Picture Editing",
      imageFileName: "/assets/images/Asset_1.png",
      bulletPoints: [
        "Offline & Online Editing",
        "Skilled in Premiere Pro, Final Cut Pro X, and DaVinci Resolve",
        "Support with narrative and conceptual builds by providing visual treatments",
      ],
    },
    {
      id: "s2",
      title: "Motion Design",
      imageFileName: "/assets/images/Asset_2.png",
      bulletPoints: [
        "Skilled in After Effects and complimentary Adobe Suite products",
        "Supports with concept generation and art direction",
        "Visual effects pipeline experience",
      ],
    },
    {
      id: "s3",
      title: "Color Grading",
      imageFileName: "/assets/images/Asset_3.png",
      bulletPoints: [
        "Proficiency in DaVinci Resolve",
        "Visual style creation and shot matching",
        "Skin tone correction",
      ],
    },
    {
      id: "s4",
      title: "Post Producing",
      imageFileName: "/assets/images/Asset_2.png",
      bulletPoints: [
        "Comprehensive project planning and coordination",
        "Effective resource and budget management",
        "Successful stakeholder collaboration",
      ],
    },
  ];

  // Order of operations mounting
  new Navbar("nav-container", navLinks).mount();
  new Hero("hero-container", heroData).mount();
  new Portfolio("portfolio-container", productionWorks).mount();
  new About("about-container").mount();
  new Services("services-container", engineeringCapabilities).mount();
  new FAQ("faq-container", sampleFAQS).mount();
  new Contact("contact-container").mount();
  new Testimonials("testimonials-container", clientReviews).mount();
});
