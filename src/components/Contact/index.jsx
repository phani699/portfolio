"use client";

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <p className={styles.subtitle}>
        Feel free to reach out for collaborations, questions, or job
        opportunities!
      </p>
      <div className={styles.contactInfo}>
        <div className={styles.details}>
          <p>
            <strong>Email:</strong> your.email@example.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourusername
            </a>
          </p>
        </div>
        <div className={styles.form}>
          <h3>Or send a message</h3>
          <form
            action="mailto:your.email@example.com"
            method="post"
            encType="text/plain"
          >
            <div className={styles.inputGroup}>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
