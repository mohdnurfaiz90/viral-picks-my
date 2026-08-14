const CACHE_NAME = "viral-picks-my-v7";
const APP_SHELL = [
  "/viral-picks-my/", "/viral-picks-my/index.html", "/viral-picks-my/manager.html",
  "/viral-picks-my/showroom.css?v=5", "/viral-picks-my/styles.css?v=5",
  "/viral-picks-my/showroom.js?v=5", "/viral-picks-my/manager.js?v=5",
  "/viral-picks-my/data-service.js?v=3", "/viral-picks-my/config.js?v=3",
  "/viral-picks-my/legacy-images.js?v=4", "/viral-picks-my/pwa.js?v=6",
  "/viral-picks-my/app.webmanifest", "/viral-picks-my/manager.webmanifest",
  "/viral-picks-my/assets/viral-picks-profile.png",
  "/viral-picks-my/assets/icon-192.png",
  "/viral-picks-my/assets/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
      return response;
    })));
    return;
  }
  if (url.hostname.endsWith("supabase.co") && url.pathname.includes("/rest/v1/products")) {
    event.respondWith(fetch(event.request).then((response) => {
      if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
      return response;
    }).catch(() => caches.match(event.request)));
  }
});
