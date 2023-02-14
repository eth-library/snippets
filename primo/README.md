# Aufgabe
Im Falle von Systemstörungen oder anderen Ereignissen, soll in https://eth.swisscovery.slsp.ch ein Hinweistext oben auf der Seite angezeigt werden können, ohne das Customization Package zu ändern.
 
# Lösung
Die Datei **banner.json** wird vom Customizing-Code via https://eth-library.github.io/snippets/primo/banner.json gelesen.

Steht in dieser Datei der Text in deutsch und englisch, dann wird dieser Text in der richtigen Sprache angezeigt.

Der Text muss in folgender Form in der Datei stehen.
```
{
    "de": "Bücherbestellungen unter 'Weitere Bestelloptionen' momentan nicht möglich.",
    "en": "Book order under 'Other order options' currently not possible."
}
```

Dieses Beispiel steht als Beispiel-Textbaustein in der Datei **banner-example-hint.json**.
Diese Datei bitte nicht ändern.

Soll der Hinweis nicht angezeigt werden, muss die Datei **banner.json** leer sein oder nur enthalten:
```
{
}
```

Dieses Beispiel steht als Beispiel-Textbaustein in der Datei **banner-example-empty.json**.
Diese Datei bitte nicht ändern.
