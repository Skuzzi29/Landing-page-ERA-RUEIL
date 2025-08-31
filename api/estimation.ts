// api/estimation.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, route: '/api/estimation', method: 'GET' });
  }

  if (req.method === 'POST') {
    return res.status(200).json({
      ok: true,
      route: '/api/estimation',
      method: 'POST',
      received: req.body ?? null,
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}