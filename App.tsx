
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Vote from './pages/Vote';
import GiftVotes from './pages/GiftVotes';
import Prize from './pages/Prize';
import RateUs from './pages/RateUs';
import Admin from './pages/Admin';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure no JS runs before DOM is ready
    const handleDOMContentLoaded = () => setIsLoaded(true);
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setIsLoaded(true);
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }
    return () => document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
  }, []);

  if (!isLoaded) return null;

  return (
    <Router>
      <div className="min-h-screen flex flex-col after-effects-grid selection:bg-neon selection:text-black">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/gift-votes" element={<GiftVotes />} />
            <Route path="/prize" element={<Prize />} />
            <Route path="/rate" element={<RateUs />} />
            <Route path="/admin-secure-portal-0xORYN" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
