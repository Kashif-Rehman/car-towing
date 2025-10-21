import React from 'react';
import styles from '../App.module.css';

const Location = () => {
  return (
    <section className={styles.locationSection}>
      <h2>Our Location</h2>
      <div className={styles.mapContainer}>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086655979397!2d-122.41941548468183!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858157c8c8f3cd%3A0x5c2b7e7a0f7a41d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
