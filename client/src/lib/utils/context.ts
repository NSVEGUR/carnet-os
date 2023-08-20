function hideMenu() {
	document.getElementById('contextMenu').style.display = 'none';
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rightClick(e: any) {
	e.preventDefault();
	const contextMenu = document.getElementById('contextMenu');
	if (contextMenu.style.display == 'block') hideMenu();
	else {
		contextMenu.style.display = 'block';
		if (e.pageX >= window.screen.width - 300 && e.pageY >= window.screen.height - 300) {
			contextMenu.style.left = e.pageX - 200 + 'px';
			contextMenu.style.top = e.pageY - 200 + 'px';
		} else if (e.pageX >= window.screen.width - 300 || e.pageY >= window.screen.height - 300) {
			if (e.pageX >= window.screen.width - 300) {
				contextMenu.style.left = e.pageX - 200 + 'px';
				contextMenu.style.top = e.pageY + 'px';
			} else {
				contextMenu.style.left = e.pageX + 'px';
				contextMenu.style.top = e.pageY - 200 + 'px';
			}
		} else {
			contextMenu.style.left = e.pageX + 'px';
			contextMenu.style.top = e.pageY + 'px';
		}
	}
}
export { hideMenu, rightClick };
