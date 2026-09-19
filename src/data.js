// Single source of truth for portfolio content (from the 2026 resume).
import scrimbaReact from "./assets/certs/scrimba-react.jpg";
import idfUsability from "./assets/certs/idf-usability-testing.jpg";
import idfGuide from "./assets/certs/idf-ux-beginners-guide.jpg";
import idfAdoption from "./assets/certs/idf-product-adoption.jpg";

export const profile = {
  name: "Shahzaib Rao",
  role: "Full Stack React Js Web & App Developer",
  location: "Multan, Pakistan",
  email: "raoshahzaib009@gmail.com",
  phone: "+923080073024",
  phoneDisplay: "+92 308 0073024",
  linkedin: "https://linkedin.com/in/muhammad-shahzaib-27552b14b",
  github: "https://github.com/hexcode29",
  resume: "/Shahzaib-Rao-Resume-2026.pdf",
  summary:
    "Full Stack Software Engineer with 5+ years of experience building scalable web and mobile applications using React, Node.js, MongoDB, and Firebase. I've delivered SaaS platforms, fintech systems, and real-time applications for clients in the UK, EU, US, and Australia — with a strong focus on performance, clean architecture, and production-ready solutions.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "1000+", label: "Users on live products" },
  { value: "5", label: "Major products shipped" },
  { value: "4", label: "Client regions: UK · EU · US · AU" },
];

export const skills = [
  { title: "Frontend", items: ["React", "Next.js", "Redux", "Tailwind", "CSS", "Styled-Components", "Material UI", "Chart.js"] },
  { title: "Backend", items: ["Node.js", "Express", "Firebase", "Supabase"] },
  { title: "Mobile", items: ["React Native", "Expo"] },
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML", "CSS"] },
  { title: "Databases", items: ["MongoDB", "Firebase"] },
  { title: "Payments & APIs", items: ["Stripe", "PayPal", "REST", "GraphQL", "OpenAI"] },
  { title: "Real-time", items: ["Socket.io", "Firestore Snapshots"] },
  { title: "DevOps & Tools", items: ["Docker", "Git", "Cloud Functions"] },
];

export const marquee = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Firebase", "Supabase",
  "React Native", "Expo", "GraphQL", "Stripe", "Socket.io", "Docker", "Tailwind", "Redux",
];

export const experience = [
  {
    company: "Onixs Ai",
    role: "Full Stack Web & App Developer",
    period: "02/2025 – Present",
    current: true,
    points: [
      "Developed and maintained scalable web and mobile applications used by 1000+ users.",
      "Built backend services with Firebase, Supabase, and MongoDB, with secure authentication and role-based access.",
      "Implemented serverless Cloud Functions to improve performance and reduce infrastructure costs.",
      "Led end-to-end development from architecture to deployment.",
    ],
  },
  {
    company: "Squadly",
    role: "Full Stack Software Engineer (MERN)",
    period: "08/2022 – 03/2025",
    location: "Ballarat, Australia",
    points: [
      "Designed and developed dynamic SaaS web applications with React.js, Node.js, Express, and MongoDB.",
      "Built responsive UI with Tailwind CSS and real-time features with Socket.io.",
      "Delivered data visualisation with Chart.js, scheduling with FullCalendar, and location services with Google Maps React.",
    ],
  },
  {
    company: "Technovez",
    role: "Senior Software Engineer (Frontend – React)",
    period: "02/2020 – 07/2022",
    location: "Multan, Pakistan",
    points: [
      "Built and maintained reusable React components for scalable SaaS products.",
      "Improved frontend performance with lazy loading, memoisation, and API response optimisation — reducing rendering overhead and speeding up the app.",
      "Collaborated with backend teams using REST and GraphQL APIs.",
    ],
  },
];

export const projects = [
  {
    name: "Castle Auction",
    tag: "Web · Mobile · Admin",
    meta: "Libya · 2024 – 2026",
    tagline: "Libya’s first auction house",
    description:
      "A complete online auction system: a customer web app, a mobile app, and a centralised admin dashboard — designed and built end to end.",
    points: [
      "MongoDB backend with secure APIs for auction management, user handling, and real-time updates.",
      "Stripe payment processing, optimised for performance, scalability, and data security.",
    ],
    stack: ["MongoDB", "Stripe", "Real-time", "Admin dashboard"],
    url: "https://castle-auction.com/",
    icon: "gavel",
    hue: 38,
    featured: true,
  },
  {
    name: "Squadly",
    tag: "SaaS",
    meta: "Australia · 2022 – 2025",
    tagline: "app.squadly.io",
    description:
      "Dynamic SaaS web application with real-time collaboration, scheduling, maps, and rich data visualisation.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Socket.io", "Chart.js", "FullCalendar", "Google Maps"],
    url: "https://squadly.io/",
    icon: "users",
    hue: 262,
  },
  {
    name: "Payrex",
    tag: "Fintech",
    meta: "The financial operating system",
    tagline: "Admin & customer dashboards",
    description:
      "Intuitive admin and customer-level dashboards with receipt generation, payment-method management, and seamless payment API integration.",
    stack: ["React", "Stripe", "PayPal", "Dashboards"],
    url: "https://www.payrexhq.com/",
    icon: "wallet",
    hue: 160,
  },
  {
    name: "Health Platform",
    tag: "Healthcare",
    meta: "UK · 2024 – 2025",
    tagline: "Hub-and-spoke healthcare platform",
    description:
      "Contributed real-time video consultations, Google Maps location services, live notifications, and secure payment gateway integration.",
    stack: ["Video consults", "Google Maps", "Socket.io", "Payments"],
    url: "https://app.fitwellhub.com/",
    icon: "heart",
    hue: 350,
  },
  {
    name: "MOI",
    tag: "App · Web · Admin",
    meta: "Ireland · 2025 – 2026",
    tagline: "Muslims of Ireland",
    description:
      "Full-stack community platform: a responsive web app, a React Native mobile app, and a web admin panel with role-based access.",
    stack: ["React Native", "Firebase Auth", "Firestore", "Cloud Functions", "Stripe"],
    url: "https://muslimsofireland.com/",
    icon: "globe",
    hue: 200,
  },
];

export const certificates = [
  {
    title: "Learn React",
    issuer: "Scrimba",
    note: "Certificate of completion",
    image: scrimbaReact,
    url: "https://v1.scrimba.com/certificate/uDRDPRuz/glearnreact",
  },
  {
    title: "User Experience: The Beginner’s Guide",
    issuer: "Interaction Design Foundation",
    note: "2018 – 2019",
    image: idfGuide,
    url: "https://www.interaction-design.org/members/shahzaib-rao/certificate/course/fltqnHSHvJ5JngzJXq",
  },
  {
    title: "Conducting Usability Testing",
    issuer: "Interaction Design Foundation",
    note: "2018 · Best in class",
    image: idfUsability,
    url: "https://www.interaction-design.org/members/shahzaib-rao/certificate/course/PjjBJZClK",
  },
  {
    title: "Get Your Product Used: Adoption and Appropriation",
    issuer: "Interaction Design Foundation",
    note: "2018 · Top 10% in class",
    image: idfAdoption,
    url: "https://www.interaction-design.org/shahzaib-rao/certificate/course/PkzqdGDMC",
  },
];

export const education = [
  { degree: "BSCS", school: "GCUF", period: "03/2017 – 09/2021" },
  { degree: "Intermediate", school: "Rise College Multan", period: "07/2014 – 02/2017" },
];
