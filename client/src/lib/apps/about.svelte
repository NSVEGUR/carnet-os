<script lang="ts">
</script>

<div id="backstore" style="display: none">
	<section id="app-about">
		<div id="dbOS">
			<div class="DBMS">
				<div class="img" />
				<h1 class="title">CarnetOS</h1>
				<h3>A carnet data driven clone of macOS</h3>
				<p>
					&emsp; CarnotOS is a railway ticket booking website made by five IIITDM Kancheepuram
					students as a part of DBMS Project. The project basically contains similar functions when
					compared to other railway ticket booking websites. The website is mostly based on IIITDM.
					The website offers options like profile settings, ticket booking, the list of trains
					available and some other UI settings. It's painted with Svelte in the frontend and nested
					with Sql in the backend.
				</p>
				<h3>Profile:</h3>
				<p>
					The profile contains options like email and password changes, and also the bookings made
					by the user.
				</p>
				<h3>List of Trains:</h3>
				<p>
					The locations used in the project are different places in IIITDM Kancheepuram campus and
					therefore creating a fantasy world.
				</p>
				<h3>Ticket Booking:</h3>
				<p>
					Ticket booking contains options to book tickets and show the tickets booked and also the
					train details. The idea of the project was to take the user into a small fantasy world
					using a railway ticket booking website and give the user a beautiful and wonderful
					experience while using the website.
				</p>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-about {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.DBMS {
		text-align: justify;
		padding: 10px;
		color: var(--system-text-color);
		width: 90%;
		margin: auto auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 40rem;
		.img {
			background: var(--carnet-wallpaper) no-repeat center center;
			background-size: cover;
			max-width: 100%;
			min-height: 430px;
			max-height: 450px;
			border-radius: 20px;
		}
		h1 {
			text-align: center;
		}
		.title {
			margin-top: 2rem;
			text-align: start;
		}
		h3 {
			color: var(--system-transparent-color-secondary-op);
			margin-bottom: 2rem;
		}
	}
</style>
