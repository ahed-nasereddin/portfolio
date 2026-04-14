// src/data/Experiences.ts
import type { IExperience } from "@/types/experiences";

export const experiences: IExperience[] = [
  {
    position: "Full Stack Developer | Freelance",
    company: "Freelance",
    duration: "FEB 2025 – MAY 2025",
    description: "Web Developer and SEO Expert. Worked on multiple websites.",
    technologies: ["Laravel", "Voyager", "HTML", "JavaScript", "CSS"],
    responsibilities: [
      "Developed and deployed websites using Laravel and Voyager.",
      "Customized admin panels and built responsive front-ends.",
      "Implemented SEO best practices, resulting in 140+ unique visits and 10,000+ impressions."
    ],
    projects: [
      {
        name: "Bizrug",
        url: "https://bizrug.com"
      },
      {
        name: "Reelquip Films",
        url: "https://reelquipfilms.com"
      },
      {
        name: "Alkofya Bakery and Sweets",
        url: "https://alkofyahbakery.com"
      },
      {
        name: "Dar Alaman",
        url: "https://daralamanhet.com"
      }
    ]
  },
  {
    position: "Full Stack Web Developer",
    company: "Netcore IT Solutions",
    location: "United Arab Emirates",
    duration: "Jan 2023 – Jan 2025",
    description: "Worked on survey systems, kiosk devices, and digital signage.",
    technologies: ["Laravel", "Vue.js", "Tailwind", "Stripe"],
    responsibilities: [
      "Built Survey Platform with real-time analytics.",
      "Integrated Kiosk Systems and Stripe payments.",
      "Developed Digital Signage with scheduling and remote updates."
    ],
    projects: [
      {
        name: "FormsHub Platform",
        url: "https://app.formshub.net"
      },
      {
        name: "FormsHub Website",
        url: "https://formshub.net"
      }
    ]
  },
  {
    position: "Web Developer",
    company: "TargusMe",
    location: "Syria",
    duration: "JULY 2021 – AUG 2022",
    description: "Web Application Developer working on Laravel and Vue.js projects.",
    technologies: ["Laravel", "Vue.js", "HTML", "JavaScript", "CSS"],
    responsibilities: [
      "Developed and maintained websites using Laravel and Vue.js.",
      "Implemented responsive designs and user interfaces with HTML, JavaScript, and CSS.",
      "Collaborated with cross-functional teams to gather requirements and translate them into specifications.",
      "Optimized website performance and ensured cross-browser compatibility.",
      "Troubleshot and resolved issues in development and production environments."
    ]
  }
];
