// Projects.tsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/style.module.css'; // Import CSS module

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Projects</h1>
      </header>
      <div>
        <section className={styles.projectContent}>
          <h2>Market Site</h2>
          <p>This project is an online market site.</p>
          <Link href="/project3">
            <span className={styles.projectButton}>View Project</span>
          </Link>
        </section>
        <section className={styles.projectContent}>
          <h2>Zakyat Calculator</h2>
          <p>This project is a Zakyat calculator to calculate Zakyat.</p>
          <Link href="/project2">
            <span className={styles.projectButton}>View Project</span>
          </Link>
        </section>
        <section className={styles.projectContent}>
          <h2>Comic Identifier</h2>
          <p>This project identifies and displays comics.</p>
          <Link href="/comic-identifier">
            <span className={styles.projectButton}>View Project</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Projects;
