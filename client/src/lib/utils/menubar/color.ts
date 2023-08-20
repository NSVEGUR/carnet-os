// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function controlSystemColor(e: any) {
	if (e.target?.classList.contains('color')) {
		const color = e.target;
		const colorCircles: NodeListOf<HTMLElement> = document.querySelectorAll('.color > div');
		const newColor = getComputedStyle(color).getPropertyValue('background');
		document.documentElement.style.setProperty('--system-color', newColor);
		colorCircles.forEach((circle) => {
			circle.style.display = 'none';
		});
		color.querySelector('div').style.display = 'block';
	}
}
