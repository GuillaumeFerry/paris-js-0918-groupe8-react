import React from 'react';

import BoNavbar from '../components/boNavbar/BoNavbar';
import BOArticleNav from '../components/boarticle/BOArticleNav';

import './BOgrids.css';

const BOarticles = () => (
  <div className="grid-container">
    <aside className="grid-item BoNavbar">
      <BoNavbar />
    </aside>
    <main className="grid-item">
      <BOArticleNav />
    </main>
  </div>
);

export default BOarticles;
