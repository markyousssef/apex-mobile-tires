import { useEffect, useState } from 'react';

const TOTAL = 33;
const base = import.meta.env.BASE_URL;
const slides = Array.from({ length: TOTAL }, (_, i) => `${base}images/photo${i + 1}_m.jpg`);

function randomNext(current: number, total: number) {
  let next: number;
  do { next = Math.floor(Math.random() * total); } while (next === current);
  return next;
}

export default function GalleryMobile() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const footer = document.querySelector<HTMLElement>('footer');
    if (footer) footer.style.display = 'none';
    return () => { if (footer) footer.style.display = ''; };
  }, []);

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
          <p className="section-eyebrow">Our Work</p>
          <h1 className="section-title">Gallery</h1>
        </div>
      </div>
      <div id="gallery-canvas-full">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`g-slide-full${current === i ? ' active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
}
