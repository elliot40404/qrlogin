<script setup lang="ts">
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const counter = ref(5);
	const redirect = setInterval(() => {
		counter.value--;
		if (counter.value === 0) {
			clearInterval(redirect);
			router.push('/');
		}
	}, 1000);
</script>

<template>
	<main>
		<h1>404 Page Not Found</h1>
		<h5>Redirecting you in {{ counter }}</h5>
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
		justify-content: center;
		align-items: center;
	}
	h1 {
		color: $primary;
		text-align: center;
		padding: 1rem;
		font-size: 8vw;
	}
</style>
