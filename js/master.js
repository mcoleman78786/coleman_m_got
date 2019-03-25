(() => {
	console.log('fired')

	//variable stack
	//grab the shields at bottom of page
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox 	= document.querySelector('.lightbox'),
			video = document.querySelector('video');

	function showLightbox() {
		lightBox.classList.add('show-lightbox');
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lightbox');
	}

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
})();