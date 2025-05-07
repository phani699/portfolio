"use client";

import styles from "./Projects.module.scss";

const projects = [
  {
    title: "E-commerce Website QA",
    description:
      "Performed end-to-end testing for a React-based e-commerce app using Cypress. Automated checkout, login, and product filter flows.",
    tools: ["Cypress", "Jest", "GitHub Actions"],
    link: "https://github.com/yourname/ecommerce-qa",
  },
  {
    title: "API Testing for Banking System",
    description:
      "Validated REST APIs using Postman and automated tests in Newman. Included functional and negative test coverage.",
    tools: ["Postman", "Newman", "JSON Schema"],
    link: "https://github.com/yourname/banking-api-tests",
  },
  {
    title: "Performance Testing for Job Portal",
    description:
      "Created JMeter test plans to simulate 500+ concurrent users. Analyzed performance bottlenecks and generated load test reports.",
    tools: ["JMeter", "Grafana", "Jenkins"],
    link: "",
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects & Case Studies</h2>
      <p className={styles.subtitle}>Real-world QA work I’ve done</p>
      <div className={styles.grid}>
        {projects.map((proj, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{proj.title}</h3>
            <p className={styles.description}>{proj.description}</p>
            <div className={styles.tools}>
              {proj.tools.map((tool, i) => (
                <span key={i} className={styles.tool}>
                  {tool}
                </span>
              ))}
            </div>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
