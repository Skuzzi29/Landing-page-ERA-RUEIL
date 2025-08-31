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
      const response = await fetch('/api/estimations', {   // ✅ corrigé ici (pluriel)
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
      {/* … ton JSX reste inchangé … */}
    </section>
  );
};

export default EstimationForm;
