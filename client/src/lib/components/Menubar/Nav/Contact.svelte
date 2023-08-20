<!-- svelte-ignore a11y-invalid-attribute -->
<script lang="ts">
	import { Apps } from './../../../utils/app/apps';
</script>

<li class="menu-icons menu-icon-2">
	<a href="" class="dont-ref">Contact</a>
	<div class="drop">
		<div
			class="drop-link"
			on:click={() => {
				$Apps['Developers'].open();
			}}
		>
			<a href="" class="dont-ref">About Developers</a>
		</div>
		<div class="drop-div" />
		<div class="drop-link">
			<a href="https://harsha662002.github.io/Personal_Portfolio/" target="_blank"
				>Harsha Vasireddy</a
			>
		</div>
		<div class="drop-link">
			<a href="https://ravindar832.github.io/Blog/" target="_blank">Ravindar Guguloth</a>
		</div>
		<div class="drop-link">
			<a href="https://praveen-prav.github.io/Praveen/" target="_blank">Praveen Mukthi</a>
		</div>
		<div class="drop-link">
			<a href="https://vineethchabala.github.io/VineethChabalaPortfolio/" target="_blank"
				>Vineeth Chabala</a
			>
		</div>
		<div class="drop-link"><a href="https://nsvegur.me" target="_blank">Nagasai Vegur</a></div>

		<div class="drop-div" />
		<div class="drop-link"><a href="" class="dont-ref">Hide Others</a></div>
		<div><a href="" class="not-active">Show All</a></div>
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
