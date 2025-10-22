import React, { useState, useEffect } from 'react';
import Header from './components/header';
import WhyChooseUs from './components/whyChooseUs';
import Services from './components/services';
import Feedback from './components/feedback';
import Team from './components/team';
import Contact from './components/contact';
import Location from './components/location';
import ImageSlider from './components/ImageSlider';
import styles from './App.module.css';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  // Load saved preferences or defaults
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false
  );
  const [scheme, setScheme] = useState(localStorage.getItem('scheme') || 'scheme1');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  // Save dark mode & scheme to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('scheme', scheme);
  }, [darkMode, scheme]);

  // Save language to localStorage and change i18n
  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div className={`${styles.app} ${styles[scheme]} ${darkMode ? styles.dark : ''}`}>
      
      {/* Dark mode button */}
      <button className={styles.themeToggle} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Scheme buttons */}
      <div className={styles.schemeButtons}>
        <button onClick={() => setScheme('scheme1')}>Scheme 1</button>
        <button onClick={() => setScheme('scheme2')}>Scheme 2</button>
        <button onClick={() => setScheme('scheme3')}>Scheme 3</button>
      </div>

      {/* Language toggle */}
      <button className={styles.langToggle} onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
        {language === 'en' ? 'عربي' : 'English'}
      </button>

      {/* Main Content */}
      <Header />
      <ImageSlider />
      <Services />
      <WhyChooseUs />
      <Location />
      <Feedback />
      <Team />
      <Contact />

      <a href="tel:+966536121365" className={styles.floatingCall}>📞 Call Now</a>
      <a
        href="https://wa.me/966536121365"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsApp}
      >
        💬 Chat on WhatsApp
      </a>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Quick Tow Car Services. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
