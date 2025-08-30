import React from "react";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";
import logo from "../assets/estimation-era-rueil-malmaison.svg";

const MentionsLegales = () => (
  <div className="min-h-screen bg-white">
    <Helmet>
      <title>Mentions légales – estimations maison & appartement Rueil-Malmaison</title>
      <meta
        name="description"
        content="Mentions légales du service d'estimation maison Rueil-Malmaison et estimation appartement Rueil-Malmaison. Infos éditeur, hébergement et contacts officiels."
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

    {/* Contenu Mentions légales */}
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mentions légales</h1>

      <section className="space-y-6 text-base sm:text-lg leading-relaxed">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Éditeur du site</h2>
          <p>
            Le présent site est édité par :
            <br />
            ALS IMMO
            <br />
            SAS au capital de 10&nbsp;000&nbsp;€
            <br />
            Siège social : 22 Avenue du Président Pompidou, 92500 Rueil-Malmaison
            <br />
            RCS : 983&nbsp;447&nbsp;418 – Nanterre
            <br />
            TVA intracommunautaire : FR63983447418
            <br />
            Directeur de la publication : [Nom à compléter]
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Contact</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:agencepompidou@erafrance.com"
              className="text-red-600 underline"
            >
              agencepompidou@erafrance.com
            </a>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Hébergement</h2>
          <p>
            Site hébergé par : OVH
            <br />
            [Adresse fictive à remplacer par l’adresse officielle d’OVH]
            <br />
            [Téléphone OVH]
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

export default MentionsLegales;