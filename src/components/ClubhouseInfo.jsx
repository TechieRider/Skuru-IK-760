import React from 'react';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import '../ClubhouseInfo.css';

const { FiArrowLeft, FiArrowUpRight, FiCheck, FiClock, FiUsers } = FiIcons;

const spaces = [
  {
    name: 'Stora Salen',
    capacity: 'Upp till 80 personer',
    description: 'En rymlig lokal för större sammankomster, utbildningar och fester.'
  },
  {
    name: 'Gillestugan',
    capacity: '25–30 personer',
    description: 'En trivsam lokal för möten, träffar och mindre tillställningar.'
  },
  {
    name: 'Konferensen',
    capacity: '25–30 personer',
    description: 'En praktisk möteslokal för kurser, styrelse- och kommittémöten.'
  }
];

function PriceTable({ title, rows, columns }) {
  return (
    <div className="price-table-wrap">
      <h3>{title}</h3>
      <div className="price-table-scroll">
        <table className="price-table">
          <thead>
            <tr>
              <th scope="col">Hyra</th>
              {columns.map((column) => <th scope="col" key={column}>{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.period}>
                <th scope="row">{row.period}</th>
                {row.prices.map((price, index) => <td key={`${row.period}-${index}`}>{price}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ClubhouseInfo() {
  return (
    <main className="clubhouse-info-page">
      <section className="clubhouse-info-hero">
        <div className="container clubhouse-info-hero-content">
          <Link className="clubhouse-back-link" to="/">
            <SafeIcon icon={FiArrowLeft} /> Tillbaka till Skuru IK
          </Link>
          <div className="eyebrow"><span className="eyebrow-line" /> HYR SKURUSTUGAN</div>
          <h1>En plats för<br /><em>era möten.</em></h1>
          <p>
            Skurustugan kan hyras för utbildning, kurser, föreningsträffar,
            föräldramöten, styrelsemöten, kommittémöten och fester.
          </p>
          <a className="button button-lime" href="#lokaler">
            Upptäck lokalerna <SafeIcon icon={FiArrowUpRight} />
          </a>
        </div>
      </section>

      <section className="clubhouse-info-section" id="lokaler">
        <div className="container">
          <div className="clubhouse-info-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> TRE LOKALER. EN STUGA.</div>
            <h2>Hitta rätt <em>utrymme.</em></h2>
            <p>
              Lokalerna kan hyras var för sig eller tillsammans. Det går även att
              boka hela Skurustugan med samtliga lokaler.
            </p>
          </div>
          <div className="clubhouse-space-grid">
            {spaces.map((space) => (
              <article className="clubhouse-space-card" key={space.name}>
                <span className="clubhouse-space-icon"><SafeIcon icon={FiUsers} /></span>
                <h3>{space.name}</h3>
                <strong>{space.capacity}</strong>
                <p>{space.description}</p>
              </article>
            ))}
          </div>
          <div className="clubhouse-kitchen-note">
            <SafeIcon icon={FiCheck} />
            <p>
              Alla tre lokaler har tillgång till ett kök med utrustning på respektive
              våningsplan. Maximalt antal deltagare i Skurustugan är 80 personer.
            </p>
          </div>
        </div>
      </section>

      <section className="clubhouse-prices-section">
        <div className="container">
          <div className="clubhouse-info-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> PRISER</div>
            <h2>En tydlig <em>prisbild.</em></h2>
            <p>
              Priserna nedan gäller enligt Skuru IK:s prislista. Kontakta föreningen
              för att stämma av datum, lokal och eventuell särskild överenskommelse.
            </p>
          </div>
          <div className="clubhouse-price-grid">
            <PriceTable
              title="Söndag–torsdag · per våning"
              columns={['Företag', 'Övriga']}
              rows={[
                { period: 'Heldag', prices: ['2 000 kr', '1 500 kr'] },
                { period: 'Kvällstid', prices: ['1 500 kr', '1 000 kr'] }
              ]}
            />
            <PriceTable
              title="Fredag, lördag och dag före arbetsfri dag · övre eller undre våning"
              columns={['Företag och privatpersoner', 'Skuru IK-medlem']}
              rows={[
                { period: 'Hyra av våning', prices: ['7 000 kr', '5 625 kr'] }
              ]}
            />
            <PriceTable
              title="Fredag, lördag och dag före arbetsfri dag · hela Skurustugan"
              columns={['Företag och privatpersoner', 'Skuru IK-medlem']}
              rows={[
                { period: 'Hyra av hela huset', prices: ['9 000 kr', '7 250 kr'] }
              ]}
            />
          </div>
          <p className="clubhouse-price-note">
            Bokningsavgift: 2 000 kr. Avgiften återbetalas inte, men bokningen kan
            flyttas till en annan dag.
          </p>
        </div>
      </section>

      <section className="clubhouse-rules-section">
        <div className="container clubhouse-rules-layout">
          <div className="clubhouse-info-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> BRA ATT VETA</div>
            <h2>Praktiskt inför<br /><em>bokningen.</em></h2>
          </div>
          <div className="clubhouse-rules-list">
            <article className="clubhouse-rule">
              <span><SafeIcon icon={FiUsers} /></span>
              <div>
                <h3>Åldersgräns och medlemspris</h3>
                <p>
                  Den som hyr ska ha fyllt 30 år. Skuru IK-medlem avser en betalande
                  medlem som varit medlem i minst ett år och själv medverkar vid
                  uthyrningen. Medlemspriset innebär 25 procents rabatt.
                </p>
              </div>
            </article>
            <article className="clubhouse-rule">
              <span><SafeIcon icon={FiClock} /></span>
              <div>
                <h3>Tider och ljudnivå</h3>
                <p>
                  Fredag, lördag och dag före helgdag ska musiken upphöra klockan
                  01.00. Vardagar ska det vara tyst klockan 23.00 och städat innan
                  midnatt.
                </p>
              </div>
            </article>
            <article className="clubhouse-rule">
              <span><SafeIcon icon={FiCheck} /></span>
              <div>
                <h3>Städning och återställning</h3>
                <p>
                  Hyresgästen ansvarar för att ta bort eget material, diska och städa.
                  Vid fredag-, lördags- och dag-före-helgdagshyra ingår städning,
                  men grovstädning ska vara klar före 09.30 dagen efter: plocka undan
                  bord, stolar och eget material samt diska.
                </p>
              </div>
            </article>
            <p className="clubhouse-priority-note">
              Extern uthyrning prioriteras före intern uthyrning. Särskilda
              överenskommelser kan förekomma vid speciella arrangemang.
            </p>
          </div>
        </div>
      </section>

      <section className="clubhouse-contact-section">
        <div className="container clubhouse-contact-inner">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> FRÅGOR ELLER BOKNING</div>
            <h2>Vi hjälper er<br /><em>vidare.</em></h2>
            <p>
              Kontakta Skuru IK för att boka en lokal eller få mer information om
              uthyrningen och lokalerna.
            </p>
          </div>
          <div className="clubhouse-contact-actions">
            <a className="button button-lime" href="mailto:info@skuruik.se?subject=Bokning%20av%20Skurustugan">
              Mejla info@skuruik.se <SafeIcon icon={FiArrowUpRight} />
            </a>
            <a className="clubhouse-phone-link" href="tel:+46708702670">Ring 0708-70 26 70</a>
            <Link className="clubhouse-request-link" to="/#booking">
              Till bokningsöversikten <SafeIcon icon={FiArrowUpRight} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ClubhouseInfo;
