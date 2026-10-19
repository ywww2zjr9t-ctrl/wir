const CACHE='wir-player-004-shell';
const ASSETS=['./index.html','./style.css?v=004','./app.js?v=004','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
const PLAYLIST_CACHE='wir-playlist-offline-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('wir-player-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
 const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==location.origin)return;
 // Audio is managed explicitly by the app, never cached implicitly by the service worker.
 if(/\.(mp3|m4a|m4b)$/i.test(url.pathname))return;
 if(url.pathname.endsWith('/playlist.json')){
  e.respondWith(fetch(req).then(async r=>{if(r.ok){const cache=await caches.open(PLAYLIST_CACHE);await cache.put('./playlist.json',r.clone())}return r}).catch(async()=>{const cache=await caches.open(PLAYLIST_CACHE);return await cache.match('./playlist.json')||Response.error()}));return;
 }
 if(req.mode==='navigate'){
  e.respondWith(fetch(req).catch(async()=>await caches.match('./index.html')||Response.error()));return;
 }
 e.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(r=>{if(r.ok){const copy=r.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)))}return r})));
});
