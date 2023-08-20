<script lang="ts">
	import { onMount } from 'svelte';
	import { Apps } from './../utils/app/apps';
	import { UserDetails } from './../store/store';
	import { searchTrains, bookTickets, myTickets } from './../utils/database/database';
	import Loader from './../components/Loader.svelte';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	let from: string;
	let to: string;
	let date = Date.now();
	let coach: string;
	let trainsAvailable: any = [];
	let bookedResponse: any;
	let tickets: any = [];

	let loading = false;
	let booked = false;
	let searched = false;

	let ticketsLoading = false;

	function trigger(e: any) {
		const id = e.target.dataset?.bookingslink;
		show(id);
	}
	function show(id: number | string) {
		const links: NodeListOf<HTMLElement> = document.querySelectorAll('.bookings-links');
		const divs: NodeListOf<HTMLElement> = document.querySelectorAll('.bookings-div');
		divs.forEach((div) => {
			div.style.display = 'none';
		});
		links.forEach((link) => {
			link.classList.remove('active-bookings');
		});
		const active: HTMLElement = document.querySelector(`[data-bookings="${id}"]`);
		const activeLink: HTMLElement = document.querySelector(`[data-bookingslink="${id}"]`);
		activeLink.classList.add('active-bookings');
		active.style.display = 'block';
	}
	onMount(() => {
		show(0);
		getMyTickets();
	});

	async function findTrains() {
		loading = true;
		const response = await searchTrains(from, to);
		trainsAvailable = response.results;
		searched = true;
		loading = false;
	}

	async function getMyTickets() {
		ticketsLoading = true;
		const response = await myTickets($UserDetails.userid);
		tickets = response.results;
		ticketsLoading = false;
	}
</script>

<div id="backstore" style="display: none">
	<section id="app-bookings">
		<div class="app-bookings">
			<div class="bookings-nav">
				<div data-bookingslink="0" class="bookings-links active-bookings" on:click={trigger}>
					<span><i class="fas fa-ticket-alt" /></span>Book Ticket
				</div>
				<div
					data-bookingslink="1"
					class="bookings-links"
					on:click={(e) => {
						trigger(e);
						getMyTickets();
					}}
				>
					<span><i class="fas fa-check-circle" /></span>My Tickets
				</div>
				<div
					class="bookings-links"
					on:click={() => {
						$Apps['Trains'].openAfter();
					}}
				>
					<span><i class="fas fa-subway" /></span>Train Details
				</div>
			</div>
			<div class="bookings">
				<div data-bookings="0" class="bookings-div">
					<section class="selection">
						{#if !loading}
							{#if trainsAvailable.length == 0 && !booked}
								<div class="places">
									<div class="input">
										<span class="prefix">
											<i class="fab fa-telegram-plane" />
										</span>
										<select id="from" name="from" form="to" bind:value={from}>
											<option value="ashoka">Ashoka</option>
											<option value="ashwatha">Ashwatha</option>
											<option value="jasmine">Jasmine</option>
											<option value="gulmohar">Gulmohar</option>
											<option value="academics">Academics</option>
											<option value="arjuna">Arjuna</option>
											<option value="cafe">Cafe</option>
											<option value="gate">Gate</option>
											<option value="akshaya">Akshaya</option>
										</select>
									</div>
									<div>
										<i class="fas fa-map-signs" />
									</div>
									<div class="input">
										<span class="prefix">
											<i class="fas fa-map-marker-alt" />
										</span>
										<select id="to" name="to" form="from" bind:value={to}>
											<option value="ashoka">Ashoka</option>
											<option value="ashwatha">Ashwatha</option>
											<option value="jasmine">Jasmine</option>
											<option value="gulmohar">Gulmohar</option>
											<option value="academics">Academics</option>
											<option value="arjuna">Arjuna</option>
											<option value="cafe">Cafe</option>
											<option value="gate">Gate</option>
											<option value="akshaya">Akshaya</option>
										</select>
									</div>
								</div>
								<div class="dates">
									<div class="input">
										<span class="prefix">
											<i class="fas fa-calendar" />
										</span>
										<input type="date" placeholder="Date of Journey" bind:value={date} />
									</div>
									<div>
										<i class="fas fa-map-signs" />
									</div>
									<div class="input">
										<span class="prefix">
											<i class="fas fa-user-circle" />
										</span>
										<select id="class" name="class" bind:value={coach}>
											<option value="general">General</option>
											<option value="ac">AC</option>
											<option value="woman">Woman</option>
										</select>
									</div>
								</div>
								<div class="search" on:click={findTrains}>Search Trains</div>
							{/if}
							{#if searched && !booked}
								<div class="my-trains">
									{#if trainsAvailable.length > 0}
										{#each trainsAvailable as trains}
											<div class="my-train">
												<h1>{trains.trainname}</h1>
												<p>{trains.from_place} to {trains.to_place}</p>
												<p>Time: {trains.departure}</p>
												<div
													class="book"
													on:click={async () => {
														loading = true;
														bookedResponse = await bookTickets(
															from,
															to,
															date.toString(),
															coach,
															trains.trainid,
															$UserDetails.userid,
															trains.departure,
															trains.arrival
														);
														loading = false;
														searched = false;
														trainsAvailable = [];
														booked = true;
														setTimeout(() => {
															booked = false;
														}, 3000);
													}}
												>
													Book
												</div>
											</div>
										{/each}
									{:else}
										<div>No Trains Available.</div>
									{/if}
								</div>
							{:else if booked}
								{#if bookedResponse.status == 'success'}
									<LottiePlayer
										src="https://assets5.lottiefiles.com/packages/lf20_yom6uvgj.json"
										autoplay={true}
										renderer="svg"
										background="transparent"
										height={300}
										width={300}
									/>
								{:else if bookedResponse.status == 'failure'}
									<LottiePlayer
										src="https://assets2.lottiefiles.com/packages/lf20_g0rackmk.json"
										autoplay={true}
										renderer="svg"
										background="transparent"
										height={300}
										width={300}
									/>
								{/if}
							{/if}
						{:else}
							<Loader />
						{/if}
					</section>
				</div>
				<div data-bookings="1" class="bookings-div">
					<div class="my-tickets">
						{#if ticketsLoading}
							<Loader />
						{:else}
							{#each tickets as ticket}
								<div class="my-ticket">
									<h1>{ticket.from_place} to {ticket.to_place}</h1>
									<p>Date of Journey: {ticket.date_of_journey}</p>
									<p>Train ID: {ticket.trainid}, Coach: {ticket.coach}</p>
								</div>
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-bookings {
		width: 100%;
	}
	.app-bookings {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 10px;
		color: var(--system-text-color);
		.bookings-nav {
			display: flex;
			flex-direction: column;
			position: sticky;
			left: 10px;
			top: 0;
			min-width: 20%;
			gap: 10px;
			padding-top: 30px;
			.bookings-links {
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
		.bookings {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: center;
			gap: 10px;
			.bookings-div {
				display: none;
				width: 100%;

				section,
				.my-tickets,
				.my-trains {
					display: flex;
					gap: 15px;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				.selection {
					margin-top: 100px;
				}
				.my-tickets,
				.my-trains {
					padding: 10px;
					width: 100%;
				}
				.my-ticket,
				.my-train {
					width: 100%;
					min-height: 100px;
					padding: 10px;
					border-radius: 10px;
					color: white;
					h1 {
						font-weight: 700;
					}
					&:nth-child(n) {
						background: #ff00cc; /* fallback for old browsers */
						background: -webkit-linear-gradient(
							to right,
							#333399,
							#ff00cc
						); /* Chrome 10-25, Safari 5.1-6 */
						background: linear-gradient(to right, #333399, #ff00cc);
					}
					&:nth-child(2n) {
						background: #000046; /* fallback for old browsers */
						background: -webkit-linear-gradient(
							to right,
							#1cb5e0,
							#000046
						); /* Chrome 10-25, Safari 5.1-6 */
						background: linear-gradient(to right, #1cb5e0, #000046);
					}
					&:nth-child(3n) {
						background: #0f0c29; /* fallback for old browsers */
						background: -webkit-linear-gradient(
							to right,
							#24243e,
							#302b63,
							#0f0c29
						); /* Chrome 10-25, Safari 5.1-6 */
						background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
					}
				}
				.my-ticket {
					h1 {
						font-size: 1rem;
					}
					p {
						font-size: 0.6rem;
					}
				}
				.my-train {
					position: relative;
					h1 {
						font-size: 1rem;
					}
					p {
						font-size: 0.6rem;
					}
					.book {
						position: absolute;
						right: 10px;
						top: 50%;
						transform: translateY(-50%);
						padding: 0px 10px;
						border-radius: 10px;
						font-weight: 700;
						background: var(--system-primary-color);
						color: var(--system-text-color);
					}
				}
			}
		}
		.active-bookings {
			background: var(--system-transparent-color-primary-op);
		}
	}
	.search {
		background: var(--system-transparent-color-primary-op);
		margin-top: 10px;
		padding: 0 13px;
		border-radius: 10px;
		font-size: 0.9rem;
		transition: all 0.3s linear;
		&:hover {
			box-shadow: var(--shadow-effect);
			background: var(--system-text-color);
			color: var(--system-text-color-op);
		}
	}
	.places {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
	.input {
		display: flex;
		align-items: center;
		max-width: 300px;
		background: var(--system-text-color);
		border: 1px solid var(--system-thumb);
		border-radius: 10px;
		padding-left: 0.5rem;
		overflow: hidden;
		.prefix {
			font-weight: 300;
			font-size: 14px;
			color: #999;
		}
		select,
		input {
			flex-grow: 1;
			font-size: 14px;
			color: var(--system-text-color-op);
			background: var(--system-text-color);
			border: none;
			outline: none;
			padding: 0.5rem;
			width: 200px;
		}
	}
	.dates {
		display: flex;
		flex-direction: row;
		gap: 10px;
		.fa-calendar {
			opacity: 0;
		}
		.fa-map-signs {
			opacity: 0;
		}
	}
</style>
