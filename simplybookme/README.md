# Aufgabe
Für den Service "Ask a Librarian" können Benutzer über das Tool simplybook.me Termine buchen. simplybook.me bietet ein Widget-Skript, welches in AEM in Form eines Skript-Knoten eingebunden ist.

Die Erstellung und Anpassung von Skript-Knoten in AEM is Editoren nicht möglich.
 
# Lösung
Um die Editierbarkeit des eingebundenen Scripts für ETH-Bibliothek Editoren zu ermöglichen, wird das simplybook.me Script von GitHub Pages direkt eingebunden.

Die Datei **askalibrarian.js** wird vom Skript-Knoten via https://eth-library.github.io/snippets/simplybookme/askalibrarian.js gelesen und kann entsprechend angepasst werden.

Im Fall des folgenden Code-Snippets von SimplyBook:

```js
<script src="https://widget.simplybook.it/v2/widget/widget.js"></script>
<script>var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/ethbib.simplybook.it","theme":"default","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#33bb60","display_item_mode":"block","booking_nav_bg_color":"#d1e9c6","body_bg_color":"#f7f7f7","sb_review_image":"","dark_font_color":"#494949","light_font_color":"#ffffff","btn_color_1":"#5e7da7","sb_company_label_color":"#ffffff","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]}});</script>
```

ist der folgende Teil im File askalibrarian.js zu hinterlegen (der Teil innerhalb des zweiten <script> Tags):
```js
var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/ethbib.simplybook.it","theme":"default","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#33bb60","display_item_mode":"block","booking_nav_bg_color":"#d1e9c6","body_bg_color":"#f7f7f7","sb_review_image":"","dark_font_color":"#494949","light_font_color":"#ffffff","btn_color_1":"#5e7da7","sb_company_label_color":"#ffffff","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]}});
```
