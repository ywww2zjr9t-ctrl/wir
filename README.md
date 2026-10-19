# wir – Unsere Musik

Eine installierbare Web-App (PWA) mit Cover, Play/Pause/Stopp, 15 Sekunden zurück, 30 Sekunden vor, Titelsprung, Zufall, Wiederholung, Favoriten und intern scrollbarer Playlist.

## Erste Einrichtung

1. Alle Dateien und Ordner dieses Pakets **in das Hauptverzeichnis** des GitHub-Repositories `wir` hochladen (einschließlich `.github`). Die bestehende README darf ersetzt werden.
2. Unter **Settings → Pages** `Deploy from a branch`, `main`, `/(root)` wählen und speichern.
3. Unter **Settings → Actions → General → Workflow permissions** falls nötig **Read and write permissions** aktivieren. Nur erforderlich, falls der automatische Playlist-Workflow keine Schreibberechtigung hat.
4. Die Web-App aufrufen: `https://ywww2zjr9t-ctrl.github.io/wir/` (Benutzernamen prüfen).

## Musik hinzufügen

- Neue **MP3**, **M4A** oder **M4B** in den Ordner `audio/` hochladen.
- Cover und Titel werden automatisch aus den **eingebetteten Metadaten** gelesen. Kein separater Cover-Upload nötig. Fehlt ein Cover, erscheint das neutrale App-Cover.
- Nach dem Hochladen erzeugt GitHub Actions die `playlist.json` einschließlich eingebetteter Cover automatisch. Das dauert gewöhnlich kurz; danach die Web-App neu laden.
- Wenn du mehrere Dateien auf einmal hochlädst, kannst du sie auf GitHub im jeweiligen Ordner hineinziehen.
- GitHub begrenzt Uploads über die Weboberfläche auf **25 MiB pro Datei**; größere Audiodateien benötigen Git/Git LFS oder eine andere Ablage. GitHub blockiert normale Git-Dateien ab 100 MiB.
- Der Player ändert beim Hinzufügen von Musik **keinen Programmcode**.

## Installation auf Smartphones

**iPhone:** Webseite in Safari öffnen → Teilen → „Zum Home-Bildschirm“ → ggf. „Als Web-App öffnen“ → Hinzufügen.

**Android (Chrome):** Webseite öffnen → Menü ⋮ → „App installieren“ oder „Zum Startbildschirm hinzufügen“ → bestätigen.

Ohne Installation funktioniert die Webseite im normalen Browser. Favoriten werden **pro Browser/Gerät lokal** gespeichert und nicht zwischen Geräten synchronisiert.

## Hinweise

- M4A/M4B funktionieren, wenn der Browser den enthaltenen Codec unterstützt; DRM-geschützte Dateien funktionieren nicht.
- Automatische Wiedergabe startet erst nach einer Nutzeraktion (Browservorgabe).
- Hintergrundwiedergabe/Sperrbildschirm-Steuerung ist vom Gerät und Browser abhängig.
- Die Seite ist bei öffentlichem Repository und GitHub Pages **öffentlich erreichbar**. Ein unbekannter Link ist kein Passwortschutz.
- Die App-Oberfläche wird teilweise zwischengespeichert, **Musik nicht**. Ohne Internetverbindung sind die Audiodateien nicht verfügbar.
