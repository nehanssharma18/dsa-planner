// Bump this version whenever you change index.html so users get the update.
const CACHE = "dsa-planner-v1";
const FILES = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png"];

// 1. Install: download and store the app files for offline use.
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

// 2. Activate: delete caches left over from older versions.
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 3. Fetch: serve from cache first, fall back to the network.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
