(() => {
	console.log('fired');

	// varible stack
	// grab the shields at the bottom of the page
	const shields    = document.querySelectorAll('sigil-container'),
	      lightBox   = document.querySelector('.lightbox'),
	      video      = document.querySelector('video');

	function showLightbox() {
		lightBox.classList.add('show-lightBox');
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lighbox');
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);

})();