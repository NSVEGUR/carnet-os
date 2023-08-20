<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		const faqs: NodeListOf<HTMLElement> = document.querySelectorAll('.faq');
		faqs.forEach((faq) => {
			faq.addEventListener('click', (e: any) => {
				const answer: HTMLElement = faq.querySelector('.a');
				answer.classList.toggle('hidden');
			});
		});
	});
</script>

<div id="backstore" style="display: none">
	<section id="app-help">
		<div class="faq">
			<div class="q">
				<h1><span><i class="fas fa-chevron-down" /></span>What is CarnotOS?</h1>
			</div>
			<div class="a hidden">
				<p>
					CarnotOS is a railway ticket booking website made by five IIITDM Kancheepuram students as
					a part of DBMS Project.
				</p>
			</div>
		</div>
		<div class="faq">
			<div class="q">
				<h1><span><i class="fas fa-chevron-down" /></span>How to Book tickets?</h1>
			</div>
			<div class="a hidden">
				<p>
					To book tickets,click on the app "Bookings" and choose the from and to location and the
					date of journey and the class of journey and click on search trains and then choose the
					train you want to travel and click on Book and your train is booked.
				</p>
			</div>
		</div>
		<div class="faq">
			<div class="q">
				<h1><span><i class="fas fa-chevron-down" /></span>How to change Email and Password?</h1>
			</div>
			<div class="a hidden">
				<p>
					To change email or password, go to profile settings and then to Edit Email and reset pass
					and change your email or password.
				</p>
			</div>
		</div>
		<div class="faq">
			<div class="q">
				<h1><span><i class="fas fa-chevron-down" /></span>How to change Profile Picture?</h1>
			</div>
			<div class="a hidden">
				<p>Unfortunately, there is no option to change profile picture.</p>
			</div>
		</div>
		<div class="faq">
			<div class="q">
				<h1>
					<span><i class="fas fa-chevron-down" /></span>What are different System UI options
					available?
				</h1>
			</div>
			<div class="a hidden">
				<p>
					There is an option to change from dark mode to light mode and vice versa. An option to
					change the screen to full screen. All these options are available in the settings app.
				</p>
			</div>
		</div>
		<div class="faq">
			<div class="q">
				<h1>
					<span><i class="fas fa-chevron-down" /></span>Should we pay for booking tickets?
				</h1>
			</div>
			<div class="a hidden">
				<p>There is no need to pay for booking tickets as this is just a fantasy website.</p>
			</div>
		</div>
		<div class="faq">
			<div class="q">
				<h1>
					<span><i class="fas fa-chevron-down" /></span>Who are the developers of the website?
				</h1>
			</div>
			<div class="a hidden">
				<p>
					The developers of the website are five students of IIITDM Kancheepuram and to know more
					about them, you can checkout the developer section.
				</p>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-help {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 10px 5px 0 10px;
		color: var(--system-text-color);
		.faq {
			padding: 10px 0;
			border-bottom: 1px solid var(--system-transparent-color-primary-op);
			width: 100%;
			transition: all 0.3s linear;
			.q {
				h1 {
					font-size: 1.2rem;
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 10px;
					span {
						font-size: 0.8rem;
					}
				}
			}
			.a {
				padding: 10px 5px 0 15px;
				p {
					color: var(--system-transparent-color-secondary-op);
				}
			}
			.hidden {
				display: none;
			}
		}
	}
</style>
