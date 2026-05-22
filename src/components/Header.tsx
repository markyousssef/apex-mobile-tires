import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="logo-wrap">
    <img
      src={`${import.meta.env.BASE_URL}logos/Apex-Mobile-Tire-Final-Logo-Transparent.PNG`}
      alt="Apex Mobile Tire"
      className="logo-img"
    />
  </Link>
);

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (
        menuOpen &&
        mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  return (
    <>
      <header>
        <Logo />
        <nav>
          <div className={`nav-item${dropdownOpen ? ' open' : ''}`} ref={dropdownRef}>
            <button className="nav-btn" onClick={() => setDropdownOpen(o => !o)}>
              Pages
              <svg className="chevron" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="2,4 7,10 12,4" />
              </svg>
            </button>
            <div className="dropdown">
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/service-area">Service Area</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </nav>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          ref={hamburgerRef}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span />
        </button>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} ref={mobileMenuRef}>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/service-area">Service Area</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}
