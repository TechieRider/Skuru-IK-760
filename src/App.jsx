import React,{useState} from 'react';
import * as FiIcons from 'react-icons/fi';
import { BrowserRouter,Link,Route,Routes,useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import SafeIcon from './common/SafeIcon';
import Booking from './components/Booking';
import ClubhouseInfo from './components/ClubhouseInfo';
import MemberPage from './components/MemberPage';
import Sports from './components/Sports';
import './App.css';
import './MemberNav.css';

const {
  FiArrowUpRight,
  FiArrowRight,
  FiMenu,
  FiX,
  FiInstagram,
  FiFacebook,
  FiMapPin,
  FiChevronDown
}=FiIcons;

const clubImages=[
  'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1791651982974-image.png',
  'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1791652349890-blob',
  'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1791652455569-blob',
  'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1791652561542-image.png'
];
const clubhouseImage='https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1791652857524-image.png';

const memberPages=[
  {label: 'Medlemsavgift',slug: 'medlemsavgift'},
  {label: 'Medlemsinformation GDPR',slug: 'medlemsinformation-gdpr'},
  {label: 'Volontärerna',slug: 'volontarerna'},
  {label: 'Årsmöte',slug: 'arsmote'},
  {label: 'Stadgar',slug: 'stadgar'}
];

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Skuru IK startsida">
      <img className="brand-logo" src={clubImages[0]} alt="Skuru IK" />
    </Link>
  );
}

function Header() {
  const [open,setOpen]=useState(false);
  const [memberOpen,setMemberOpen]=useState(false);
  const navigate=useNavigate();

  function goToSection(section) {
    setOpen(false);
    setMemberOpen(false);
    navigate('/');
    window.setTimeout(()=> {
      document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
    },80);
  }

  function closeMenus() {
    setOpen(false);
    setMemberOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Brand />
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Huvudmeny">
          <a href="#about" onClick={(event)=> {event.preventDefault();goToSection('about');}}>
            Om föreningen
          </a>
          <a href="#sports" onClick={(event)=> {event.preventDefault();goToSection('sports');}}>
            Våra idrotter
          </a>
          <a href="#clubhouse" onClick={(event)=> {event.preventDefault();goToSection('clubhouse');}}>
            Klubbhuset
          </a>
          <a href="#news" onClick={(event)=> {event.preventDefault();goToSection('news');}}>
            Aktuellt
          </a>
          <div className="member-nav">
            <button
              className="member-nav-trigger"
              type="button"
              onClick={()=> setMemberOpen(!memberOpen)}
              aria-expanded={memberOpen}
              aria-haspopup="true"
            >
              Medlemsinformation
              <SafeIcon icon={FiChevronDown} />
            </button>
            <div className={memberOpen ? 'member-nav-menu open' : 'member-nav-menu'}>
              {memberPages.map((page)=> (
                <Link
                  key={page.slug}
                  to={`/medlemsinformation/${page.slug}`}
                  onClick={closeMenus}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
          <a className="mobile-contact" href="mailto:info@skuruik.se">
            Kontakt
          </a>
        </nav>
        <button className="header-cta" onClick={()=> goToSection('booking')}>
          Boka klubbhuset <SafeIcon icon={FiArrowUpRight} />
        </button>
        <button
          className="menu-toggle"
          onClick={()=> setOpen(!open)}
          aria-label={open ? 'Stäng menyn' : 'Öppna menyn'}
          aria-expanded={open}
        >
          <SafeIcon icon={open ? FiX : FiMenu} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" aria-hidden="true">
        {clubImages.slice(1).map((image)=> (
          <div className="hero-image-panel" key={image} style={{backgroundImage: `url("${image}")`}} />
        ))}
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <motion.div
          initial={{opacity: 0,y: 24}}
          animate={{opacity: 1,y: 0}}
          transition={{duration: 0.7}}
        >
          <div className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" /> EN FÖRENING. MÅNGA MÖJLIGHETER.
          </div>
          <h1>Här hör <br /><em>vi ihop.</em></h1>
          <p>
            Olika idrotter. Samma gemenskap. Välkommen till Skuru IK — en plats för rörelse,
            engagemang och människor i alla åldrar.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#sports">
              Upptäck våra idrotter <SafeIcon icon={FiArrowUpRight} />
            </a>
            <a className="text-link light-link" href="#about">
              Lär känna föreningen <SafeIcon icon={FiArrowRight} />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom container">
        <span>SKURU · NACKA · SVERIGE</span>
        <a href="#about">SCROLLA FÖR ATT UTFORSKA <SafeIcon icon={FiChevronDown} /></a>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section-pad" id="about">
      <div className="container intro-grid">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> DET HÄR ÄR SKURU IK</div>
          <h2>En plats att <br />växa <em>tillsammans.</em></h2>
        </div>
        <div className="intro-copy">
          <p>
            Vi är mer än resultaten på tavlan. Skuru IK är en levande förening där idrott,
            glädje och gemenskap möts — på planen, i hallen och utanför.
          </p>
          <p>Oavsett vilken idrott som får ditt hjärta att slå lite snabbare finns det plats för dig här.</p>
          <a className="text-link dark-link" href="mailto:info@skuruik.se?subject=Fr%C3%A5ga%20om%20Skuru%20IK">
            Kom i kontakt med oss <SafeIcon icon={FiArrowUpRight} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Clubhouse() {
  return (
    <section className="clubhouse" id="clubhouse">
      <div
        className="clubhouse-photo"
        role="img"
        aria-label="Skuru IK:s klubbhus"
        style={{backgroundImage: `url("${clubhouseImage}")`}}
      />
      <div className="clubhouse-panel">
        <div className="eyebrow"><span className="eyebrow-line" /> EN PLATS ATT MÖTAS</div>
        <h2>Ert nästa <br />tillfälle börjar <em>här.</em></h2>
        <p>
          Planerar du ett möte, en aktivitet eller något att fira? Klubbhuset har plats för både
          små och stora sammanhang. Välj den del som passar er.
        </p>
        <Link className="button button-lime" to="/clubhouse-info">
          Läs mer om Skurustugan <SafeIcon icon={FiArrowUpRight} />
        </Link>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="news section-pad" id="news">
      <div className="container news-inner">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> HÅLL DIG UPPDATERAD</div>
          <h2>Det händer <br /><em>hos oss.</em></h2>
        </div>
        <div className="news-copy">
          <p>
            Matcher, aktiviteter och föreningsliv — det finns alltid något på gång i Skuru IK.
            Följ våra kanaler för senaste nytt från hela föreningen.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <SafeIcon icon={FiInstagram} /> Instagram <SafeIcon icon={FiArrowUpRight} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <SafeIcon icon={FiFacebook} /> Facebook <SafeIcon icon={FiArrowUpRight} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Brand />
            <p>Idrott, gemenskap och möjligheter. <br />Tillsammans i Skuru.</p>
          </div>
          <div className="footer-col">
            <span>UTFORSKA</span>
            <a href="#about">Om föreningen</a>
            <a href="#sports">Våra idrotter</a>
            <Link to="/clubhouse-info">Information om Skurustugan</Link>
            <a href="#booking">Boka klubbhuset</a>
          </div>
          <div className="footer-col">
            <span>KONTAKT</span>
            <a href="mailto:info@skuruik.se">info@skuruik.se</a>
            <span className="footer-location"><SafeIcon icon={FiMapPin} /> Skuru, Nacka</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Skuru IK. Alla rättigheter förbehållna.</span>
          <span>EN FÖRENING FÖR ALLA.</span>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Sports />
      <Clubhouse />
      <Booking />
      <News />
    </main>
  );
}

function Site() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clubhouse-info" element={<ClubhouseInfo />} />
        <Route path="/medlemsinformation/:slug" element={<MemberPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}

export default App;
