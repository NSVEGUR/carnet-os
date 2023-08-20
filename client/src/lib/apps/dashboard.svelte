<script lang="ts">
	import { Apps } from './../utils/app/apps';
</script>

<div id="backstore" style="display: none">
	<section id="app-dashboard">
		<div class="left">
			<div
				class="profile"
				on:click={() => {
					$Apps['Profile'].openAfter();
				}}
			>
				<span>Profile</span>
			</div>
		</div>
		<div class="right">
			<div
				class="bookings"
				on:click={() => {
					$Apps['Bookings'].openAfter();
				}}
			>
				<span>Bookings</span>
			</div>
			<div class="center">
				<div
					class="settings"
					on:click={() => {
						$Apps['Settings'].openAfter();
					}}
				>
					<span>Settings</span>
				</div>
				<div
					class="help"
					on:click={() => {
						$Apps['Help'].openAfter();
					}}
				>
					<span>Help</span>
				</div>
			</div>
			<div
				class="trains"
				on:click={() => {
					$Apps['Trains'].openAfter();
				}}
			>
				<span>Trains</span>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-dashboard {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		padding: 10px;
		gap: 10px;
		span {
			font-size: 1.6rem;
			font-weight: bolder;
		}
		.profile,
		.help,
		.settings,
		.bookings,
		.trains {
			display: grid;
			place-items: center;
		}
		.left {
			width: 40%;
			.profile {
				width: 100%;
				height: 100%;
				border-radius: 10px;
				background: #000046; /* fallback for old browsers */
				background: -webkit-linear-gradient(
					to right,
					#1cb5e0,
					#000046
				); /* Chrome 10-25, Safari 5.1-6 */
				background: linear-gradient(to right, #1cb5e0, #000046);
			}
		}
		.right {
			width: 60%;
			display: flex;
			flex-direction: column;
			gap: 10px;
			.bookings,
			.trains {
				width: 100%;
				height: 33%;
				border-radius: 10px;
				background: #2196f3; /* fallback for old browsers */
				background: -webkit-linear-gradient(
					to right,
					#f44336,
					#2196f3
				); /* Chrome 10-25, Safari 5.1-6 */
				background: linear-gradient(
					to right,
					#f44336,
					#2196f3
				); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			}
			.center {
				display: flex;
				flex-direction: row;
				gap: 10px;
				width: 100%;
				height: 33%;
				.settings,
				.help {
					width: 50%;
					height: 100%;
					border-radius: 10px;
					background: #0f0c29; /* fallback for old browsers */
					background: -webkit-linear-gradient(
						to right,
						#24243e,
						#302b63,
						#0f0c29
					); /* Chrome 10-25, Safari 5.1-6 */
					background: linear-gradient(
						to right,
						#24243e,
						#302b63,
						#0f0c29
					); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
				}
				.help {
					background: #ff00cc; /* fallback for old browsers */
					background: -webkit-linear-gradient(
						to right,
						#333399,
						#ff00cc
					); /* Chrome 10-25, Safari 5.1-6 */
					background: linear-gradient(
						to right,
						#333399,
						#ff00cc
					); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
				}
			}

			.trains {
				background: #780206; /* fallback for old browsers */
				background: -webkit-linear-gradient(
					to right,
					#061161,
					#780206
				); /* Chrome 10-25, Safari 5.1-6 */
				background: linear-gradient(
					to right,
					#061161,
					#780206
				); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
				/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			}
		}
	}
</style>
