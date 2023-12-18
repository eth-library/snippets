# Aufgabe
Neue Menüpunkte sollen durch ein Icon hervorgehoben werden können.
 
# Lösung
Die Datei **new.css** wird beim Laden der Seite gelesen.

Sie enthält das CSS, um ein Icon neben den gewünschten Menüpunkt zu setzen.

```
[data-main-menu-item='ill_eth']{
    background-image: url('https://eth-library.github.io/snippets/menu-new/new.svg');
    background-position: left center;
    background-repeat: no-repeat;
}

prm-topbar prm-main-menu [data-main-menu-item='ill_eth'] .md-button:not(.close-btn-favorits-warning-message):not(.md-icon-button){
    margin-left: 10px !important;
}
```

Der neue Menüpunkt, im Beispiel **"ill_eth"**, wird durch den Code des Menüpunktes (entsprechend der Konfiguration des Menüs in der View in Alma) identifiziert.
Die erste CSS-Regel bewirkt das Anzeigen des Icons links vom Text des Menüpunktes.
Die zweite Regel stellt den Abstand zwischen Icon und Text ein.

Das Icon **new.png** wird ebenfalls von hier geladen.

Wenn das Icon nicht mehr angezeigt werden soll, muss der Inhalt der new.css gelöscht werden.

Beispiel-CSS steht immer in der Datei **new-example.css**.
Diese Datei bitte nicht ändern.
