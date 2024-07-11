import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from '../styles/comicStyle.module.css'; // Import CSS module

dayjs.extend(relativeTime);

export interface ComicProps {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

const ComicComponent: React.FC<{ comic: ComicProps | null }> = ({ comic }) => {
  if (!comic) {
    return <p>Loading...</p>;
  }

  const publishDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`);
  const formattedDate = publishDate.format('MMMM DD, YYYY');

  return (
    <div className={styles.comicBody}>
      <div className={styles.container}>
        <div className={styles.comicContainer}>
          <h2 className={styles.comicTitle}>{comic.safe_title}</h2>
          <img className={styles.comicImg} src={comic.img} alt={comic.alt} />
          <p className={styles.comicAlt}>{comic.alt}</p>
          <p className={styles.comicDate}>Published on: {formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ComicComponent;
