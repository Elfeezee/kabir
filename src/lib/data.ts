import { Building, Car, Cog, Hammer, ShieldCheck, Truck, Users, Warehouse, Wrench, Package, Factory, HardHat, Lightbulb, Droplets, Recycle, Shovel, DraftingCompass, Wind, Handshake, Briefcase, Wrench as WrenchIcon, Layers3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Vision', href: '/vision' },
  { name: 'Blog', href: '/blog' },
  { name: 'Design AI', href: '/#design-ai' },
  { name: 'Contact', href: '/#contact' },
];

export const projects = [
  {
    id: "project-1",
    title: "Major Road & Bridge Construction",
    description: "Involved in the implementation of significant road and bridge construction projects across the nation, ensuring connectivity and quality infrastructure.",
    imagePlaceholderId: "project-1"
  },
  {
    id: "project-2",
    title: "Structural & Building Projects",
    description: "Design and construction of offices, troop accommodation, warehouses, schools, and hospitals with a focus on robust structural and civil engineering solutions.",
    imagePlaceholderId: "project-2"
  },
  {
    id: "project-3",
    title: "Oil and Gas Infrastructure",
    description: "Pipeline procurement, installation, and maintenance for key players in the oil and gas sector, ensuring energy delivery and safety.",
    imagePlaceholderId: "project-3"
  },
  {
    id: "project-4",
    title: "Solar & Renewable Energy Projects",
    description: "Conceptualizing, planning, designing and deploying solar powered solutions to meet the growing private and industrial needs.",
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
    title: "Civil Engineering",
    description: "Comprehensive planning, design, and management for major infrastructure like bridges, buildings, and transport links.",
    icon: HardHat,
  },
  {
    title: "Electrical Engineering",
    description: "A wide range of services including power systems, lighting design, and industrial installations.",
    icon: Lightbulb,
  },
  {
    title: "General Contracts",
    description: "A trusted partner for a wide range of general contracting needs in public and private sectors.",
    icon: Handshake,
  },
  {
    title: "Property & Facility Mgmt",
    description: "Expert property development and comprehensive estate/facility management services.",
    icon: Warehouse,
  },
  {
    title: "Solar Energy Solutions",
    description: "Provider and installer of need-based, economically viable, and highly customized solar energy systems.",
    icon: Wind,
  },
  {
    title: "Logistics & Procurement",
    description: "Streamlined logistics and professional procurement to support complex construction and industrial needs.",
    icon: Truck,
  },
  {
    title: "Mechanical & Water Eng.",
    description: "Services including plumbing, water supply, borehole drilling, and waste water management.",
    icon: Droplets,
  },
  {
    title: "Consultancy Services",
    description: "Providing expert consultancy from a team tested in various fields of human endeavor.",
    icon: Users,
  },
];


export const portfolioDescription = "KAFAS CONSTRUCTION AND BUILDING CONCEPT LTD specializes in CIVIL/STRUCTURAL ENGINEERING, SOLAR ENERGY PROJECTS, SHORELINE PROTECTION, EROSION CONTROL, HYDRAULIC ENGINEERING (BOREHOLES/DREDGING), PIPELINE PROCUREMENT & MAINTENANCE, DESIGN AND PROJECT MANAGEMENT, RENEWABLE ENERGY, and more. Our directors have extensive experience in significant road, oil and gas, and structural construction projects across Nigeria. We manage projects from minor works to large-scale turn-key implementations including offices, warehouses, schools, hospitals, and rural electrification.";

export const serviceCatalog = "Our services include: Constructions, Civil/Structural Engineering, Electrical Engineering, Mechanical/Water Engineering, Solar Energy Solutions, General contracts, Property Development and Estate/Facility Management, Security Equipment, Road Projects, Logistics, Consultancy, Procurement, and Finishing & furnishing. We are equipped to handle projects of any scale, providing first-rate services to both public and private sector clients.";

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
  overview: "KAFAS CONSTRUCTION AND BUILDING CONCEPT LTD was registered on January 23, 2017. The company specializes in CIVIL/STRUCTURAL ENGINEERING, SOLAR ENERGY PROJECTS, SHORELINE PROTECTION, EROSION CONTROL & EIA, HYDRAULIC ENGINEERING (BOREHOLES DRILLING/DREDGING), PIPELINE PROCUREMENT, INSTALLATION & MAINTENANCE, DESIGN AND PROJECT MANAGEMENT SERVICES, RENEWABLE ENERGY, MINERAL EXPLORATION, and much more. Building and road construction, oil and gas extraction, supply, infrastructure development, rural electrification, security, and general contracts comprise our core business.",
  experience: "Our directors have the necessary experience in Nigeria, having taken part in the implementation of significant road, oil and gas, and structural construction projects around the nation. Established in 2017, the organization is run and controlled by a group of exceptionally skilled, imaginative, and seasoned experts.",
  whatSetsUsApart: "What sets us apart is the direct employment of our workforce and our passion for achieving the best engineered solutions for our clients. We are well equipped to handle the smallest to the largest of jobs. As a multiple trade Construction Company we pride ourselves in our ability to work smoothly with clients, principal contractors and subcontractors to meet laid down design requirements.",
  leverage: "Our directors’ involvement in the building of several other turn-key projects has given us the required leverage in the engineering field. As prime contractor or principal subcontractor their ability has been demonstrated from projects varying from providing design and building of offices, troop accommodation, warehouses, schools, hospitals, rural electrification projects, erosion control, renovation jobs and civil maintenance services.",
  team: "KAFAS CONSTRUCTION AND BUILDING CONCEPT LTD is a group of professionals with experience in several fields of human endeavors who are capable, talented, energetic, aggressive, enterprising, and well-tested. We began on this path shortly after our modest beginnings by offering clients in the public and private sectors first-rate services."
};

export const visionAndMission = {
  vision: "Our Client's satisfaction is the essence of our success and as such we will continually strive to provide each and every Client with an extraordinary experience, while delivering every project on time, within budget and with the highest level of quality and professionalism.",
  objectives: "The Company was established to promote specific objectives in line with rapid economic development of this country. The objects for which the Company is established are as contained in the MEMART attached."
};

export const detailedServices = [
  {
    title: 'Civil & Structural Engineering',
    icon: HardHat,
    description: 'Comprehensive design, engineering, and management for a wide range of infrastructure and building projects, ensuring structural integrity, durability, and safety.',
    subServices: [
      { 
        title: 'Design and Engineering', 
        description: 'Our team of experienced civil engineers and designers provides comprehensive design and engineering services for various infrastructure projects including roads, bridges, highways, airports, water supply systems, wastewater treatment plants, and urban development projects. We utilize state-of-the-art software and technology to develop efficient and sustainable designs tailored to the specific needs of each project.'
      },
      {
        title: 'Construction Management',
        description: 'We offer construction management services to oversee all phases of project implementation, from pre-construction planning to project closeout. Our dedicated project management teams ensure that projects are delivered on time, within budget, and to the highest quality standards, while prioritizing safety, efficiency, and stakeholder satisfaction.'
      },
      {
        title: 'Structural Engineering',
        description: 'Construction of residential and commercial buildings, subterranean construction, seaport construction, sports facility construction, roadway, bridge, and cavern facility construction are among the tasks completed. We specialize in structural engineering services for the design and analysis of bridges, buildings, dams, retaining walls, and other structures.'
      },
      {
        title: 'Road Constructions',
        description: 'We specialize in the construction of highways, expressways, urban roads, rural roads, and specialized infrastructure projects. Our comprehensive services cover all aspects of road construction, including earthworks, paving, drainage, bridges, and landscaping.'
      }
    ]
  },
  {
    title: 'Electrical Engineering',
    icon: Lightbulb,
    description: 'A wide range of scopes and specializations in Electrical engineering, reflecting its broad applicability and impact across numerous industries.',
    subServices: [
      {
        title: 'Power Systems & Lighting',
        description: 'Design and construction management for power systems and lighting solutions.',
        points: [
          'Medium and low voltage distribution systems for urban and rural areas.',
          'Electrification of low-income areas.',
          'Road, area, and sports field lighting.',
        ]
      },
      {
        title: 'Industrial & Building Installations',
        description: 'A comprehensive and integrated electrical, instrumentation and control service for industrial processes and buildings.',
        points: [
          'Power factor correction and UPS systems.',
          'Installation earthing, surge and lighting protection.',
          'Control and supervisory (SCADA) systems.',
          'Lifts and escalators, data networks, PA systems.',
          'Access control, security systems, fire detection.',
          'Fibre-optic cable signal distribution and video surveillance.'
        ]
      },
    ]
  },
  {
    title: 'Environmental & Geotechnical Engineering',
    icon: Recycle,
    description: 'Providing solutions to address environmental challenges and mitigate geotechnical risks in infrastructure projects.',
    subServices: [
      {
        title: 'Environmental Engineering',
        description: 'We provide environmental engineering solutions to promote sustainable development. Our services include environmental impact assessments, pollution prevention and control, remediation of contaminated sites, water resource management, and ecological restoration.'
      },
      {
        title: 'Geotechnical Engineering',
        description: 'The company also offers geotechnical engineering services for site investigation, soil analysis, foundation design, slope stability analysis, and ground improvement techniques. Our geotechnical engineers utilize advanced testing methods and numerical modeling to assess and mitigate geotechnical risks.'
      }
    ]
  },
  {
    title: 'Solar Energy Division',
    icon: Wind,
    description: 'Conceptualizing, planning, designing and deploying solar powered solutions to meet the growing private and industrial needs. Our solar solutions are need-based, economically viable, and highly customized to meet global standards.',
    subServices: [
      {
        title: 'Custom Solar Solutions',
        description: 'We are a facilitator, integrator, provider and installer of a variety of complementary energy products and services for homes, commercial entities, and regions. Solar energy systems can help bridge the electricity gap in illuminating streets, stadia, and all manners of electricity needs.'
      },
      {
        title: 'Energy Consultancy',
        description: 'KAFAS CONSTRUCTION AND BUILDING CONCEPT LTD also provides Energy Consultancy Services and helps maintain our clients’ equipment all around the globe, utilizing modern, state-of-the-art equipment and best globally competitive technologies.'
      }
    ]
  },
  {
    title: 'Mechanical & Water Engineering',
    icon: Droplets,
    description: 'A range of services to manage water resources and mechanical systems for buildings and estates.',
    subServices: [
      {
        title: 'Core Services',
        description: 'We cover a variety of essential mechanical and water-related engineering fields.',
        points: [
          'Plumbing',
          'Water Supply',
          'Drilling of Boreholes',
          'Waste Water Engineering & Sewage systems',
          'Solid waste management',
          'Air-conditioning service in building/estate developments.'
        ]
      }
    ]
  },
  {
    title: 'Maintenance & Property Services',
    icon: WrenchIcon,
    description: 'A full suite of services for building maintenance, property development, and estate management.',
    subServices: [
      {
        title: 'Building Maintenance Services',
        description: 'Our qualified team of Building and Civil engineers are ready to carry out any building/civil needs.',
        points: [
          'Sand – Filling',
          'Design and Construction of Roads, Drainages and Bridges',
          'Construction of Office, Residential Building, Warehouses Slabs and Platforms',
          'Bore-hole Drilling and Water Supply',
          'Supply of Stone base chips, sand and laterite',
          'Maintenance and Repair of roads and buildings',
          'Supply of Portakabins and maintenance of Oil Drilling Platforms',
          'Construction and maintenance of Dams and water reservoirs'
        ]
      },
      {
        title: 'Property & Estate Management',
        description: 'We are into the process of improving the use-value of buildings or land, including buying land, renovating property, and managing leases, capital projects, and appraisals for commercial properties like offices, hotels, and shops.'
      }
    ]
  },
  {
    title: 'General Contracts & Procurement',
    icon: Layers3,
    description: 'Comprehensive services for general contracts, supplies, and procurement, with enormous international trade experience.',
    subServices: [
      {
        title: 'General Contracts',
        description: 'Dealing in all plants and machinery, implements, accessories, tools, materials, substances, goods or things of any description for various industries.'
      },
      {
        title: 'Procurement Section',
        description: 'Our personnel in the procurement section are well-articulated professionals who specialized in handling all kinds of orders, both foreign and local. KAFAS CONSTRUCTION AND BUILDING CONCEPT LTD is currently representing more than five manufacturing companies from Europe, America and Asia.'
      }
    ]
  }
];
