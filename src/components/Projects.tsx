import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Comic from './Comic';
import '../styles/style.css';
import Bio from './Bio';
import Header from './Header';
import MarketSite from './Market'; // Import MarketSite component
import ZakyatCalculator from './ZakyatCalculator'; // Import ZakyatCalculator component

interface Project {
  id: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 'comic-identifier',
    title: 'Comic Identifier',
    description: 'This is a comic identifier.',
  },
  {
    id: 'project2',
    title: 'Market Site',
    description: 'A market site to purchase items online.',
  },
  {
    id: 'project3',
    title: 'Zakyat Calculator',
    description: 'A Zakyat calculator to calculate Zakyat.',
  },
];

const Projects: React.FC = () => {
  return (
    <section>
      <Header />
      <Bio />
      <h2>Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/${project.id}`} className="project-button">
              {project.title}
            </Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path="/comic-identifier" element={<Comic />} />
        <Route path="/project2" element={<MarketSite />} />
        <Route path="/project3" element={<ZakyatCalculator />} />
      </Routes>
    </section>
  );
};

export default Projects;
