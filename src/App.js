// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChannelList from './components/ChannelList';
import ChannelPage from './components/ChannelPage';
import Slideshow from './components/AdsSlideshow';
import AdsSlideshow from './components/AdsSlideshow'; // Import the AdsSlideshow component

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Router>
        <header className="p-4 bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold dark:text-white">ULTRA TV</h1>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg dark:bg-blue-600 hover:bg-blue-700 transition"
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </header>

        <Slideshow /> {/* Main Slideshow */}
        <AdsSlideshow /> {/* Ads Slideshow */}

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ChannelList />} />
            <Route path="/channel/:id" element={<ChannelPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
