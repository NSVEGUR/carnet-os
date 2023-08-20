<script lang="ts">
	import type { AppID } from 'src/types';
	import { ActiveIcon } from './../../store/store';
	import { Apps } from './../../utils/app/apps';
	export let appID: AppID;
	function openApp(e: any) {
		const appID = e.target.closest('button').dataset.appid;
		$Apps[appID].open();
		$ActiveIcon = appID;
	}
</script>

{#if appID != 'source'}
	<button
		{...$$props}
		on:click={openApp}
		data-appid={appID.toString().toUpperCase()[0] + appID.toString().substring(1)}
	>
		<slot />
		<span
			class:active={appID.toString().toUpperCase()[0] + appID.toString().substring(1) ==
				$ActiveIcon}
		/>
		<span class="title">{appID.toString().toUpperCase()[0] + appID.toString().substring(1)}</span>
	</button>
{:else}
	<a href="https://github.com/NSVEGUR/carnetOS-web" target="_blank">
		<button {...$$props}>
			<slot />
			<span class="title">{appID.toString().toUpperCase()[0] + appID.toString().substring(1)}</span>
		</button>
	</a>
{/if}

<style lang="scss">
	button {
		color: inherit;
		text-decoration: none;
		vertical-align: middle;

		border: 0;
		border-radius: 0;

		outline: 0;

		margin: 0;
		padding: 0;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		position: relative;

		user-select: none;

		appearance: none;

		background-color: transparent;

		-webkit-tap-highlight-color: transparent;

		&:not(:disabled) {
			cursor: pointer;
		}
		.title {
			top: 25px;
			position: absolute;
			display: none;
			font-size: 0.8rem;
			width: 120px;
			background-color: var(--system-transparent-color-primary);
			color: var(--system-text-color);
			text-align: center;
			border-radius: 6px;
			padding: 5px 0;
			position: absolute;
			z-index: 1;
			top: -20%;
			left: 50%;
			margin-left: -60px;
			&::after {
				content: '';
				position: absolute;
				top: 100%;
				left: 50%;
				margin-left: -5px;
				border-width: 5px;
				border-style: solid;
				border-color: var(--system-transparent-color-primary) transparent transparent transparent;
			}
		}
		&:hover .title {
			display: block;
		}
		.active {
			position: absolute;
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background: var(--system-text-color);
			bottom: -1px;
		}
	}
</style>
