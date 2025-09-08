// api/estimation.js — Vercel Serverless Function (ESM, Vite)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
      return res.status(200).json({ ok: true, route: '/api/estimation', method: 'GET' });
    }
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Récup des données
    let data = req.body ?? {};
    if (typeof data === 'string') { try { data = JSON.parse(data); } catch {} }

    // ENV (à définir dans Vercel)
    const {
      SMTP_HOST = 'mails.optimails.com',
      SMTP_PORT = '465',
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
      SMTP_TO,
    } = process.env;

    if (!SMTP_USER || !SMTP_PASS) {
      return res.status(500).json({ error: 'SMTP config missing' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_PORT === '465', // SSL sur 465
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const html = `
      <h2>Nouvelle demande d'estimation</h2>
      <ul>
        <li><strong>Type de bien :</strong> ${esc(data.propertyType)}</li>
        <li><strong>Adresse :</strong> ${esc(data.address)}</li>
        <li><strong>Surface :</strong> ${esc(data.surface)} m²</li>
        <li><strong>Pièces :</strong> ${esc(data.rooms)}</li>
        <li><strong>Étage :</strong> ${esc(data.floor)}</li>
        <li><strong>Nom :</strong> ${esc(data.firstName)} ${esc(data.lastName)}</li>
        <li><strong>Téléphone :</strong> ${esc(data.phone)}</li>
        <li><strong>Email :</strong> ${esc(data.email)}</li>
        <li><strong>Message :</strong> ${esc(data.message)}</li>
      </ul>
    `;

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to:   SMTP_TO   || SMTP_USER, // ex: m.millery@eraimmo.fr
      subject: "Nouvelle demande d'estimation",
      text: JSON.stringify(data, null, 2),
      html,
    });

    return res.status(200).json({ message: 'Demande envoyée' });
  } catch (e) {
    console.error('API error:', e);
    return res.status(500).json({ error: "Erreur lors de l'envoi de la demande" });
  }
}

function esc(v) {
  const s = String(v ?? '');
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}