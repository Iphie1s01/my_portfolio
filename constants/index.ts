import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

export interface Skill {
  skill_name: string;
  image: string;
  width: number;
  height: number;
}

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "/skills/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "/skills/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "/skills/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "/skills/node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "/skills/mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/ifeoluwa-otudero-bb5117347", // Placeholder/Generic based on user name
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Iphie1s01", // Placeholder
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "/skills/js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "/skills/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "/skills/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "/skills/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "/skills/framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "/skills/reactnative.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "/skills/node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express",
    image: "/skills/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "/skills/python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "/skills/mongodb.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "MySQL",
    image: "/skills/mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "/skills/postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "/skills/prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GraphQL",
    image: "/skills/graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL: Skill[] = [
  {
    skill_name: "Git",
    image: "/skills/git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "/skills/github.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Postman",
    image: "/skills/postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "/skills/firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Figma",
    image: "/skills/figma.png",
    width: 50,
    height: 50,
  },
];

export const OTHER_SKILL: Skill[] = [
  {
    skill_name: "Framer",
    image: "/skills/framer.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Photoshop",
    image: "/skills/photoshop.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Canva",
    image: "/skills/canva.png",
    width: 80,
    height: 80,
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "A sleek, responsive portfolio that showcases my skills, design sense, and development expertise.",
    link: "https://ifeoluwadev.vercel.app",
  },
  {
    title: "Vibemaster JD Landing Page",
    description: "A modern, energetic landing page for DJ Vibemaster JD.",
    link: "https://vibemasterjd.com",
  },
  {
    title: "Lagoscolour Entertainment",
    description: "A fully functional and visually captivating company site designed for Lagoscolour Entertainment, blending performance with aesthetic appeal.",
    link: "https://lagoscolour.vercel.app",
  },
  {
    title: "Lagoscolour Marketplace",
    description:
      "A multi-vendor e-commerce hub integrated with the Lagoscolour ecosystem, offering a streamlined and secure shopping experience.",
    link: "https://lagoscolour.vercel.app/shop",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Iphie1s01",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/ifeoluwa-otudero-bb5117347",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:ifeoluwa1s01@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;
