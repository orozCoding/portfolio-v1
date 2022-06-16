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
          <h4 className="slice-title">{item.title}</h4>
          <p>{item.description}</p>
          <div className="slice-footer d-flex">
            <div className="slice-footer-left d-flex col">
              <p>Built with:</p>
              {console.log(item.stack)}
              <ul className="d-flex slice-stack">{item.stack.map((tech) => (
                <li className="slice-stack-li d-flex">
                  <img src={tech.i} alt={tech.t.toLowerCase()} />
                  <p>{tech.t}</p>
                </li>
                ))}
              </ul>
            </div>
            <div className="slice-footer-right d-flex col">
              {item.visit &&
                <a href={item.visit} target='_blank' rel='noreferrer'
                  className="slice-button click d-flex">
                  <i class="bi bi-globe"></i>
                  <p>Visit</p>
                </a>
              }
              {item.demo &&
                <a href={item.demo} target='_blank' rel='noreferrer'
                  className="slice-button click d-flex">
                  <i class="bi bi-tools"></i>
                  <p>Demo</p>
                </a>}
              {item.repo &&
                <a href={item.repo} target='_blank' rel='noreferrer'
                  className="slice-button click d-flex">
                  <i class="bi bi-github"></i>
                  <p>Repository</p>
                </a>}
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
      data-aos='flip-left'
    >
      {projectsArray.map((proyect) => {
        return renderSlice(proyect);
      })}
    </Swiper>
  );
};

export default WorksSlices;