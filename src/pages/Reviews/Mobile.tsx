import { useEffect, useState } from 'react';

interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  { name: 'Austin Caccavo', text: 'Kyle is incredibly knowledgeable, extremely careful, and did a great job installing a new set of Michelins on my E28 M5. I will never go to a traditional tire shop again. Thank you for the phenomenal service!' },
  { name: 'Brian Zacuto', text: 'Great experience. They showed up on time, communicated clearly, and completed the work on time. They even cleaned my wheels! I could not ask for a better experience.' },
  { name: 'Patty Limatola-Tanenbaum', text: 'I recently had the pleasure of working with Kyle and I cannot recommend him highly enough. He offered four different tire options to fit my budget, kept me informed throughout, and worked around my schedule to ensure everything went smoothly.' },
  { name: 'Shawn Berina', text: 'Kyle was very quick to respond, professional, and did an excellent job. Super convenient with his setup to come to you and had fair prices. Great service!' },
  { name: 'Anna Syrovatkina', text: 'I have been going to Apex since they opened for business and Apex continues to be the best investment of patronage to a business yet. Every time I need tires changed they are quick to respond, make recommendations on brands, and are very competitive on pricing.' },
];

function randomNext(current: number, total: number) {
  let next: number;
  do { next = Math.floor(Math.random() * total); } while (next === current);
  return next;
}

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function ReviewsMobile() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const outer = document.getElementById('reviews-outer');
    const header = document.querySelector<HTMLElement>('header');
    const footer = document.querySelector<HTMLElement>('footer');
    if (!outer || !header || !footer) return;
    outer.style.height = `${window.innerHeight - header.offsetHeight - footer.offsetHeight}px`;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => randomNext(prev, reviews.length));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="reviews-outer">
      <div id="reviews-canvas">
        <div className="reviews-label">
          <p className="section-eyebrow">What People Say</p>
          <h1 className="section-title">Reviews</h1>
        </div>
        {reviews.map((r, i) => (
          <div key={i} className={`r-slide${current === i ? ' active' : ''}`}>
            <div className="r-card">
              <div className="r-badge"><GoogleIcon />Google</div>
              <span className="r-quote-mark">"</span>
              <div className="r-stars">{'★★★★★'}</div>
              <p className="r-text">{r.text}</p>
              <div className="r-author">
                <div className="r-avatar">{r.name[0]}</div>
                <div>
                  <div className="r-name">{r.name}</div>
                  <div className="r-source">Google Review</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
