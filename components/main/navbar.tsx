"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <Link href="#hero" className="nav-logo">
        IFE<span>.DEV</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="#about">About</Link></li>
        <li><Link href="#skills">Stack</Link></li>
        <li><Link href="#projects">Work</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
      <a href="mailto:ifeoluwa1s01@gmail.com" className="nav-cta">
        Hire Me
      </a>
    </nav>
  );
};
