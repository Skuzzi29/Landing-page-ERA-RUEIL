import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/estimation-era-rueil-malmaison.svg";
import guideImg from "../assets/guide-vendeur-rueil-malmaison.webp";

const GuideVendeurRueilMalmaison = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question:
        "Combien de temps faut-il pour vendre un bien à Rueil-Malmaison ?",
      answer: "En moyenne 2 à 3 mois pour un bien correctement estimé.",
    },
    {
      question: "Faut-il rénover avant de vendre ?",
      answer:
        "Les petites améliorations esthétiques (peinture, rangement) suffisent généralement.",
    },
    {
      question: "Quel est le rôle d’une agence immobilière locale ?",
      answer:
        "Elle gère l’estimation, la diffusion, les visites, les négociations et sécurise la transaction.",
    },
    {
      question: "Comment sécuriser une transaction immobilière ?",
      answer:
        "Grâce à un compromis de vente encadré par le notaire et l’accompagnement d’un professionnel.",
    },
    {
      question:
        "Quels biens se vendent le plus vite à Rueil-Malmaison ?",
      answer:
        "Les maisons familiales avec jardin et les appartements de 3 pièces et plus bien placés.",
    },
    {
      question: "Quels sont les frais à prévoir pour vendre un bien ?",
      answer:
        "Diagnostics techniques, éventuels travaux, et les frais d’agence si vous mandatez un professionnel.",
    },
    {
      question:
        "Comment obtenir une estimation gratuite de son bien à Rueil-Malmaison ?",
      answer:
        "Il suffit de contacter ERA Immobilier pour une estimation gratuite et sans engagement réalisée par un expert local.",
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Guide vendeur Rueil-Malmaison | Estimation maison & appartement</title>
        <meta
          name="description"
          content="Guide vendeur : estimation maison Rueil-Malmaison ou estimation appartement Rueil-Malmaison, préparation, diffusion et vente réussie avec ERA Immobilier local."
        />
        <link
          rel="canonical"
          href="https://estimation-rueil-malmaison.fr/guide-vendeur-rueil-malmaison"
        />
      </Helmet>
      {/* Header simple */}
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
            src={guideImg}
            alt="Guide du vendeur à Rueil-Malmaison – conseils ERA Immobilier"
            className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-md"
          />
        </section>

        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
          Guide du vendeur à <strong>Rueil-Malmaison</strong> : réussissez la{" "}
          <strong>vente</strong> de votre bien immobilier
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-6">
          Vendre un <strong>appartement</strong> ou une <strong>maison</strong>{" "}
          est une étape importante, parfois complexe. À{" "}
          <strong>Rueil-Malmaison</strong>, commune recherchée de l’Ouest
          parisien, le marché est attractif mais exigeant. Pour réussir votre
          projet, il est essentiel de bien vous préparer et de connaître les
          étapes clés de la <strong>vente</strong>.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-6">
          Découvrez notre <strong>guide du vendeur</strong> spécialement
          conçu pour les propriétaires à <strong>Rueil-Malmaison</strong>, et
          maximisez vos chances de vendre vite et au meilleur prix.
        </p>

        <div className="mb-10 flex justify-center">
          <a
            href="/#estimation"
            className="w-full sm:w-auto block text-center rounded-md bg-red-600 px-5 py-3 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition"
            aria-label="Obtenir mon estimation gratuite"
            title="Obtenir mon estimation gratuite"
          >
            Obtenir mon estimation gratuite
          </a>
        </div>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Pourquoi vendre à <strong>Rueil-Malmaison</strong> en 2025&nbsp;?
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Une ville attractive aux portes de Paris
          </h3>
          <p className="text-gray-800">
            Avec son cadre verdoyant, ses écoles réputées et son centre-ville
            animé, Rueil séduit les familles comme les investisseurs. La
            proximité avec La Défense et Paris en fait un emplacement stratégique.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Un marché immobilier dynamique
          </h3>
          <p className="text-gray-800">
            La demande reste forte pour les biens bien situés, notamment les
            maisons avec jardin et les appartements familiaux. Les délais de
            vente sont souvent courts, surtout pour les biens correctement estimés.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Étape 1 : <strong>Estimer</strong> la valeur de votre maison ou
            appartement à <strong>Rueil-Malmaison</strong>
          </h2>
          <p className="text-gray-800">
            Avant de <strong>vendre</strong>, il est indispensable de
            déterminer combien vaut votre bien.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            <strong>Estimation</strong> en ligne vs estimation sur place
          </h3>
          <p className="text-gray-800">
            <strong>Estimation en ligne&nbsp;:</strong> rapide et indicative,
            basée sur les prix moyens au m².<br />
            <strong>Estimation sur place&nbsp;:</strong> précise, elle intègre
            la luminosité, l’exposition, les prestations, la vue, l’état général et
            l’attractivité du quartier.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Pourquoi passer par une agence locale&nbsp;?
          </h3>
          <p className="text-gray-800">
            Une <strong>agence immobilière</strong> à{" "}
            <strong>Rueil-Malmaison</strong> connaît parfaitement&nbsp;:
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>les ventes récentes du secteur,</li>
            <li>les tendances par quartier,</li>
            <li>la demande des acheteurs.</li>
          </ul>
          <p className="text-gray-800">
            Cela garantit une estimation fiable et réaliste.
          </p>
          <p className="text-gray-800">
            ➡{" "}
            <a
              href="/prix-immobilier-rueil-malmaison"
              className="text-red-600 underline"
            >
              Voir le <strong>prix de l’immobilier</strong> à{" "}
              <strong>Rueil-Malmaison</strong>
            </a>
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Étape 2 : <strong>Préparer</strong> son bien à la{" "}
            <strong>vente</strong>
          </h2>
          <p className="text-gray-800">
            Un bien bien préparé se vend plus vite et plus cher.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Réunir les diagnostics obligatoires
          </h3>
          <p className="text-gray-800">
            Le vendeur doit fournir&nbsp;: DPE, amiante, électricité, gaz,
            plomb (selon le type de bien). Ces documents rassurent les
            acheteurs et évitent les blocages.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Valoriser son bien (home staging, petits travaux)
          </h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>Rafraîchir la peinture, améliorer la luminosité.</li>
            <li>Dépersonnaliser pour que l’acheteur se projette.</li>
            <li>
              Investir dans des photos professionnelles : elles multiplient les
              demandes de visites.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Étape 3 : <strong>Diffuser</strong> efficacement son annonce
          </h2>
          <p className="text-gray-800">
            Pour attirer un maximum d’acheteurs, la diffusion doit être soignée.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Les canaux de diffusion efficaces
          </h3>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>
              Portails immobiliers nationaux (SeLoger, Leboncoin, Bien’ici).
            </li>
            <li>Réseaux sociaux et campagnes locales.</li>
            <li>
              Fichier acquéreurs d’agences locales (acheteurs déjà qualifiés).
            </li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-semibold">
            L’importance des photos et vidéos
          </h3>
          <p className="text-gray-800">
            Des visuels de qualité peuvent faire la différence. De plus en plus
            de ventes se concluent grâce aux visites virtuelles et vidéos
            immersives.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Étape 4 : Gérer les <strong>visites</strong> et{" "}
            <strong>négociations</strong>
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Sélectionner les acquéreurs sérieux
          </h3>
          <p className="text-gray-800">
            Un <strong>agent immobilier</strong> filtre les dossiers et
            s’assure que les acheteurs disposent d’une capacité financière
            réelle.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Bien négocier sans perdre en valeur
          </h3>
          <p className="text-gray-800">
            Avec une stratégie claire et une estimation juste, vous évitez de «
            brader » votre bien tout en restant compétitif sur le marché.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Étape 5 : Finaliser la <strong>vente</strong> chez le notaire
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold">
            Le compromis de vente
          </h3>
          <p className="text-gray-800">
            Il fixe l’accord entre acheteur et vendeur. Les délais
            (rétractation, financement) encadrent la transaction.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold">
            La signature définitive
          </h3>
          <p className="text-gray-800">
            La vente devient officielle à la signature de l’acte authentique. Le
            prix est versé et les clés remises à l’acheteur.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Les erreurs à éviter quand on <strong>vend</strong> à{" "}
            <strong>Rueil-Malmaison</strong>
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>
              Surévaluer son bien → allonge les délais de vente.
            </li>
            <li>
              Négliger la présentation → moins de visites et offres plus
              basses.
            </li>
            <li>
              Tenter de <strong>vendre</strong> seul sans accompagnement →
              plus de stress et risque de mauvaise négociation.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Comment <strong>vendre</strong> plus rapidement et au meilleur
            prix&nbsp;?
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>
              Faire appel à une <strong>agence immobilière</strong> spécialisée
              à <strong>Rueil-Malmaison</strong>.
            </li>
            <li>Soigner la présentation du logement.</li>
            <li>Fixer un prix réaliste dès le départ.</li>
          </ul>
          <div className="mt-4">
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
            FAQ vendeur immobilier à Rueil-Malmaison
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
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
                      isOpen
                        ? "max-h-96 py-4"
                        : "max-h-0 py-0 overflow-hidden"
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
              headline: "Guide du vendeur à Rueil-Malmaison 2025",
              description:
                "Toutes les étapes pour vendre votre bien à Rueil-Malmaison : estimation, préparation, diffusion, négociation et signature chez le notaire.",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://www.votredomaine.fr/guide-vendeur-rueil-malmaison",
              },
              publisher: {
                "@type": "Organization",
                name: "ERA Immobilier – Agence Pompidou",
                logo: {
                  "@type": "ImageObject",
                  url:
                    "https://www.votredomaine.fr/assets/estimation-era-rueil-malmaison.svg",
                },
              },
              faq: {
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            }),
          }}
        />
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-6">
            <strong>Prêt à estimer votre bien à Rueil-Malmaison&nbsp;?</strong>
          </h3>
          <p className="text-red-100 mb-8 font-light text-lg">
            Nos experts vous accompagnent gratuitement dans l'estimation de
            votre appartement ou maison.
          </p>
          <a
            href="/#estimation"
            className="bg-white text-red-600 px-8 py-4 hover:bg-gray-50 transition-colors font-medium inline-block shadow-sm hover:shadow-md uppercase tracking-wider w-full sm:w-auto"
          >
            Obtenir mon estimation gratuite
          </a>
        </div>
      </section>

      {/* Footer simple */}
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

export default GuideVendeurRueilMalmaison;