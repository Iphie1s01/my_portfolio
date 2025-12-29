
import { RxHome, RxPerson, RxDashboard, RxClipboard, RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

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
    skill_name: "Tailwind CSS",
    image: "/skills/tailwind.png",
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
    skill_name: "Redux",
    image: "/skills/redux.png",
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
    skill_name: "Next.js",
    image: "/skills/next.png",
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
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "/skills/tailwind.png",
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
] as const;

export const BACKEND_SKILL = [
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

export const FULLSTACK_SKILL: Skill[] = [];
export const OTHER_SKILL: Skill[] = [];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "A sleek, responsive portfolio that showcases my skills, design sense, and development expertise.",
    image: "", // Placeholder path
    link: "https://ifeoluwadev.vercel.app",
  },
  {
    title: "Vibemaster JD Landing Page",
    description: "A modern, energetic landing page for DJ Vibemaster JD.",
    image: "", // Placeholder path
    link: "https://vibemasterjd.com",
  },
  {
    title: "Lagoscolour Entertainment",
    description: "A fully functional and visually captivating company site.",
    image: "", // Placeholder path
    link: "https://lagoscolour.vercel.app",
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
