import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className={`${styles.section} ${styles.whyChooseUs}`}>
      <h2>{t('whyChooseUs.title')}</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <span className={styles.icon}>🚨</span>
          <h3>{t('whyChooseUs.emergency.title')}</h3>
          <p>{t('whyChooseUs.emergency.desc')}</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>👷‍♂️</span>
          <h3>{t('whyChooseUs.experienced.title')}</h3>
          <p>{t('whyChooseUs.experienced.desc')}</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>💰</span>
          <h3>{t('whyChooseUs.affordable.title')}</h3>
          <p>{t('whyChooseUs.affordable.desc')}</p>
        </div>
      </div>
    </section>
  );
}
