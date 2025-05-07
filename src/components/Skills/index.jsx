"use client";

import styles from "./Skills.module.scss";

const skills = [
  { name: "Selenium", type: "Tool" },
  { name: "Playwright", type: "Tool" },
  { name: "Postman", type: "Tool" },
  { name: "Jira", type: "Tool" },
  { name: "Jenkins", type: "CI/CD" },
  { name: "Java", type: "Language" },
  { name: "API Testing", type: "Type" },
  { name: "Regression Testing", type: "Type" },
  { name: "Performance Testing", type: "Type" },
];

const Skills = () => {
  return (
    <section className={styles.skills} id="tools">
      <h2>Skills & Tools</h2>
      <p className={styles.subtitle}>Technologies and practices I work with</p>
      <div className={styles.grid}>
        {skills.map((skill, idx) => (
          <div key={idx} className={styles.card}>
            <span className={styles.name}>{skill.name}</span>
            <span className={styles.type}>{skill.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
