import React from 'react';
import { Phone, Home, BarChart3, FileText } from 'lucide-react';
import processImage from "../assets/process-estimation-gratuite-rueil-malmaison.webp";

const Process = () => {
  const steps = [
    {
      icon: Phone,
      title: "Prise de contact et compréhension de votre projet",
      description: (
        <>
          Tout commence par un <strong>échange personnalisé</strong> : vos motivations, vos délais, vos attentes. 
          Nous cherchons à comprendre vos priorités afin d’adapter notre approche à votre situation personnelle.
        </>
      )
    },
    {
      icon: Home,
      title: "Analyse sur place des caractéristiques de votre bien",
      description: (
        <>
          Une <strong>visite détaillée</strong> permet d’évaluer chaque atout : superficie, agencement, état général, luminosité, vue, potentiel d’extension… 
          Nous analysons aussi les éléments techniques et les améliorations apportées.
        </>
      )
    },
    {
      icon: BarChart3,
      title: "Étude comparative avec les ventes récentes dans votre quartier",
      description: (
        <>
          Nous consultons les <strong>transactions récentes</strong> à Plaine Gare, Plateau, Centre-Ville ou d’autres secteurs de Rueil-Malmaison. 
          Cela nous permet de positionner votre bien de façon réaliste par rapport au marché actuel. 
          <br />
          <a href="/prix-immobilier-rueil-malmaison" className="text-red-600 underline">
            Retrouvez nos analyses complètes sur le prix immobilier à Rueil-Malmaison
          </a>
        </>
      )
    },
    {
      icon: FileText,
      title: "Remise d’un avis de valeur clair et argumenté",
      description: (
        <>
          Vous recevez un <strong>document détaillé</strong> expliquant le prix estimé, les critères retenus et des conseils pour optimiser la mise en vente. 
          Aucune estimation ne part sans justification : la transparence est au cœur de notre méthode.
          <br />
          <a href="/guide-vendeur-rueil-malmaison" className="text-red-600 underline">
            Découvrez aussi notre guide vendeur immobilier
          </a>
        </>
      )
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 bg-cover bg-center bg-no-repeat relative" 
      aria-labelledby="process-title"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${processImage})`
      }}
    >
      <img
        src={processImage}
        alt="Estimation gratuite Rueil-Malmaison : étapes du processus"
        className="sr-only"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="process-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8 tracking-tight"
          >
            <strong>Comment se déroule notre estimation immobilière à Rueil-Malmaison</strong>
          </h2>
          <p className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl font-light max-w-4xl mx-auto px-2 sm:px-0">
            Vendre un bien est une étape importante. Nous avons conçu une méthode <strong>claire et transparente</strong>  
            pour que chaque propriétaire sache exactement comment se déroule l’évaluation. 
            Notre objectif : fournir une <strong>estimation précise à Rueil-Malmaison</strong>, basée sur l’analyse réelle de votre bien et des données locales récentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {steps.map((step, index) => (
            <article
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 hover:shadow-lg transition-all duration-300 rounded-lg"
            >
              <div className="flex items-center mb-5 sm:mb-6">
                <step.icon className="h-6 w-6 sm:h-7 sm:w-7 text-red-600 flex-shrink-0 mr-3" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
                <strong>{step.title}</strong>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
                {step.description}
              </p>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#estimation-form"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors duration-300 font-medium text-lg shadow-sm hover:shadow-md"
          >
            Vous êtes propriétaire&nbsp;? Obtenez votre estimation gratuite
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;