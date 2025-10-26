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

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false
  );
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : ''}`}>
      {/* Dark mode button */}
      <button className={styles.themeToggle} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      {/* Language toggle */}
      <button
        className={styles.langToggle}
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      >
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

      {/* Floating buttons */}
      <a href="tel:0536121365" className={styles.floatingCall}>
        📞 Call Now
      </a>
      <a
        href="https://wa.me/966536121365"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsApp}
      >
        💬 Chat on WhatsApp
      </a>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Al Faraj Towing Services. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
