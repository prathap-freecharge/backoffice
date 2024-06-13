import { createRouter, createWebHistory } from 'vue-router';
import ApplicationList from '../components/ApplicationList.vue';
import ApplicationDetails from '../components/ApplicationDetails.vue';
import LoginPage from '../components/LoginPage.vue';
import Login from '../components/Login.vue';
import Home from '../components/New/HomePage.vue';
import ApplicationView from '../components/New/ApplicationView.vue';

const routes = [
    { path: '/', component: ApplicationList },
    { path: '/details/:id', component: ApplicationDetails },
    // { path: '/login', component: LoginPage },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/application/:id', component: ApplicationView }
];

const router = createRouter({
    history: createWebHistory('/backoffice/'),
    routes,
});

export default router;