<script setup lang="ts">
	import Login from '../components/Login.vue';
</script>

<template>
	<main>
		<h1>QR LOGIN</h1>
		<Login />
	</main>
</template>

<style lang="scss" scoped>
	@import '../assets/base.scss';
	main {
		background: $background;
		color: $white;
		min-height: 100vh;
	}
	h1 {
		color: $primary;
		text-align: center;
		padding: 1rem;
	}
</style>
