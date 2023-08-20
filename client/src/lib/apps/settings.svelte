<!--  svelte-ignore a11y-invalid-attribute-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { Apps } from './../utils/app/apps';
	import Theme from './../components/Menubar/ActionButton/Theme.svelte';
	import Color from './../components/Menubar/ActionButton/Color.svelte';
	let fullscreen = false;
	function trigger(e: any) {
		const id = e.target.dataset?.settingslink;
		show(id);
	}
	function show(id: number | string) {
		const links: NodeListOf<HTMLElement> = document.querySelectorAll('.settings-links');
		const divs: NodeListOf<HTMLElement> = document.querySelectorAll('.settings-div');
		divs.forEach((div) => {
			div.style.display = 'none';
		});
		links.forEach((link) => {
			link.classList.remove('active-settings');
		});
		const active: HTMLElement = document.querySelector(`[data-settings="${id}"]`);
		const activeLink: HTMLElement = document.querySelector(`[data-settingslink="${id}"]`);
		activeLink.classList.add('active-settings');
		active.style.display = 'flex';
	}
	function toggleFullScreen() {
		if (fullscreen) {
			document.exitFullscreen();
		} else {
			try {
				document.body.requestFullscreen();
			} catch (err) {
				console.log(err);
			}
		}
		fullscreen = !fullscreen;
	}
	onMount(() => {
		show(0);
	});
</script>

<div id="backstore" style="display: none">
	<section id="app-settings">
		<div class="app-settings">
			<div class="settings-nav">
				<div data-settingslink="0" class="settings-links active-settings" on:click={trigger}>
					<span><i class="fas fa-desktop" /></span>System Settings
				</div>
				<div
					class="settings-links"
					on:click={() => {
						$Apps['Bookings'].openAfter();
					}}
				>
					<span><i class="fas fa-ticket-alt" /></span>Booking Settings
				</div>
				<div
					class="settings-links"
					on:click={() => {
						$Apps['Profile'].openAfter();
					}}
				>
					<span><i class="fas fa-user" /></span>Profile Settings
				</div>
			</div>
			<div class="settings">
				<div data-settings="0" class="settings-div">
					<Theme />
					<Color />
					<div class="full-screen" on:click={toggleFullScreen}>
						<div class="mode-full-screen" class:fullscreen>
							<i class="fas fa-laptop" />
						</div>
						<div>Toggle Full Screen</div>
					</div>
				</div>
				<div data-settings="1" class="settings-div" />
				<div data-settings="2" class="settings-div" />
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-settings {
		width: 100%;
		height: 100%;
	}

	.app-settings {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 10px;
		color: var(--system-text-color);
		.settings-nav {
			display: flex;
			flex-direction: column;
			position: sticky;
			left: 10px;
			top: 0;
			min-width: 30%;
			height: 100%;
			gap: 10px;
			padding-top: 30px;
			.settings-links {
				border-radius: 8px;
				padding-left: 10px;
				display: flex;
				flex-direction: row;
				gap: 10px;
				justify-content: flex-start;
				align-items: center;
				span {
					font-size: 0.8rem;
				}
				&:hover {
					background: var(--system-transparent-color-primary-op);
				}
			}
		}
		.settings {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: center;
			gap: 10px;
			.settings-div {
				display: none;
				gap: 15px;
				flex-direction: column;
				align-items: center;
			}
			[data-settings='0'] {
				width: 350px;
				font-weight: 500;
				color: var(--system-text-color);
				font-size: 13px;
				background: var(--system-transparent-color-primary);
				border-radius: 13px;
				backdrop-filter: blur(20px);
				box-shadow: var(--shadow-effect);
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 10px;
				padding: 10px 15px;
				.full-screen {
					width: 100%;
					min-height: 60px;
					padding: 10px 5px;
					background: var(--system-transparent-color-secondary);
					border-radius: 13px;
					backdrop-filter: blur(20px);
					padding: 15px 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 10px;
					.mode-full-screen {
						background: var(--system-transparent-color-primary-op);
						padding: 5px;
						height: 30px;
						width: 30px;
						border-radius: 50%;
						display: grid;
						place-items: center;
					}
					.fullscreen {
						background: var(--system-color);
					}
				}
			}
		}
		.active-settings {
			background: var(--system-transparent-color-primary-op);
		}
	}
</style>
