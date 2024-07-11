// components/Market.tsx
import React from 'react';
import Link from 'next/link';

const MarketSite: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Market Site</h1>
        <Link href="/">Back to Portfolio</Link>
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
