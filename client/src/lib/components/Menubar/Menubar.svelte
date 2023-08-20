<script lang="ts">
	import Time from './Time.svelte';
	import ActionButton from './ActionButton/ActionButton.svelte';
	import Logo from './Nav/Logo.svelte';
	import Profile from './Nav/Profile.svelte';
	import Dashboard from './Nav/Dashboard.svelte';
	import Bookings from './Nav/Bookings.svelte';
	import Trains from './Nav/Trains.svelte';
	import Settings from './Nav/Settings.svelte';
	import Contact from './Nav/Contact.svelte';
	import Help from './Nav/Help.svelte';
	import { resetMenu, removeHoverListeners, addHoverListeners } from '../../utils/menubar/menu';
	function reset(e: any) {
		const menuIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-icons');
		menuIcons.forEach((icon) => {
			if (e.target != icon && e.target.parentNode != icon) {
				resetMenu(menuIcons);
				removeHoverListeners(menuIcons);
			}
		});
	}
	function start(e: any) {
		const menuIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-icons');
		if (e.target.closest('.menu-icons')) {
			const el = e.target.closest('.menu-icons');
			resetMenu(menuIcons);
			el.classList.add('links-hover');
			el.querySelector('.drop').style.display = 'block';
			addHoverListeners(menuIcons);
		}
	}
</script>

<svelte:window on:mouseup={reset} />

<div id="menu">
	<nav on:click={start}>
		<div class="content">
			<Logo />
			<ul class="links">
				<Profile />
				<Dashboard />
				<Bookings />
				<Trains />
				<Settings />
				<Contact />
				<Help />
			</ul>
		</div>
		<div id="wifi">
			<i class="fas fa-wifi" />
		</div>
		<div id="search">
			<i class="fas fa-search" />
		</div>
		<div id="focus">
			<i class="fas fa-moon" />
		</div>
		<ActionButton />
		<Time />
	</nav>
</div>

<style>
	#menu {
		background: var(--system-transparent-color-nav);
		position: fixed;
		width: 100vw;
	}

	#menu nav {
		position: relative;
		display: flex;
		max-width: 100%;
		justify-content: space-between;
	}

	#menu nav:before {
		content: '';

		width: inherit;
		height: inherit;

		position: fixed;
		left: 0;
		top: 0;

		z-index: 0;
		backdrop-filter: blur(15px);
	}

	nav .content {
		display: flex;
		align-items: center;
	}

	nav .content .links {
		margin-left: 5px;
		display: flex;
	}
	#focus {
		position: fixed;
		top: 0;
		color: var(--system-text-color);
		right: 285px;
		padding-top: 2px;
		height: 20px;
		width: 20px;
		display: none;
	}
	#search {
		position: fixed;
		top: 0;
		color: var(--system-text-color);
		right: 215px;
		padding-top: 2px;
		height: 20px;
		width: 20px;
	}
	#wifi {
		position: fixed;
		top: 0;
		color: var(--system-text-color);
		right: 253px;
		padding-top: 2px;
		height: 20px;
		width: 20px;
	}

	@media screen and (max-width: 1250px) {
		#menu {
			backdrop-filter: inherit;
			box-shadow: none;
		}
		#menu nav {
			max-width: 100%;
			padding: 0 20px;
		}
		#focus {
			right: 285px;
		}
	}
	@media screen and (max-width: 920px) {
		nav .content .links {
			display: block;
			position: fixed;
			background: var(--bg-color);
			height: 100%;
			width: 100%;
			top: 70px;
			left: -100%;
			margin-left: 0;
			max-width: 360px;
			overflow-y: auto;
			padding-bottom: 100px;
			transition: all 0.3s ease;
		}
		.content .links ul {
			position: static;
			opacity: 1;
			visibility: visible;
			background: none;
			max-height: 0px;
			overflow: hidden;
		}
	}
	@media screen and (max-width: 658px) {
		#focus {
			right: 130px;
		}
		#search {
			right: 50px;
		}
		#wifi {
			right: 90px;
		}
	}
	@media screen and (max-width: 460px) {
		nav .content .links {
			padding-bottom: 0px;
		}
	}
	@media screen and (max-width: 320px) {
		#focus {
			display: none !important;
		}
	}
</style>
