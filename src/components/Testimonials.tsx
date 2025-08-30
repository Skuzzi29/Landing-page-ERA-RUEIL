import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Julien W.",
      location: "Quartier Plateau",
      rating: 5,
      text: "Très bonne agence, accompagnement de A à Z pour mon projet de vente , réactifs et professionnels, je recommande !"
    },
    {
      name: "Nolwenn D.",
      location: "Quartier Plaine-Gare", 
      rating: 5,
      text: "Nous avons fait appel à cette agence pour l’estimation de notre appartement 3 pièces et nous sommes pleinement satisfaits du service."
    },
    {
      name: "Jonathan D.",
      location: "Quartier Coteaux",
      rating: 5,
      text: "Excellente expérience avec cette agence ! Professionnalisme, réactivité et accompagnement de qualité du début à la fin."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight"
          >
            <strong>Témoignages de propriétaires à Rueil-Malmaison</strong>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg font-light max-w-3xl mx-auto">
            Les retours de nos clients sont la meilleure preuve de l’efficacité de notre approche.
            Chaque projet est unique, mais notre objectif reste le même&nbsp;: fournir une{" "}
            <strong>estimation fiable</strong> et <strong>accompagner jusqu’à la vente</strong>.
          </p>
        </div>

        <div
          className="
            flex overflow-x-auto snap-x snap-mandatory
            scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200
            pl-6
            md:grid md:grid-cols-3 md:gap-12 md:overflow-visible md:snap-none
          "
          aria-label="Avis vérifiés de propriétaires à Rueil-Malmaison"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="
                bg-gray-50 p-8 sm:p-10 hover:shadow-lg transition-all duration-300 border-l-4 border-red-600 rounded-lg relative
                flex-shrink-0 w-full max-w-md mx-auto snap-start
                md:max-w-none md:flex-shrink-auto md:mx-0
                pt-10
                pl-8
              "
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center" aria-hidden="true">
                <Quote className="h-5 w-5 text-white" />
              </div>

              <div className="flex items-center mb-6 space-x-1" aria-label={`${testimonial.rating} étoiles sur 5`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light italic mb-8">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-lg sm:text-xl font-light text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm sm:text-base">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;