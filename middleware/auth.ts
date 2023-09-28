import {useAuthStore} from "~/Stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();

    if (!auth.isLoggedIn) { // try to get user data, in case the user is logged in on page refresh.
        return navigateTo('/login', {replace:true})
    }
})
