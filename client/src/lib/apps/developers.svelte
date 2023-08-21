<!--  svelte-ignore a11y-invalid-attribute-->
<script lang="ts">
	import { onMount } from 'svelte';

	function triggerDev(e: any) {
		const devId = e.target.dataset?.dev;
		showDev(devId);
	}

	function showDev(devId: number | string) {
		const devAbouts: NodeListOf<HTMLElement> = document.querySelectorAll('.dev-text');
		const devs: NodeListOf<HTMLElement> = document.querySelectorAll('.dev');
		devAbouts.forEach((about) => {
			about.style.display = 'none';
		});
		devs.forEach((dev) => {
			dev.classList.remove('active-dev');
		});
		const activeDev: HTMLElement = document.querySelector(`[data-devabout="${devId}"]`);
		const activeDevLink: HTMLElement = document.querySelector(`[data-dev="${devId}"]`);

		activeDev.style.display = 'block';
		activeDevLink.classList.add('active-dev');
	}

	onMount(() => {
		showDev(0);
	});
</script>

<div id="backstore" style="display: none">
	<section id="app-developers">
		<div class="app-developers">
			<div class="dev-nav">
				<div data-dev="0" class="dev active-dev" on:click={triggerDev}>Ravindar</div>
				<div data-dev="1" class="dev" on:click={triggerDev}>Harsha</div>
				<div data-dev="2" class="dev" on:click={triggerDev}>Praveen</div>
				<div data-dev="3" class="dev" on:click={triggerDev}>Vineeth</div>
				<div data-dev="4" class="dev" on:click={triggerDev}>Nagasai</div>
			</div>
			<div class="dev-about">
				<div data-devabout="0" class="dev-text">
					<div class="profilepic">
						<img src="developers/ravinder.png" alt="harsha pic" />
					</div>
					<h2>Ravindar Guguloth</h2>
					<ul>
						<li>
							<a href="https://ravindar832.github.io/Blog/" target="_blank">
								<i class="fas fa-paint-brush" />
							</a>
							<span>Website</span>
						</li>
						<li>
							<a href="https://github.com/Ravindar832" target="_blank">
								<i class="fab fa-github" />
							</a>
							<span>Github</span>
						</li>
						<li>
							<a href="http://linkedin.com/in/gugulothu-ravindar-85683a232" target="_blank">
								<i class="fab fa-linkedin-in" />
							</a>
							<span>LinkedIn</span>
						</li>
					</ul>
				</div>
				<div data-devabout="1" class="dev-text">
					<div class="profilepic">
						<img src="developers/harsha.png" alt="harsha pic" class="profile-pic" />
					</div>
					<h2>Harsha Vasireddy</h2>
					<ul class="contact-links">
						<li>
							<a href="https://harsha662002.github.io/Personal_Portfolio/" target="_blank">
								<i class="fas fa-paint-brush" />
							</a>
							<span>Website</span>
						</li>
						<li>
							<a href="https://github.com/Harsha662002" target="_blank">
								<i class="fab fa-github" />
							</a>
							<span>Github</span>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/harsha-vasireddy-9a12671ba/" target="_blank">
								<i class="fab fa-linkedin-in" />
							</a>
							<span>LinkedIn</span>
						</li>
					</ul>
				</div>
				<div data-devabout="2" class="dev-text">
					<div class="profilepic">
						<img src="developers/praveen.png" alt="harsha pic" class="profile-pic" />
					</div>
					<h2>Praveen Mukthi</h2>
					<ul>
						<li>
							<a href="https://praveen-prav.github.io/Praveen/" target="_blank">
								<i class="fas fa-paint-brush" />
							</a>
							<span>Website</span>
						</li>
						<li>
							<a href="https://github.com/praveen-prav" target="_blank">
								<i class="fab fa-github" />
							</a>
							<span>Github</span>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/praveen-pravee-594521194" target="_blank">
								<i class="fab fa-linkedin-in" />
							</a>
							<span>LinkedIn</span>
						</li>
					</ul>
				</div>
				<div data-devabout="3" class="dev-text">
					<div class="profilepic">
						<img src="developers/vineeth.png" alt="harsha pic" class="profile-pic" />
					</div>
					<h2>Vineeth Babu Chabala</h2>
					<ul>
						<li>
							<a href="https://vineethchabala.github.io/VineethChabalaPortfolio/" target="_blank">
								<i class="fas fa-paint-brush" />
							</a>
							<span>Website</span>
						</li>
						<li>
							<a href="https://github.com/VineethChabala" target="_blank">
								<i class="fab fa-github" />
							</a>
							<span>Github</span>
						</li>
						<li>
							<a href="http://linkedin.com/in/gugulothu-ravindar-85683a232" target="_blank">
								<i class="fab fa-linkedin-in" />
							</a>
							<span>LinkedIn</span>
						</li>
					</ul>
				</div>
				<div data-devabout="4" class="dev-text">
					<div class="profilepic">
						<img src="developers/nagasai.png" alt="harsha pic" class="profile-pic" />
					</div>
					<h2>Nagasai Vegur</h2>
					<ul>
						<li>
							<a href="https://nsvegur.vercel.app" target="_blank">
								<i class="fas fa-paint-brush" />
							</a>
							<span>Website</span>
						</li>
						<li>
							<a href="https://github.com/NSVEGUR" target="_blank">
								<i class="fab fa-github" />
							</a>
							<span>Github</span>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/nagasai-v-93b84921b" target="_blank">
								<i class="fab fa-linkedin-in" />
							</a>
							<span>LinkedIn</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-developers {
		width: 100%;
		height: 100%;
	}
	.app-developers {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 10px;
		color: var(--system-text-color);
		.dev-nav {
			display: flex;
			flex-direction: column;
			position: sticky;
			left: 10px;
			top: 0;
			width: 20%;
			height: 100%;
			gap: 5px;
			padding-top: 30px;
			.dev {
				border-radius: 8px;
				padding-left: 10px;
				&:hover {
					background: var(--system-transparent-color-primary-op);
				}
			}
			.active-dev {
				background: var(--system-transparent-color-primary-op);
			}
		}
		.dev-about {
			width: 70%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img {
				height: 120px;
				width: 120px;
				object-fit: cover;
				border-radius: 50%;
			}
			.profilepic {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			h2 {
				text-align: center;
			}
			ul {
				display: flex;
				flex-direction: row;
				width: 100%;
				justify-content: center;
				align-items: center;
				gap: 10px;
				li {
					background: var(--system-transparent-color-primary-op);
					position: relative;
					border-radius: 50%;
					width: 30px;
					height: 30px;
					display: grid;
					place-items: center;
					&:hover a {
						transition: all 0.3s ease;
						transform: rotate(360deg);
					}
					a {
						color: var(--system-text-color);
					}
					span {
						top: 25px;
						position: absolute;
						display: none;
						font-size: 0.8rem;
						width: 120px;
						background-color: var(--system-text-color);
						color: var(--system-text-color-op);
						text-align: center;
						border-radius: 6px;
						padding: 5px 0;
						position: absolute;
						z-index: 1;
						top: 150%;
						left: 50%;
						margin-left: -60px;
						&::after {
							content: '';
							position: absolute;
							bottom: 100%;
							right: 50%;
							margin-right: -5px;
							border-width: 5px;
							border-style: solid;
							border-color: transparent transparent var(--system-text-color) transparent;
						}
					}
					&:hover span {
						display: block;
					}
				}
			}
		}
	}
</style>
