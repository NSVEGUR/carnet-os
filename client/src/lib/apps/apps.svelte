<script lang="ts">
	import Profile from './profile.svelte';
	import Dashboard from './dashboard.svelte';
	import Bookings from './bookings.svelte';
	import Trains from './trains.svelte';
	import Settings from './settings.svelte';
	import Developers from './developers.svelte';
	import Help from './help.svelte';
	import About from './about.svelte';
	import { onMount } from 'svelte';
	import { App } from './../utils/app';
	import { Apps } from './../utils/app/apps';
	onMount(() => {
		$Apps = {
			Profile: new App('Profile', {
				mount: document.getElementById('app-profile'),
				x: '0%',
				y: '5%'
			}),
			Dashboard: new App('Dashboard', {
				mount: document.getElementById('app-dashboard'),
				height: '80%',
				width: '70%'
			}),
			Bookings: new App('Bookings', {
				mount: document.getElementById('app-bookings'),
				x: '15%',
				y: '10%'
			}),
			Trains: new App('Trains', {
				mount: document.getElementById('app-trains'),
				max: true
			}),
			Settings: new App('Settings', {
				mount: document.getElementById('app-settings'),
				x: '45%',
				y: '5%'
			}),
			Developers: new App('Developers', {
				mount: document.getElementById('app-developers')
			}),
			Help: new App('Help', {
				mount: document.getElementById('app-help'),
				y: '25%',
				x: '48%'
			}),
			About: new App('About', {
				mount: document.getElementById('app-about'),
				y: '10%',
				x: '10%',
				height: '90%',
				width: '70%'
			})
		};
	});
</script>

<Profile />
<Dashboard />
<Bookings />
<Trains />
<Settings />
<Developers />
<About />
<Help />
