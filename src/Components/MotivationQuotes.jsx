
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow,Navigation, Autoplay, Pagination, ]}
        className="mySwiper"
      > <SwiperSlide>
      <img src=" 	https://mysocialboutique.co/wp-content/uploads/2023/07/female-entrepreneurs-quotes-images.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://mysocialboutique.co/wp-content/uploads/2023/07/woman-in-business-quotes-image.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://mysocialboutique.co/wp-content/uploads/2023/07/earheart-entrepreneur-qupte-1200x1440.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://mysocialboutique.co/wp-content/uploads/2023/07/michelle-obama-business-quote-1200x1440.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://mysocialboutique.co/wp-content/uploads/2023/07/mindest-quotes-image.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://mysocialboutique.co/wp-content/uploads/2023/07/black-entrepreneur-quotes.png" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="	https://mysocialboutique.co/wp-content/uploads/2023/07/woman-success-business-quotes-image.png" />
    </SwiperSlide>
    {/* <SwiperSlide>
      <img src="	https://wallpapercave.com/dwp2x/wp7232129.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="	https://wallpapercave.com/dwp2x/wp7232130.jpg" />
    </SwiperSlide> */}
    </Swiper>
    </>
  );
}




/*

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function MotivationQuotes() {
  return (
    <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
    slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
    coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
   
  </swiper-container>
  );
}

*/