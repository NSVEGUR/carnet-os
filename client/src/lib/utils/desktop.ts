import { dontRef } from './menubar/dont-ref';

export function loadAuth() {
	setTimeout(() => {
		document.getElementById('splash').style.display = 'none';
		document.getElementById('auth').style.animation = 'fadein 0.5s forwards ease-in-out';
		document.getElementById('auth').style.display = 'block';
	}, 2500);
}

export function loadDesktop() {
	document.getElementById('auth').style.display = 'none';
	document.getElementById('desktop').style.animation = 'fadein 0.5s forwards ease-in-out';
	document.getElementById('dock').style.animation = 'appearFromBottom 0.7s forwards ease-in-out';
	document.getElementById('desktop').style.display = 'block';
	setTimeout(() => {
		dontRef();
	}, 2000);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function manageFullScreen(e: any) {
	if (e.target.closest('nav') || e.target.closest('.dock-el')) return;
	if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
		document.exitFullscreen();
	} else {
		try {
			document.body.requestFullscreen();
		} catch (err) {
			console.log(err);
		}
	}
}
