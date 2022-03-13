<script setup lang="ts">
	import { ref, computed, onBeforeUnmount, onMounted, watch } from 'vue';
	import { useUserStore } from '../stores/user';
	import { useRouter } from 'vue-router';
	import QRCode from 'qrcode';
	import { io } from 'socket.io-client';
	import {
		getAuth,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword,
		updateProfile,
	} from 'firebase/auth';
	let user = useUserStore();
	const router = useRouter();
	let exists = ref(true);
	let timedOut = ref(false);
	let loading = ref(false);
	let username = computed({
		get: () => user.user,
		set: (value: string) => (user.user = value),
	});
	let pass = computed({
		get: () => user.pass,
		set: (value: string) => (user.pass = value),
	});
	let name = computed({
		get: () => user.name,
		set: (value: string) => (user.name = value),
	});
	const qrsrc = ref('');
	const login = () => {
		if (username.value && pass.value) {
			const auth = getAuth();
			signInWithEmailAndPassword(auth, username.value, pass.value)
				.then((userCredential) => {
					router.push('/home');
				})
				.catch((error) => {
					console.error(error.code, error.message);
				});
		}
	};
	const signup = (): void => {
		if (username.value && pass.value && name.value) {
			const auth = getAuth();
			createUserWithEmailAndPassword(auth, username.value, pass.value)
				.then(() => {
					updateProfile(auth.currentUser, {
						displayName: name.value,
					})
						.then(() => {
							router.push('/home');
						})
						.catch((error) => {
							console.error(error.code, error.message);
						});
				})
				.catch((error) => {
					console.error(error.code, error.message);
				});
		}
	};
	let socket: any;
	const socketConnect = (id: string) => {
		const ws = import.meta.env.VITE_SOCKET || import.meta.env.BASE_URL;
		socket = io(`${ws}`);
		socket.on('connect', () => {
			//console.log('connected');
			socket.emit('join', { room: id });
		});
		socket.on('login', (data: any) => {
			loading.value = true;
			username.value = data.user;
			pass.value = data.password;
			//console.log(data);
			login();
		});
	};
	const getqr = async () => {
		try {
			const req = await fetch(`${import.meta.env.VITE_API}/qr`);
			if (!req.ok) return;
			const res = await req.json();
			const qr = await QRCode.toDataURL(res.id);
			timedOut.value = false;
			qrsrc.value = qr;
			socketConnect(res.id);
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	};
	watch(timedOut, () => {
		if (timedOut.value) {
			socket.disconnect();
			socket = null;
			// console.log('disconnected');
		}
	});
	const removeqr = () => {
		if (!qrsrc.value) return;
		qrsrc.value = '';
		timedOut.value = true;
	};
	const timeout = setInterval(removeqr, 30 * 1000);
	onMounted(async () => {
		const data = await getqr();
		if (data) {
		}
	});
	onBeforeUnmount(() => {
		clearInterval(timeout);
	});
</script>

<template>
	<div v-if="loading" class="loader">
		<h3>Logging you in</h3>
		<div class="lds-ripple">
			<div></div>
			<div></div>
		</div>
	</div>
	<div v-else class="login">
		<form @submit.prevent>
			<label for="user">
				Username
				<input
					type="email"
					id="user"
					v-model="username"
					placeholder="user@abc.com"
					autocomplete="off"
					required
					minlength="5"
				/>
			</label>
			<label v-if="!exists" for="name">
				Name
				<input
					type="text"
					id="name"
					v-model="name"
					placeholder="Sam Sepiol"
					autocomplete="off"
					minlength="5"
				/>
			</label>
			<label for="pass">
				Password
				<input
					type="password"
					autocomplete="off"
					required
					id="pass"
					v-model="pass"
					placeholder="Password1234"
					minlength="5"
				/>
			</label>
			<button v-if="exists" @click="login" type="submit">Login</button>
			<button v-else @click="signup" type="submit">Signup</button>
			<h5>OR</h5>
			<h4 v-if="!exists" @click="exists = true" type="submit">
				Have an Account? Login
			</h4>
			<h4 v-else @click="exists = false" type="submit">
				Don't have an Account? Signup
			</h4>
		</form>
		<div v-if="exists" class="qr">
			<img :src="qrsrc" class="box" />
			<h6 v-if="timedOut" class="error">
				QR Timed out <span @click="getqr">Refresh</span>
			</h6>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '../assets/base.scss';
	.login {
		display: flex;
		align-items: center;
		position: relative;
		padding: 4rem 1rem;
		width: min(70vw, 100% - 2rem);
		max-width: 600px;
		margin-inline: auto;
		border: 2px solid $primary;
		border-radius: 1rem;
		transition: all 0.3s ease-in-out;
		form {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			label {
				display: block;
				margin-bottom: 0.5rem;
				width: 80%;
				input {
					background: $accent;
					width: 100%;
					padding: 0.5rem;
					border: none;
					font-family: inherit;
					border-radius: 0.25rem;
					color: $primary;
					&::placeholder {
						color: $white;
					}
					&:focus {
						outline: none;
						outline: 1px solid $primary;
					}
				}
			}
			button {
				background: $secondary;
				color: $white;
				padding: 0.5rem;
				border: none;
				width: 50%;
				font-family: inherit;
				border-radius: 0.25rem;
				margin-inline: auto;
				margin-block: 0.5rem;
				cursor: pointer;
				font-weight: 500;
			}
			h4 {
				font-size: 0.8rem;
				cursor: pointer;
			}
		}
		.qr {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.box {
				width: 150px;
				height: 150px;
				background: $primary;
				border-radius: 0.5rem;
			}
		}
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 2px;
			height: 50%;
			background: $accent;
			opacity: 0.5;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			border: none;
			margin-top: 30%;
			form {
				width: 95%;
			}
			.qr {
				display: none;
			}
			&::before {
				display: none;
			}
		}
	}
	.error {
		color: $secondary;
		font-size: 0.8rem;
		margin-block: 0.5rem;
		span {
			color: $primary;
			padding: 0 0.5rem;
			cursor: pointer;
		}
	}
	.loader {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 50vh;
		.lds-ripple {
			display: inline-block;
			position: relative;
			width: 80px;
			height: 80px;
		}
		.lds-ripple div {
			position: absolute;
			border: 4px solid #fff;
			opacity: 1;
			border-radius: 50%;
			animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
		}
		.lds-ripple div:nth-child(2) {
			animation-delay: -0.5s;
		}
		@keyframes lds-ripple {
			0% {
				top: 36px;
				left: 36px;
				width: 0;
				height: 0;
				opacity: 1;
			}
			100% {
				top: 0px;
				left: 0px;
				width: 72px;
				height: 72px;
				opacity: 0;
			}
		}
	}
</style>
