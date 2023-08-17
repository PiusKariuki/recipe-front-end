export const recipeRoutes = [
    {
        name: "recipe-details",
        path: "/recipe/one",
        component: () => import("@/modules/Recipes/views/MealDetails.vue")
    },
    {
        name: "watch-video",
        path: "/video",
        component: () => import("@/modules/Recipes/views/WatchVideo.vue")
    },

]