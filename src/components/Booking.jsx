import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';

const {
  FiArrowUpRight,
  FiCalendar,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiInfo
} = FiIcons;

const spaces = [
  {
    id: 'venue',
    label: 'Lokal',
    subtitle: 'Ett rum för mindre sällskap',
    detail: 'Passar möten och mindre sammankomster',
    sessionPrice: 500,
    dayPrice: 1500
  },
  {
    id: 'floor',
    label: 'Ett våningsplan',
    subtitle: 'Mer plats för fler möjligheter',
    detail: 'Passar workshops och större grupper',
    sessionPrice: 1200,
    dayPrice: 3000
  },
  {
    id: 'building',
    label: 'Hela klubbhuset',
    subtitle: 'Hela platsen, helt för er',
    detail: 'Passar firanden och större arrangemang',
    sessionPrice: 2500,
    dayPrice: 6000
  }
];

const weekdays = ['SÖN', 'MÅN', 'TIS', 'ONS', 'TOR', 'FRE', 'LÖR'];
const slots = ['09–12', '12–17', '17–22', 'Heldag'];

function getDays(offset) {
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(today);
    day.setDate(today.getDate() + offset * 7 + index);
    return day;
  });
}

function Booking() {
  const [space, setSpace] = useState(spaces[0]);
  const [week, setWeek] = useState(0);
  const [selection, setSelection] = useState(null);
  const days = getDays(week);
  const isFullDay = selection?.slot === 'Heldag';
  const price = isFullDay ? space.dayPrice : space.sessionPrice;
  const pricePeriod = isFullDay ? 'heldag' : 'tidsperiod';
  const request = selection
    ? `Hej! Jag vill fråga om att boka ${space.label.toLowerCase()} ${selection.day.toLocaleDateString('sv-SE')} kl. ${isFullDay ? '09–22 (heldag)' : selection.slot}. Indikativt pris: ${price.toLocaleString('sv-SE')} kr.`
    : `Hej! Jag vill fråga om att boka ${space.label.toLowerCase()} i klubbhuset.`;

  return (
    <section className="booking section-pad" id="booking">
      <div className="container">
        <div className="booking-header">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> BOKA KLUBBHUSET</div>
            <h2>Plats för det<br />som <em>händer.</em></h2>
          </div>
          <p>Välj lokal, våningsplan eller hela huset. Se önskad tid och skicka en bokningsförfrågan.</p>
        </div>
        <p className="booking-info-link">
          Osäker på vad som ingår? <Link to="/clubhouse-info">Läs mer om lokaler, priser och villkor <SafeIcon icon={FiArrowUpRight} /></Link>
        </p>
        <div className="booking-layout">
          <div className="booking-options">
            <div className="step-title"><span>01</span> Välj vad du vill boka</div>
            {spaces.map((item) => (
              <button
                key={item.id}
                className={`space-option ${space.id === item.id ? 'selected' : ''}`}
                onClick={() => { setSpace(item); setSelection(null); }}
                aria-pressed={space.id === item.id}
              >
                <span className="option-check">
                  {space.id === item.id && <SafeIcon icon={FiCheck} />}
                </span>
                <span className="option-content">
                  <strong>{item.label}</strong>
                  <small>{item.subtitle}</small>
                </span>
                <span className="option-price">
                  Från {item.sessionPrice.toLocaleString('sv-SE')} kr
                  <small>per tidsperiod</small>
                </span>
              </button>
            ))}
            <div className="space-detail"><SafeIcon icon={FiInfo} /> {space.detail}</div>
          </div>
          <div className="availability">
            <div className="step-title"><span>02</span> Välj önskad dag och tid</div>
            <div className="calendar-head">
              <div>
                <SafeIcon icon={FiCalendar} />
                <strong>
                  {days[0].toLocaleDateString('sv-SE', { day: 'numeric', month: 'long' })} –{' '}
                  {days[6].toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })}
                </strong>
              </div>
              <div className="calendar-controls">
                <button
                  aria-label="Föregående vecka"
                  disabled={week === 0}
                  onClick={() => { setWeek(week - 1); setSelection(null); }}
                >
                  <SafeIcon icon={FiChevronLeft} />
                </button>
                <button
                  aria-label="Nästa vecka"
                  onClick={() => { setWeek(week + 1); setSelection(null); }}
                >
                  <SafeIcon icon={FiChevronRight} />
                </button>
              </div>
            </div>
            <div className="calendar-scroll">
              <div className="calendar-grid">
                {days.map((day) => (
                  <div className="calendar-day" key={day.toISOString()}>
                    <div className="day-label">
                      {weekdays[day.getDay()]}
                      <strong>{day.getDate()}</strong>
                    </div>
                    {slots.map((slot) => {
                      const selected =
                        selection?.day.toDateString() === day.toDateString() &&
                        selection.slot === slot;

                      return (
                        <button
                          key={slot}
                          className={`slot ${selected ? 'active' : ''}`}
                          onClick={() => setSelection({ day, slot })}
                          aria-pressed={selected}
                          aria-label={`${day.toLocaleDateString('sv-SE')} ${slot === 'Heldag' ? 'heldag 09 till 22' : `klockan ${slot}`}`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <p className="availability-note">
              <SafeIcon icon={FiInfo} />
              Välj ett tidsblock eller heldag (09–22). Kalendern visar inte live-tillgänglighet
              och priserna är endast exempel; föreningen bekräftar pris och ledighet.
            </p>
            <div className="booking-summary">
              <div>
                <span>DIN FÖRFRÅGAN</span>
                <strong>
                  {space.label}
                  {selection
                    ? ` · ${selection.day.toLocaleDateString('sv-SE', { day: 'numeric', month: 'short' })} · ${selection.slot}`
                    : ' · Välj gärna en tid'}
                </strong>
                <small>
                  Indikativt pris: från {price.toLocaleString('sv-SE')} kr per {pricePeriod}
                </small>
              </div>
              <a
                className="button button-dark"
                href={`mailto:info@skuruik.se?subject=${encodeURIComponent('Bokningsförfrågan – Skuru IK klubbhus')}&body=${encodeURIComponent(request)}`}
              >
                Skicka bokningsförfrågan <SafeIcon icon={FiArrowUpRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
