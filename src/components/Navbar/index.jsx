"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">KP</Link>
      </div>
      <div className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#tools">Tools</Link>
        </li>
        <li>
          <Link href="#certifications">Certifications</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
