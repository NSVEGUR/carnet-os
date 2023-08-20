function resetMenu(menuIcons: NodeListOf<HTMLElement>) {
	menuIcons.forEach((icon: HTMLElement) => {
		icon.classList.remove('links-hover');
		const menuDrop: HTMLElement = icon.querySelector('.drop');
		const actionDrop: HTMLElement = document.querySelector('.action-drop');
		menuDrop.style.display = 'none';
		actionDrop.style.display = 'none';
	});
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMenuDrop(e: any) {
	const menuIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-icons');
	resetMenu(menuIcons);
	e.target.classList.add('links-hover');
	e.target.querySelector('.drop').style.display = 'block';
}
function removeHoverListeners(menuIcons: NodeListOf<HTMLElement>) {
	menuIcons.forEach((icon) => {
		icon.removeEventListener('mouseenter', showMenuDrop);
	});
}
function addHoverListeners(menuIcons: NodeListOf<HTMLElement>) {
	menuIcons.forEach((icon) => {
		icon.addEventListener('mouseenter', showMenuDrop);
	});
}

export { resetMenu, removeHoverListeners, addHoverListeners };
