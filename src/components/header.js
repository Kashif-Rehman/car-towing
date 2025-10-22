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
          <p>📞 <a href={`tel:${t('contact.phone')}`}>{t('contact.phone')}</a></p>
          <p>✉️ <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a></p>
        </div>

        <a href={`tel:${t('contact.phone')}`} className={styles.ctaButton}>
          {t('contact.call')}
        </a>
      </div>
    </header>
  );
}
