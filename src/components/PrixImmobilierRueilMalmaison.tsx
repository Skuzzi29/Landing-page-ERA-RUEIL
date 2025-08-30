import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/estimation-era-rueil-malmaison.svg";
import prixImage from "../assets/prix-m2-rueil-malmaison-2025.webp";

const PrixImmobilierRueilMalmaison = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const faqItems = [
    {
      question: "Quel est le prix moyen au m² à Rueil-Malmaison en 2025 ?",
      answer:
        "Environ 5 616 €/m² pour les appartements et 6 652 €/m² pour les maisons."
    },
    {
      question: "Le marché va-t-il augmenter en 2025 ?",
      answer:
        "Les projections indiquent une stabilité à légère hausse portée par une demande supérieure à l’offre et les projets urbains en cours, malgré un contexte économique incertain."
    },
    {
      question: "Quels quartiers sont les plus recherchés ?",
      answer:
        "Centre-Ville, Plaine-Gare (proximité RER), certains secteurs du Plateau et des Coteaux."
    },
    {
      question: "Quels biens se vendent le plus vite ?",
      answer:
        "Les appartements familiaux de 3-4 pièces proches des transports et les maisons avec jardin, bien estimés et bien présentés."
    },
    {
      question: "Combien de temps pour vendre un bien bien estimé ?",
      answer:
        "Les délais de vente se réduisent et peuvent descendre sous les 3 mois pour les biens au prix du marché."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Prix m² Rueil-Malmaison 2025 | Estimation maison & appartement</title>
        <meta
          name="description"
          content="Prix m² 2025 : estimation maison Rueil-Malmaison ou estimation appartement Rueil-Malmaison gratuite avec ERA Immobilier fiable, expert local pour vendre mieux."
        />
        <link
          rel="canonical"
          href="https://estimation-rueil-malmaison.fr/prix-immobilier-rueil-malmaison"
        />
      </Helmet>
      {/* Header simple (inchangé) */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 h-20">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="ERA Immobilier – Agence Pompidou"
                className="h-16 w-16 object-cover"
                loading="lazy"
                decoding="async"
              />
              <a
                href="/"
                className="leading-tight hover:text-red-600"
                aria-label="Retour à l'accueil"
                title="Retour à l'accueil"
              >
               <p className="text-xl font-semibold text-gray-900 leading-none">
                  Era Immobilier
                </p>
                <p className="text-sm font-light text-gray-600 leading-tight">
                  Agence Pompidou
                </p>
              </a>
            </div>
            <a
              href="/"
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors p-2"
              aria-label="Retour à l'accueil"
              title="Retour à l'accueil"
            >
              <Home className="h-6 w-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Image principale */}
        <section className="relative mb-12">
          <img
            src={prixImage}
            alt="Prix m² Rueil-Malmaison 2025 : analyse par quartier"
            className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-md"
            loading="lazy"
            decoding="async"
          />
        </section>

        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
          Prix immobilier à Rueil-Malmaison : découvrez le <strong>prix au m²</strong> par quartier en <strong>2025</strong>
        </h1>

        {/* Intro + CTA */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-6">
          En 2025, le <strong>marché immobilier de Rueil-Malmaison</strong> se distingue par une stabilité retrouvée après plusieurs années de
          variations. Située à seulement <strong>8&nbsp;km de Paris</strong>, la ville conjugue <strong>qualité de vie</strong>, <strong>histoire</strong> et <strong>dynamisme
          économique</strong>. Que vous souhaitiez vendre votre bien ou simplement suivre la tendance locale, trouvez ici les <strong>prix
          moyens au m²</strong>, leur <strong>évolution sur 10 ans</strong>, les <strong>tendances 2025</strong> et un <strong>zoom par quartier</strong>.
        </p>

        <div className="mb-10 flex justify-center">
          <a
            href="/#estimation"
            className="w-full sm:w-auto block text-center rounded-md bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition"
            aria-label="Demander mon estimation immobilière gratuite"
            title="Demander mon estimation gratuite"
          >
            Demander mon estimation gratuite
          </a>
        </div>

        {/* Sommaire ancré (UX) */}
        <nav aria-label="Sommaire" className="mb-10">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><a href="#tendances-2025" className="hover:text-red-600">Tendances du marché 2025</a></li>
            <li><a href="#prix-2025" className="hover:text-red-600">Prix 2025 (appartements &amp; maisons)</a></li>
            <li><a href="#quartiers" className="hover:text-red-600">Prix par quartiers</a></li>
            <li><a href="#facteurs" className="hover:text-red-600">Facteurs de valorisation</a></li>
            <li><a href="#faq" className="hover:text-red-600">FAQ 2025</a></li>
          </ul>
        </nav>

        {/* H2 — Tendances 2024-2025 */}
        <section id="tendances-2025" className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Tendances générales du marché immobilier à Rueil-Malmaison 2025</h2>
          <p className="text-gray-800">
            En <strong>2024</strong>, après une année 2023 marquée par la baisse des transactions (<strong>-31,3&nbsp;%</strong>),
            l’ancien a <strong>rebondi</strong> avec une progression des ventes de <strong>+8,7&nbsp;%</strong> au 4ème trimestre. Les prix affichés se sont
            <strong> stabilisés</strong>, dans la lignée de la tendance nationale (<strong>+0,6&nbsp;%</strong> sur 3 mois). En <strong>2025</strong>, le marché local est
            soutenu par une <strong>demande supérieure à l’offre</strong> (environ <strong>+20&nbsp;% d’acheteurs</strong> vs biens à vendre), même si le
            contexte économique et politique reste incertain.
          </p>
          <p className="text-gray-800">
            Concrètement, cela se traduit par des <strong>délais de vente en baisse</strong> pour les biens bien positionnés (appartements familiaux
            proches des transports, <strong>maisons avec jardin</strong>) et par des <strong>prix globalement stables</strong> avec des hausses ponctuelles
            dans les secteurs les plus recherchés.
          </p>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-800">
              <strong>Projection 2025 :</strong> maintien d’une dynamique saine à Rueil-Malmaison, avec des prix
              <strong> stables à légèrement haussiers</strong> grâce à la rareté de l’offre et aux projets urbains (écoquartier de l’Arsenal, amélioration des mobilités).
            </p>
          </div>
        </section>

        {/* H2 — Prix 2025 */}
        <section id="prix-2025" className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Les prix de l’immobilier à Rueil-Malmaison en 2025</h2>
          <p className="text-gray-800">
            Rueil-Malmaison compte environ <strong>78&nbsp;186 habitants</strong> et un parc de <strong>37&nbsp;488 logements</strong>
            (dont <strong>77&nbsp;% d’appartements</strong> et <strong>22&nbsp;% de maisons</strong>). La répartition propriétaires/locataires est équilibrée
            (environ <strong>51&nbsp;%</strong> de propriétaires vs <strong>46&nbsp;%</strong> de locataires).
          </p>
          <ul className="list-disc pl-6 text-gray-800">
            <li><strong>Prix moyen des appartements :</strong> <strong>5 471&nbsp;€/m²</strong></li>
            <li><strong>Prix moyen des maisons :</strong> <strong>8 209&nbsp;€/m²</strong></li>
          </ul>

          {/* Évolution 10 ans */}
          <h3 className="text-xl sm:text-2xl font-semibold">Évolution sur 10 ans</h3>
          <ul className="list-disc pl-6 text-gray-800">
            <li>
              <strong>Appartements :</strong> de <strong>4 891&nbsp;€/m²</strong> (2015) à <strong>5 616&nbsp;€/m²</strong> (2025), pic à
              <strong> 6 281&nbsp;€/m²</strong> en 2022.
            </li>
            <li>
              <strong>Maisons :</strong> de <strong>7 248&nbsp;€/m²</strong> (2015) à <strong>6 652&nbsp;€/m²</strong> (2025), sommet à
              <strong> 8 160&nbsp;€/m²</strong> en 2022.
            </li>
          </ul>

          <div className="mt-6 flex justify-center">
            <a
              href="/#estimation"
              className="w-full sm:w-auto block text-center rounded-md bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition"
              aria-label="Obtenir mon estimation immobilière gratuite"
              title="Obtenir mon estimation immobilière gratuite"
            >
              Obtenir mon estimation immobilière gratuite
            </a>
          </div>
        </section>

        {/* H2 — Quartiers */}
        <section id="quartiers" className="space-y-6 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Prix immobilier par quartier à Rueil-Malmaison</h2>
          <p className="text-gray-800">
            Chaque quartier présente une dynamique spécifique. Voici un <strong>aperçu des niveaux de prix 2025</strong> et des
            atouts principaux.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Centre-Ville</h3>
              <p className="text-gray-800">
                Cœur commerçant et patrimonial, très recherché pour sa vie de quartier et sa proximité des services.
                <br />
                <strong>Prix moyen :</strong> <strong>6 200&nbsp;€/m²</strong> (majorité d’appartements).
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Buzenval</h3>
              <p className="text-gray-800">
                Cadre résidentiel calme et verdoyant, maisons individuelles et résidences de standing, écoles réputées.
                <br />
                <strong>Prix moyen :</strong> <strong>5 870&nbsp;€/m²</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Bords-de-Seine</h3>
              <p className="text-gray-800">
                Promenade bleue, demeures XIXᵉ, accès rapide A86, réseau de bus.
                <br />
                <strong>Prix moyen :</strong> <strong>6 210&nbsp;€/m²</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Plaine-Gare</h3>
              <p className="text-gray-800">
                Quartier en essor grâce à l’accessibilité RER ; très prisé des actifs et investisseurs.
                <br />
                <strong>Prix moyen :</strong> <strong>5 800&nbsp;€/m²</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Le Plateau</h3>
              <p className="text-gray-800">
                Résidentiel paisible, idéal pour les familles (maisons, petits immeubles), proche du futur écoquartier de l’Arsenal.
                <br />
                <strong>Prix moyen :</strong> <strong>5 550&nbsp;€/m²</strong>.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Villages & micro-quartiers à connaître</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li><strong>Belle Rive</strong> : central, très recherché (calme, pavillons, accès RER et Seine).</li>
              <li><strong>Les Martinets</strong> : proche des bords de Seine et des équipements sportifs ; habitat varié, public diversifié.</li>
              <li><strong>Coteaux</strong> : majoritairement pavillonnaire, vues dégagées, équipements culturels.</li>
              <li><strong>Jonchère-Malmaison-Saint-Cucufa</strong> : grandes étendues vertes, patrimoine historique.</li>
              <li><strong>Mazurières</strong> : rénovation urbaine (Clos des Terres Rouges), bon maillage de bus.</li>
              <li><strong>Mont-Valérien</strong> : calme, proche La Défense ; future gare du Grand Paris Express.</li>
              <li><strong>Richelieu-Châtaigneraie</strong> : pôle scolaire/culturel (lycée Richelieu, Passy, Daniélou).</li>
              <li><strong>Rueil-sur-Seine</strong> : quartier récent, commerces/emplois, RER A & gare routière.</li>
            </ul>
          </div>
        </section>

        {/* H2 — Facteurs de valorisation */}
        <section id="facteurs" className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Quels facteurs influencent le prix de votre bien ?</h2>

          <h3 className="text-xl sm:text-2xl font-semibold">Transports & accessibilité</h3>
          <ul className="list-disc pl-6 text-gray-800">
            <li><strong>RER A</strong> : La Défense en ~<strong>15&nbsp;min</strong>, centre de Paris en ~<strong>25&nbsp;min</strong>.</li>
            <li><strong>16 lignes de bus</strong> maillant la commune.</li>
            <li><strong>Grand Paris Express – Ligne 15</strong> (à venir).</li>
            <li><strong>A86 / A14</strong> à proximité.</li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-semibold">Écoles & services</h3>
          <p className="text-gray-800">
            Carte scolaire de qualité et établissements privés réputés (Charles Péguy, Saint-Charles Notre-Dame,
            <strong> Madeleine Daniélou</strong>, <strong>Passy-Buzenval</strong>) : des critères qui valorisent fortement les biens proches.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">Projets urbains & cadre de vie</h3>
          <p className="text-gray-800">
            Écoquartier de l’Arsenal, modernisation de la gare, aménagements verts (Parc des Gallicourts) : autant
            d’éléments qui soutiennent l’attractivité et les valeurs vénales à moyen terme.
          </p>
        </section>

        {/* H2 — Estimation */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Comment obtenir le <strong>prix réel</strong> de votre bien à Rueil-Malmaison&nbsp;?</h2>
          <p className="text-gray-800">
            Les moyennes au m² donnent une tendance, mais chaque bien est <strong>unique</strong> (étage, exposition, état, extérieur,
            stationnement, vue…). Pour connaître la valeur juste, faites réaliser une <strong>estimation personnalisée</strong> par une
            <strong> agence locale</strong> qui s’appuie sur les ventes récentes et les atouts précis de votre logement.
          </p>
        </section>

        {/* H2 — FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
            FAQ – Prix immobilier Rueil-Malmaison 2025
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 hover:bg-gray-100 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-header-${index}`}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-red-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-red-600" />
                    )}
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                    className={`px-4 sm:px-6 bg-white transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 py-4" : "max-h-0 py-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Prix immobilier à Rueil-Malmaison : prix m² par quartier en 2025",
              "description":
                "Prix au m² à Rueil-Malmaison en 2025, par quartier et type de bien. Tendances 2024-2025, évolution 10ans, projections et estimation gratuite.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.votredomaine.fr/prix-immobilier-rueil-malmaison"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ERA Immobilier – Agence Pompidou",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.votredomaine.fr/assets/estimation-era-rueil-malmaison.svg"
                }
              },
              "faq": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Quel est le prix moyen au m² à Rueil-Malmaison en 2025 ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Environ 5 616 €/m² pour les appartements et 6 652 €/m² pour les maisons."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Le marché va-t-il augmenter en 2025 ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Projection 2025 : stabilité à légère hausse, portée par une demande supérieure à l’offre et les projets urbains."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quels quartiers sont les plus recherchés ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Centre-Ville, Plaine-Gare (proximité RER), certains secteurs du Plateau et des Coteaux."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quels biens se vendent le plus vite ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Les appartements familiaux de 3-4 pièces proches des transports et les maisons avec jardin, bien estimés et bien présentés."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Combien de temps pour vendre un bien bien estimé ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Les délais de vente se réduisent et peuvent descendre sous les 3 mois pour les biens au prix du marché."
                    }
                  }
                ]
              }
            })
          }}
        />
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-6">
            <strong>Prêt à estimer votre bien à Rueil-Malmaison ?</strong>
          </h3>
          <p className="text-red-100 mb-8 font-light text-lg">
            Découvrez le <strong>prix du m²</strong> pour votre appartement ou maison à Rueil-Malmaison et
            <strong> estimez votre bien au prix du marché</strong> dès maintenant.
          </p>
          <a
            href="/#estimation"
            className="bg-white text-red-600 px-8 py-4 hover:bg-gray-50 transition-colors font-medium inline-block shadow-sm hover:shadow-md uppercase tracking-wider w-full sm:w-auto"
          >
            Obtenir mon estimation gratuite
          </a>
        </div>
      </section>

      {/* Footer simple (inchangé) */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src={logo}
              alt="ERA Immobilier – Agence Pompidou"
              className="h-8 w-8 object-contain"
              loading="lazy"
              decoding="async"
            />
            <span className="font-medium text-gray-700">
              ERA Immobilier – 01 84 74 49 49
            </span>
          </div>
          <p className="text-sm">
            © 2025 ERA Immobilier – Agence Pompidou. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrixImmobilierRueilMalmaison;