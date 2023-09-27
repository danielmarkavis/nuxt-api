<script lang="ts" setup>
import {useAuthStore} from "~/Stores/useAuthStore";
import {navigateTo} from "#app";

definePageMeta({
    middleware: ['guest']
})

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
})

const auth = useAuthStore();

const handleRegister = async () => {
    if (auth.isLoggedIn) {
        return navigateTo("/");
    }

    const {error} = await auth.register(form.value);

    if (!error.value) {
        return navigateTo("/");
    }

    console.log(error)
}

</script>

<template>
    <form @submit.prevent="handleRegister">
        <label for="name">
            name
            <input id="name" type="text" v-model="form.name">
        </label>

        <label for="email">
            Email
            <input id="email" type="email" v-model="form.email">
        </label>

        <label for="password">
            Password
            <input id="password" type="password" v-model="form.password">
        </label>
        <label for="password">
            Password confirmation
            <input id="password_confirmation" type="password" v-model="form.password_confirmation">
        </label>

        <button>Register</button>
    </form>
</template>

<style scoped></style>
