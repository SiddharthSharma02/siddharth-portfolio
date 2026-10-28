// Everything the page says lives here, so copy and links can change without touching layout code.

export const site = {
  name: "Siddharth Sharma",
  handle: "siddharth.sharma",
  role: "Engineer & co-founder",
  email: "siddharth44sharma@gmail.com",
  location: "India",
  url: "https://siddharth-portfolio-lilac-eight.vercel.app",
  description:
    "Siddharth Sharma builds scalable applications. Co-founder of Everything Fine and Technical Head at Shramic Crossgar Private Limited.",
  links: {
    github: "https://github.com/SiddharthSharma02",
    // Add these when ready; empty links are hidden.
    linkedin: "",
    instagram: "",
    resume: "",
  },
};

export const facts = [
  { label: "currently in", value: "India" },
  { label: "co-founder of", value: "Everything Fine" },
  { label: "technical head at", value: "Shramic Crossgar Pvt. Ltd." },
  { label: "focused on", value: "scalable products, end to end" },
];

export type Venture = {
  name: string;
  role: string;
  summary: string;
  detail: string;
  href?: string;
  linkLabel?: string;
};

export const ventures: Venture[] = [
  {
    name: "Everything Fine",
    role: "Co-founder",
    summary: "A food & beverage brand making guilt-free treats from real, wholesome ingredients.",
    detail:
      "I build the company and the software under it: the launch site, the ordering backend in TypeScript and Postgres, and the systems the team runs on.",
    href: "https://everything-fine-frontend.vercel.app",
    linkLabel: "Visit the launch page",
  },
  {
    name: "Shramic Crossgar",
    role: "Technical Head",
    summary: "Where I run the technology side of Shramic Crossgar Private Limited.",
    detail:
      "I lead the technology: architecture, product delivery and the engineering calls that decide how well things hold up as the business grows.",
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  year: string;
  live?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "mountain-chapters",
    name: "The Mountain Chapters",
    summary:
      "Booking platform for Himalayan travel: destinations, stays, road trips and travel stories, with a full admin dashboard behind it.",
    stack: ["Next.js 16", "Supabase", "Postgres", "Auth"],
    year: "2026",
    live: "https://the-mountain-chapters.vercel.app",
    repo: "https://github.com/SiddharthSharma02/the-mountain-chapters",
    image: "/work/mountain-chapters.jpg",
  },
  {
    slug: "rsfp",
    name: "RSFP Organic Himachal",
    summary:
      "Storefront for homemade pahadi pickles and sharbats made in small batches in Sanet, Himachal. Orders go straight to WhatsApp.",
    stack: ["Next.js", "TypeScript"],
    year: "2026",
    live: "https://rsfp-organic-himachal.vercel.app",
    image: "/work/rsfp.jpg",
  },
  {
    slug: "fwnb",
    name: "Fitness with Nishant Barla",
    summary:
      "Single-page site for a Shimla personal trainer: programs, certifications, client transformations and one-tap booking.",
    stack: ["Next.js", "TypeScript"],
    year: "2026",
    live: "https://fwnb.vercel.app",
    image: "/work/fwnb.jpg",
  },
  {
    slug: "everything-fine",
    name: "Everything Fine",
    summary:
      "My own brand. Launch page with a waitlist, plus the backend that will run orders: TypeScript services on Postgres.",
    stack: ["Next.js", "TypeScript", "Postgres"],
    year: "2026",
    live: "https://everything-fine-frontend.vercel.app",
    image: "/work/everything-fine.jpg",
  },
];

export const experiments: Project[] = [
  {
    slug: "clipkart",
    name: "ClipKart",
    summary: "Turns any YouTube video into a captioned vertical short for Reels and Shorts.",
    stack: ["Python", "Speech recognition"],
    year: "2025",
    repo: "https://github.com/SiddharthSharma02/ClipKart-Final",
  },
  {
    slug: "voiceover",
    name: "Video to voiceover",
    summary: "Feeds video frames to GPT-4o Vision and narrates the result as a tutorial voiceover.",
    stack: ["Python", "OpenAI"],
    year: "2025",
    repo: "https://github.com/SiddharthSharma02/gpt4o-video-to-voiceover",
  },
  {
    slug: "organ-detection",
    name: "Organ detection in surgery",
    summary: "YOLOv8 model that segments organs and tools in laparoscopic footage, shipped with TensorFlow Lite.",
    stack: ["YOLOv8", "TFLite"],
    year: "2025",
    repo: "https://github.com/SiddharthSharma02/Organ-Detection-During-Laparoscopic-Surgery",
  },
  {
    slug: "emotion",
    name: "Facial emotion detector",
    summary: "Image classifier for facial expressions, about 80% accurate after 100 epochs.",
    stack: ["Python", "CNN"],
    year: "2024",
    repo: "https://github.com/SiddharthSharma02/Facial-Emotion-Detector",
  },
];

export const featured = {
  name: "UnivLabs",
  tagline: "Surgical systems, designed and made in India.",
  summary:
    "The biggest build I've shipped: the full website for UnivLabs Technologies, a maker of 4K ICG surgical vision systems, laparoscopic instruments and operating-room devices.",
  points: [
    "Built from the company's brand book, page by page",
    "Six product families, from the Spectra vision suite to Am-SafeX",
    "Specialty paths for general surgery, urology, gynaecology and orthopaedics",
    "Demo requests and buy-or-pay-per-use pricing flows",
  ],
  stack: ["Next.js", "TypeScript", "Brand system"],
  live: "https://univlabs-website.vercel.app",
  repo: "https://github.com/SiddharthSharma02/univlabs-website",
  shots: [
    { src: "/work/univlabs.jpg", alt: "UnivLabs home page: See what white light can't" },
    { src: "/work/univlabs-spectra.jpg", alt: "UnivLabs Spectra product page" },
    { src: "/work/univlabs-products.jpg", alt: "UnivLabs products overview" },
    { src: "/work/univlabs-specialties.jpg", alt: "UnivLabs specialties page" },
  ],
};

export type Product = {
  name: string;
  kind: string;
  size: string;
  claims: string[];
  image: string;
  width: number;
  height: number;
  tone: "sugarfix" | "tavern";
};

export const products: Product[] = [
  {
    name: "SugarFix",
    kind: "Monk fruit based sweetener",
    size: "200 gm",
    claims: ["Zero preservatives", "Zero calories", "Zero guilt"],
    image: "/products/sugarfix.png",
    width: 690,
    height: 760,
    tone: "sugarfix",
  },
  {
    name: "Tavern",
    kind: "Arabica coffee sweetened with monk fruit",
    size: "100 gm",
    claims: ["Sweet without sugar", "Low in calories", "Heavy on flavour"],
    image: "/products/tavern.png",
    width: 497,
    height: 738,
    tone: "tavern",
  },
];

export const mochi = [
  { src: "/mochi/lift.png", w: 640, h: 592, label: "Lifts", alt: "Mochi lifting a barbell overhead, winking" },
  { src: "/mochi/run.png", w: 250, h: 372, label: "Runs", alt: "Mochi running with headphones on" },
  { src: "/mochi/flip.png", w: 640, h: 663, label: "Flips", alt: "Mochi doing a cartwheel" },
  { src: "/mochi/coffee.png", w: 640, h: 626, label: "Refuels", alt: "Mochi at a table raising a cup of coffee" },
];

export const ticker = ["SugarFix", "Tavern", "Mochi", "UnivLabs", "The Mountain Chapters", "RSFP Organic Himachal", "Everything Fine"];
