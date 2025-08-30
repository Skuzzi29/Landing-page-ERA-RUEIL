import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const routes = [
  '/',
  '/prix-immobilier-rueil-malmaison',
  '/guide-vendeur-rueil-malmaison',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/plan-du-site'
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, 'dist');
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', resolve: { alias: { 'react-router-dom': 'react-router-dom/dist/index.mjs' } } });
const { default: App } = await vite.ssrLoadModule('/src/App.tsx');

for (const route of routes) {
  const helmetContext = {};
  const appElement = React.createElement(
    HelmetProvider,
    { context: helmetContext },
    React.createElement(
      StaticRouter,
      { location: route },
      React.createElement(App)
    )
  );
  const appHtml = renderToString(appElement);
  const { helmet } = helmetContext;
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  if (helmet) {
    if (helmet.title) html = html.replace(/<title>.*?<\/title>/, helmet.title.toString());
    html = html.replace('</head>', `${helmet.meta?.toString() ?? ''}${helmet.link?.toString() ?? ''}</head>`);
  }
  const outDir = route === '/' ? distDir : path.join(distDir, route.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
}
await vite.close();