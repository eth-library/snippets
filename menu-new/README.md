# Aufgabe
Neue Menüpunkte sollen durch ein Icon hervorgehoben werden können.
 
# Lösung
Die Datei **new.css** wird beim Laden der Seite gelesen.

Sie enthält das CSS, um ein Icon neben den gewünschten Menüpunkt zu setzen.

```
[data-main-menu-item='eth_website']{
    background-image: url('https://eth-library.github.io/snippets/menu-new/new.png');
    background-position: left center;
    background-repeat: no-repeat;
}
```

Der neue Menüpunkt, im Beispiel **eth_website**, ist der Code des Menüpunktes entsprechend der Konfiguration des Menüs in der View in Alma.

Das Icon **new.png** wird ebenfalls von hier geladen.
