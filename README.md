# wir · Musikplayer 003

Kompakte Oberfläche, automatisch geöffnete Playlist, Favoriten pro Titel, 15/30-Sekunden-Kreispfeile, Play/Pause und Aktualisierung über die beiden Kopf-Schaltflächen sowie Pull-to-Refresh. Das Standardcover und die PWA-Icons verwenden die neue Note aus Licht.

## Update auf GitHub

**Wichtig:** Lade den Inhalt dieses Pakets in das Hauptverzeichnis des Repositories hoch, **nicht den übergeordneten Ordner**. Lade den bestehenden Ordner `audio/` nicht erneut hoch und lösche ihn nicht.

Die Datei `playlist.json` ist absichtlich **nicht** enthalten: Sie wird automatisch aus deinen bereits vorhandenen Musikdateien erstellt und soll beim Update nicht durch eine leere Liste überschrieben werden. Die vorhandene `playlist.json` auf GitHub bleibt erhalten.

Der Workflow muss unter `.github/workflows/update-playlist.yml` liegen. Beim Browser-Upload kann GitHub versteckte Ordner auslassen; kontrolliere daher den Workflow im Repository und ersetze ihn nur, falls erforderlich, direkt über den GitHub-Dateieditor.

## Veröffentlichung

Nach dem Commit auf den erfolgreichen GitHub-Pages-Deploy warten. App vollständig schließen und neu öffnen; gegebenenfalls auf `wir.` tippen, um die Musikliste neu zu laden.

## Hinweise

Audioformate MP3, M4A und M4B werden in der Playlist erkannt; die Wiedergabe hängt von den Codecs des jeweiligen Browsers ab. Favoriten und zuletzt ausgewählter Titel werden lokal auf dem jeweiligen Gerät gespeichert.
