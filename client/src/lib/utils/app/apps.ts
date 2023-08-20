import type { App } from './index';
import { writable } from 'svelte/store';

export interface app {
	Profile: App;
	Dashboard: App;
	Bookings: App;
	Trains: App;
	Settings: App;
	Developers: App;
}
export const Apps = writable();
