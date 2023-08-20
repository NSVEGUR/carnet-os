<script lang="ts">
	import switchTheme from '../../../utils/menubar/theme';

	let focus: boolean = false;
	function switchFocus() {
		const glyph: HTMLElement = document.getElementById('focus');
		if (!focus) {
			glyph.style.display = 'block';
		} else {
			glyph.style.display = 'none';
		}
		focus = !focus;
	}
</script>

<div id="theme">
	<div class="mode" on:click={switchTheme}>
		<div class="mode-glyph">
			<i class="fas fa-adjust" />
		</div>
		<div>Dark mode</div>
	</div>
	<div class="focus" on:click={switchFocus}>
		<div class:focusing={focus} class="focus-glyph">
			<i class="fas fa-moon" />
		</div>
		<div>Focus</div>
	</div>
</div>

<style lang="scss">
	#theme {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.mode,
		.focus {
			width: 153px;
			min-height: 60px;
			padding: 10px 5px;
			background: var(--system-transparent-color-secondary);
			border-radius: 13px;
			backdrop-filter: blur(20px);
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 10px;
			justify-content: center;
		}
		.mode-glyph,
		.focus-glyph {
			background: var(--system-transparent-color-primary-op);
			padding: 5px;
			height: 30px;
			width: 30px;
			border-radius: 50%;
			display: grid;
			place-items: center;
		}
		.mode-glyph {
			background: var(--theme-glyph-bg);
		}
		.focusing {
			background: var(--system-color);
		}
	}
</style>
