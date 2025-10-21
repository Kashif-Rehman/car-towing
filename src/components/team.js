import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation();

  return (
    <section className={`${styles.sectionAlt} ${styles.teamSection}`}>
      <h2>{t('team.title')}</h2>
      <div className={styles.gridList}>
        {t('team.members', { returnObjects: true }).map((member, index) => (
          <div key={index} className={styles.teamCard}>{member}</div>
        ))}
      </div>
    </section>
  );
}
