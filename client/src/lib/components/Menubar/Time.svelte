<script lang="ts">
	import { onMount } from 'svelte';
	import { refreshTime } from '../../utils/menubar/time';
	onMount(() => {
		refreshTime();
		setInterval(refreshTime, 1000);
	});
</script>

<span id="time" />

<style lang="scss">
	#time {
		position: absolute;
		right: 20px;
		font-weight: 500;
		font-size: 13px;
		padding-top: 4px;
		color: var(--system-text-color);
	}

	@media screen and (max-width: 658px) {
		#time {
			display: none;
		}
	}
</style>
