<!-- svelte-ignore a11y-invalid-attribute -->
<script lang="ts">
	import { hideMenu, rightClick } from './../../utils/context';
	import switchTheme from './../../utils/menubar/theme';
	import { Apps } from './../../utils/app/apps';
	let fullScreen: boolean = true;

	function toggleFullScreen() {
		if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
			fullScreen = false;
		} else {
			fullScreen = true;
		}
	}
</script>

<div id="contextMenu" class="contextMenu">
	<div
		class="context-link"
		on:click={() => {
			$Apps['Bookings'].open();
		}}
	>
		<a href="">Book Tickets</a>
	</div>
	<div class="drop-div" />
	<div
		class="context-link"
		on:click={() => {
			$Apps['Help'].open();
		}}
	>
		<a href="">Get Info</a>
	</div>
	{#if fullScreen}
		<div
			class="context-link"
			on:click={(e) => {
				e.preventDefault();
				document.body.requestFullscreen();
			}}
		>
			<a href="">Enter Full Screen</a>
		</div>
	{:else}
		<div
			class="context-link"
			on:click={(e) => {
				e.preventDefault();
				document.exitFullscreen();
			}}
		>
			<a href="">Exit Full Screen</a>
		</div>
	{/if}
	<div
		class="context-link"
		on:click={(e) => {
			e.preventDefault();
			switchTheme();
		}}
	>
		<a href="">Change Theme</a>
	</div>
	<div class="drop-div" />
	<div class="stack context-link">
		<i class="fas fa-check left-glyph" /><a href="">Use Stacks</a>
	</div>
	<div class="stack context-link">
		<i class="fas fa-angle-right right-glyph" /><a href="">Group Stacks By</a>
	</div>
	<div class="context-link"><a href="">Show View Options</a></div>
</div>
<svelte:window on:resize={toggleFullScreen} on:click={hideMenu} on:contextmenu={rightClick} />

<style lang="scss">
	#contextMenu {
		position: absolute;
		color: var(--system-text-color);
		font-size: 13px;
		width: 200px;
		padding: 10px 5px;
		background: var(--system-transparent-color-primary);
		border-radius: 10px;
		backdrop-filter: blur(20px);
		box-shadow: var(--shadow-effect);
		display: none;
		.stack {
			position: relative;
		}

		.left-glyph {
			position: absolute;
			top: 6px;
			left: 3px;
		}
		.right-glyph {
			position: absolute;
			top: 6px;
			right: 3px;
		}
		.fa-angle-right {
			font-size: 1.1rem;
		}
		.context-link {
			padding: 0px 20px;
			border-radius: 5px;
			font-weight: 500;
			a {
				color: var(--system-text-color);
			}
			&:hover {
				background: var(--system-color);
			}
			&:hover .left-glyph,
			&:hover .right-glyph {
				color: var(--system-text-color-op);
			}
			&:hover a {
				color: var(--system-text-color-op);
			}
		}
	}
</style>
