import React, { useEffect, useState } from 'react';
import '../assets/css/card.css';
import 'https://kit.fontawesome.com/a81368914c.js';


const Card: React.FC = () => {
  const [prevColor, setPrevColor] = useState('blue');
  const [animationEnd, setAnimationEnd] = useState(true);
  const [primaryColor, setPrimaryColor] = useState('#2175f5');
  const [activeSize, setActiveSize] = useState('9');
  const [shoeBgHeight, setShoeBgHeight] = useState('475px');

  const sizes = ['7', '8', '9', '10', '11'];
  const colors = [
    { primary: '#2175f5', color: 'blue' },
    { primary: '#f84848', color: 'red' },
    { primary: '#29b864', color: 'green' },
    { primary: '#ff5521', color: 'orange' },
    { primary: '#444', color: 'black' }
  ];

  useEffect(() => {
    const changeHeight = () => {
      if (window.matchMedia("(max-width: 1000px)").matches) {
        const shoeHeight = document.querySelector<HTMLElement>('.shoe.show')?.offsetHeight || 0;
        setShoeBgHeight(`${shoeHeight * 0.9}px`);
      } else {
        setShoeBgHeight('475px');
      }
    };

    changeHeight();
    window.addEventListener('resize', changeHeight);
    return () => window.removeEventListener('resize', changeHeight);
  }, []);

  const handleSizeClick = (size: string) => {
    setActiveSize(size);
  };

  const handleColorClick = (color: string, primary: string) => {
    if (!animationEnd || color === prevColor) return;

    setAnimationEnd(false);
    setPrimaryColor(primary);

    const shoe = document.querySelector(`.shoe[color="${color}"]`);
    const gradient = document.querySelector(`.gradient[color="${color}"]`);
    const prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    shoe?.classList.add('show');
    gradient?.classList.add('first');
    prevGradient?.classList.add('second');

    gradient?.addEventListener('animationend', () => {
      setAnimationEnd(true);
    });

    setPrevColor(color);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="shoeBackground" style={{ height: shoeBgHeight }}>
          <div className="gradients">
            {colors.map(({ color }) => (
              <div key={color} className={`gradient ${color === prevColor ? 'first' : ''}`} color={color}></div>
            ))}
          </div>
          <h1 className="nike">nike</h1>
          <img src="https://i.postimg.cc/g2T47Ggx/logo.png" alt="" className="logo" />
          <a href="#" className="share"><i className="fas fa-share-alt"></i></a>
          {colors.map(({ color }) => (
            <img key={color} src={`https://i.postimg.cc/${color}.png`} alt="" className={`shoe ${color === prevColor ? 'show' : ''}`} color={color} />
          ))}
        </div>
        <div className="info">
          <div className="shoeName">
            <div>
              <h1 className="big">Nike Zoom KD 12</h1>
              <span className="new">new</span>
            </div>
            <h3 className="small">Men's running shoes</h3>
          </div>
          <div className="description">
            <h3 className="title">Product Info</h3>
            <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
          </div>
          <div className="color-container">
            <h3 className="title">Color</h3>
            <div className="colors">
              {colors.map(({ primary, color }) => (
                <span key={color} className={`color ${color === prevColor ? 'active' : ''}`} style={{ background: primary }} onClick={() => handleColorClick(color, primary)}></span>
              ))}
            </div>
          </div>
          <div className="size-container">
            <h3 className="title">Size</h3>
            <div className="sizes">
              {sizes.map(size => (
                <span key={size} className={`size ${size === activeSize ? 'active' : ''}`} onClick={() => handleSizeClick(size)}>{size}</span>
              ))}
            </div>
          </div>
          <div className="buy-price">
            <a href="#" className="buy"><i className="fas fa-shopping-cart"></i>Add to card</a>
            <div className="price">
              <i className="fas fa-dollar-sign"></i>
              <h1>189.99</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
