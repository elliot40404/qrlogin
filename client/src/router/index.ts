import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth } from 'firebase/auth';
const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: {
				requiresAuth: false,
				title: 'Login',
			},
			beforeEnter: (to, from, next) => {
				if (getAuth().currentUser) {
					next({ name: 'dashboard' });
				} else {
					next();
				}
			},
		},
		{
			path: '/home',
			name: 'dashboard',
			component: () => import('../views/DashboardView.vue'),
			meta: {
				requiresAuth: true,
				title: 'Home',
			},
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'ERROR',
			component: () => import('../views/404.vue'),
			meta: {
				title: '404',
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	document.title = 'QR Login | ' + to.meta.title;
	if (to.matched.some(record => record.meta.requiresAuth)) {
		getAuth().onAuthStateChanged(user => {
			if (!user) {
				next({
					path: '/',
					query: { redirect: to.fullPath },
				});
			} else {
				next();
			}
		});
	} else {
		next();
	}
});

export default router
