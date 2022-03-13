import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import App from './App.vue';
import router from './router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const firebaseConfig = {
	apiKey: 'AIzaSyAXZOatCQRzgu8_aZ2Ti64PgTTWQ9_AMuM',
	authDomain: 'vueqrlogin.firebaseapp.com',
	projectId: 'vueqrlogin',
	storageBucket: 'vueqrlogin.appspot.com',
	messagingSenderId: '995291357183',
	appId: '1:995291357183:web:56a68ea8cf63d3829251ca',
};
initializeApp(firebaseConfig);

let app: any;
getAuth().onAuthStateChanged(() => {
	if (!app) {
		app = createApp(App);
		app.use(createPinia().use(piniaPluginPersistedstate));
		app.use(router);
		app.mount('#app');
	}
});
