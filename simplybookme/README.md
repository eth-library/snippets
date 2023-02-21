# Aufgabe
Für den Service "Ask a Librarian" können Benutzer über das Tool simplybook.me Termine buchen. simplybook.me bietet ein Widget-Skript, welches in AEM in Form eines Skript-Knoten eingebunden ist.

Die Erstellung und Anpassung von Skript-Knoten in AEM is Editoren nicht möglich.
 
# Lösung
Um die Editierbarkeit des eingebundenen Scripts für ETH-Bibliothek Editoren zu ermöglichen, wird das simplybook.me Script von GitHub Pages direkt eingebunden.

Die Datei **askalibrarian.js** wird vom Skript-Knoten via https://eth-library.github.io/snippets/simplybookme/askalibrarian.js gelesen und kann entsprechend angepasst werden.

