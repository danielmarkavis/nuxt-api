import {useAuthStore} from "~/Stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();

    if (auth.isLoggedIn) {
        return navigateTo('/', {replace:true})
    }
})
