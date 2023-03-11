import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: "layout",
        component: () =>
            import ('@/views/Layout.vue'),

    }]
})

export default router