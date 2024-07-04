import React, { useRef, useState } from 'react';
import '../assets/css/index.css';

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current) {
      setStart(sliderRef.current.scrollLeft === 0);
      setEnd(
        Math.abs(
          sliderRef.current.scrollWidth - sliderRef.current.offsetWidth - sliderRef.current.scrollLeft
        ) < 5
      );
    }
  };

  return (
    <div className="slider" style={{ paddingTop: '150px' }}>
      <div
        className="slider__content"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        <div className="slider__item">
          <img className="slider__image" src="/img/dragon-scales.svg" alt="Image" />
          <div className="slider__info">
            <h2>Card 1</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/flat-mountains.png" alt="Image" />
          <div className="slider__info">
            <h2>Card 2</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/pattern_japanese-pattern-2_1_2_0-0_0_1__ffffff00_000000.png" alt="Image" />
          <div className="slider__info">
            <h2>Card 3</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/pattern_japanese-pattern-3_1_5_0-0_0_1__2a2b37_c5c4ca.png" alt="Image" />
          <div className="slider__info">
            <h2>Card 4</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/dragon-scales (3).svg" alt="Image" />
          <div className="slider__info">
            <h2>Card 5</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/liquid-cheese.png" alt="Image" />
          <div className="slider__info">
            <h2>Card 6</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/pattern_circles-1_1_16_0-0_0_1__2a2b37_ffeba8_ffeba8.png" alt="Image" />
          <div className="slider__info">
            <h2>Card 7</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/dragon-scales (2).svg" alt="Image" />
          <div className="slider__info">
            <h2>Card 8</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/protruding-squares.png" alt="Image" />
          <div className="slider__info">
            <h2>Card 9</h2>
          </div>
        </div>
        <div className="slider__item">
          <img className="slider__image" src="/img/radiant-gradient.png" alt="Image" />
          <div className="slider__info">
            <h2>Card 10</h2>
          </div>
        </div>
      </div>
      <div className="slider__nav" style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          className={`slider__nav__button ${!start && 'slider__nav__button--active'}`}
          onClick={() => {
            if (sliderRef.current) {
              sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth * -1, behavior: 'smooth' });
            }
          }}
        >
          Previous
        </button>
        <button
          className={`slider__nav__button ${!end && 'slider__nav__button--active'}`}
          onClick={() => {
            if (sliderRef.current) {
              sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
