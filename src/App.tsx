import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import WhyEstimate from './components/WhyEstimate';
import PriceTable from './components/PriceTable';
import Process from './components/Process';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import EstimationForm from './components/EstimationForm';
import Footer from './components/Footer';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import PlanDuSite from './components/PlanDuSite';
import PrixImmobilierRueilMalmaison from './components/PrixImmobilierRueilMalmaison';
import GuideVendeurRueilMalmaison from './components/GuideVendeurRueilMalmaison';
import CookieBanner from './components/CookieBanner';


function App() {
  const { pathname } = useLocation();

       return (
    <div className="min-h-screen">
     {/* Header visible sur toutes les pages sauf les mentions légales, la politique de confidentialité et le plan du site, prix immobilier Rueil-Malmaison et guide du vendeur */}
     {
        !(
          ['/prix-immobilier-rueil-malmaison', '/guide-vendeur-rueil-malmaison', '/mentions-legales', '/politique-de-confidentialite', '/plan-du-site'].includes(pathname)
        ) && <Header />
      }

        <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyEstimate />
              <PriceTable />
              <Process />
              <AboutUs />
              <WhyChooseUs />
              <Testimonials />
              <FAQ />
              <EstimationForm />
              <Footer />
            </>
          }
        />
      
      {/* Autres pages */}
        <Route path="/prix-immobilier-rueil-malmaison" element={<PrixImmobilierRueilMalmaison />} />
          <Route path="/guide-vendeur-rueil-malmaison" element={<GuideVendeurRueilMalmaison />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/plan-du-site" element={<PlanDuSite />} />
      </Routes>
      <CookieBanner />
    </div>
  );
}

export default App;