# Aufgabe
Im Falle von Systemstörungen oder anderen Ereignissen wellche alle E-Pica anura Frontends betreffen, soll in ALLEN E-Pics anura Frontends ein Hinweistext oben auf der Seite angezeigt werden können, ohne Anpassungen im Frontend-Code vornehmen zu müssen.
 
# Lösung
Die Datei **banner.json** wird vom anura-Code ALLER E-Pics anura Frontends via https://eth-library.github.io/snippets/epics-anura/banner.json gelesen. Hinweis: Es besteht auch die Möglichkeit über katalogspezifische Banners-Snippets Meldungen in dedizierten anura Frontends anzuzeigen.

Steht in dieser Datei ein 'info' Objekt, dann wird der Text im anura Frontend angezeigt.

Der Text muss in folgender Form in der Datei stehen.
```
{
  "info": "Dieser Service unterliegt gegenwärtig technischen Schwierigkeiten. Wir arbeiten an einer Lösung der Störung. <a href=\"https://www.e-pics.ethz.ch/stoerungsupdate\" target=\"_blank\">Mehr erfahren</a>"
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