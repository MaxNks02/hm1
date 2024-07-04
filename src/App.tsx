import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Comic from './components/Comic';
import ZakyatCalculator from './components/ZakyatCalculator';
import MarketSite from './components/Market';


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/comic-identifier" element={<Comic />} />
                <Route path="/project2" element={<ZakyatCalculator />} />
                <Route path="/project3" element={<MarketSite />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};
export default App;