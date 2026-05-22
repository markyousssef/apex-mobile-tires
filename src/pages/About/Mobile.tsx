import { useEffect, useState } from 'react';

const base = import.meta.env.BASE_URL;
const slides = [`${base}images/about-photo.jpg`, `${base}images/about-kyle.jpg`, `${base}images/about-3.jpg`];

function randomNext(current: number, total: number) {
  let next: number;
  do { next = Math.floor(Math.random() * total); } while (next === current);
  return next;
}

export default function AboutMobile() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => randomNext(prev, slides.length));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="about-above-fold">
        <section id="about-hero">
          <p className="section-eyebrow">Who We Are</p>
        </section>
        <div id="about-photo-section">
          {slides.map((src, i) => (
            <div
              key={i}
              className={`about-slide${current === i ? ' active' : ''}`}
              style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
            />
          ))}
        </div>
      </div>
      <div className="about-body-wrap">
        <div className="about-inner">
          <div className="about-body-lg">
            <p>Apex Mobile Tire was founded in 2022 by Kyle Jeworski with a straightforward mission: bring professional tire service directly to the customer. Based out of Calabasas, CA, the business was built on the belief that getting new tires should not mean sitting in a waiting room for hours. We handle every job personally, arriving at your home, office, or wherever your vehicle is parked, with everything needed to get the work done right on the spot.</p>
            <p>Since opening, Apex Mobile Tire has built a reputation across the greater Thousand Oaks area for reliability, fair pricing, and a level of care that traditional tire shops rarely offer. We provide Tire and Wheel Sales, Tire Changes, Wheel Balances, and Flat Repairs, serving customers within 25 miles of Thousand Oaks including Camarillo, Calabasas, Newbury Park, Malibu, Moorpark, Westlake Village, Simi Valley, and Agoura Hills.</p>
          </div>
        </div>
      </div>
    </>
  );
}
