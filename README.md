# Starshooter

<img width="821" alt="starshooter-screenshot" src="https://github.com/user-attachments/assets/44ae9af4-ff6c-42fc-8c92-47cc9ba7eb7b">

## Was ist das hier?

Starshooter ist ein Browser-Spiel, das ich im Rahmen des VHS-Kurses „Spieleentwicklung mit HTML-Canvas und Javascript” mit den Kursteilnehmern zusammen entwickle. In diesem Repository stelle ich den Source-Code für die Teilnehmer, aber auch für jeden anderen Interessierten, kostenlos zur Verfügung.

Der im Rahmen des jeweiligen Kurses entwickelte Code kann unter Umständen leicht abweichen, je nachdem, welche eigenen Ideen und Wünsche die Teilnehmer möglicherweise eingebracht haben. Die in den Kursen behandelten Ideen und Prinzipien der Spieleentwicklung lassen sich aber in jedem Falle an dem Code in diesem Repository nachvollziehen.

Jeder ist herzlich eingeladen, den Code in diesem Repository auszuchecken und ihn nach seinen Wünschen und Vorstellungen abzuwandeln oder zu erweitern oder ihn einfach als Basis für ganz eigene Ideen zu benutzen.

## Wo und wann kann ich den Kurs besuchen?

An folgenden Terminen wird der Kurs 2025 angeboten:

* VHS Mitte: Über zwei Wochenenden verteilt am 31.01./01.02. und 07.02./08.02. (https://www.vhsit.berlin.de/VHSKURSE/BusinessPages/CourseDetail.aspx?id=742364)
* VHS Pankow: Am Wochenende vom 21.03. - 23.03. (https://www.vhsit.berlin.de/VHSKURSE/BusinessPages/CourseDetail.aspx?id=740587)

## Wie bekomme ich das Spiel zum Laufen?

Um das Spiel bei euch lokal zu starten, müsst ihr zunächst das Repository auschecken. Wenn ihr schon [Git](https://git-scm.com/) installiert habt und damit vertraut seid, geht das am einfachsten über den Terminal-Befehl `git clone git@github.com:gannimet/starshooter.git`. Dieser Befehl kopiert das Repository in euer aktuelles Arbeitsverzeichnis. Ansonsten könnt ihr den Code auch einfach als ZIP-Datei herunterladen. Dazu einfach oben rechts auf den Button "Code" klicken und im Dropdown dann unten auf "Download ZIP". Danach entpackt ihr das ZIP in ein Verzeichnis eurer Wahl.

Danach öffnet ihr euren Webbrowser, wählt im Menü den Eintrag "Datei" -> "Datei öffnen" (oder so ähnlich, kommt auf den Browser an) und öffnet dann die Datei `index.html` aus dem Repository-Ordner. Jetzt müsstet ihr das Spiel im Browser sehen können. Mit der Pfeil-nach-oben-Taste könnt ihr den Alien nach oben bewegen, mit der Leertaste führt ihr die Schussbewegung aus. Ziel ist es, möglichst viele der herabfallenden Sternenbälle auf die gegenüber liegende bewegliche Scheibe zu schießen. Die Anzahl der Treffer wird oben rechts mitgezählt. Mit dem Regler unterhalb der Spielfläche könnt ihr steuern, wie viele Sternenbälle pro Sekunde herunterregnen sollen.

## Ich will selber mit dem Code experimentieren!

Sehr gerne! Öffnet dazu einen Texteditor eurer Wahl (ich empfehle: [VSCode](https://code.visualstudio.com/)) und öffnet darin das Verzeichnis mit dem heruntergeladenen Repository. In VSCode geht das über "File" -> "Open Folder…". Jetzt seht ihr links ein Dateiverzeichnis mit allen Source-Code-Dateien, die zum Projekt gehören. Darin könnt ihr eure gewünschten Änderungen vornehmen. Um die Auswirkungen eurer Änderungen zu sehen, müsst ihr anschließend das geöffnete Browser-Fenster aktualisieren.

Das ständige manuelle Aktualisieren des Browser-Fensters kann auf Dauer etwas nervig werden. Angenehmerweise gibt es einige Möglichkeiten, wie ihr gerade gemachte Änderungen ohne diesen Zwischenschritt im Browser sehen könnt. Wenn ihr VSCode benutzt, empfehle ich euch dafür die Erweiterung "[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)". Diese könnt ihr installieren, indem ihr in VSCode auf der linken Seite das Bauklötzchen-Icon "Extensions" klickt, in dem neuen View dann in das Suchfeld "Live Server" eingebt und dann den ersten Treffer anklickt (Autor Ritwick Dey). Es öffnet sich ein neuer VSCode-Tab, in dem ihr einfach auf "Install" klicken könnt. Nach wenigen Sekunden sollte die Installation abgeschlossen sein.

Nun solltet ihr ganz unten rechts im Statusbar eures VSCode-Fensters einen kleinen Eintrag mit der Beschriftung "Go Live" sehen. Klickt einfach darauf und es wird sich euer Webbrowser mit der URL `127.0.0.1:5500` öffnen. Technisch bedeutet das, dass die Extension auf eurem Rechner einen lokalen Entwicklungsserver an Port 5500 gestartet hat, der ein Signal an die Seite im Browser sendet, wenn ihr in eurem VSCode-Projekt eine Datei speichert. Der Browser lädt die Seite daraufhin neu und ihr seht die Auswirkung eurer Code-Änderung automatisch, ganz ohne manuelles Neuladen.
