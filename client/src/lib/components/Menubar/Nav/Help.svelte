<!-- svelte-ignore a11y-invalid-attribute -->
<script lang="ts">
	import { Apps } from './../../../utils/app/apps';
</script>

<li class="menu-icons menu-icon-2">
	<a href="" class="dont-ref">Help</a>
	<div class="drop">
		<div><a href="" class="not-active">Give Feedback</a></div>
		<div class="drop-div" />
		<div
			class="drop-link"
			on:click={() => {
				$Apps['Help'].open();
			}}
		>
			<a href="" class="dont-ref">carnetOS Help</a>
		</div>
		<div class="drop-div" />
		<div
			class="drop-link"
			on:click={() => {
				$Apps['Help'].open();
			}}
		>
			<a href="" class="dont-ref">See What's New in carnedOS</a>
		</div>
		<div
			class="drop-link"
			on:click={() => {
				$Apps['Help'].open();
			}}
		>
			<a href="" class="dont-ref">New to Carnet?Learn the Basics</a>
		</div>
	</div>
</li>

<style lang="scss">
	li {
		list-style: none;
		position: relative;
		border-radius: 5px;
		margin: 1px 0;
		transition: all 0.3s ease;
		a {
			color: var(--system-text-color);
			font-size: 13px;
			font-weight: 500;
			padding: 0px 8px;
		}
		.drop-link:hover a {
			color: var(--system-text-color-op);
		}
		.not-active {
			color: var(--system-transparent-color-secondary-op);
		}
	}
</style>
