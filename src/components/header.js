import React from "react";
import styles from "../App.module.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Header() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  // SEO content variables (can adapt based on language)
  const title =
    lang === "ar"
      ? "سطحة الفرج | خدمات سحب السيارات في الدمام 24/7"
      : "Al Faraj Towing Services | 24/7 سطحة & Roadside Assistance in Dammam";

  const description =
    lang === "ar"
      ? "سطحة الفرج تقدم خدمات سحب السيارات ومساعدة الطريق في الدمام والمناطق القريبة — سطحة متوفرة على مدار الساعة بأسعار مناسبة."
      : "Al Faraj Towing Services provides 24/7 towing (سطحة) and roadside assistance in Dammam and nearby areas. Fast, reliable, and affordable.";

  const url = "https://alfarajtowing.com";
  const image = "https://alfarajtowing.com/images/tow-truck.jpg";

  return (
    <header className={styles.header}>
      {/* 🔹 SEO + Social Meta Tags */}
      <Helmet>
        {/* Primary Meta Tags */}
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="سطحة, سطحة الدمام, Al Faraj Towing, towing services Dammam, roadside assistance, سطحة الخبر, سطحة الظهران, سطحة القطيف, سطحة الجبيل, سحب السيارات, towing in Saudi Arabia, towing near me"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content={lang === "ar" ? "ar_AR" : "en_US"} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@alfarajtowing" />

        {/* Additional SEO */}
        <link rel="canonical" href={url} />
      </Helmet>

      {/* 🔹 Actual Header Content */}
      <div className={styles.overlay}>
        <h1 className={styles.title}>{t("header.title")}</h1>
        <p className={styles.subtitle}>{t("header.subtitle")}</p>

        <div className={styles.contactInfo}>
          <p>
            📞 <a href={`tel:${t("contact.phone")}`}>{t("contact.phone")}</a>
          </p>
          <p>
            📞 <a href={`tel:${t("contact.phone1")}`}>{t("contact.phone1")}</a>
          </p>
          <p>
            ✉️ <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a>
          </p>
        </div>

        <a href={`tel:${t("contact.phone")}`} className={styles.ctaButton}>
          {t("contact.call")}
        </a>
      </div>
    </header>
  );
}
