import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/estimation-era-rueil-malmaison.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Texte */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={logo}
              alt="ERA Immobilier – estimation immobilière Rueil-Malmaison"
              className="h-16 w-16 object-cover"
            />
            <a
              href="/"
              className="leading-tight"
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

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="#estimation-form"
              className="text-gray-600 hover:text-red-600 transition-colors font-light text-sm uppercase tracking-wider"
            >
              Estimation
            </a>
            <a
              href="#about-title"
              className="text-gray-600 hover:text-red-600 transition-colors font-light text-sm uppercase tracking-wider"
            >
              Notre agence
            </a>
            <a
              href="#faq-title"
              className="text-gray-600 hover:text-red-600 transition-colors font-light text-sm uppercase tracking-wider"
            >
              FAQ
            </a>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:0184744949"
              className="flex items-center space-x-2 text-sm text-gray-500 font-light"
              aria-label="Appeler le numéro"
            >
              <Phone className="h-5 w-5" />
              <span>01 84 74 49 49</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation mobile */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a
                href="#estimation-form"
                className="block px-4 py-3 text-gray-700 hover:text-red-600 font-medium text-base rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Estimation
              </a>
              <a
                href="#about-title"
                className="block px-4 py-3 text-gray-700 hover:text-red-600 font-medium text-base rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Notre agence
              </a>
              <a
                href="#faq-title"
                className="block px-4 py-3 text-gray-700 hover:text-red-600 font-medium text-base rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>

              <div className="border-t border-gray-200 pt-4 space-y-4">
                <a
                  href="tel:0184744949"
                  className="flex items-center space-x-2 text-sm text-gray-500 font-light"
                  aria-label="Appeler le numéro"
                >
                  <Phone className="h-5 w-5" />
                  <span>01 84 74 49 49</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;