// modules
import { Navigation, A11y, EffectFade, EffectCards } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import './Swiper.css'

const WorksSlices = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, EffectCards]}
      effect="cards"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      data-aos='flip-left'
    >
      <SwiperSlide>
        <div className="slice-ctn d-flex col">
          <p>Test</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

    </Swiper>
  );
};

export default WorksSlices;