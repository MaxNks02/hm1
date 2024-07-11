// pages/index.tsx
import Projects from '../components/Projects';
import Header from '../components/Header';
import Bio from '../components/Bio';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Bio />
      <Projects />
    </>
  );
};

export default HomePage;
