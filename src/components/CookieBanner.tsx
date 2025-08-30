import React, { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: any[];
    gaInitialized?: boolean;
  }
}

const initializeAnalytics = () => {
  if (window.gaInitialized || !GA_MEASUREMENT_ID) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  window.gaInitialized = true;
};

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      initializeAnalytics();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
    initializeAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 p-4 bg-gray-900 text-white z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <p className="text-sm">
          Nous utilisons des cookies pour améliorer votre expérience.{' '}
          <a href="/politique-de-confidentialite" className="underline text-red-400">
            En savoir plus
          </a>
          .
        </p>
        <div className="flex space-x-2">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;