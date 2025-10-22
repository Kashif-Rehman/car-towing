import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.locationSection}>
      <h2>{t('location.title')}</h2>
      <div className={styles.mapContainer}>
        <iframe
  title="Our Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.928888921793!2d50.09137627444345!3d26.392666783332614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e66e5d9c8c1f%3A0x2d0f6a6c45b1df4!2sDammam%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </section>
  );
};

export default Location;
