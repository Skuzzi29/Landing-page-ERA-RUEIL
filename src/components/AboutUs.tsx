import React, { useState } from 'react';
import imgTeam from '../assets/equipe-estimation-maison-rueil-malmaison.webp';
import imgSupport from '../assets/accompagnement-estimation-appartement-rueil-malmaison.webp';
import imgKnowledge from '../assets/connaissance-prix-m2-rueil-malmaison.webp';
import imgRelationship from '../assets/relation-estimation-en-ligne-rueil-malmaison.webp';

const AboutUs = () => {
  const [showPhone, setShowPhone] = useState(false);

  const advantages = [
    {
      image: imgTeam,
      alt: "Estimation maison Rueil-Malmaison par une équipe locale",
      title: "Une équipe implantée et experte du marché rueillois",
      description: (
        <>
          Notre proximité nous permet d’être <strong>réactifs</strong> et <strong>précis</strong> dans nos analyses.
          Chaque <strong>estimation immobilière à Rueil-Malmaison</strong> prend en compte les <strong>ventes récentes</strong>,
          les tendances et les spécificités du quartier.
          <br />
        </>
      )
    },
    {
      image: imgSupport,
      alt: "Estimation appartement Rueil-Malmaison : accompagnement sur mesure",
      title: "Un accompagnement personnalisé, de l’estimation à la vente",
      description: (
        <>
          Nous ne nous contentons pas de donner un chiffre.
          Nous vous guidons dans la <strong>préparation du bien</strong>, la <strong>stratégie de mise en vente</strong> et la <strong>négociation</strong>,
          afin de <strong>maximiser vos chances de réussite</strong>.
        </>
      )
    },
    {
      image: imgKnowledge,
      alt: "Prix m² Rueil-Malmaison : expertise quartier par quartier",
      title: "Une connaissance fine des quartiers de Rueil-Malmaison",
      description: (
        <>
          Nous connaissons chaque quartier, ses spécificités et l’<strong>évolution des prix</strong> : Plaine Gare, Plateau, Centre-Ville, Buzenval…
          Cette <strong>connaissance terrain</strong> nous permet de proposer des <strong>estimations justes et adaptées</strong>.
        </>
      )
    },
    {
     image: imgRelationship,
      alt: "Estimation en ligne Rueil-Malmaison : relation de confiance",
      title: "Une relation de confiance et de transparence",
      description: (
        <>
          Votre projet immobilier est <strong>unique</strong>.
          Nous mettons un point d’honneur à une <strong>relation de confiance</strong>, du premier contact jusqu’à la vente,
          avec une information claire à chaque étape.
        </>
      )
    }
  ];

  return (
   <section id="about-us" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 px-2 sm:px-0">
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight text-balance"
          >
            <strong>Notre agence immobilière à Rueil-Malmaison, proche de vous</strong>
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed font-light px-2 sm:px-0">
            <p className="mb-4">
              Notre agence ERA IMMOBILIER est implantée au <strong>cœur de Rueil-Malmaison</strong>.
              Nous connaissons chaque quartier, ses spécificités et l’<strong>évolution des prix</strong>.
            </p>
            <p className="mb-4">
              Cette <strong>connaissance terrain</strong> nous permet de réaliser des <strong>estimations justes et adaptées</strong>,
              que vous soyez propriétaire à <strong>Plaine Gare</strong>, <strong>Plateau</strong>, <strong>Centre-Ville</strong> ou <strong>Buzenval</strong>.
            </p>
            <p>
              Nous mettons un point d’honneur à établir une <strong>relation de confiance</strong> avec chaque propriétaire.
              Votre projet immobilier est <strong>unique</strong>, et notre mission est de vous accompagner de façon <strong>personnalisée</strong>,
              du premier contact jusqu’à la <strong>vente</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 px-2 sm:px-0">
          {advantages.map((advantage, index) => (
            <article
              key={index}
               className="relative p-8 sm:p-10 hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
             <img
                src={advantage.image}
                alt={advantage.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
              <div className="relative z-10 text-white">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4 tracking-tight" itemProp="name">
                  <strong>{advantage.title}</strong>
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base font-light" itemProp="description">
                  {advantage.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center px-2 sm:px-0">
          {!showPhone ? (
            <button
              onClick={() => setShowPhone(true)}
              className="inline-block bg-red-600 text-white px-6 sm:px-12 py-4 rounded-md hover:bg-red-700 transition-colors font-medium shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform uppercase tracking-wider"
            >
              Découvrez notre approche
            </button>
          ) : (
            <a
              href="tel:+33184744949"
              aria-label="Appeler l'agence au 01 84 74 49 49"
              className="text-xl sm:text-2xl font-bold text-red-600 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-600/30 rounded-md"
            >
              <span role="img" aria-hidden="true">📞</span>
              01 84 74 49 49
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;