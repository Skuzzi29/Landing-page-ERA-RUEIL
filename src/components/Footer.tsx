import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/estimation-era-rueil-malmaison.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Bloc principal */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="ERA Immobilier – estimation immobilière Rueil-Malmaison"
                className="h-12 w-12 object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold">ERA Immobilier</h3>
                <p className="text-gray-400">Agence Pompidou</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre agence immobilière locale à <strong>Rueil-Malmaison</strong>.
              <strong> Estimation gratuite </strong> et accompagnement personnalisé
              pour la <strong>vente</strong> de votre bien.
            </p>

            {/* Coordonnées */}
            <div className="space-y-3 max-w-md">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">
                  22 Av. du Président Georges Pompidou, 92500 Rueil-Malmaison
                </span>
              </div>
              <a
                href="tel:0184744949"
                className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
              >
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span>01 84 74 49 49</span>
              </a>
              <a
                href="mailto:agencepompidou@erafrance.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors break-all"
              >
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span>agencepompidou@erafrance.com</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#estimation" className="text-gray-300 hover:text-red-400 transition-colors">
                  Estimation gratuite
                </a>
              </li>
              <li>
                <a href="#process-title" className="text-gray-300 hover:text-red-400 transition-colors">
                  Vente immobilière
                </a>
              </li>
              <li>
                <a href="#PriceTable" className="text-gray-300 hover:text-red-400 transition-colors">
                  Conseils prix au m²
                </a>
              </li>
              <li>
                <a href="#about-us" className="text-gray-300 hover:text-red-400 transition-colors">
                  Accompagnement vendeurs
                </a>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/prix-immobilier-rueil-malmaison" className="text-gray-300 hover:text-red-400 transition-colors">
                  Prix immobilier Rueil-Malmaison
                </Link>
              </li>
              <li>
                <Link to="/guide-vendeur-rueil-malmaison" className="text-gray-300 hover:text-red-400 transition-colors">
                  Guide vendeur Rueil-Malmaison
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-red-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-gray-300 hover:text-red-400 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite" className="text-gray-300 hover:text-red-400 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/plan-du-site" className="text-gray-300 hover:text-red-400 transition-colors">
                  Plan du site
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 ERA Immobilier Agence Pompidou. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;