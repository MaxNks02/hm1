// components/Header.tsx
import React from 'react';
import styles from '../styles/header.module.css'; // Import CSS module

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <h1>Welcome to My Portfolio</h1>
      <h2>Contact details:</h2>
      <div className={styles.contactDetails}>
        <div className={styles.socialIcons}>
          <a
            id="gh-link"
            href="https://github.com/MaxNks02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/github-logo_icon-icons.com_73546.png"
              alt="GitHub"
            />
          </a>
          <a
            id="tg-link"
            href="https://t.me/BIade_Walker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/telegram_icon-icons.com_72055.png"
              alt="Telegram"
            />
          </a>
          <a id="email" href="mailto:maman.nks2408@gmail.com">
            <img src="/icons/gmail_new_logo_icon_159149.png" alt="Email" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
