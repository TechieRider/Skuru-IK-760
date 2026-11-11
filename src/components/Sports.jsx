import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import '../Sports.css';

const { FiArrowUpRight } = FiIcons;

const sports = [
  {
    name: 'Handboll',
    description: 'Fart, lagkänsla och starka prestationer — upptäck handbollen i Skuru IK.',
    url: 'https://skuruhandboll.se/'
  },
  {
    name: 'Basket',
    description: 'Gemenskap och spelglädje på planen. Hitta din plats hos Skuru Basket.',
    url: 'https://www.skurubasket.se/'
  },
  {
    name: 'Simning',
    description: 'Vattenvana, utveckling och simglädje för olika åldrar och nivåer.',
    url: 'https://www.skuruiksimning.se/'
  }
];

function Sports() {
  return (
    <section className="sports section-pad" id="sports">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> EN FÖRENING. TRE IDROTTER.
            </div>
            <h2>
              Hitta din <em>grej.</em>
            </h2>
          </div>
          <p>
            Upptäck Skuru IK:s tre idrotter och hitta vidare till den verksamhet som
            passar dig.
          </p>
        </div>
        <div className="sports-grid">
          {sports.map((sport, index) => (
            <a
              className="sport-card sport-commercial-card"
              key={sport.name}
              href={sport.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sport-number">0{index + 1}</span>
              <span className="sport-name">{sport.name}</span>
              <span className="sport-commercial-description">{sport.description}</span>
              <span className="sport-commercial-link">
                Upptäck {sport.name.toLowerCase()}
                <SafeIcon icon={FiArrowUpRight} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sports;
