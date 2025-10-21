import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{t('header.title')}</h1>
        <p className={styles.subtitle}>{t('header.subtitle')}</p>
        <div className={styles.contactInfo}>
          <p>📞 <a href="tel:+1234567890">{t('contact.phone')}</a></p>
          <p>✉️ <a href="mailto:info@quicktow.com">{t('contact.email')}</a></p>
        </div>
        <a href="tel:+1234567890" className={styles.ctaButton}>{t('contact.call')}</a>
      </div>
    </header>
  );
}
