<script lang="ts" setup>
import { useAuthStore } from '~/Stores/useAuthStore.ts'
import { useAlertsStore } from '~/Stores/useAlertsStore.ts'
import { storeToRefs } from 'pinia'
import { notify } from 'notiwind'
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

const auth = useAuthStore()

const alertStore = useAlertsStore()
const { alerts } = storeToRefs(alertStore)

watch(alerts.value, () => {
    if (alerts.value.length) {
        alertStore.fire();
    }
})


// console.log(alerts.value);
// alertStore.$subscribe((mutation, state) => {
//     // console.log(mutation);
//     // console.log(state.alerts);
//     state.alerts.forEach((alert) => {
//         // console.log(alert.text)
//         notify(
//             {
//                 group: "messages",
//                 title: alert.title,
//                 type: alert.type,
//                 text: alert.text,
//             },
//             3000,
//         );
//     })
//     // clearAlerts.value = true;
//     alertStore.alerts = [];
// })

const test = () => {
    alertStore.success('TEST');
}

const handleLogout = async () => {
    await auth.logout()
}
</script>

<template>
    <div>
        <Head>
            <Title>{{ title }} | website.co.uk</Title>
            <Meta name="description" :content="description"/>
        </Head>

        <div class="bg-level-0">
            <div class="min-h-screen">
                <NavMenu @logout="handleLogout"/>
                <button @click="test">test</button>
                <header>
                    <slot name="header"/>
                </header>

                <main class="p-5">
                    <slot/>
                </main>
            </div>
        </div>

        <Alert/>
    </div>
</template>

