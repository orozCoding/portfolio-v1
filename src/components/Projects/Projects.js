import projectsArray from './proyectsArray';

// modules
import { Navigation, A11y, EffectCards } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import './Projects.css'

const WorksSlices = () => {
  const renderSlice = (item) => {
    return (<SwiperSlide>
      <div className="slice-ctn d-flex col">
        <div className="slice-img-ctn">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="slice-info-ctn d-flex col">
          <h4>{item.title}</h4>
          <hr />
          <p>{item.description}</p>
          <div className="slice-footer d-flex">
            <div className="slice-footer-left d-flex col">
              <p>Built with:</p>
              <ul className="d-flex">{item.stack.map((tech) => (<li>- {tech}</li>))}</ul>
            </div>
            <div className="slice-footer-right d-flex col">
              <button className="click">Click</button>
              <button className="click">Me</button>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    )
  }


  return (
    <Swiper
      modules={[Navigation, A11y, EffectCards]}
      effect="cards"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      data-aos='flip-left'
    >
      {projectsArray.map((proyect) => {
        return renderSlice(proyect);
      })}
    </Swiper>
  );
};

export default WorksSlices;