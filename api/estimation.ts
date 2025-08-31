// pages/api/estimations.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS (au cas où)
  const allowOrigin = '*';
  const allowMethods = 'POST,OPTIONS';
  const allowHeaders = 'Content-Type';

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', allowOrigin);
    res.setHeader('Access-Control-Allow-Methods', allowMethods);
    res.setHeader('Access-Control-Allow-Headers', allowHeaders);
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', allowMethods);
  res.setHeader('Access-Control-Allow-Headers', allowHeaders);

  // Corps de la requête
  const data = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};

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
    secure: SMTP_PORT === '465', // 465 = SSL
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: SMTP_TO || SMTP_USER, // destinataire
      subject: "Nouvelle demande d'estimation",
      text: JSON.stringify(data, null, 2),
    });

    return res.status(200).json({ message: 'Demande envoyée' });
  } catch (err) {
    console.error('SMTP error:', err);
    return res.status(500).json({ error: "Erreur lors de l'envoi de la demande" });
  }
}

function safeParse(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}
