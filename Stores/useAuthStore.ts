import {defineStore} from "pinia";

type User = {
    id: number;
    name: string;
    email: string;
}

type Credentials = {
    email: string,
    password: string
}

type RegistrationInfo = {
    name: string,
    email: string,
    password: string
    password_confirmation: string
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)

    const isLoggedIn = computed(() => !!user.value);

    const fetchUser = async () => {
        const {data} = await useApiFetch("/api/user");
        user.value = data.value as User;
    }

    const login = async (credentials: Credentials) => {
        await useApiFetch("/sanctum/csrf-cookie");

        const loginCall = await useApiFetch("/login", {
            method: "POST",
            body: credentials,
        });

        await fetchUser();

        return loginCall;
    }

    const logout = async () => {

        await useApiFetch("/logout", {
            method: "POST"
        });
        user.value = null;
        navigateTo('/login')
    }

    const register = async (info: RegistrationInfo) => {

        await useApiFetch("/sanctum/csrf-cookie");

        const registerCall = await useApiFetch("/register", {
            method: "POST",
            body: info,
        });

        await fetchUser();

        return registerCall;
    }

    return {user, login, logout, register, isLoggedIn, fetchUser}
})