<script lang="ts" context="module">
	import Duplicates from './../components/Duplicates/Duplicates.svelte';
	import Dock from './../components/Dock/Dock.svelte';
	import Menubar from './../components/Menubar/Menubar.svelte';
	import Context from './../components/Context/Context.svelte';
	import Apps from './../apps/apps.svelte';
</script>

<section id="desktop">
	<Duplicates />
	<Menubar />
	<Dock />
	<Context />
	<Apps />
</section>

<style lang="scss">
	#desktop {
		height: 100vh;
		width: 100vw;
		display: none;
		background: var(--desktop-wallpaper) center center no-repeat;
		background-size: cover;
		transition: background 0.3s ease;
		overflow: hidden;
	}
</style>
