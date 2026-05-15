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
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Luxury Residential Interior",
    className: "row-span-2"
  },
  {
    title: "Commercial Design",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    alt: "Modern Office Interior"
  },
  {
    title: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Modular Kitchen Design"
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
    title: "Luxury Villa - Chennai",
    color: "#01c1ff",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85",
    alt: "Luxury Villa Chennai"
  },
  {
    key: "b",
    className: "md:col-[6/10] md:row-[1/2]",
    category: "Commercial Interior",
    title: "Tech Office - Coimbatore",
    color: "#00dfd7",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=85",
    alt: "Tech Office Coimbatore"
  },
  {
    key: "c",
    className: "md:col-[10/13] md:row-[1/2]",
    category: "Modular Kitchen",
    title: "Signature Kitchen - Bangalore",
    color: "#ffc309",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=85",
    alt: "Signature Kitchen Bangalore"
  },
  {
    key: "d",
    className: "md:col-[6/9] md:row-[2/3]",
    category: "Renovation",
    title: "Heritage Apt - Madurai",
    color: "#f9693a",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=85",
    alt: "Heritage Apartment Madurai"
  },
  {
    key: "e",
    className: "md:col-[9/13] md:row-[2/3]",
    category: "Construction",
    title: "Commercial Complex - Hyderabad",
    color: "#01c1ff",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=85",
    alt: "Commercial Complex Hyderabad"
  }
];
