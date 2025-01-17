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

# Im anura Frontend hinterlegter Code

```
	<!-- Start Info Banner -->
	<script>
		function fetchBannerData() {
		const timestamp = new Date().getTime(); // Generate a timestamp to avoid caching issues
		const urls = [
			`https://eth-library.github.io/snippets/epics-anura/banner.json?t=${timestamp}`, // First URL to fetch banner data
			`https://eth-library.github.io/snippets/epics-anura-ba/banner.json?t=${timestamp}` // Second URL to fetch banner data
		];
	
		let bannerDataFound = false; // Flag to check if banner data is already found
	
		// Function to handle the response from each URL
		function handleBannerResponse(data) {
			const existingBanner = document.getElementById('info-banner'); // Check if there is an existing banner on the page
	
			if (data.info && !bannerDataFound) {
			// If banner data is found and no banner has been shown yet
			let banner;
			if (existingBanner) {
				banner = existingBanner; // Reuse existing banner if it already exists
			} else {
				banner = document.createElement('div'); // Create a new banner element if none exists
				banner.id = 'info-banner'; // Assign an ID for easy reference
				document.body.insertBefore(banner, document.body.firstChild); // Insert the banner at the top of the body
			}
	
			// Set the banner content and style
			banner.innerHTML = data.info;
			banner.style.backgroundColor = '#f0f0f0';
			banner.style.paddingTop = '30px';    // Top padding
			banner.style.paddingBottom = '20px'; // Bottom padding
			banner.style.paddingLeft = '40px';   // Left padding
			banner.style.paddingRight = '40px';  // Right padding
			banner.style.textAlign = 'center';
			bannerDataFound = true; // Set the flag to true as banner data has been found and displayed
			} else if (!data.info && existingBanner && !bannerDataFound) {
			// If no banner data is found and an existing banner is present, remove it
			existingBanner.remove();
			}
		}
	
		// Fetch data from each URL sequentially
		urls.forEach(url => {
			if (!bannerDataFound) {
			// Only fetch if no banner data has been found yet
			fetch(url)
				.then(response => response.json()) // Parse the response as JSON
				.then(data => handleBannerResponse(data)) // Handle the JSON response
				.catch(error => console.error('Error fetching banner data:', error)); // Log any errors that occur during fetch
			}
		});
		}
	
		// Initial call to fetch banner data
		fetchBannerData();
		// Set an interval to refresh the banner data every 10 minutes
		setInterval(fetchBannerData, 10 * 60 * 1000);
	</script>
	<!-- End Info Banner -->
```
