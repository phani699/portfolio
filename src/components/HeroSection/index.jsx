"use client";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>Hi, I’m a Kanakamedala Phani</h1>
        <p>
          I specialize in ensuring product quality through automated testing,
          manual test strategy, and CI/CD integration.
        </p>
        <a href="#projects" className={styles.cta}>
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
