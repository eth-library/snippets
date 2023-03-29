(function(global){
	global.$_Tawk_AccountKey='6266f3afb0d10b6f3e6f4ea3';
	global.$_Tawk_WidgetId='1g1h2fppm';
	global.$_Tawk_Unstable=false;
	global.$_Tawk = global.$_Tawk || {};
	(function (w){
	function l() {
		if (window.$_Tawk.init !== undefined) {
			return;
		}

		window.$_Tawk.init = true;

		var files = [
	
			'https://eth-library.github.io/snippets/aiengine/jamie/js/vendor.js',
      
			'https://eth-library.github.io/snippets/aiengine/jamie/js/chunk-vendors.js',
			'https://eth-library.github.io/snippets/aiengine/jamie/js/chunk-common.js',
			'https://eth-library.github.io/snippets/aiengine/jamie/js/runtime.js',
			'https://eth-library.github.io/snippets/aiengine/jamie/js/app.js'
		];

		if (typeof Promise === 'undefined') {
			files.unshift('https://eth-library.github.io/snippets/aiengine/jamie/js/promise-polyfill.js');
		}

		if (typeof Symbol === 'undefined' || typeof Symbol.iterator === 'undefined') {
			files.unshift('https://eth-library.github.io/snippets/aiengine/jamie/js/iterator-polyfill.js');
		}

		if (typeof Object.entries === 'undefined') {
			files.unshift('https://eth-library.github.io/snippets/aiengine/jamie/js/entries-polyfill.js');
		}

		if (!window.crypto) {
			window.crypto = window.msCrypto;
		}

		if (typeof Event !== 'function') {
			files.unshift('https://eth-library.github.io/snippets/aiengine/jamie/js/event-polyfill.js');
		}

		if (!Object.values) {
			files.unshift('https://eth-library.github.io/snippets/aiengine/jamie/js/object-values-polyfill.js');
		}

		if (typeof Array.prototype.find === 'undefined') {
			files.unshift('https://eth-library.github.io/snippets/aiengine/jamie/js/find-polyfill.js');
		}

		var s0=document.getElementsByTagName('script')[0];

		for (var i = 0; i < files.length; i++) {
			var s1 = document.createElement('script');
			s1.src= files[i];
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
		}
	}
	if (document.readyState === 'complete') {
		l();
	} else if (w.attachEvent) {
		w.attachEvent('onload', l);
	} else {
		w.addEventListener('load', l, false);
	}
})(window);

})(window);
