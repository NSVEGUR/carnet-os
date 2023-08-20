<script lang="ts">
	import { onMount } from 'svelte';
	let playing: boolean = false;
	let perfect: HTMLAudioElement;
	onMount(() => {
		perfect = new Audio('/music/perfect.mp3');
	});
	function controlSong() {
		const perfectDiv: HTMLElement = document.querySelector('.perfect');
		const play: HTMLElement = document.querySelector('.perfect-play');
		const pause: HTMLElement = document.querySelector('.perfect-pause');
		if (playing) {
			pause.style.display = 'none';
			play.style.display = 'flex';
			perfectDiv.style.background = 'var(--system-transparent-color-primary-op)';
			perfect.pause();
		} else {
			play.style.display = 'none';
			pause.style.display = 'flex';
			perfectDiv.style.background = 'var(--system-color)';
			perfect.play();
		}
		playing = !playing;
	}
	function controlVolume(e) {
		perfect.volume = e.target.value / 100;
	}
</script>

<div id="action-sound">
	<div class="sound-glyph">
		<i class="fas fa-volume-up" />
	</div>
	<div>
		<input type="range" id="sound" class="slider" on:input={controlVolume} />
	</div>
</div>
<div id="wallpaper">
	<div class="wallpaper" />
	<div>
		<h3>Perfect</h3>
		<h4>Divide &div; Ed Sheeran</h4>
	</div>
	<div class="perfect" on:click={controlSong}>
		<div class="perfect-play">
			<i class="fas fa-play" />
		</div>
		<div class="perfect-pause">
			<i class="fas fa-pause" />
		</div>
	</div>
</div>

<style lang="scss">
	#action-sound {
		width: 100%;
		padding: 10px 5px;
		background: var(--system-transparent-color-secondary);
		border-radius: 13px;
		backdrop-filter: blur(20px);
		min-height: 70px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		justify-content: flex-start;
		padding-left: 30px;
		div:last-child {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		@media screen and (-webkit-min-device-pixel-ratio: 0) {
			input[type='range'] {
				overflow: hidden;
				width: 250px;
				height: 20px;
				border-radius: 10px;
				-webkit-appearance: none;
				outline: none;
			}

			input[type='range']::-webkit-slider-runnable-track {
				height: 20px;
				-webkit-appearance: none;
				background: var(--thumb-secondary-color);
				outline: none;
			}

			input[type='range']::-webkit-slider-thumb {
				width: 20px;
				-webkit-appearance: none;
				height: 20px;
				border-radius: 50%;
				background: var(--system-text-color);
				box-shadow: -120px 20px 10px 115px var(--thumb-primary-color);
			}
		}
	}
	#wallpaper {
		width: 100%;
		min-height: 60px;
		padding: 10px 5px;
		background: var(--system-transparent-color-secondary);
		border-radius: 13px;
		backdrop-filter: blur(20px);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		justify-content: flex-start;
		padding-left: 30px;
		padding: 15px;
		padding-left: 20px;
		h3 {
			font-size: 1.1rem;
		}
		h4 {
			margin-top: -0.5rem;
			font-weight: 400;
		}
		.wallpaper {
			width: 70px;
			height: 70px;
			background: url('/music/perfect.jpeg') no-repeat center center;
			transition: background 0.3s ease;
			background-size: cover;
			border-radius: 10px;
		}
		.perfect {
			position: fixed;
			right: 20px;
			background: var(--system-transparent-color-primary-op);
			padding: 5px;
			height: 30px;
			width: 30px;
			border-radius: 50%;
		}
		.perfect .perfect-play,
		.perfect .perfect-pause {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.perfect .perfect-pause {
			display: none;
		}
	}
</style>
