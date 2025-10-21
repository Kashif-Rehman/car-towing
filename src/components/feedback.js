import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

export default function Feedback() {
  const { t } = useTranslation();

  return (
    <section className={`${styles.section} ${styles.feedbackSection}`}>
      <h2>{t('feedback.title')}</h2>
      <blockquote className={styles.feedback}>
        {t('feedback.comment')}
        <footer>— {t('feedback.author')}</footer>
      </blockquote>
    </section>
  );
}
