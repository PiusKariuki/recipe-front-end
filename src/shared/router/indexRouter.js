import {createRouter, createWebHistory} from "vue-router";
import {authRoutes} from "@/shared/router/authRoutes.js";


const routes = [
    {
        path: "/",
        name: "home",
        component: ()=> import("@/modules/Recipes/views/Home.vue")
    },
    ...authRoutes
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})


