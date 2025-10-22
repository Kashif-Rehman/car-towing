import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../App.module.css';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';

export default function ImageSlider() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className={styles.sliderSection}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.slideWrapper}>
            <div
              className={styles.slideBackground}
              style={{ backgroundImage: `url(${src})` }}
            ></div>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.slideImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
