import { Building, Car, Cog, Hammer, ShieldCheck, Truck, Users, Warehouse, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navLinks = [
  { name: 'Projects', href: '/#projects' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/about' },
  { name: 'Vision', href: '/vision' },
  { name: 'Blog', href: '/blog' },
  { name: 'Design AI', href: '/#design-ai' },
  { name: 'Contact', href: '/#contact' },
];

export const projects = [
  {
    id: "project-1",
    title: "Major Road Construction",
    description: "Involved in the implementation of significant road construction projects across the nation, ensuring connectivity and quality infrastructure.",
    imagePlaceholderId: "project-1"
  },
  {
    id: "project-2",
    title: "Structural Engineering Projects",
    description: "Design and construction of offices, troop accommodation, warehouses, schools, and hospitals with a focus on robust engineering solutions.",
    imagePlaceholderId: "project-2"
  },
  {
    id: "project-3",
    title: "Oil and Gas Infrastructure",
    description: "Pipeline procurement, installation, and maintenance for key players in the oil and gas sector.",
    imagePlaceholderId: "project-3"
  },
  {
    id: "project-4",
    title: "Erosion Control & Shoreline Protection",
    description: "Specialized engineering solutions for shoreline protection and erosion control to preserve land and infrastructure.",
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
    title: "Constructions",
    description: "Planning, design, and management of large projects like bridges, buildings, and transport links.",
    icon: Building,
  },
  {
    title: "Engineering Services",
    description: "Civil, Electrical, Structural & Mechanical engineering for projects of all scales.",
    icon: Cog,
  },
  {
    title: "General Contracts",
    description: "A trusted partner for a wide range of general contracting needs in public and private sectors.",
    icon: Hammer,
  },
  {
    title: "Property & Facility Mgmt",
    description: "Expert property development and comprehensive estate/facility management services.",
    icon: Warehouse,
  },
  {
    title: "Security & Road Projects",
    description: "Provider and installer of security equipment and specialist in road construction projects.",
    icon: ShieldCheck,
  },
  {
    title: "Logistics",
    description: "Streamlined logistics solutions to support complex construction and procurement needs.",
    icon: Truck,
  },
  {
    title: "Finishing & Furnishing",
    description: "High-quality finishing and furnishing services to complete projects with style and precision.",
    icon: Wrench,
  },
  {
    title: "Consultancy Services",
    description: "Providing expert consultancy from a team tested in various fields of human endeavor.",
    icon: Users,
  },
];


export const portfolioDescription = "KAFAS CONSTRUCTION AND BUILDING CONCEPT LTD specializes in CIVIL/STRUCTURAL ENGINEERING, SOLAR ENERGY PROJECTS, SHORELINE PROTECTION, EROSION CONTROL, HYDRAULIC ENGINEERING (BOREHOLES/DREDGING), PIPELINE PROCUREMENT & MAINTENANCE, DESIGN AND PROJECT MANAGEMENT, RENEWABLE ENERGY, and more. Our directors have extensive experience in significant road, oil and gas, and structural construction projects across Nigeria. We manage projects from minor works to large-scale turn-key implementations including offices, warehouses, schools, hospitals, and rural electrification.";

export const serviceCatalog = "Our services include: Constructions (buildings, bridges, transport links), Engineering Services (Civil, Electrical, Structural & Mechanical), General contracts, Property Development and Estate/Facility Management, Security Equipment Provider/Installer & Road Projects (highways, expressways, asphalt paving, bridge construction), Logistics, Consultancy Services, Supplies/Procurement, and Finishing & furnishing. We are equipped to handle projects of any scale, providing first-rate services to both public and private sector clients.";

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

export const aboutUsContent = {
  overview: "KAFAS CONSTRUCTION AND BUILDING CONCEPT LTD was registered on January 23, 2017 with registration number RC: 1386533, with the Corporate Affairs Commission (CAC) under the Companies and Allied Matters Act Laws of the Federal Republic of Nigeria 1990. The company specializes in CIVIL/STRUCTURAL ENGINEERING, SOLAR ENERGY PROJECTS, SHORELINE PROTECTION, EROSION CONTROL & EIA, HYDRAULIC ENGINEERING– BOREHOLES DRILLING/DREDGING, PIPELINE PROCUREMENT, INSTALLATION & MAINTENANCE, DESIGN AND PROJECT MANAGEMENT SERVICES, RENEWABLE ENERGY, MINERAL EXPLORATION, MINING AND RELATED SERVICE IRRIGATION WORKS, DAM WORKS, MATERIALS/EQUIPMENT PROCUREMENT AND LEASING, FINISHING & FURNISHING AND GENERAL CONTRACTS.",
  experience: "Our directors have the necessary experience in Nigeria, having taken part in the implementation of significant road, oil and gas, and structural construction projects around the nation. Building and road construction, oil and gas extraction, supply, infrastructure development, rural electrification, security, and general contracts comprise our core business. Established in 2017, the organization is run and controlled by a group of exceptionally skilled, imaginative, and seasoned experts.",
  whatSetsUsApart: "What sets us apart is the direct employment of our workforce and our passion for achieving the best engineered solutions for our clients. We are well equipped to handle the smallest to the largest of jobs. As a multiple trade Construction Company we pride ourselves in our ability to work smoothly with clients, principal contractors and subcontractors to meet laid down design requirements.",
  leverage: "Our directors’ involvement in the building of several other turn-key projects has given us the required leverage in the engineering field. As prime contractor or principal subcontractor their ability has been demonstrated from projects varying from providing design and building of offices, troop accommodation, warehouses, schools, hospitals, rural electrification projects, erosion control, renovation jobs and civil maintenance services.",
  team: "KAFAS CONSTRUCTION AND BUILDING CONCEPT LTD is a group of professionals with experience in several fields of human endeavors who are capable, talented, energetic, aggressive, enterprising, and well-tested. We began on this path shortly after our modest beginnings by offering clients in the public and private sectors first-rate services."
};

export const visionAndMission = {
  vision: "Our Client's satisfaction is the essence of our success and as such we will continually strive to provide each and every Client with an extraordinary experience, while delivering every project on time, within budget and with the highest level of quality and professionalism.",
  objectives: "The Company was established to promote specific objectives in line with rapid economic development of this country. The objects for which the Company is established are as contained in the MEMART attached."
};
