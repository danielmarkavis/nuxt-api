<script lang="ts" setup>
import {useAuthStore} from "~/Stores/useAuthStore";
import {navigateTo} from "#app";
import {notify} from "notiwind";
import FormGroup from "~/components/Form/FormGroup.vue";
import BaseButton from "~/components/Buttons/BaseButton.vue";
import {useAlertsStore} from "~/Stores/useAlertsStore";

definePageMeta({
    middleware: ['guest'],
    layout: false,
})

const form = ref({
    email: "admin@danielmarkavis.co.uk",
    password: "password"
})
const errors = ref([]);

const auth = useAuthStore();
const alertsStore = useAlertsStore();

async function handleLogin() {
    if (auth.isLoggedIn) {
        return navigateTo("/auth-only");
    }

    const {error} = await auth.login(form.value);

    if (!error.value) {

        return navigateTo("/auth-only").then(() => {
            console.log('login');
            alertsStore.success("You logged in!");

            // notify(
            //     {
            //         group: "messages",
            //         title: "Success",
            //         type: "success",
            //         text: "You logged in!",
            //     },
            //     3000,
            // );
        });
    }
    errors.value = error.value?.data?.errors;

    notify(
        {
            group: "messages",
            title: "Error",
            type: "error",
            text: 'Please check your data!',
        },
        3000,
    );
}

</script>

<template>
    <div>
        <NuxtLayout name="custom" title="Login">
            <div class="container mx-auto my-12 max-w-xl">
                <FormSection @submitted="handleLogin">
                    <template #form>
                        <FormGroup
                            label="Email"
                            name="email"
                            required
                            single-column
                            :errors="errors"
                        >
                            <FormTextInput
                                id="email"
                                v-model="form.email"
                                type="email"
                                class="block w-full"
                                required
                                autofocus
                                autocomplete="name"
                            />
                        </FormGroup>

                        <FormGroup
                            label="Password"
                            name="password"
                            required
                            single-column
                            :errors="errors"
                        >
                            <FormTextInput
                                id="password"
                                v-model="form.password"
                                type="password"
                                class="block w-full"
                                required
                                autofocus
                                autocomplete="name"
                            />
                        </FormGroup>
                    </template>

                    <template #actions>
                        <BaseButton color="blue">Login</BaseButton>
                    </template>
                </FormSection>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped></style>
