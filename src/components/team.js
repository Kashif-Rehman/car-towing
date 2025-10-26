import React from 'react';
import styles from '../App.module.css';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation();

  const teamData = t('team.members', { returnObjects: true });

  return (
    <section className={`${styles.sectionAlt} ${styles.teamSection}`}>
      <h2 className={styles.sectionTitle}>{t('team.title')}</h2>

      <div className={styles.gridList}>
        {teamData.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <div className={styles.teamMemberName}>{member.name}</div>
            <div className={styles.teamMemberRole}>{member.role}</div>

            <div className={styles.teamContact}>
              {/* 📞 Call */}
              <a
                href={`tel:${member.phone}`}
                className={styles.phoneLink}
              >
                <Phone size={18} /> {member.phone}
              </a>

              {/* 💬 WhatsApp */}
              <a
                href={`https://wa.me/${member.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
