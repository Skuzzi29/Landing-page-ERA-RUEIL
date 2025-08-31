// pages/api/estimation.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
    return res.status(200).json({ message: 'Stub OK — formulaire reçu' });
  }

  res.setHeader('Content-Type', 'application/json');
  return res.status(405).json({ error: 'Method not allowed' });
}