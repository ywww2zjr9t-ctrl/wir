# wir · Musikplayer 004 – Offline-Musik

Basiert auf der funktionierenden Version 003. Die vier Wiedergabesymbole und das kompakte Layout bleiben erhalten.

## Neu
- ↓ links vom Herz: Titel vollständig im Browser speichern. ✓: offline vorhanden; Tippen auf ✓ entfernt die Offline-Kopie.
- ↓ mit Zahl in der bestehenden Filterzeile: lädt nur noch fehlende Titel, nacheinander. ✓ wenn alle gespeichert sind.
- Gespeicherte Titel werden bevorzugt lokal abgespielt. Offline-Playlist und App-Oberfläche sind nach einem erfolgreichen Online-Aufruf ebenfalls offline verfügbar.
- Bereits gespeicherte Dateien werden nicht erneut heruntergeladen.

## Installation
ZIP entpacken und die Dateien aus dem ZIP **im Hauptverzeichnis** des GitHub-Repositories hochladen. Den bestehenden `audio/`-Ordner und die generierte `playlist.json` **nicht löschen**. Die bestehende GitHub-Action unter `.github/workflows/` bleibt unverändert. Beim Browser-Upload können versteckte `.github`-Ordner ausgelassen werden; der Workflow ist bereits im Repository vorhanden.

## Hinweise
Der Speicher ist pro Browser/installierter Web-App getrennt und kann von iOS/macOS bereinigt werden. Die App muss beim Herunterladen geöffnet bleiben. Bereits geöffnete Musikstücke können bei einer Änderung der Datei auf GitHub veralten; eine Erkennung von geänderten Dateiinhalten benötigt zusätzliche Versionsdaten in der Playlist. Für zuverlässige Offline-Nutzung nach dem Update die App einmal online öffnen und Playlist aktualisieren.
