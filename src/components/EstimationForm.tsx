import React, { useState } from 'react';

const EstimationForm = () => {
  const [formData, setFormData] = useState({
    propertyType: '',
    address: '',
    surface: '',
    rooms: '',
    floor: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/estimation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        setErrorMessage('Réponse inattendue du serveur.');
        setStatus('error');
        return;
      }

      let body: { error?: string; message?: string };
      try {
        body = await response.json();
      } catch {
        setErrorMessage('Contenu JSON invalide renvoyé par le serveur.');
        setStatus('error');
        return;
      }

      if (response.ok) {
        setStatus('success');
      } else {
        if (response.status === 404) {
          setErrorMessage('Endpoint introuvable');
        } else if (body && (body.error || body.message)) {
          setErrorMessage(body.error || body.message);
        } else {
          setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
        }
        setStatus('error');
      }
    } catch {
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="estimation" className="py-24 bg-gray-50" aria-labelledby="estimation-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="estimation-title"
            className="text-3xl sm:text-4xl font-light text-gray-900 mb-6 tracking-tight"
          >
            <strong>Obtenez votre estimation gratuite à Rueil-Malmaison</strong>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Vous avez un projet de vente à <strong>Rueil-Malmaison</strong> ou souhaitez connaître la{' '}
            <strong>valeur réelle de votre bien</strong>? Nous vous proposons une{' '}
            <strong>estimation précise, gratuite et sans engagement</strong>, réalisée par un{' '}
            <strong>professionnel du marché local</strong>. Que vous soyez propriétaire d’une maison
            à <strong>Plaine Gare</strong>, d’un appartement au <strong>Plateau</strong> ou d’un bien
            dans un autre quartier, nous vous accompagnons pas à pas pour préparer votre vente.
          </p>
        </header>

        {/* Bloc formulaire avec bandeau rouge collé */}
        <div
          id="estimation-form"
          className="bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden scroll-mt-20"
        >
          {/* Bandeau rouge en haut */}
          <div className="bg-red-600 text-white text-center py-4">
            <h3 className="text-xl sm:text-2xl font-medium">Formulaire d'estimation</h3>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="propertyType" className="block text-gray-900 text-base font-medium mb-3">
                  Type de bien <span className="text-red-600">*</span>
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
                >
                  <option value="">Sélectionnez</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                </select>
              </div>

              <div>
                <label htmlFor="rooms" className="block text-gray-900 text-base font-medium mb-3">
                  Nombre de pièces <span className="text-red-600">*</span>
                </label>
                <select
                  id="rooms"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
                >
                  <option value="">Sélectionnez</option>
                  <option value="1">1 pièce</option>
                  <option value="2">2 pièces</option>
                  <option value="3">3 pièces</option>
                  <option value="4">4 pièces</option>
                  <option value="5">5 pièces et +</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-900 text-base font-medium mb-3">
                Adresse du bien à Rueil-Malmaison <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Ex: 25 rue de la République, 92500 Rueil-Malmaison"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="surface" className="block text-gray-900 text-base font-medium mb-3">
                  Surface (m²) <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="surface"
                  name="surface"
                  value={formData.surface}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 65"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
                />
              </div>

              <div>
                <label htmlFor="floor" className="block text-gray-900 text-base font-medium mb-3">
                  Étage (si appartement)
                </label>
                <input
                  type="text"
                  id="floor"
                  name="floor"
                  value={formData.floor}
                  onChange={handleChange}
                  placeholder="Ex: 3ème étage"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-900 text-base font-medium mb-3">
                  Prénom <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-gray-900 text-base font-medium mb-3">
                  Nom <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-gray-900 text-base font-medium mb-3">
                  Téléphone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="01 23 45 67 89"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 text-base font-medium mb-3">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-900 text-base font-medium mb-3">
                Message libre
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Ex: Je souhaite vendre dans 3 mois"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-base resize-none transition"
              />
            </div>

            {/* Engagements */}
            <div className="bg-green-50 border border-green-200 p-4 space-y-2 rounded-md">
              <div className="flex items-center space-x-2 text-sm text-green-700">
                <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                <span>Engagement de rappel sous 24h</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-700">
                <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                <span>Données confidentielles</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full bg-red-600 rounded-lg text-white px-8 py-4 hover:bg-red-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Obtenir mon estimation gratuite
              </button>
            </div>

            {status === 'success' && (
              <p className="text-green-600 text-center">Votre demande a été envoyée avec succès.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EstimationForm;