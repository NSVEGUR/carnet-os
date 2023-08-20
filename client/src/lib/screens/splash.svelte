<section id="splash">
	<div class="splash-logo">
		<i class="fab fa-apple" />
	</div>
	<div class="loading-container">
		<div class="loading-bar">
			<div class="loading-indicator" />
		</div>
	</div>
	<audio id="audio" autoplay={true} src="music/startup-sound.mp3" />
</section>

<style lang="scss">
	#splash {
		width: 100vw;
		height: 100vh;
		cursor: none;
		background: black;
		color: white;
		font-size: 7rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.loading-container {
			width: 100%;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.loading-container .loading-bar {
			width: 12%;
			height: 4px;
			border-radius: 20px;
			background: grey;
		}

		.loading-container .loading-bar .loading-indicator {
			height: 4px;
			width: 100%;
			border-radius: 20px;
			background: white;
			animation: loading 2.5s forwards cubic-bezier(0.76, -0.13, 0.67, 0.82);
		}
		#audio {
			position: absolute;
			z-index: -9999;
			display: none;
		}
		@media screen and (max-width: 460px) {
			font-size: 2.5rem;
		}
	}
</style>
