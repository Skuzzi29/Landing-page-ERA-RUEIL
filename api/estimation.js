// api/estimation.js — version JS ESM (compatible "type":"module" de Vite)
export default function handler(req, res) {
  try {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
      return res.status(200).json({ ok: true, route: '/api/estimation', method: 'GET' });
    }

    if (req.method === 'POST') {
      let body = req.body ?? null;
      if (typeof body === 'string') { try { body = JSON.parse(body); } catch {} }
      return res.status(200).json({ ok: true, route: '/api/estimation', method: 'POST', received: body });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: 'handler crashed', message: String(e?.message || e) });
  }
}
