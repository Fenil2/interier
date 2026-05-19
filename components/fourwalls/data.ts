export type NavLink = {
  label: string;
  href: string;
};

export type HeroMosaicItem = {
  title: string;
  image: string;
  alt: string;
  className?: string;
};

export type StatItem = [string, string, string];
export type MetricItem = [string, string, string];
export type ProgressItem = [string, string, string];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why" },
  { label: "Clients", href: "#testimonials" },
  { label: "Blog", href: "#blog" }
];

export const heroMosaic: HeroMosaicItem[] = [
  {
    title: "Residential Interior",
    image: "/Gemini_Generated_Image_2yqeyk2yqeyk2yqe.jpg",
    alt: "Luxury Residential Interior with LED Cabinets",
    className: "row-span-2"
  },
  {
    title: "False Ceiling Design",
    image: "/Gemini_Generated_Image_tolc7utolc7utolc.jpg",
    alt: "False Ceiling with Warm LED and Ceiling Fans"
  },
  {
    title: "Modular Kitchen",
    image: "/Gemini_Generated_Image_nf0zo9nf0zo9nf0z.jpg",
    alt: "Modular Kitchen Blue and Cream Design"
  }
];

export const stats: StatItem[] = [
  ["500+", "Projects Completed", "Across South India"],
  ["South India", "Strong Presence", "Interior and Construction Solutions"],
  ["End to End", "Turnkey Solutions", "On Time Project Delivery"]
];

export const metrics: MetricItem[] = [
  ["500+", "Projects Completed", "#01c1ff"],
  ["South India", "Strong Presence", "#00dfd7"],
  ["End to End", "Turnkey Solutions", "#ffc309"],
  ["On Time", "Project Delivery", "#f9693a"]
];

export const progress: ProgressItem[] = [
  ["500+ Projects", "100%", "#01c1ff"],
  ["Turnkey Solutions", "100%", "#00dfd7"],
  ["Transparent Pricing", "100%", "#ffc309"],
  ["Experienced Team", "100%", "#f9693a"]
];

export const projectFilters: string[] = ["All", "Residential Interiors", "Commercial Interiors", "Construction Projects", "Renovation Projects"];

export type ProjectItem = {
  key: string;
  className: string;
  category: string;
  title: string;
  color: string;
  image: string;
  alt: string;
};

export const projects: ProjectItem[] = [
  {
    key: "a",
    className: "md:col-[1/6] md:row-[1/3]",
    category: "Residential Interior",
    title: "Bedroom Suite - Bangalore",
    color: "#01c1ff",
    image: "/Gemini_Generated_Image_3ohdrs3ohdrs3ohd.png",
    alt: "Bedroom Suite with Dark Marble Wardrobe"
  },
  {
    key: "b",
    className: "md:col-[6/10] md:row-[1/2]",
    category: "Modular Kitchen",
    title: "Modular Kitchen - Chennai",
    color: "#00dfd7",
    image: "/Gemini_Generated_Image_f9q0yrf9q0yrf9q0.jpg",
    alt: "Red Modular Kitchen Design"
  },
  {
    key: "c",
    className: "md:col-[10/13] md:row-[1/2]",
    category: "Wardrobe & Storage",
    title: "Custom Wardrobe - Hyderabad",
    color: "#ffc309",
    image: "/Gemini_Generated_Image_91jskm91jskm91js.jpg",
    alt: "Purple Custom Wardrobe and Storage"
  },
  {
    key: "d",
    className: "md:col-[6/9] md:row-[2/3]",
    category: "Construction Projects",
    title: "Artistic False Ceiling - Coimbatore",
    color: "#f9693a",
    image: "/Gemini_Generated_Image_ka6k9pka6k9pka6k.jpg",
    alt: "Decorative False Ceiling with Curved LED Patterns"
  },
  {
    key: "e",
    className: "md:col-[9/13] md:row-[2/3]",
    category: "Residential Interior",
    title: "Living Room Design - Madurai",
    color: "#01c1ff",
    image: "/Gemini_Generated_Image_v8q3ggv8q3ggv8q3.jpg",
    alt: "Room Divider and Partition with Display Niches"
  }
];
