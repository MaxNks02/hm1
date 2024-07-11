// components/Bio.tsx
import React from 'react';
import styles from '../styles/bio.module.css'; // Import CSS module

const Bio: React.FC = () => {
  return (
    <section className={styles.bio}>
      <h2 className={`${styles.bio} ${styles.h2}`}>About Me</h2>
      <p className={`${styles.bio} ${styles.p}`}>
        Hello! I am Maman Torebaev. I am a young developer and student from
        Innopolis.
      </p>
    </section>
  );
};

export default Bio;
