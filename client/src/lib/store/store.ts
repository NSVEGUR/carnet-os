import { writable } from 'svelte/store';

const ActiveIcon = writable('');

const LoggedIn = writable(false);

const UserDetails = writable({
	mail: 'ananymous@gmail.com',
	userid: '1'
});

export { UserDetails, ActiveIcon, LoggedIn };
