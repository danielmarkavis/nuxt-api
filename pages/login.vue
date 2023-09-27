<script lang="ts" setup>
import {useAuthStore} from "~/Stores/useAuthStore";
import {navigateTo} from "#app";

definePageMeta({
    middleware: ['guest']
})

const form = ref({
    email: "test@example.com",
    password: "password"
})

const auth = useAuthStore();

const handleLogin = async () => {
    if (auth.isLoggedIn) {
        return navigateTo("/");
    }

    const {error} = await auth.login(form.value);

    if (!error.value) {
        return navigateTo("/");
    }

    console.log(error)
}

</script>

<template>
    <form @submit.prevent="handleLogin">
        <label for="email">
            Email
            <input id="email" type="text" v-model="form.email">
        </label>

        <label for="password">
            Password
            <input id="password" type="password" v-model="form.password">
        </label>

        <button>Login</button>
    </form>
</template>

<style scoped></style>
