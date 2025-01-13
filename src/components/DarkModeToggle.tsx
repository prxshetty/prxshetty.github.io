"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
    // const timer = setTimeout(() => {
    //   setIsVisible(false);
    // }, 5000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle dark mode"
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-5 h-5" />
    </button>
  );
}

export default DarkModeToggle;
