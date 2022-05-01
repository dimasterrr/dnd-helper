import { createRouter, createWebHistory } from 'vue-router'
import Card from '/src/pages/Card.vue';
import Map from '/src/pages/Map.vue';

const routes = [
    {
        path: '/',
        redirect: '/card'
    },
    {
        path: '/card',
        name: 'card',
        component: Card,
    },
    {
        path: '/map',
        name: 'map',
        component: Map,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router