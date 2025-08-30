import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-estimation-immobiliere-rueil-malmaison.webp';

const Hero = () => {
  const ctaRef = useRef(null);

  const scrollToContent = () => {
    if (ctaRef.current) {
      ctaRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-12 sm:pt-20 pb-16 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`
      }}
    >
      <img
        src={heroImage}
        alt="Estimation gratuite Rueil-Malmaison : étapes du processus"
        className="sr-only"
      />
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-16 px-2 sm:px-0">

        {/* Titre */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight tracking-tight">
          <strong>Estimation immobilière à Rueil-Malmaison :</strong>
          <br />
          <span className="font-normal">obtenez la valeur juste de votre bien</span>
        </h1>

        {/* Sous-titre */}
        <h2 className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 max-w-3xl mx-auto font-light">
          <strong>Estimation gratuite et personnalisée</strong> par votre agence ERA IMMOBILIER implantée au cœur de <strong>Rueil-Malmaison</strong>
        </h2>

        {/* CTA juste après le h2 */}
        <div className="flex justify-center mb-6">
          <a 
            href="#estimation-form" 
            className="bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-red-700 transition-colors duration-300 font-medium text-sm sm:text-lg flex items-center space-x-3 shadow-sm hover:shadow-md uppercase tracking-wider"
          >
            <span>Obtenir mon estimation gratuite</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>

        {/* Flèche vers le contenu */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToContent}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white text-white bg-white/20 hover:bg-white/30 transition-all duration-300 shadow-lg animate-bounce"
            aria-label="Voir le contenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Texte de présentation */}
        <div ref={ctaRef} className="max-w-4xl mx-auto text-gray-300 mb-8 leading-relaxed font-light">
          <p className="mb-4">
            Vous souhaitez connaître la <strong>valeur réelle</strong> de votre <strong>maison</strong> ou <strong>appartement à Rueil-Malmaison</strong> ? 
            Notre agence, <strong>implantée au cœur de la ville</strong>, vous accompagne avec une <strong>estimation gratuite</strong> et <strong>personnalisée</strong>.
          </p>
          <p className="mb-4">
            Basée sur des <strong>données locales précises</strong> et une <strong>expertise terrain</strong>, notre évaluation reflète fidèlement le <strong>marché immobilier rueillois</strong>.
          </p>
          <p>
            Que votre bien se situe dans le quartier <strong>Plaine Gare</strong>, le <strong>Plateau</strong> ou dans un secteur plus résidentiel, 
            nous analysons chaque critère&nbsp;: <strong>emplacement</strong>, <strong>surface</strong>, <strong>état</strong>, <strong>potentiel</strong>… 
            L’objectif&nbsp;: vous fournir un <strong>prix juste</strong> qui attire les acheteurs sérieux tout en maximisant vos chances de vente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;