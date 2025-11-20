import type { LucideIcon } from "lucide-react";
import { Armchair, Car, Hammer, Wrench } from "lucide-react";

export const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '/blog' },
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

export const blogPosts = [
    {
        id: 'blog-post-1',
        title: '10 Things to Consider Before Your Next Home Renovation',
        slug: '10-things-to-consider-before-your-next-home-renovation',
        date: '2024-07-20',
        author: 'John Doe',
        excerpt: 'Thinking about renovating? Here are 10 crucial things to consider before you start knocking down walls. Proper planning can save you time, money, and a lot of headaches.',
        imagePlaceholderId: 'blog-1'
    },
    {
        id: 'blog-post-2',
        title: 'The Rise of Sustainable Building Materials',
        slug: 'the-rise-of-sustainable-building-materials',
        date: '2024-07-15',
        author: 'Jane Smith',
        excerpt: 'Sustainability is more than just a buzzword. We explore the rise of eco-friendly building materials and how you can incorporate them into your next project.',
        imagePlaceholderId: 'blog-2'
    },
    {
        id: 'blog-post-3',
        title: 'Custom Furniture vs. Store-Bought: What\'s the Right Choice for You?',
        slug: 'custom-furniture-vs-store-bought',
        date: '2024-07-10',
        author: 'John Doe',
        excerpt: 'Can\'t decide between a custom-made piece and something off the shelf? We break down the pros and cons to help you make an informed decision for your space.',
        imagePlaceholderId: 'blog-3'
    }
];