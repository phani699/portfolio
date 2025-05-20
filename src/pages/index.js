import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SkeletonLoader from "@/components/SkeletonLoader";
import Head from "next/head";

const QaPortfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const observerRef = useRef(null);
  const isManualScroll = useRef(false);

  const portfolioData = {
    title: "Quality Assurance Portfolio",
    description:
      "Explore my experience and contributions as a QA professional.",
    effectiveFrom: "Last updated: May 2025",
    content: `
### Introduction
I am a QA Engineer with a passion for delivering high-quality software through robust testing processes.

### Manual Testing
- Developed and executed test cases for multiple web and mobile applications.
- Worked closely with developers and product managers to ensure requirement clarity.

### Automation Testing
- Built end-to-end test suites using Selenium and Cypress.
- Integrated automated tests into CI/CD pipelines.

### Bug Reporting & Tools
- Reported and tracked bugs using Jira, Trello, and Bugzilla.
- Familiar with browser dev tools, Charles Proxy, and Postman.

### API Testing
- Validated RESTful APIs using Postman and automated collections.
- Tested scenarios including authentication, payload validation, and edge cases.

### Soft Skills
- Strong attention to detail, communication skills, and documentation practices.
- Experience collaborating with cross-functional agile teams.

### Contact
If you'd like to collaborate, email me at qa@example.com.
    `,
  };

  const extractH3Tags = (markdown) => {
    const h3Matches = markdown?.match(/^###\s(.+)/gm);
    return h3Matches
      ? h3Matches.map((line) => {
          const heading = line.replace(/^###\s/, "").trim();
          const id = heading.toLowerCase().replace(/\s+/g, "-");
          return { heading, id };
        })
      : [];
  };

  const tableOfContents = extractH3Tags(portfolioData.content || "");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      isManualScroll.current = true;
      observerRef.current?.disconnect();

      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });

      setActiveSection(id);
      setSelectedDropdown(id);

      setTimeout(() => {
        isManualScroll.current = false;
        setupObserver();
      }, 800);
    }
  };

  const setupObserver = () => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.2,
      }
    );

    tableOfContents.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current.observe(element);
    });
  };

  useEffect(() => {
    if (activeSection) {
      setSelectedDropdown(activeSection);
    }
  }, [activeSection]);

  useEffect(() => {
    if (!portfolioData?.content) return;
    setupObserver();
    return () => observerRef.current?.disconnect();
  }, [portfolioData, tableOfContents]);

  return (
    <div className={styles.page}>
      <Head>
        <title>QA Portfolio</title>
        <meta
          name="description"
          content="Showcasing quality assurance projects, automation skills, and QA expertise."
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Kanakamedala <br />
            Phani
          </h1>
        </div>
        <div className={styles.infoSection}>
          <h2 className={styles.infoTitle}>{portfolioData.title}</h2>
          <div className={styles.info}>
            <p>{portfolioData.description}</p> <p>|</p>
            <p>{portfolioData.effectiveFrom}</p>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <aside className={styles.tableOfContents}>
          <motion.div
            className={styles.list}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {tableOfContents.map((section) => (
              <motion.p
                key={section.id}
                title={section.heading}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`${styles.headingItem} ${
                    activeSection === section.id ? styles.active : ""
                  }`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.heading}
                </span>
              </motion.p>
            ))}
          </motion.div>
        </aside>

        <motion.section
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Markdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h3: ({ children }) => {
                const text = String(children);
                const id = text.toLowerCase().replace(/\s+/g, "-");
                return <h3 id={id}>{children}</h3>;
              },
              a: ({ ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contentData}
                >
                  {props.children}
                </a>
              ),
            }}
          >
            {portfolioData.content}
          </Markdown>
        </motion.section>
      </main>
    </div>
  );
};

export default QaPortfolio;
