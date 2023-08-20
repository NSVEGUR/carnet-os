<script lang="ts">
	import Splash from './splash.svelte';
	import { loadAuth, manageFullScreen, loadDesktop } from './../utils/desktop';
	import { Motion } from 'svelte-motion';
	import { login, signup } from '../utils/database/database';
	import { UserDetails, LoggedIn } from './../store/store';
	let auth = 'none';
	const pageTransitionVariants = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.5,
				type: 'spring',
				delay: 0.2,
				stiffness: 60
			}
		},
		hidden: {
			opacity: 0,
			x: 1000
		}
	};
	let mail: string;
	let password: string;

	let loginResponse: any;
	let loginClicked = false;
	let logResponded = false;

	let signupResponse: any;
	let signupClicked = false;
	let signResponded = false;

	$: if (loginClicked) {
		const loginStatus = document.getElementById('loginStatus');
		loginStatus.style.display = 'block';
		loginStatus.innerHTML = `Logging In ...`;
	}
	$: if (logResponded) {
		const loginStatus = document.getElementById('loginStatus');
		if (loginResponse.status === 'success') {
			$UserDetails = {
				userid: loginResponse.results[0].userid,
				mail: loginResponse.results[0].mail
			};
			loginStatus.style.color = 'green';
			loginStatus.innerHTML = 'Logged In Successfully';
			setTimeout(() => {
				$LoggedIn = true;
			}, 1500);
		} else if (loginResponse.status === 'failure') {
			loginStatus.style.color = 'red';
			loginStatus.innerHTML = loginResponse.message || 'Error In Loggining In';
		}
		setTimeout(() => {
			loginClicked = false;
			logResponded = false;
			loginStatus.innerHTML = '';
			loginStatus.style.color = 'white';
			loginStatus.style.display = 'none';
		}, 2500);
	}

	$: if (signupClicked) {
		const signupStatus = document.getElementById('signupStatus');
		signupStatus.style.display = 'block';
		signupStatus.innerHTML = `Signing Up ...`;
	}
	$: if (signResponded) {
		const signupStatus = document.getElementById('signupStatus');
		if (signupResponse.status === 'success') {
			$UserDetails = {
				userid: signupResponse.results.userid,
				mail: signupResponse.results.mail
			};
			signupStatus.style.color = 'green';
			signupStatus.innerHTML = 'Signed Up Successfully';
			setTimeout(() => {
				$LoggedIn = true;
			}, 1500);
		} else if (signupResponse.status === 'failure') {
			signupStatus.style.color = 'red';
			signupStatus.innerHTML = signupResponse.message || 'Error In Signing Up';
		}
		setTimeout(() => {
			signupClicked = false;
			signResponded = false;
			signupStatus.innerHTML = '';
			signupStatus.style.color = 'white';
			signupStatus.style.display = 'none';
		}, 2500);
	}

	$: if ($LoggedIn) {
		loadDesktop();
	}
</script>

<svelte:window on:load={loadAuth} on:dblclick={manageFullScreen} />
<Splash />
<section id="auth">
	<div class="auth-container">
		<div class="profile">
			<img src="profile.png" alt="ProfileImage" />
		</div>
		{#if auth == 'none'}
			<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
				<section use:motion>
					<h1>Welcome to carnetOS</h1>
					<p
						class="touch-id"
						on:click={() => {
							mail = '';
							password = '';
							auth = 'login';
						}}
					>
						Touch ID or Enter password
					</p>
				</section>
			</Motion>
		{:else if auth == 'login'}
			<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
				<section use:motion>
					<form class="password">
						<input
							placeholder="Enter Email"
							id="password"
							type="email"
							autocomplete="off"
							bind:value={mail}
						/>
						<input
							placeholder="Enter Password"
							id="password"
							type="password"
							autocomplete="off"
							bind:value={password}
						/>
					</form>
					<div id="loginStatus" />
					<div
						class="submit"
						on:click={async () => {
							loginClicked = true;
							loginResponse = await login(mail, password);
							logResponded = true;
						}}
					>
						Login
					</div>
					<div
						class="signup"
						on:click={() => {
							mail = '';
							password = '';
							auth = 'signup';
						}}
					>
						Don't have an account <span>Signup</span>
					</div>
				</section>
			</Motion>
			<div
				class="cancel"
				on:click={(e) => {
					auth = 'none';
				}}
			>
				<div>
					<i class="far fa-times-circle" />
				</div>
				<div>Cancel</div>
			</div>
		{:else}
			<Motion variants={pageTransitionVariants} initial="hidden" animate="visible" let:motion>
				<section use:motion>
					<form class="password">
						<input
							placeholder="Enter Email"
							id="password"
							type="email"
							autocomplete="off"
							bind:value={mail}
						/>
						<input
							placeholder="Enter Password"
							id="password"
							type="password"
							autocomplete="off"
							bind:value={password}
						/>
					</form>
					<div id="signupStatus" />
					<div
						class="submit"
						on:click={async () => {
							signupClicked = true;
							signupResponse = await signup(mail, password);
							signResponded = true;
						}}
					>
						Signup
					</div>
					<div
						class="signup"
						on:click={() => {
							mail = '';
							password = '';
							auth = 'login';
						}}
					>
						Got an account <span>Login</span>
					</div>
				</section>
			</Motion>
			<div
				class="cancel"
				on:click={(e) => {
					auth = 'none';
				}}
			>
				<div>
					<i class="far fa-times-circle" />
				</div>
				<div>Cancel</div>
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	#auth {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			var(--desktop-wallpaper) center center no-repeat;
		background-size: cover;
		display: none;
		transition: background 0.3s ease;
		position: absolute;
		color: var(--system-text-color);
		font-weight: 500;
		#loginStatus,
		#signupStatus {
			display: none;
			font-size: 0.8rem;
			margin: 10px 0;
		}
		.auth-container {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: -3rem;
			section {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-top: 20px;
			}
		}
		.touch-id {
			font-size: 0.7rem;
			margin-top: 1.3rem;
		}
		form {
			display: flex;
			flex-direction: column;
			gap: 10px;
			justify-content: center;
			align-items: center;
		}
		.submit {
			background: rgba(255, 255, 255, 0.35);
			margin-top: 10px;
			padding: 0 13px;
			border-radius: 20px;
			font-size: 0.9rem;
			transition: all 0.3s linear;
			&:hover {
				box-shadow: var(--shadow-effect);
				background: white;
				color: black;
			}
		}
		.signup {
			margin-top: 10px;
			font-size: 0.7rem;
			span {
				text-decoration: underline;
			}
		}
		input {
			background: rgba(255, 255, 255, 0.35);
			border-radius: 20px;
			padding: 7px;
			backdrop-filter: blur(30px);
			padding-left: 10px;
			outline: none;
			font-weight: 600;
			border: none;
			color: rgba(255, 255, 255, 0.9);
			caret-color: rgba(255, 255, 255, 0.5);
		}

		::placeholder {
			/* Chrome, Firefox, Opera, Safari 10.1+ */
			color: rgba(255, 255, 255, 0.5);
			opacity: 1; /* Firefox */
		}

		:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: rgba(255, 255, 255, 0.5);
		}

		::-ms-input-placeholder {
			/* Microsoft Edge */
			color: rgba(255, 255, 255, 0.5);
		}

		.profile {
			background: rgba(255, 255, 255, 0.5);
			border-radius: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.profile img {
			height: 130px;
			width: 130px;
			object-fit: cover;
			border-radius: 50%;
		}
		.cancel {
			position: fixed;
			bottom: 50px;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.cancel div:first-child {
			width: 32px;
			height: 32px;
			font-size: 1.3rem;
			color: rgba(175, 175, 175, 0.8);
			border-radius: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: rgba(255, 255, 255, 0.15);
		}
	}
</style>
