<div class="spinner" />

<style lang="scss">
	.spinner {
		position: relative;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		&::before,
		&::after {
			content: '';
			position: absolute;
			border-radius: inherit;
		}
		&::before {
			width: 100%;
			height: 100%;
			background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
			animation: spin 0.5s infinite linear;
		}
		&::after {
			width: 75%;
			height: 75%;
			background: var(--system-primary-color);
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
