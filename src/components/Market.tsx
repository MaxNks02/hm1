import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import '../styles/style.css';

const MarketSite: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Market Site</h1>
        <Link to="/">Back to Portfolio</Link>
      </header>
      <div className="container">
        <section>
          <h2>Market Site</h2>
          <p>This project is an online market site.</p>
        </section>
      </div>
    </div>
  );
};

export default MarketSite;
