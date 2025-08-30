import React from 'react';
import { Calculator, HandHeart } from 'lucide-react';

const WhyChooseUs = () => {
  const blocks = [
    {
      icon: Calculator,
      title: "Des données locales mises à jour en continu",
      description: (
        <>
          Nous actualisons en permanence nos bases avec les <strong>données locales</strong> : <strong>transactions réelles</strong>, évolutions de prix et niveau de demande par <strong>quartier de Rueil-Malmaison</strong>. 
          Cela nous permet de proposer une <strong>estimation fiable</strong>, en phase avec la réalité du marché.
        </>
      )
    },
    {
      icon: HandHeart,
      title: "Une approche humaine et transparente",
      description: (
        <>
          L’évaluation de votre <strong>maison</strong> ou <strong>appartement</strong> n’est <strong>jamais automatisée</strong>. 
          Nous expliquons nos critères, détaillons notre <strong>méthode transparente</strong> et restons disponibles pour répondre à toutes vos questions. 
          Notre objectif : que vous soyez pleinement confiant dans le <strong>prix proposé</strong>.
        </>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="approach-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 px-2 sm:px-0">
          <h2
            id="approach-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight"
          >
            <strong>Une approche unique pour estimer votre bien à Rueil-Malmaison</strong>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light max-w-3xl mx-auto">
            Chaque bien est différent, et chaque estimation doit refléter cette singularité. 
            Chez ERA IMMOBILIER, notre méthode combine <strong>analyse terrain</strong>, <strong>données actualisées</strong> et <strong>suivi personnalisé</strong> pour garantir une <strong>estimation immobilière à Rueil-Malmaison</strong> précise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-2 sm:px-0">
          {blocks.map((item, index) => (
            <article
              key={index}
              className="bg-gray-50 p-6 sm:p-10 hover:shadow-lg transition-all duration-300 border-l-4 border-red-600 rounded-md"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white mr-4 flex-shrink-0">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 tracking-tight flex-1">
                  <strong>{item.title}</strong>
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        {/* CTA supprimé conformément à la demande */}
      </div>
    </section>
  );
};

export default WhyChooseUs;