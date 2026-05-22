import { useEffect, useState } from 'react';

const TOTAL = 33;

const slides = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
  '/images/photo7.jpg',
  '/images/photo8.jpg',
  '/images/photo9.jpg',
  '/images/photo10.jpg',
  '/images/photo11.jpg',
  '/images/photo12.jpg',
  '/images/photo13.jpg',
  '/images/photo14.jpg',
  '/images/photo15.jpg',
  '/images/photo16.jpg',
  '/images/photo17.jpg',
  '/images/photo18.jpg',
  '/images/photo19.jpg',
  '/images/photo20.jpg',
  '/images/photo21.jpg',
  '/images/photo22.jpg',
  '/images/photo23.jpg',
  '/images/photo24.jpg',
  '/images/photo25.jpg',
  '/images/photo26.jpg',
  '/images/photo27.jpg',
  '/images/photo28.jpg',
  '/images/photo29.jpg',
  '/images/photo30.jpg',
  '/images/photo31.jpg',
  '/images/photo32.jpg',
  '/images/photo33.jpg',
];

function randomNext(current: number, total: number) {
  let next: number;
  do { next = Math.floor(Math.random() * total); } while (next === current);
  return next;
}

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => randomNext(prev, TOTAL));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-page-wrap">
      <div className="gallery-page-head">
        <div>
          <p className="section-eyebrow">My Work</p>
          <h1 className="section-title">Gallery</h1>
        </div>
      </div>
      <div id="gallery-canvas-full">
        {slides.map((src, i) => {
          const imgSrc = isMobile ? src.replace('.jpg', '_m.jpg') : src;
          return (
            <div
              key={i}
              className={`g-slide-full${current === i ? ' active' : ''}`}
              style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          );
        })}
      </div>
    </div>
  );
}
