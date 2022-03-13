import { defineStore } from 'pinia';

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		user: '',
		pass: '',
		name: '',
	}),
	getters: {},
	actions: {},
	persist: true
});
