(() => {
	console.log('fired');

	// varible stack
	// grab the shields at the bottom of the page
	const shields    = document.querySelectorAll('sigil-container'),
	      lightBox   = document.querySelector('.lightbox');

	function showLightbox() {
		lightbox.classList.add('show-Lightbox');
	}

	function hideLightbox() {
		lightbox.classList.remove('show-Lightbox');
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

})();