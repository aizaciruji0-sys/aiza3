const C = 'apex-v2';
const ASSETS = [
  './',
  'index.html',
  'style.css',
  'config.js',
  'app.js',
  'manifest.json',
  'icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(C).then(c => c.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => k !== C && caches.delete(k))
    )).then(() => clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(r => {
      return r || fetch(e.request).then(resp => {
        if (resp.status === 200) {
          const cl = resp.clone();
          caches.open(C).then(c => c.put(e.request, cl));
        }
        return resp;
      });
    }).catch(() => caches.match('./') || caches.match('index.html'))
  );
});
