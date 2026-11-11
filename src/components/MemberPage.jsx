import React from 'react';
import {Link,useParams} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import '../MemberPage.css';

const {FiArrowLeft}=FiIcons;

const pages={
  medlemsavgift: 'Medlemsavgift',
  'medlemsinformation-gdpr': 'Medlemsinformation GDPR',
  volontarerna: 'Volontärerna',
  arsmote: 'Årsmöte',
  stadgar: 'Stadgar'
};

function MemberPage() {
  const {slug}=useParams();
  const title=pages[slug] || 'Medlemsinformation';

  return (
    <main className="member-page">
      <section className="member-page-content container">
        <Link className="member-back-link" to="/">
          <SafeIcon icon={FiArrowLeft} /> Tillbaka till startsidan
        </Link>
        <div className="eyebrow"><span className="eyebrow-line" /> MEDLEMSINFORMATION</div>
        <h1>{title}</h1>
        <p>Information kommer snart.</p>
      </section>
    </main>
  );
}

export default MemberPage;
