import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import '../assets/css/index2.css';

const Slider: React.FC = () => {
    return (
      <main>
        <Swiper
          modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
          }}
          keyboard={{ enabled: true }}
          mousewheel={{ thresholdDelta: 70 }}
          loop={true}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1560: { slidesPerView: 3 }
          }}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide swiper-slide--one">
            <div>
              <h2>Form 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ex in lectus volutpat egestas. Donec vitae elit vel dolor varius scelerisque a in eros.</p>
              <a href="#" target="_blank">explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide swiper-slide--two">
            <div>
              <h2>Form 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ex in lectus volutpat egestas. Donec vitae elit vel dolor varius scelerisque a in eros.</p>
              <a href="#" target="_blank">explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide swiper-slide--three">
            <div>
              <h2>Form 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ex in lectus volutpat egestas. Donec vitae elit vel dolor varius scelerisque a in eros.</p>
              <a href="#" target="_blank">explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide swiper-slide--four">
            <div>
              <h2>Form 4</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ex in lectus volutpat egestas. Donec vitae elit vel dolor varius scelerisque a in eros.</p>
              <a href="#" target="_blank">explore</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide swiper-slide--five">
            <div>
              <h2>Form 5</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ex in lectus volutpat egestas. Donec vitae elit vel dolor varius scelerisque a in eros.</p>
              <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank">explore</a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </main>
    );
  }
  
  export default Slider;
  