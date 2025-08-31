// api/estimation.ts  — Vercel Serverless Function (Vite, sans Next)
// AUCUNE dépendance, AUCUN import. Répond toujours en JSON.

export default function handler(req: any, res: any) {
  try {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
      return res.status(200).json({ ok: true, route: '/api/estimation', method: 'GET' });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body ?? null);
      return res.status(200).json({ ok: true, route: '/api/estimation', method: 'POST', received: body });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e: any) {
    // Si jamais ça crashe, on renvoie l'erreur en JSON pour la voir dans le navigateur
    return res.status(500).json({ error: 'handler crashed', message: String(e?.message || e) });
  }
}

function safeParse(s: string) {
  try { return JSON.parse(s); } catch { return s; }
}
