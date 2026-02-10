
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Members from './pages/Members';
import Board from './pages/Board';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import LongitudeRx from './pages/LongitudeRx';
import LongitudeFX from './pages/LongitudeFX';
import Newsroom from './pages/Newsroom';
import PressRelease from './pages/PressRelease';
import InMemory from './pages/InMemory';
import Connect from './pages/Connect';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/members" element={<Members />} />
            <Route path="/board" element={<Board />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/solutions/rx" element={<LongitudeRx />} />
            <Route path="/solutions/fx" element={<LongitudeFX />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/newsroom/:slug" element={<PressRelease />} />
            <Route path="/in-memory-paul-mango" element={<InMemory />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
