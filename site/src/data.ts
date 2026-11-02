export const profile = {
  name: "Aman Paudel",
  firstName: "Aman",
  role: "Full-Stack Developer",
  location: "Bharatpur, Nepal",
  timezone: "GMT+5:45",
  email: "poudelaman4@gmail.com",
  tagline:
    "Full-stack developer with a year of production experience at INEV Technologies. I care about clean data models, clear APIs and interfaces that stay out of the way.",
  bio: [
    "I'm a full-stack developer from Bharatpur, Nepal. I graduated in Computer Engineering in 2025 and have since shipped production features at INEV Technologies across Angular, React and Next.js frontends, NestJS/Express and PHP backends, WordPress plugins, and MySQL/PostgreSQL.",
    "I like the whole path: data models, API contracts, and the last 10% of interface polish. Outside work I build projects to learn — a multi-role booking marketplace, a sentiment dashboard, an NFC canteen payment system, and small Godot games.",
  ],
  resume: "/resume.pdf",
}

export const stats: {
  value: number
  suffix?: string
  label: string
  decimals?: number
}[] = [
  { value: 4, suffix: "", label: "Featured projects on GitHub" },
  { value: 1, suffix: "+", label: "Years in production" },
  { value: 2, suffix: "", label: "Roles at INEV Technologies" },
  {
    value: 3.4,
    suffix: "/4.0",
    decimals: 2,
    label: "CGPA — B.E. Computer Engineering",
  },
]

export const skills = [
  "Full-Stack",
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "NestJS",
  "PHP",
  "WordPress",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Tailwind CSS",
  "REST APIs",
  "JWT",
  "Git",
  "Godot",
]

export const projects = [
  {
    id: "01",
    title: "Service Provider Booking Platform",
    subtitle: "A multi-role marketplace for booking local services",
    year: "2026",
    tags: ["Angular", "Node.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1790976158663-ccc651ef9805?auto=format&fit=crop&w=1400&q=80",
    aspect: "aspect-[16/11]",
    accent: "#c9f75a",
    href: "https://github.com/poudelaman4/service-provider",
  },
  {
    id: "02",
    title: "Movie Sentiment Analysis System",
    subtitle: "Review sentiment scored, stored and charted",
    year: "2026",
    tags: ["Angular", "Flask", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1760170437237-a3654545ab4c?auto=format&fit=crop&w=1200&q=80",
    aspect: "aspect-[4/5]",
    accent: "#a78bfa",
    href: "https://github.com/poudelaman4/movie-sentiment",
  },
  {
    id: "03",
    title: "Smart Canteen Payment System",
    subtitle: "NFC card payments and analytics for a campus canteen",
    year: "2025",
    tags: ["PHP", "MySQL", "NFC"],
    image:
      "https://images.unsplash.com/photo-1790156591271-1cdda037c45c?auto=format&fit=crop&w=1200&q=80",
    aspect: "aspect-[4/3]",
    accent: "#f0abfc",
    href: "https://github.com/poudelaman4/Final_Year_project",
  },
  {
    id: "04",
    title: "Godot Game Projects",
    subtitle: "2D and 3D games built to learn systems and feel",
    year: "2025",
    tags: ["Godot", "GDScript", "C#"],
    image:
      "https://images.unsplash.com/photo-1647320293733-92affa4fa39c?auto=format&fit=crop&w=1200&q=80",
    aspect: "aspect-[5/4]",
    accent: "#7dd3fc",
    href: "https://github.com/poudelaman4/game",
  },
]

export const experience = [
  {
    period: "2026 · 1 yr",
    role: "Full-Stack Developer",
    company: "INEV Technologies",
    type: "Bharatpur, Nepal",
    description:
      "Shipped production features across React/Next.js and Angular frontends with NestJS/Express and PHP backends on PostgreSQL and MySQL. Built WordPress plugins and block themes, and debugged across the stack.",
  },
  {
    period: "2026 · 3 mos",
    role: "Software Development Intern",
    company: "INEV Technologies",
    type: "Bharatpur, Nepal",
    description:
      "Built responsive Angular and React interfaces and tested REST API endpoints with Node.js/Express and MySQL. Fixed bugs across WordPress/PHP pages and the MySQL layer.",
  },
]

export const socials = [
  { label: "GitHub", href: "https://github.com/poudelaman4", icon: "github" },
  { label: "Email", href: "mailto:poudelaman4@gmail.com", icon: "mail" },
] as const
