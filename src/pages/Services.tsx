const services = [
  { num: '01', name: 'Tire & Wheel Sales', desc: 'We source tires from top brands including Michelin, Bridgestone, Continental, Goodyear, and more. Tell us your vehicle and your budget and we will find the right tire for you, delivered and installed on the spot.' },
  { num: '02', name: 'Tire Changes', desc: 'Full tire mounting and installation at your location. Whether you are at home, at work, or anywhere else, we come to you with professional equipment and get the job done right the first time.' },
  { num: '03', name: 'Wheel Balances', desc: 'Unbalanced wheels cause vibration, uneven tread wear, and premature tire failure. We use precision balancing equipment on-site to make sure your wheels are perfectly balanced every time.' },
  { num: '04', name: 'Flat Repairs', desc: 'Got a flat? Do not stress. We come to you and assess whether the tire can be repaired or needs to be replaced. Fast, professional, and on your schedule so you are back on the road as quickly as possible.' },
];

export default function Services() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-top">
          <div>
            <p className="section-eyebrow">What We Offer</p>
            <h1 className="section-title">Services</h1>
          </div>
          <p className="page-header-note">Every service is performed on-site, wherever your vehicle is. We bring the equipment to you so you never have to set foot in a tire shop.</p>
        </div>
      </div>

      <div className="services-section">
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.num}>
              <div className="service-number">{s.num}</div>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-strip">
        <div className="cta-text">
          <h2>Ready to Get Started?</h2>
          <p>Give us a call or send an email and we will take care of the rest.</p>
        </div>
        <div className="cta-actions">
          <a href="tel:8058917340" className="cta-btn-primary">(805) 891-7340</a>
          <a href="mailto:apexmobiletire@gmail.com" className="cta-btn-secondary">apexmobiletire@gmail.com</a>
        </div>
      </div>
    </>
  );
}
