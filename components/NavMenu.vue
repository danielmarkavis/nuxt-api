<template>
    <div class="bg-level-2">
        <nav class="container px-5 py-8 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <NuxtLink
                    to="/"
                    class="text-xl font-bold text-accent hover:text-accent md:text-2xl"
                >
                    website
                </NuxtLink>

                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button
                        type="button"
                        class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                    >
                        <IHamburger />
                    </button>
                </div>
            </div>

            <ul
                :class="showMenu ? 'flex' : 'hidden'"
                class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
            >
                <template v-for="(navItem,key) in navItems" :key="key">
                    <li v-show="navItem.show">
                        <NuxtLink :to="navItem.route" class="text-sub hover:text-primary block md:inline-block mt-4 md:mt-0 mr-2 p-3 px-5 md:rounded-full text-sm no-underline uppercase transition-colors duration-300">{{ navItem.label }}</NuxtLink>
                    </li>
                </template>
                <li v-show="auth?.isLoggedIn">
                    <button class="text-sub hover:text-primary block md:inline-block mt-4 md:mt-0 mr-2 p-3 px-5 md:rounded-full text-sm no-underline uppercase transition-colors duration-300" @click="emits('logout')">Logout</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import {useAuthStore} from "~/Stores/useAuthStore";
import IHamburger from '~/components/Icons/IHamburger.vue'
const auth = useAuthStore();

const navItems = ref([
    {
        label: 'Home',
        route: '/',
        show: true
    },
    {
        label: 'Register',
        route: '/register',
        show: !auth.isLoggedIn
    },
    {
        label: 'Login',
        route: '/login',
        show: !auth.isLoggedIn
    },
    {
        label: 'auth-only',
        route: '/auth-only',
        show: auth.isLoggedIn
    },
    {
        label: 'guest-only',
        route: '/guest-only',
        show: !auth.isLoggedIn
    },
    // {
    //     label: 'logout',
    //     route: '/logout',
    //     show: auth.isLoggedIn
    // },
])
const showMenu = ref(false)

const emits = defineEmits(['logout'])
</script>

