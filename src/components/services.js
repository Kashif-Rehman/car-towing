import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className={`${styles.sectionAlt} ${styles.servicesSection}`}>
      <h2>{t('services.title')}</h2>
      <div className={styles.gridList}>
        <div className={styles.serviceCard}>{t('services.emergencyTowing')}</div>
        <div className={styles.serviceCard}>{t('services.roadsideAssistance')}</div>
        <div className={styles.serviceCard}>{t('services.accidentRecovery')}</div>
        <div className={styles.serviceCard}>{t('services.longDistanceTow')}</div>
      </div>
    </section>
  );
}
