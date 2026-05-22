import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const cities = [
  'Thousand Oaks', 'Calabasas', 'Camarillo', 'Newbury Park',
  'Westlake Village', 'Agoura Hills', 'Moorpark', 'Simi Valley',
  'Malibu', 'Oak Park', 'Oxnard', 'Ventura',
];

export default function ServiceArea() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<ReturnType<typeof import('leaflet')['map']> | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    import('leaflet').then(L => {
      const lat = 34.1372;
      const lng = -118.6614;

      const map = L.map(mapRef.current!, {
        center: [lat, lng],
        zoom: 8.5,
        zoomSnap: 0.5,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      L.circle([lat, lng], {
        radius: 25 * 1609.34,
        color: '#2E5E38',
        fillColor: '#2E5E38',
        fillOpacity: 0.08,
        weight: 2,
      }).addTo(map);

      const greenIcon = L.divIcon({
        className: '',
        html: '<div style="width:14px;height:14px;border-radius:50%;background:#2E5E38;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      L.marker([lat, lng], { icon: greenIcon })
        .addTo(map)
        .bindPopup('<strong>Apex Mobile Tire</strong><br>Calabasas, CA')
        .openPopup();
    });

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <>
      <div className="page-header">
        <p className="section-eyebrow">Coverage</p>
        <h1 className="section-title">Service Area</h1>
        <p className="page-desc">We come to you anywhere within 25 miles of Calabasas, CA. If you are not sure whether we cover your location, give us a call.</p>
      </div>

      <div id="map-wrap">
        <div id="map" ref={mapRef} />
      </div>

      <section id="cities">
        <div className="cities-header">
          <p className="section-eyebrow">Cities Served</p>
          <h2 className="section-title">Where We Work</h2>
        </div>
        <div className="cities-grid">
          {cities.map(city => (
            <div className="city-item" key={city}>
              <div className="city-dot" />
              {city}
            </div>
          ))}
        </div>
        <p className="cities-note">
          Not seeing your city? Give us a call at <a href="tel:8058917340">(805) 891-7340</a> and we can confirm whether we cover your area.
        </p>
      </section>
    </>
  );
}
