# wir · Musikplayer 004.2 – App- und Playlist-Aktualisierung

Die kompakte Oberfläche, Offline-Bibliothek, Favoriten und vier Wiedergabetasten bleiben erhalten.

## Neu in 004.2
- Tippen auf **wir.** (links), **UNSERE MUSIK** (rechts) und **Pull-to-Refresh** prüfen jetzt zuerst die App-Version und danach die Playlist.
- Neue App-Version vorhanden: Bei laufender Musik erscheint eine Bestätigung, damit die Wiedergabe nicht unerwartet abbricht. Ohne laufende Wiedergabe wird die neue Version automatisch geladen.
- Keine neue App-Version: Playlist und Offline-Markierungen werden aktualisiert, ohne die Ansicht neu zu starten.
- App-Programmdateien werden beim Online-Aufruf bevorzugt frisch geladen; offline dient die zwischengespeicherte App als Fallback.
- Offline-MP3s liegen weiterhin im separaten Cache `wir-audio-offline-v1` und werden beim Versionswechsel **nicht** gelöscht.
- Die Sicherheitsabfrage vor dem Löschen eines gespeicherten Titels bleibt erhalten.

## Update von 004.1 auf 004.2: Diese fünf Dateien hochladen
Alle ins **Hauptverzeichnis** des GitHub-Repositories:
1. `app.js` – Aktualisierungslogik
2. `index.html` – neue Programmdatei-Versionen
3. `sw.js` – Service Worker / App-Cache
4. `version.json` – **neu**, enthält die veröffentlichte App-Version
5. `README.md` – diese Dokumentation

**Nicht ersetzen:** `style.css`, `manifest.webmanifest`, `icons/`, `audio/`, `playlist.json`, `generate_playlist.py`, `.github/workflows/update-playlist.yml`.

## Hinweise
- Der erste Wechsel von 004.1 auf 004.2 kann noch einen **einmaligen normalen Seiten-Neustart** benötigen, weil 004.1 die neue Versionsprüfung noch nicht kennt. Danach funktionieren die drei Aktualisierungswege.
- Nach dem Upload erst auf den erfolgreichen GitHub-Pages-Deploy warten. Auf iPhone und Mac die App einmal online öffnen.
- Wenn ein Update während der Wiedergabe verschoben wurde, kann es über einen erneuten Tipp nach Ende der Wiedergabe übernommen werden.
- Offline-Speicher wird vom Browser verwaltet und kann vom Betriebssystem bei Speicherknappheit bereinigt werden. Browser und installierte PWA können getrennte Speicherbereiche verwenden.
- Geänderte MP3-Inhalte unter identischem Dateinamen werden weiterhin nicht automatisch neu heruntergeladen.
