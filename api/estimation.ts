import nodemailer from 'nodemailer';

interface EstimationRequest {
  method?: string;
  body?: Record<string, unknown>;
}

interface EstimationResponse {
  status: (code: number) => EstimationResponse;
  json: (body: unknown) => void;
}

export default async function handler(
  req: EstimationRequest,
  res: EstimationResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const data = req.body ?? {};

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: 'Nouvelle demande d\'estimation',
      text: JSON.stringify(data, null, 2)
    });

    res.status(200).json({ message: 'Demande envoyée' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de la demande' });
  }
}