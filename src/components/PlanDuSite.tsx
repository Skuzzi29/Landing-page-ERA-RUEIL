import React from "react";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";
import logo from "../assets/estimation-era-rueil-malmaison.svg";

const PlanDuSite = () => (
  <div className="min-h-screen bg-white">
    <Helmet>
     <title>Plan du site estimation maison & appartement Rueil-Malmaison</title>
      <meta
        name="description"
        content="Plan du site officiel : accès à l'estimation maison Rueil-Malmaison, estimation appartement Rueil-Malmaison et toutes les pages ERA Immobilier, simplement."
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

    {/* Contenu Plan du Site */}
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
        <strong>Plan du site</strong>
      </h1>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <a href="/" className="text-red-600 underline">
            Accueil
          </a>
        </li>
        <li>
          <a href="/#estimation-form" className="text-red-600 underline">
            Estimation immobilière
          </a>
        </li>
        <li>
          <a href="/#about-title" className="text-red-600 underline">
            Estimation Rueil-Malmaison
          </a>
        </li>
        <li>
          <a
            href="/prix-immobilier-rueil-malmaison"
            className="text-red-600 underline"
          >
            Prix immobilier Rueil-Malmaison
          </a>
        </li>
        <li>
          <a href="/mentions-legales" className="text-red-600 underline">
            Mentions légales
          </a>
        </li>
        <li>
          <a href="/politique-de-confidentialite" className="text-red-600 underline">
            Politique de confidentialité
          </a>
        </li>
        <li>
          <a href="/plan-du-site" className="text-red-600 underline">
            Plan du site
          </a>
        </li>
      </ul>
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

export default PlanDuSite;