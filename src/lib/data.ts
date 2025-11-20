import type { LucideIcon } from "lucide-react";
import { Armchair, Car, Hammer, Wrench } from "lucide-react";

export const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Design AI', href: '#design-ai' },
  { name: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: "project-1",
    title: "Modern Kitchen Redesign",
    description: "A complete kitchen overhaul featuring custom cabinetry, a spacious island, and state-of-the-art appliances.",
    imagePlaceholderId: "project-1"
  },
  {
    id: "project-2",
    title: "Minimalist Bedroom Suite",
    description: "Custom-designed bed frame and integrated wardrobes to create a serene and clutter-free personal space.",
    imagePlaceholderId: "project-2"
  },
  {
    id: "project-3",
    title: "Living Room Feature Wall",
    description: "An elegant living room update with a bespoke media unit and floating shelves.",
    imagePlaceholderId: "project-3"
  },
  {
    id: "project-4",
    title: "Ergonomic Office Setup",
    description: "Designed and built custom desks and storage solutions for a productive and stylish home office.",
    imagePlaceholderId: "project-4"
  },
];

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Construction",
    description: "Full-scale construction services, from foundations to finishing touches.",
    icon: Hammer,
  },
  {
    title: "Building & Renovation",
    description: "Transforming existing spaces with high-quality renovations and extensions.",
    icon: Wrench,
  },
  {
    title: "Custom Furniture",
    description: "Bespoke furniture design and creation, tailored to your style and needs.",
    icon: Armchair,
  },
  {
    title: "Car Services",
    description: "Expert maintenance and repair services to keep your vehicle in top condition.",
    icon: Car,
  },
];

export const portfolioDescription = "Kafas Build specializes in high-quality, custom craftsmanship across construction, renovation, and bespoke furniture. Our portfolio showcases modern kitchen redesigns with custom cabinetry, minimalist bedroom suites with integrated wardrobes, elegant living room updates featuring bespoke media units, and ergonomic home office setups. We pride ourselves on creating spaces and pieces that are both functional and beautiful, tailored to each client's unique vision.";

export const serviceCatalog = "Our services include: General Construction (new builds, extensions), Building & Renovation (kitchens, bathrooms, full-home makeovers), Custom Furniture (cabinets, tables, seating, storage solutions), and Car Services (maintenance, repairs, custom modifications). We use premium materials and work closely with clients from concept to completion.";
