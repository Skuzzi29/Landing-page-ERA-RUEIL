import React from "react";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";
import logo from "../assets/estimation-era-rueil-malmaison.svg";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen bg-white">
    <Helmet>
      <title>Confidentialité estimation maison & appartement Rueil-Malmaison</title>
      <meta
        name="description"
        content="Politique de confidentialité pour l'estimation maison Rueil-Malmaison et estimation appartement Rueil-Malmaison : collecte et protection des données selon RGPD."
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

    {/* Contenu Politique de confidentialité */}
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
        <strong>Politique de confidentialité</strong>
      </h1>

      <section className="space-y-6 text-base sm:text-lg leading-relaxed">
        <p>
          ALS IMMO attache une grande importance à la protection des données
          personnelles de ses clients et prospects. La présente politique
          explique de manière transparente la manière dont vos données sont
          collectées et traitées conformément au Règlement Général sur la
          Protection des Données (RGPD).
        </p>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            1. Données collectées
          </h3>
          <p className="mb-4">
            Dans le cadre des formulaires de contact et d’estimation, nous
            collectons les informations suivantes :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nom, prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Adresse du bien immobilier</li>
            <li>Informations relatives au bien immobilier</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            2. Finalité des traitements
          </h3>
          <p className="mb-4">
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Répondre à vos demandes de contact et d’estimation immobilière</li>
            <li>Assurer le suivi commercial de votre projet</li>
            <li>Vous transmettre des informations sur le marché immobilier local</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            3. Base légale
          </h3>
          <p>
            Les traitements sont fondés sur votre consentement (article 6.1.a du
            RGPD). Vous pouvez retirer ce consentement à tout moment.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            4. Durée de conservation
          </h3>
          <p>
            Vos données sont conservées pendant une durée maximale de 24 mois à
            compter de votre dernier contact avec notre agence.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            5. Destinataires des données
          </h3>
          <p>
            Les données sont traitées uniquement par ALS IMMO et ne sont jamais
            revendues à des tiers. Aucun transfert de données hors Union
            Européenne n’est réalisé.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            6. Sous-traitance
          </h3>
          <p>
            Le site est hébergé par OVH.
            <br />
            [Si utilisation future d’un prestataire de formulaire comme
            Formspree, il faudra l’ajouter ici.]
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            7. Droits des personnes
          </h3>
          <p>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Droit d’accès, de rectification et d’effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d’opposition au traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p>
            Pour exercer vos droits, vous pouvez contacter{" "}
            <a
              href="mailto:agencepompidou@erafrance.com"
              className="text-red-600 underline"
            >
              agencepompidou@erafrance.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            8. Cookies
          </h3>
          <p>
            Le site utilise des cookies pour améliorer l’expérience utilisateur
            et à des fins de mesure d’audience via Google Analytics. Une
            bannière de consentement vous permet d’accepter ou de refuser ces
            cookies. Vous pouvez également configurer vos préférences dans votre
            navigateur.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            9. Sécurité des données
          </h3>
          <p>
            ALS IMMO met en place toutes les mesures techniques et
            organisationnelles nécessaires pour protéger vos données
            personnelles contre l’altération, la perte accidentelle ou l’accès
            non autorisé.
          </p>
        </div>
      </section>
    </main>

    {/* Footer simple */}
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <img
            src={logo}
            alt="ERA Immobilier – Agence Pompidou"
            className="h-8 w-8 object-contain"
          />
          <span classnick="font-medium text-gray-700">
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

export default PolitiqueConfidentialite;