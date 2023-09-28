<template>
    <Head>
        <Title>{{ title }} | website.co.uk</Title>
        <Meta name="description" :content="description"/>
    </Head>

    <div class="bg-level-0">
        <div class="min-h-screen">
            <NavMenu @logout="handleLogout"/>

            <header>
                <slot name="header"/>
            </header>

            <main class="p-5">
                <slot/>
            </main>
        </div>
    </div>

    <Alert/>
</template>

<script setup>
import { useAuthStore } from '~/Stores/useAuthStore.ts'
import NavMenu from '~/components/NavMenu.vue'
import Alert from '~/components/Alert.vue'
import '@/css/default.css'

defineProps({
    title: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
})

const auth = useAuthStore();
const handleLogout = async () => {
    await auth.logout();
}

</script>
