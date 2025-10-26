import React from "react";
import { Helmet } from "react-helmet-async";

export default function SeoMeta({ lang = "en" }) {
  const isArabic = lang === "ar";

  const meta = {
    en: {
      title: "Al Faraj Towing Services | سطحة الفرج الدمام الخبر الظهران الجبيل القطيف رأس تنورة",
      description:
        "24/7 Vehicle Towing (سطحة) and Roadside Assistance in Dammam, Khobar, Dhahran, Jubail, Qatif, and Ras Tanura. Fast, reliable, and affordable towing service across the Eastern Province of Saudi Arabia.",
      keywords:
        "Al Faraj Towing, سطحة الدمام, سطحة الخبر, سطحة الظهران, سطحة الجبيل, سطحة القطيف, سطحة رأس تنورة, سحب سيارات, towing Dammam, roadside assistance, flatbed tow truck, towing near me, سطحة الشرقية",
      image: "https://alfarajtowing.com/images/tow-truck-preview.jpg",
      url: "https://alfarajtowing.com/",
    },
    ar: {
      title: "سطحة الفرج الدمام الخبر الظهران الجبيل القطيف رأس تنورة | Al Faraj Towing Services",
      description:
        "سطحة الفرج تقدم خدمة سحب سيارات على مدار الساعة في الدمام، الخبر، الظهران، الجبيل، القطيف، ورأس تنورة. خدمة سريعة وآمنة بأسعار مناسبة. اتصل الآن لسطحة قريبة منك في المنطقة الشرقية.",
      keywords:
        "سطحة الدمام, سطحة الخبر, سطحة الظهران, سطحة الجبيل, سطحة القطيف, سطحة رأس تنورة, سحب سيارات, سطحة الفرج, سطحة قريبة, سطحة الشرقية, Al Faraj Towing, towing Saudi Arabia",
      image: "https://alfarajtowing.com/images/tow-truck-preview.jpg",
      url: "https://alfarajtowing.com/ar",
    },
  };

  const m = isArabic ? meta.ar : meta.en;

  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* ===== Basic SEO ===== */}
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <meta name="keywords" content={m.keywords} />
      <link rel="canonical" href={m.url} />

      {/* ===== Open Graph (Facebook / WhatsApp / LinkedIn / Telegram) ===== */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={isArabic ? "ar_SA" : "en_US"} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:url" content={m.url} />
      <meta property="og:site_name" content="Al Faraj Towing (سطحة الفرج)" />
      <meta property="og:image" content={m.image} />
      <meta property="og:image:alt" content="سطحة الفرج Tow Truck Dammam" />

      {/* ===== Twitter Card ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.description} />
      <meta name="twitter:image" content={m.image} />
      <meta name="twitter:site" content="@alfarajtowing" />

      {/* ===== Mobile Meta ===== */}
      <meta name="theme-color" content="#d32f2f" />
      <meta
        name="apple-mobile-web-app-title"
        content="Al Faraj Towing (سطحة)"
      />

      {/* ===== Structured Data (Google Rich Snippet) ===== */}
      <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "TowingService",
        "name": "Al Faraj Towing Services (سطحة الفرج)",
        "image": "${m.image}",
        "url": "${m.url}",
        "telephone": ["+966536121365", "+966555632801"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dammam",
          "addressRegion": "Eastern Province",
          "addressCountry": "SA"
        },
        "areaServed": [
          {"@type": "City", "name": "Dammam"},
          {"@type": "City", "name": "Khobar"},
          {"@type": "City", "name": "Dhahran"},
          {"@type": "City", "name": "Jubail"},
          {"@type": "City", "name": "Qatif"},
          {"@type": "City", "name": "Ras Tanura"}
        ],
        "description": "${m.description}",
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "$$",
        "serviceType": "Roadside Assistance, Flatbed Towing, Accident Recovery, Long Distance Tow"
      }
      `}</script>
    </Helmet>
  );
}
