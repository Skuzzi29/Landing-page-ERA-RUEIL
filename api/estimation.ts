// api/estimation.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const allowOrigin = '*';
  const allowMethods = 'POST,OPTIONS';
  const allowHeaders = 'Content-Type';

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', allowOrigin);
    res.setHeader('Access-Control-Allow-Methods', allowMethods);
    res.setHeader('Access-Control-Allow-Headers', allowHeaders);
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    res.setHeader('Access-Control-Allow-Origin', allowOrigin);
    res.setHeader('Content-Type', 'application/json');

    // On simule une réussite
    return res.status(200).json({
      message: 'Stub OK — formulaire reçu',
      data: req.body,
    });
  }

  res.setHeader('Content-Type', 'application/json');
  return res.status(405).json({ error: 'Method not allowed' });
}
