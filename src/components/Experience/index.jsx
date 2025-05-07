"use client";

import styles from "./Experience.module.scss";

const experiences = [
  {
    role: "QA Engineer",
    company: "TechNova Solutions",
    period: "Jan 2023 – Present",
    responsibilities: [
      "Led automation efforts for regression testing using Cypress and Playwright.",
      "Integrated test suites into CI/CD pipeline with GitHub Actions.",
      "Collaborated with developers during sprint planning to identify testable user stories.",
      "Reduced manual testing time by 40% by building reusable test components.",
    ],
    tools: ["Cypress", "Playwright", "GitHub Actions", "JIRA"],
  },
  {
    role: "Junior QA Analyst",
    company: "DigitalCore Systems",
    period: "Feb 2022 – Dec 2022",
    responsibilities: [
      "Executed manual test cases for web and mobile applications.",
      "Documented test plans, bug reports, and regression tests using TestRail and JIRA.",
      "Worked closely with developers to resolve bugs and verify fixes.",
    ],
    tools: ["Postman", "TestRail", "JIRA"],
  },
  {
    role: "QA Intern",
    company: "NextWave Technologies",
    period: "Jan 2021 – Jan 2022",
    responsibilities: [
      "Assisted in creating test scenarios for internal CRM system.",
      "Performed smoke and sanity tests during release cycles.",
      "Learned Selenium basics for automation scripts.",
    ],
    tools: ["Selenium", "Excel", "Bugzilla"],
  },
];

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <h2>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <div key={idx} className={styles.item}>
            <h3>{exp.role}</h3>
            <p className={styles.company}>
              {exp.company} • <span>{exp.period}</span>
            </p>
            <ul>
              {exp.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
            <div className={styles.tools}>
              {exp.tools.map((tool, i) => (
                <span key={i} className={styles.tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
