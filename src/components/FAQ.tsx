import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  // Par défaut : 0, 1, 2 sont ouverts
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2]);
  const [showAll, setShowAll] = useState(false);

  const faqItems = [
    {
      question: "Comment connaître le prix au m² à Rueil-Malmaison ?",
      answer:
        "Le prix au m² à Rueil-Malmaison dépend du quartier, de l’état du bien et des ventes récentes. Nous basons notre estimation sur des données actualisées et des références locales pour refléter le marché réel."
    },
    {
      question: "Quelle différence entre estimation en ligne et estimation sur place ?",
      answer:
        "Une estimation en ligne donne un ordre d’idée basé sur des moyennes, alors qu’une visite sur place prend en compte les spécificités de votre bien (luminosité, état, vis-à-vis, nuisances, atouts de l’immeuble)."
    },
    {
      question: "Combien de temps dure une estimation immobilière ?",
      answer:
        "En moyenne, une estimation sur place prend 30 minutes à 1 heure, selon la taille et les caractéristiques du logement."
    },
    {
      question: "L’estimation est-elle vraiment gratuite et sans engagement ?",
      answer:
        "Oui, notre estimation immobilière est 100 % gratuite et sans engagement de votre part."
    },
    {
      question: "Quels documents préparer pour une estimation immobilière ?",
      answer:
        "Idéalement, préparez : plans, relevé de surfaces, factures de travaux, diagnostic de performance énergétique (DPE) et, si possible, procès-verbaux d’assemblée et charges pour les appartements."
    },
    {
      question: "Comment sont sélectionnées les références de vente comparables ?",
      answer:
        "Nous sélectionnons des biens comparables vendus récemment dans le même quartier de Rueil-Malmaison, avec des caractéristiques proches (surface, étage, extérieur, état)."
    },
    {
      question: "Une estimation peut-elle évoluer dans le temps ?",
      answer:
        "Oui, les prix varient selon le marché et la saisonnalité à Rueil-Malmaison. Il est recommandé de mettre à jour votre estimation régulièrement."
    },
    {
      question: "Puis-je vendre sans passer par une agence après une estimation ?",
      answer:
        "Oui, l’estimation ne vous engage à aucun mandat. Vous pouvez vendre sans agence ; notre accompagnement reste optionnel pour gagner du temps et sécuriser la transaction."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const itemsToShow = showAll ? faqItems : faqItems.slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
   <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <section id="faq" className="py-16 sm:py-24 bg-white" aria-labelledby="faq-title">
        <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 px-2 sm:px-0">
          <h2
            id="faq-title"
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight"
          >
            <strong>FAQ sur l’estimation immobilière à Rueil-Malmaison</strong>
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
            Les propriétaires de Rueil-Malmaison nous posent souvent les mêmes questions lorsqu’ils envisagent de vendre leur bien.
            Voici des réponses claires pour vous aider à y voir plus clair.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-6" id="faq-list">
          {itemsToShow.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center px-6 sm:px-8 py-5 sm:py-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left rounded-md"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-header-${index}`}
                >
                  <span className="font-light text-gray-900 text-base sm:text-lg">
                    <strong>{item.question}</strong>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 flex-shrink-0" />
                  )}
                </button>

                {/* Réponse toujours dans le DOM mais masquée visuellement */}
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={`px-6 sm:px-8 bg-white border-t border-gray-100 rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 py-5 sm:py-6' : 'max-h-0 py-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={toggleShowAll}
            className="text-red-600 hover:text-red-700 font-semibold underline text-base sm:text-lg focus:outline-none"
            aria-expanded={showAll}
            aria-controls="faq-list"
          >
            {showAll ? "Afficher moins" : "Afficher plus"}
          </button>
        </div>
      </div>
    </section>
     </>
  );
};

export default FAQ;