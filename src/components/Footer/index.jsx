"use client";

import styles from "./Footer.module.scss";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2025 Your Name. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
