import 'winbox';
import { ActiveIcon } from './../../store/store';

declare const WinBox: WinBox.WinBoxConstructor;

export class App {
	window: WinBox;
	title: string;
	params: WinBox.Params;
	opened: boolean;

	constructor(title: string, params?: WinBox.Params) {
		const close = () => {
			this.opened = false;
			ActiveIcon.set('');
		};
		this.title = title;
		this.opened = false;
		this.params = {
			class: ['no-full'],
			x: 'center',
			y: 'center',
			width: '50%',
			height: '70%',
			minheight: '70%',
			minwidth: '50%',
			top: 40,
			bottom: 100,
			onclose: function () {
				close();
				return false;
			},
			onfocus: () => {
				ActiveIcon.set(title);
			},
			...params
		};
	}

	open(title?: string) {
		if (this.opened) {
			this.window.focus();
		} else {
			this.window = new WinBox(title ? title : this.title, this.params);
		}
		this.opened = true;
		const profile = document.getElementById('profile-pic');
		profile.classList.add('hithere');
		setTimeout(() => {
			profile.classList.remove('hithere');
		}, 2000);
	}

	openAfter(title?: string) {
		setTimeout(() => {
			if (this.opened) {
				this.window.focus();
			} else {
				this.window = new WinBox(title ? title : this.title, this.params);
			}
			this.opened = true;
			const profile = document.getElementById('profile-pic');
			profile.classList.add('hithere');
			setTimeout(() => {
				profile.classList.remove('hithere');
			}, 2000);
		}, 10);
	}
}
