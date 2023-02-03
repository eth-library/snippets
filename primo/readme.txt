**Aufgabe:**
es soll in unserer Swisscovery-View ein Hinweis oben auf der Seite angezeigt werden können, ohne das Customization Package zu ändern.
 
**Lösung:**
Die Datei **banner.json** wird vom Customizing-Code gelesen.

Steht in dieser Datei der Text in deutsch und englisch, dann wird dieser Text in der richtigen Sprache angezeigt.

Der Text muss in folgender Form in der Datei stehen.

`{
    "de": "Bücherbestellungen unter 'Weitere Bestelloptionen' momentan nicht möglich.",
    "en": "Book order under 'Other order options' currently not possible."
}`

Dieses Beispiel steht in der Datei **banner-example-hint.json**.
Diese Datei bitte nicht ändern.



Soll der Hinweis nicht angezeigt werden, muss die Datei leer sein oder nur enthalten:

{
}

Dieses Beispiel steht in der Datei **banner-example-empty.json**.
Diese Datei bitte nicht ändern.

