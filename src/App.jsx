import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Vorlade-Logik für wichtige Assets
  useEffect(() => {
    const preloadAssets = async () => {
      // Hier können Sie wichtige Assets vorladen
      const imageUrls = [
        '/assets/jsm-logo.png',
        // Fügen Sie weitere wichtige Assets hinzu
      ];

      const preloadPromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(preloadPromises);
      } catch (error) {
        console.error('Error preloading assets:', error);
      }
    };

    preloadAssets();
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      </AnimatePresence>

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
