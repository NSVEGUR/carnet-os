<script lang="ts">
	import { controlSystemColor } from '../../../utils/menubar/color';
</script>

<div id="color" on:click={controlSystemColor}>
	<h3>System Color</h3>
	<div class="colors">
		<div class="orange-div color-div">
			<div class="orange color">
				<div>
					<i class="fas fa-check" />
				</div>
			</div>
		</div>
		<div class="green-div color-div">
			<div class="green color">
				<div>
					<i class="fas fa-check" />
				</div>
			</div>
		</div>
		<div class="light-blue-div color-div">
			<div class="light-blue color">
				<div>
					<i class="fas fa-check" />
				</div>
			</div>
		</div>
		<div class="blue-div color-div">
			<div class="blue color">
				<div>
					<i class="fas fa-check" />
				</div>
			</div>
		</div>
		<div class="violet-div color-div">
			<div class="violet color">
				<div>
					<i class="fas fa-check" />
				</div>
			</div>
		</div>
		<div class="purple-div color-div">
			<div class="purple color">
				<div>
					<i class="fas fa-check" />
				</div>
			</div>
		</div>
		<div class="red-div color-div">
			<div class="red color">
				<div>
					<i class="fas fa-check" />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#color {
		width: 100%;
		min-height: 60px;
		padding: 10px 5px;
		background: var(--system-transparent-color-secondary);
		border-radius: 13px;
		backdrop-filter: blur(20px);
		padding: 15px 20px;
		.colors {
			padding-top: 15px;
			display: flex;
			width: 100%;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.color-div {
				height: 32px;
				width: 32px;
				border-radius: 50%;
				display: grid;
				place-items: center;
				&:hover {
					transition: 0.2s all linear;
					background: #3273ec7c;
				}
			}
			.color {
				height: 25px;
				width: 25px;
				border-radius: 50%;
				background: #3273ecf3;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				div {
					padding-top: 3px;
					display: none;
					color: var(--system-text-color-op);
				}
			}
			.blue {
				background: #3273ecf3;
			}
			.blue div {
				display: block;
			}
			.orange {
				background: #ff9d06;
			}
			.orange-div:hover {
				background: #ff9b067c;
			}
			.green {
				background: #2cd156;
			}
			.green-div:hover {
				background: #2cd1557c;
			}
			.light-blue {
				background: #67d2ff;
			}
			.light-blue-div:hover {
				background: #67d1ff8e;
			}
			.violet {
				background: #5e5de7;
			}
			.violet-div:hover {
				background: #5d5de783;
			}
			.purple {
				background: #be5af2;
			}
			.purple-div:hover {
				background: #bd5af262;
			}
			.red {
				background: #ff3961;
			}
			.red-div:hover {
				background: #ff396162;
			}
		}
	}
</style>
