import {createRouter, createWebHistory} from "vue-router";
import {authRoutes} from "@/shared/router/authRoutes.js";
import {recipeRoutes} from "@/shared/router/recipeRoutes.js";


const routes = [
    {
        path: "/",
        name: "home",
        component: ()=> import("@/modules/Recipes/views/Home.vue")
    },
    ...authRoutes,
    ...recipeRoutes,
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})


