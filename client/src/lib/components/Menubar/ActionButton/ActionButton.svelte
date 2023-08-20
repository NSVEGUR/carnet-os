<script lang="ts">
	import Theme from './Theme.svelte';
	import Color from './Color.svelte';
	import Music from './Music.svelte';

	function dropActionMenu() {
		const actionDrop: HTMLElement = document.querySelector('.action-drop');
		actionDrop.style.display = 'flex';
	}
</script>

<div id="action-button" on:click={dropActionMenu}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351 348">
		<path
			stroke="black"
			d="M87.75 46.2c9.31 0 18.237 3.245 24.819 9.021 6.583 5.776 10.281 13.61 10.281 21.779s-3.698 16.003-10.281 21.779c-6.582 5.776-15.51 9.021-24.819 9.021-9.31 0-18.237-3.245-24.82-9.021C56.349 93.003 52.65 85.169 52.65 77s3.698-16.003 10.28-21.779c6.583-5.776 15.51-9.021 24.82-9.021zM263.25 0c23.273 0 45.592 8.112 62.049 22.553C341.755 36.993 351 56.578 351 77c0 20.422-9.245 40.007-25.701 54.447C308.842 145.888 286.523 154 263.25 154H87.75c-23.273 0-45.592-8.112-62.049-22.553C9.245 117.007 0 97.422 0 77c0-20.422 9.245-40.007 25.701-54.447C42.158 8.113 64.477 0 87.75 0h175.5zM87.75 30.8c-13.964 0-27.355 4.867-37.23 13.532C40.648 52.996 35.1 64.747 35.1 77s5.547 24.004 15.42 32.668c9.875 8.665 23.266 13.532 37.23 13.532h175.5c13.964 0 27.355-4.867 37.229-13.532C310.353 101.004 315.9 89.253 315.9 77s-5.547-24.004-15.421-32.668C290.605 35.667 277.214 30.8 263.25 30.8H87.75zM263.25 194H87.75c-23.273 0-45.592 8.112-62.049 22.553C9.245 230.993 0 250.578 0 271c0 20.422 9.245 40.007 25.701 54.447C42.158 339.888 64.477 348 87.75 348h175.5c23.273 0 45.592-8.112 62.049-22.553C341.755 311.007 351 291.422 351 271c0-20.422-9.245-40.007-25.701-54.447C308.842 202.112 286.523 194 263.25 194v0zm0 123.2c-13.964 0-27.355-4.867-37.229-13.532-9.874-8.664-15.421-20.415-15.421-32.668s5.547-24.004 15.421-32.668c9.874-8.665 23.265-13.532 37.229-13.532 13.964 0 27.355 4.867 37.229 13.532 9.874 8.664 15.421 20.415 15.421 32.668s-5.547 24.004-15.421 32.668c-9.874 8.665-23.265 13.532-37.229 13.532z"
		/>
	</svg>
	<div class="action-drop">
		<Theme />
		<Color />
		<Music />
	</div>
</div>

<style lang="scss">
	#action-button {
		position: relative;
		top: 0;
		right: 180px;
		padding-top: 4px;
		height: 20px;
		width: 20px;
		svg {
			height: 17px;
			fill: var(--system-text-color);
		}
		.action-drop {
			position: absolute;
			top: 41px;
			right: -150px;
			width: 350px;
			font-weight: 500;
			color: var(--system-text-color);
			font-size: 13px;
			background: var(--system-transparent-color-primary);
			border-radius: 13px;
			backdrop-filter: blur(20px);
			box-shadow: var(--shadow-effect);
			display: none;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 10px;
			padding: 10px 15px;
		}
	}

	@media screen and (max-width: 1250px) {
		#action-button {
			right: 170px;
		}
	}
	@media screen and (max-width: 658px) {
		#action-button {
			right: -6px;
		}
		.action-drop {
			right: auto;
			left: -330px;
		}
	}
	@media screen and (max-width: 340px) {
		.action-drop {
			width: 330px;
			left: -280px;
		}
	}
	@media screen and (max-width: 320px) {
		#action-button {
			display: none;
		}
		.action-drop {
			display: none;
		}
	}
</style>
