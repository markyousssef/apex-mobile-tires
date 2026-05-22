export default function ContactDesktop() {
  return (
    <section id="contact" className="contact-page-desktop">
      <div className="contact-grid">
        <div className="contact-left">
          <div className="contact-text-top">
            <div className="contact-heading">
              <p className="section-eyebrow">Get In Touch</p>
              <h1 className="section-title">Contact</h1>
            </div>
            <p className="contact-desc">Reach out directly. No contact forms, no wait times. Call or email and we will get back to you.</p>
          </div>
          <div className="contact-items">
            <a href="tel:8058917340" className="contact-item">
              <div className="c-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C7.6 21 3 16.4 3 6a2 2 0 012-2z"/>
                </svg>
              </div>
              <div><div className="c-label">Phone</div><div className="c-value">(805) 891-7340</div></div>
            </a>
            <a href="mailto:apexmobiletire@gmail.com" className="contact-item">
              <div className="c-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                </svg>
              </div>
              <div><div className="c-label">Email</div><div className="c-value">apexmobiletire@gmail.com</div></div>
            </a>
            <div className="social-row">
              <a href="https://www.instagram.com/apexmobiletires/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/p/Apex-Mobile-Tire-100090378756229/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="hours-block">
            <div className="hours-title">Hours</div>
            {['Monday','Tuesday','Wednesday','Thursday','Friday'].map(day => (
              <div className="hours-row" key={day}>
                <span className="h-day">{day}</span>
                <span className="h-time">9:00 AM - 6:00 PM</span>
              </div>
            ))}
            <div className="hours-row"><span className="h-day">Saturday</span><span className="h-closed">Closed</span></div>
            <div className="hours-row"><span className="h-day">Sunday</span><span className="h-closed">Closed</span></div>
            <div className="area-pill">We serve within <strong>25 miles of Thousand Oaks, CA.</strong> Give us a call to confirm your area.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
