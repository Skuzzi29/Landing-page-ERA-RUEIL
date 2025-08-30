import React from 'react';
import { MapPin, TrendingUp, Tag } from 'lucide-react';

const PriceTable = () => {
  const neighborhoods = [
    { name: "Centre-Ville", price: "6 200 €" },
    { name: "Buzenval", price: "5 870 €" },
    { name: "Rueil-sur-Seine / Plaine-Gare", price: "5 800 €" },
    { name: "Plateau / Mont-Valérien", price: "5 550 €" },
    { name: "Jonchère-Malmaison Saint-Cucufa", price: "7 040 €" },
    { name: "Bords-de-Seine", price: "6 210 €" },
    { name: "Belle-Rive", price: "5 860 €" },
    { name: "Mazurières", price: "4 570 €" }
  ];

  return (
    <section id="PriceTable" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H2 */}
        <div className="text-center mb-16 sm:mb-20 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
            <strong>Prix au m² à Rueil-Malmaison par quartier</strong>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light max-w-3xl mx-auto">
            Connaître le <strong>prix au m² à Rueil-Malmaison</strong> est essentiel pour <strong>estimer</strong> correctement la valeur de votre maison ou appartement. 
            Les tarifs peuvent varier fortement d’un quartier à l’autre en fonction de la localisation, de la demande et des caractéristiques du bien. 
            Nos estimations s’appuient sur des <strong>données récentes et fiables</strong> pour vous fournir une vision réaliste du marché.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 mb-16 px-2 sm:px-0">
          {/* H3 — Pourquoi les prix varient */}
          <div className="bg-gray-50 p-8 sm:p-10 rounded-lg border-l-4 border-red-600 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 flex items-center tracking-tight">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 mr-3" />
              <strong>Pourquoi les prix varient d’un quartier à l’autre</strong>
            </h3>
            <ul className="text-gray-700 space-y-4 text-base sm:text-lg font-light list-disc pl-6">
              <li><strong>Proximité des transports</strong> : RER, lignes de bus, future <strong>ligne 15</strong>.</li>
              <li><strong>Cadre de vie</strong> : espaces verts, commerces, <strong>écoles réputées</strong>.</li>
              <li><strong>Type de biens disponibles</strong> : maisons familiales, appartements récents, immeubles anciens.</li>
            </ul>
            <p className="text-gray-600 mt-6 text-sm sm:text-base font-light">
              Selon l’emplacement précis, l’étage, la luminosité ou la présence d’un extérieur, le <strong>prix au m²</strong> peut évoluer.
            </p>
          </div>
          
          {/* H3 — Évolution du marché */}
          <div className="bg-gray-50 p-8 sm:p-10 rounded-lg border-l-4 border-red-600 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 flex items-center tracking-tight">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 mr-3" />
              <strong>Évolution du marché immobilier rueillois</strong>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5 text-base sm:text-lg font-light">
             En 2025, le marché immobilier à <strong>Rueil-Malmaison</strong> reste <strong>porteur</strong>, soutenu par une 
  demande bien supérieure à l’<strong>offre</strong>. 
            </p>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
             Après la <strong>stabilisation des prix immobiliers</strong> l’an dernier, les prévisions annoncent une <strong>légère hausse du prix au m² à Rueil-Malmaison</strong>. Les <strong>délais de vente</strong> devraient 
  continuer à se raccourcir, offrant aux propriétaires des conditions favorables pour vendre ou demander une <strong>estimation immobilière</strong> fiable.
            </p>
          </div>
        </div>
        
        {/* Tableau avec icône Tag */}
        <div className="bg-gray-50 rounded-lg overflow-hidden border-l-4 border-red-600 px-2 sm:px-6">
          <div className="p-8 sm:p-12 pb-0">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 flex items-center tracking-tight">
              <Tag className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 mr-3" />
              <strong>Prix au m² par quartier (aperçu)</strong>
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse">
              <thead className="bg-white">
                <tr>
                  <th className="text-left py-4 px-4 sm:px-8 font-medium text-gray-900 text-sm sm:text-lg w-2/3">Quartier</th>
                  <th className="text-left py-4 px-4 sm:px-8 font-medium text-gray-900 text-sm sm:text-lg w-1/3">Prix moyen au m²</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((neighborhood, index) => (
                  <tr key={index} className="border-t border-gray-200 hover:bg-white transition-colors">
                    <td className="py-4 px-4 sm:px-8 font-light text-gray-800 text-sm sm:text-base break-words">{neighborhood.name}</td>
                    <td className="py-4 px-4 sm:px-8 text-base sm:text-lg font-light text-red-600 whitespace-nowrap">~{neighborhood.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 sm:p-12 pt-6">
            <p className="text-gray-400 text-sm sm:text-base font-light italic">
              Ces données sont indicatives. Seule une estimation personnalisée permet d’évaluer précisément la valeur de votre bien.
            </p>
            <div className="mt-6 sm:mt-8 text-center">
              <a
                href="#estimation-form"
                className="bg-red-600 text-white px-10 py-3 sm:px-12 sm:py-4 rounded-md hover:bg-red-700 transition-colors font-medium inline-block shadow-sm hover:shadow-md uppercase tracking-wider text-sm sm:text-base"
              >
                Faites estimer votre bien maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;