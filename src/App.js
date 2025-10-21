import React, { useState } from 'react';
import Header from './components/header';
import WhyChooseUs from './components/whyChooseUs';
import Services from './components/services';
import Feedback from './components/feedback';
import Team from './components/team';
import Contact from './components/contact';
import Location from './components/location';
import styles from './App.module.css';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scheme, setScheme] = useState('scheme1');
  const { i18n } = useTranslation();

  return (
    <div className={`${styles.app} ${styles[scheme]} ${darkMode ? styles.dark : ''} ${i18n.language === 'ar' ? styles.rtl : ''}`}>


      {/* Left: Scheme Buttons */}
      <div className={styles.schemeButtons}>
        <button onClick={() => setScheme('scheme1')}>Scheme 1</button>
        <button onClick={() => setScheme('scheme2')}>Scheme 2</button>
        <button onClick={() => setScheme('scheme3')}>Scheme 3</button>
      </div>

      {/* Right: Dark Mode & Language */}
      <div className={styles.topRightButtons}>
        <button className={styles.langToggle} onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}>
          {i18n.language === 'en' ? 'عربي' : 'EN'}
        </button>
        <button className={styles.themeToggle} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Main Content */}
      <Header />
      <Services />
      <WhyChooseUs />
      <Location />
      <Feedback />
      <Team />
      <Contact />

      {/* Floating Buttons */}
      <a href="tel:+1234567890" className={styles.floatingCall}>📞 Call Now</a>
      <a
        href="https://wa.me/1234567890"
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
