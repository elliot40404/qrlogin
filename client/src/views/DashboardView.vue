<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { getAuth } from 'firebase/auth';
	import { useRouter } from 'vue-router';
	import { io } from 'socket.io-client';
	import { Html5QrcodeScanner } from 'html5-qrcode';
	import { useUserStore } from '../stores/user';
	const scan = ref(false);
	const router = useRouter();
	const isMobile = ref(false);
	const auth = getAuth();
	const user = auth.currentUser?.displayName || 'Anonymous';
	const logout = () => {
		auth.signOut();
		router.push('/');
	};
	const reader = ref(null);
	let socket: any;
	onMounted(() => {
		if (window.innerWidth < 600) {
			isMobile.value = true;
		}
		const ws = import.meta.env.VITE_SOCKET || import.meta.env.BASE_URL;
		socket = io(`${ws}`);
		socket.on('connect', () => {
			console.log('connected');
		});
	});
	const userStore = useUserStore();
	const startScan = () => {
		scan.value = !scan.value;
		function onScanSuccess(decodedText: string) {
			html5QrcodeScanner.clear();
			scan.value = !scan.value;
			socket.emit('login', {
				user: userStore.user,
				password: userStore.pass,
				room: decodedText,
			});
		}
		function onScanFailure(error: any) {
			console.warn(`Code scan error = ${error}`);
		}
		let html5QrcodeScanner = new Html5QrcodeScanner(
			'qr',
			{ fps: 10, qrbox: { width: 250, height: 250 } },
			/* verbose= */ false
		);
		html5QrcodeScanner.render(onScanSuccess, onScanFailure);
	};
</script>
<template>
	<main>
		<h1>QR LOGIN</h1>
		<h2>{{ user.toUpperCase() }} LOGGED IN</h2>
		<div v-show="isMobile && scan" ref="reader" id="qr"></div>
		<button v-if="isMobile" @click="startScan" class="success">
			<span v-if="!scan">Scan QR Code</span>
			<span v-else>Close Scanner</span>
		</button>
		<button @click="logout">Logout</button>
	</main>
</template>

<style lang="scss" scoped>
	@import '../assets/base.scss';
	main {
		background: $background;
		color: $white;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	h1,
	h2 {
		color: $primary;
		text-align: center;
		padding: 1rem;
	}
	button {
		background: $secondary;
		color: $white;
		padding: 0.5rem;
		border: none;
		width: 200px;
		font-family: inherit;
		border-radius: 0.25rem;
		margin-inline: auto;
		margin-block: 0.5rem;
		cursor: pointer;
		font-weight: 500;
	}
	.success {
		background: $highlight;
	}
	#qr {
		width: 250px;
		height: 250px;
		margin: 3.5rem auto;
		padding: 1rem;
	}
</style>
