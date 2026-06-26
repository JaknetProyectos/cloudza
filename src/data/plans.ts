import { Plan } from "@/types/plan";

export type PlanCategory =
  | "destacados"
  | "launchpad"
  | "wordpress"
  | "email"
  | "vps"
  | "dedicados"
  | "cloud"
  | "a medida";

export const planTabsSpanish: {
  id: PlanCategory;
  label: string;
  icon: "server" | "cloud" | "rack" | "share";
}[] = [
    {
      id: "destacados",
      label: "Destacados",
      icon: "server",
    },
    {
      id: "launchpad",
      label: "Launchpad",
      icon: "share",
    },
    {
      id: "wordpress",
      label: "WordPress",
      icon: "cloud",
    },
    {
      id: "email",
      label: "Email Hosting",
      icon: "share",
    },
    {
      id: "vps",
      label: "VPS",
      icon: "server",
    },
    {
      id: "dedicados",
      label: "Servidores Dedicados",
      icon: "rack",
    },
    {
      id: "cloud",
      label: "Cloud Hosting",
      icon: "cloud",
    },
    {
      id: "a medida",
      label: "A Medida",
      icon: "rack",
    },
  ];

export const planTabsEnglish: {
  id: PlanCategory;
  label: string;
  icon: "server" | "cloud" | "rack" | "share";
}[] = [
    {
      id: "destacados",
      label: "Featured",
      icon: "server",
    },
    {
      id: "launchpad",
      label: "Launchpad",
      icon: "share",
    },
    {
      id: "wordpress",
      label: "WordPress",
      icon: "cloud",
    },
    {
      id: "email",
      label: "Email Hosting",
      icon: "share",
    },
    {
      id: "vps",
      label: "VPS",
      icon: "server",
    },
    {
      id: "dedicados",
      label: "Dedicated",
      icon: "rack",
    },
    {
      id: "cloud",
      label: "Cloud Hosting",
      icon: "cloud",
    },
    {
      id: "a medida",
      label: "Custom",
      icon: "rack",
    },
  ];

export const plansSpanish: Plan[] = [
  // Destacados
  {
    name: "LaunchPad Core",
    price: 1350,
    currency: "MXN",
    description: "Perfecto para tiendas pequeñas o aplicaciones.",
    includes: [
      "RAM: 4 GB",
      "Almacenamiento: SSD",
      "Sitios: Múltiples",
    ],
    category: "destacados",
    featured: true,
    icon: "Rocket",
    slug: "ID92",
  },
  {
    name: "Servicio a la medida",
    price: 0,
    currency: "MXN",
    description:
      "Servicio con folio y total personalizado según tus necesidades específicas.",
    includes: [
      "Precio: Cotización según necesidades",
      "Configuración: Personalizada",
      "Soporte: Dedicado",
      "Escalabilidad: Ilimitada",
    ],
    category: "destacados",
    featured: false,
    icon: "Settings2",
    slug: "ID496",
  },
  {
    name: "WP One",
    price: 189,
    currency: "MXN",
    description: "1 dominio, SSL, backups diarios.",
    includes: [
      "Dominios: 1",
      "Almacenamiento: 30 GB",
      "Backups: Diarios",
    ],
    category: "destacados",
    featured: true,
    icon: "Globe",
    slug: "ID115",
  },

  // Launchpad
  {
    name: "LaunchPad Mini",
    price: 480,
    currency: "MXN",
    description:
      "Ideal para blogs, landing pages o sitios personales.",
    includes: [
      "RAM: 1 GB",
      "Almacenamiento: SSD",
      "Sitios: 1",
    ],
    category: "launchpad",
    featured: false,
    icon: "Rocket",
    slug: "ID59",
  },
  {
    name: "LaunchPad Core",
    price: 1350,
    currency: "MXN",
    description: "Perfecto para tiendas pequeñas o aplicaciones.",
    includes: [
      "RAM: 4 GB",
      "Almacenamiento: SSD",
      "Sitios: Múltiples",
    ],
    category: "launchpad",
    featured: true,
    icon: "Rocket",
    slug: "ID92",
  },
  {
    name: "LaunchPad Pro",
    price: 1050,
    currency: "MXN",
    description:
      "Potente rendimiento para e-commerce y bases de datos.",
    includes: [
      "RAM: 10 GB",
      "Almacenamiento: SSD",
      "Dominios: Multiples",
    ],
    category: "launchpad",
    featured: false,
    icon: "Rocket",
    slug: "ID104",
  },
  {
    name: "LaunchPad Titan",
    price: 2950,
    currency: "MXN",
    description:
      "Servidor dedicado con recursos exclusivos.",
    includes: [
      "RAM: 16 GB Dedicado",
      "Almacenamiento: SSD",
      "Acceso: Root",
    ],
    category: "launchpad",
    featured: false,
    icon: "Server",
    slug: "ID108",
  },
  {
    name: "LaunchPad Ultra",
    price: 9990,
    currency: "MXN",
    description:
      "Alta capacidad para entornos críticos.",
    includes: [
      "RAM: 32 GB Dedicado",
      "Almacenamiento: SSD",
      "Rendimiento: Extremo",
    ],
    category: "launchpad",
    featured: false,
    icon: "Cpu",
    slug: "ID110",
  },

  // WordPress
  {
    name: "WP LiteForge",
    price: 330,
    currency: "MXN",
    description:
      "1 sitio, 30,000 visitas, entorno WP optimizado.",
    includes: [
      "Sitios: 1",
      "Visitas: 30,000",
      "Almacenamiento: 10 GB SSD",
    ],
    category: "wordpress",
    featured: false,
    icon: "Globe",
    slug: "ID113",
  },
  {
    name: "WP One",
    price: 189,
    currency: "MXN",
    description: "1 dominio, SSL, backups diarios.",
    includes: [
      "Dominios: 1",
      "Almacenamiento: 30 GB",
      "Backups: Diarios",
    ],
    category: "wordpress",
    featured: true,
    icon: "Globe",
    slug: "ID115",
  },
  {
    name: "WP Spark",
    price: 370,
    currency: "MXN",
    description:
      "2 CPU, correo ilimitado, rendimiento optimizado.",
    includes: [
      "CPU: 2",
      "RAM: 2 GB",
      "Almacenamiento: 40 GB SSD",
    ],
    category: "wordpress",
    featured: false,
    icon: "Zap",
    slug: "ID117",
  },
  {
    name: "WP Master (Anual)",
    price: 1790,
    currency: "MXN",
    description:
      "Hasta 5 sitios, dominio gratis, CDN.",
    includes: [
      "Sitios: 5",
      "Dominio: Gratis",
      "CDN: Incluido",
      "Facturación: MXN/año + IVA",
    ],
    category: "wordpress",
    featured: false,
    icon: "ShieldCheck",
    slug: "ID119",
  },
  {
    name: "Hosting Base WP",
    price: 189,
    currency: "MXN",
    description:
      "20 GB NVMe, instalación 1 clic.",
    includes: [
      "Almacenamiento: 20 GB NVMe",
      "Dominios: 1 adicional",
      "Instalación: 1 clic",
    ],
    category: "wordpress",
    featured: false,
    icon: "HardDrive",
    slug: "ID121",
  },
  {
    name: "Plan WP Prime",
    price: 2050,
    currency: "MXN",
    description:
      "30 GB SSD, SSL gratuito, soporte extendido.",
    includes: [
      "Almacenamiento: 30 GB SSD",
      "SSL: Gratuito",
      "Correo: Ilimitado",
    ],
    category: "wordpress",
    featured: false,
    icon: "Crown",
    slug: "ID123",
  },

  // Email
  {
    name: "SkyMail Pro",
    price: 720,
    currency: "MXN",
    description:
      "Cuentas corporativas con antivirus.",
    includes: [
      "Tipo: Corporativo",
      "Seguridad: Antivirus/Antispam",
      "Dominio: Personalizado",
    ],
    category: "email",
    featured: false,
    icon: "Mail",
    slug: "ID125",
  },
  {
    name: "SkyMail 365 / Zoho Pro",
    price: 290,
    currency: "MXN",
    description:
      "Cuentas básicas y premium.",
    includes: [
      "Protocolos: POP3/IMAP",
      "Tipo: Básico/Premium",
      "Usuarios: Ejecutivos",
    ],
    category: "email",
    featured: false,
    icon: "Inbox",
    slug: "ID127",
  },

  // VPS
  {
    name: "HyperVPS Business",
    price: 6450,
    currency: "MXN",
    description:
      "12 vCPU, administrado con soporte dedicado.",
    includes: [
      "vCPU: 12",
      "RAM: 48 GB",
      "Almacenamiento: 500 GB SSD",
    ],
    category: "vps",
    featured: false,
    icon: "ServerCog",
    slug: "ID129",
  },
  {
    name: "HyperVPS Infinity",
    price: 8790,
    currency: "MXN",
    description:
      "16 vCPU, acceso root, rendimiento extremo.",
    includes: [
      "vCPU: 16",
      "RAM: 64 GB",
      "Almacenamiento: 600 GB SSD",
    ],
    category: "vps",
    featured: false,
    icon: "Database",
    slug: "ID131",
  },
  {
    name: "HyperVPS Ultra",
    price: 10590,
    currency: "MXN",
    description:
      "18 vCPU, ideal para entornos RDP.",
    includes: [
      "vCPU: 18",
      "RAM: 96 GB",
      "Almacenamiento: 700 GB SSD",
    ],
    category: "vps",
    featured: false,
    icon: "MonitorCog",
    slug: "ID133",
  },

  // Dedicados
  {
    name: "Dedicated Pro",
    price: 5850,
    currency: "MXN",
    description:
      "4 cores, administración completa.",
    includes: [
      "CPU: 4 cores / 8 threads",
      "RAM: 16 GB",
      "Almacenamiento: SSD",
    ],
    category: "dedicados",
    featured: false,
    icon: "Server",
    slug: "ID135",
  },
  {
    name: "Dedicated Basic",
    price: 4790,
    currency: "MXN",
    description:
      "2 cores, gestión incluida.",
    includes: [
      "CPU: 2 cores / 4 threads",
      "RAM: 8 GB",
      "Almacenamiento: SSD/HDD",
    ],
    category: "dedicados",
    featured: false,
    icon: "HardDrive",
    slug: "ID137",
  },

  // Cloud
  {
    name: "CloudVault 160",
    price: 9250,
    currency: "MXN",
    description:
      "8 GB RAM, redundancia, backup remoto.",
    includes: [
      "RAM: 8 GB",
      "Almacenamiento: 160 GB SSD",
      "Backup: Remoto",
    ],
    category: "cloud",
    featured: false,
    icon: "Cloud",
    slug: "ID139",
  },

  // A medida
  {
    name: "Servicio a la medida",
    price: 0,
    currency: "MXN",
    description:
      "Servicio con folio y total personalizado según tus necesidades específicas.",
    includes: [
      "Precio: Cotización según necesidades",
      "Configuración: Personalizada",
      "Soporte: Dedicado",
      "Escalabilidad: Ilimitada",
    ],
    category: "a medida",
    featured: true,
    icon: "Settings2",
    slug: "ID496",
  },
];

export const plansEnglish: Plan[] = [
  // Featured
  {
    name: "LaunchPad Core",
    price: 1350,
    currency: "MXN",
    description: "Perfect for small stores or applications.",
    includes: [
      "RAM: 4 GB",
      "Storage: SSD",
      "Sites: Multiple",
    ],
    category: "destacados",
    featured: true,
    icon: "Rocket",
    slug: "ID92",
  },
  {
    name: "Custom Service",
    price: 0,
    currency: "MXN",
    description:
      "Service with a ticket and fully customized total according to your specific needs.",
    includes: [
      "Price: Quote based on needs",
      "Configuration: Custom",
      "Support: Dedicated",
      "Scalability: Unlimited",
    ],
    category: "destacados",
    featured: false,
    icon: "Settings2",
    slug: "ID496",
  },
  {
    name: "WP One",
    price: 189,
    currency: "MXN",
    description: "1 domain, SSL, daily backups.",
    includes: [
      "Domains: 1",
      "Storage: 30 GB",
      "Backups: Daily",
    ],
    category: "destacados",
    featured: true,
    icon: "Globe",
    slug: "ID115",
  },

  // Launchpad
  {
    name: "LaunchPad Mini",
    price: 480,
    currency: "MXN",
    description:
      "Ideal for blogs, landing pages, or personal websites.",
    includes: [
      "RAM: 1 GB",
      "Storage: SSD",
      "Sites: 1",
    ],
    category: "launchpad",
    featured: false,
    icon: "Rocket",
    slug: "ID59",
  },
  {
    name: "LaunchPad Core",
    price: 1350,
    currency: "MXN",
    description: "Perfect for small stores or applications.",
    includes: [
      "RAM: 4 GB",
      "Storage: SSD",
      "Sites: Multiple",
    ],
    category: "launchpad",
    featured: true,
    icon: "Rocket",
    slug: "ID92",
  },
  {
    name: "LaunchPad Pro",
    price: 1050,
    currency: "MXN",
    description:
      "Powerful performance for e-commerce and databases.",
    includes: [
      "RAM: 10 GB",
      "Storage: SSD",
      "Domains: Multiple",
    ],
    category: "launchpad",
    featured: false,
    icon: "Rocket",
    slug: "ID104",
  },
  {
    name: "LaunchPad Titan",
    price: 2950,
    currency: "MXN",
    description:
      "Dedicated server with exclusive resources.",
    includes: [
      "RAM: 16 GB Dedicated",
      "Storage: SSD",
      "Access: Root",
    ],
    category: "launchpad",
    featured: false,
    icon: "Server",
    slug: "ID108",
  },
  {
    name: "LaunchPad Ultra",
    price: 9990,
    currency: "MXN",
    description:
      "High capacity for critical environments.",
    includes: [
      "RAM: 32 GB Dedicated",
      "Storage: SSD",
      "Performance: Extreme",
    ],
    category: "launchpad",
    featured: false,
    icon: "Cpu",
    slug: "ID110",
  },

  // WordPress
  {
    name: "WP LiteForge",
    price: 330,
    currency: "MXN",
    description:
      "1 site, 30,000 visits, optimized WP environment.",
    includes: [
      "Sites: 1",
      "Visits: 30,000",
      "Storage: 10 GB SSD",
    ],
    category: "wordpress",
    featured: false,
    icon: "Globe",
    slug: "ID113",
  },
  {
    name: "WP One",
    price: 189,
    currency: "MXN",
    description: "1 domain, SSL, daily backups.",
    includes: [
      "Domains: 1",
      "Storage: 30 GB",
      "Backups: Daily",
    ],
    category: "wordpress",
    featured: true,
    icon: "Globe",
    slug: "ID115",
  },
  {
    name: "WP Spark",
    price: 370,
    currency: "MXN",
    description:
      "2 CPU, unlimited email, optimized performance.",
    includes: [
      "CPU: 2",
      "RAM: 2 GB",
      "Storage: 40 GB SSD",
    ],
    category: "wordpress",
    featured: false,
    icon: "Zap",
    slug: "ID117",
  },
  {
    name: "WP Master (Annual)",
    price: 1790,
    currency: "MXN",
    description:
      "Up to 5 sites, free domain, CDN.",
    includes: [
      "Sites: 5",
      "Domain: Free",
      "CDN: Included",
      "Billing: MXN/year + VAT",
    ],
    category: "wordpress",
    featured: false,
    icon: "ShieldCheck",
    slug: "ID119",
  },
  {
    name: "WP Base Hosting",
    price: 189,
    currency: "MXN",
    description:
      "20 GB NVMe, 1-click installation.",
    includes: [
      "Storage: 20 GB NVMe",
      "Additional domains: 1",
      "Installation: 1 click",
    ],
    category: "wordpress",
    featured: false,
    icon: "HardDrive",
    slug: "ID121",
  },
  {
    name: "WP Prime Plan",
    price: 2050,
    currency: "MXN",
    description:
      "30 GB SSD, free SSL, extended support.",
    includes: [
      "Storage: 30 GB SSD",
      "SSL: Free",
      "Email: Unlimited",
    ],
    category: "wordpress",
    featured: false,
    icon: "Crown",
    slug: "ID123",
  },

  // Email
  {
    name: "SkyMail Pro",
    price: 720,
    currency: "MXN",
    description:
      "Corporate accounts with antivirus.",
    includes: [
      "Type: Corporate",
      "Security: Antivirus/Antispam",
      "Domain: Custom",
    ],
    category: "email",
    featured: false,
    icon: "Mail",
    slug: "ID125",
  },
  {
    name: "SkyMail 365 / Zoho Pro",
    price: 290,
    currency: "MXN",
    description:
      "Basic and premium accounts.",
    includes: [
      "Protocols: POP3/IMAP",
      "Type: Basic/Premium",
      "Users: Executives",
    ],
    category: "email",
    featured: false,
    icon: "Inbox",
    slug: "ID127",
  },

  // VPS
  {
    name: "HyperVPS Business",
    price: 6450,
    currency: "MXN",
    description:
      "12 vCPU, managed with dedicated support.",
    includes: [
      "vCPU: 12",
      "RAM: 48 GB",
      "Storage: 500 GB SSD",
    ],
    category: "vps",
    featured: false,
    icon: "ServerCog",
    slug: "ID129",
  },
  {
    name: "HyperVPS Infinity",
    price: 8790,
    currency: "MXN",
    description:
      "16 vCPU, root access, extreme performance.",
    includes: [
      "vCPU: 16",
      "RAM: 64 GB",
      "Storage: 600 GB SSD",
    ],
    category: "vps",
    featured: false,
    icon: "Database",
    slug: "ID131",
  },
  {
    name: "HyperVPS Ultra",
    price: 10590,
    currency: "MXN",
    description:
      "18 vCPU, ideal for RDP environments.",
    includes: [
      "vCPU: 18",
      "RAM: 96 GB",
      "Storage: 700 GB SSD",
    ],
    category: "vps",
    featured: false,
    icon: "MonitorCog",
    slug: "ID133",
  },

  // Dedicated
  {
    name: "Dedicated Pro",
    price: 5850,
    currency: "MXN",
    description:
      "4 cores, full management.",
    includes: [
      "CPU: 4 cores / 8 threads",
      "RAM: 16 GB",
      "Storage: SSD",
    ],
    category: "dedicados",
    featured: false,
    icon: "Server",
    slug: "ID135",
  },
  {
    name: "Dedicated Basic",
    price: 4790,
    currency: "MXN",
    description:
      "2 cores, management included.",
    includes: [
      "CPU: 2 cores / 4 threads",
      "RAM: 8 GB",
      "Storage: SSD/HDD",
    ],
    category: "dedicados",
    featured: false,
    icon: "HardDrive",
    slug: "ID137",
  },

  // Cloud
  {
    name: "CloudVault 160",
    price: 9250,
    currency: "MXN",
    description:
      "8 GB RAM, redundancy, remote backup.",
    includes: [
      "RAM: 8 GB",
      "Storage: 160 GB SSD",
      "Backup: Remote",
    ],
    category: "cloud",
    featured: false,
    icon: "Cloud",
    slug: "ID139",
  },

  // Custom
  {
    name: "Custom Service",
    price: 0,
    currency: "MXN",
    description:
      "Service with a ticket and fully customized total according to your specific needs.",
    includes: [
      "Price: Quote based on needs",
      "Configuration: Custom",
      "Support: Dedicated",
      "Scalability: Unlimited",
    ],
    category: "a medida",
    featured: true,
    icon: "Settings2",
    slug: "ID496",
  },
];