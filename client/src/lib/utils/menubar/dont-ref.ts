export function dontRef() {
	const dontrefLinks = document.querySelectorAll('.dont-ref');
	const notActiveLinks = document.querySelectorAll('.not-active');
	const contextLinks = document.querySelectorAll('.context-link');
	dontrefLinks.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
		});
	});
	notActiveLinks.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
		});
	});
	contextLinks.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
		});
	});
}
