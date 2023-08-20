<script lang="ts">
	import type { AppID } from 'src/types';
	import DockItem from './DockItem.svelte';

	const apps: AppID[] = [
		'profile',
		'dashboard',
		'bookings',
		'trains',
		'settings',
		'help',
		'developers',
		'source'
	];

	let mouseX: number | null = null;
</script>

<section class="dock-container" id="dock">
	<div
		class="dock-el"
		on:mousemove={(event) => (mouseX = event.x)}
		on:mouseleave={() => (mouseX = null)}
	>
		{#each apps as appID}
			<DockItem {mouseX} {appID} />
		{/each}
	</div>
</section>

<style lang="scss">
	.dock-container {
		margin-bottom: 0.3rem;
		left: 0;
		bottom: 0;
		position: fixed;

		width: 100%;
		height: 6rem;

		padding: 0.5rem;

		display: flex;
		justify-content: center;
	}

	.dock-el {
		backdrop-filter: blur(5px);
		box-shadow: var(--shadow-effect);
		background: var(--system-transparent-color-primary);

		padding: 0.3rem;

		border-radius: 1.2rem;

		height: 100%;

		display: flex;
		align-items: flex-end;
	}

	@media screen and (max-width: 700px) {
		.dock-el {
			max-width: 95%;
			overflow-x: scroll;
		}
	}
</style>
