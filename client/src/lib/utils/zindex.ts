export function findHighestZIndex(elem) {
	const elements: HTMLCollection = document.getElementsByTagName(elem);
	let highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
	for (let i = 0; i < elements.length; i++) {
		const zIndex = Number.parseInt(
			document.defaultView.getComputedStyle(elements[i], null).getPropertyValue('z-index'),
			10
		);
		if (zIndex > highest) {
			highest = zIndex;
		}
	}
	return highest;
}
