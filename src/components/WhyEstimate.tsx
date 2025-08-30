import React from 'react';

const WhyEstimate = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="why-estimate-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITRE PRINCIPAL */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="why-estimate-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight"
          >
            <strong>Pourquoi estimer votre maison ou appartement à Rueil-Malmaison&nbsp;?</strong>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Mettre en vente un bien sans en connaître la <strong>valeur exacte</strong> peut ralentir votre projet
            ou réduire votre marge de négociation. À <strong>Rueil-Malmaison</strong>, le marché évolue rapidement&nbsp;:
            une <strong>estimation précise</strong> vous aide à fixer un <strong>prix cohérent et compétitif</strong>.
          </p>
          <ul className="mt-6 text-gray-700 text-base sm:text-lg font-light space-y-2">
            <li>✔ <strong>Un projet mieux planifié</strong></li>
            <li>✔ <strong>Des acheteurs ciblés et motivés</strong></li>
            <li>✔ <strong>Un temps de vente optimisé</strong></li>
          </ul>
        </div>

        {/* 3 COLONNES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Bloc 1 */}
          <article className="bg-gray-50 p-8 sm:p-10 hover:shadow-lg transition-all duration-300 border-l-4 border-red-600 rounded-lg flex flex-col">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 text-white font-bold mr-3 sm:mr-4 text-sm sm:text-base">
                1
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
              <strong>Préparer sereinement votre projet de vente</strong>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
              Avant de lancer votre annonce, une <strong>estimation fiable</strong> vous permet de définir
              votre stratégie. Nous prenons en compte vos <strong>délais</strong>, vos <strong>objectifs</strong> et
              les <strong>tendances actuelles du marché local</strong>.
            </p>
          </article>

          {/* Bloc 2 */}
          <article className="bg-gray-50 p-8 sm:p-10 hover:shadow-lg transition-all duration-300 border-l-4 border-red-600 rounded-lg flex flex-col">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 text-white font-bold mr-3 sm:mr-4 text-sm sm:text-base">
                2
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
              <strong>Connaître le prix juste pour éviter une sous ou surévaluation</strong>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
              Un <strong>prix trop élevé</strong> décourage les acheteurs&nbsp;; trop bas, il vous fait perdre de la valeur.
              Notre méthode garantit un <strong>calcul du prix de votre maison à Rueil-Malmaison</strong> en accord avec
              les <strong>ventes récentes</strong> et la <strong>demande actuelle</strong>.
            </p>
          </article>

          {/* Bloc 3 */}
          <article className="bg-gray-50 p-8 sm:p-10 hover:shadow-lg transition-all duration-300 border-l-4 border-red-600 rounded-lg flex flex-col">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 text-white font-bold mr-3 sm:mr-4 text-sm sm:text-base">
                3
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">
              <strong>Mieux négocier grâce à des données locales fiables</strong>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
              En vous appuyant sur nos <strong>analyses par quartier</strong> et nos <strong>références de ventes récentes</strong>,
              vous disposez d’<strong>arguments solides</strong> pour <strong>défendre votre prix</strong>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhyEstimate;