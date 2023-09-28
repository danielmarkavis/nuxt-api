<script lang="ts" setup>
import {useAuthStore} from "~/Stores/useAuthStore";
import {navigateTo} from "#app";
import {notify} from "notiwind";
import FormGroup from "~/components/Form/FormGroup.vue";
import BaseButton from "~/components/Buttons/BaseButton.vue";

definePageMeta({
    middleware: ['guest'],
    layout: false,
})

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
})

const errors = ref([]);

const auth = useAuthStore();

const handleRegister = async () => {
    if (auth.isLoggedIn) {
        return navigateTo("/")
    }

    const {error} = await auth.register(form.value);

    if (!error.value) {
        return navigateTo("/").then(() => {
            notify(
                {
                    group: "messages",
                    title: "Success",
                    type: "success",
                    text: "You logged in!",
                },
                3000,
            );
        });
    }
    errors.value = error.value.data.errors;

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
        <NuxtLayout name="custom" title="Register">
            <div class="container mx-auto my-12 max-w-xl">
                <div class="container mx-auto my-12 max-w-xl">
                    <FormSection @submitted="handleRegister">
                        <template #form>
                            <FormGroup
                                label="Name"
                                name="name"
                                required
                                single-column
                                :errors="errors"
                            >
                                <FormTextInput
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    class="block w-full"
                                    required
                                    autofocus
                                    autocomplete="name"
                                />
                            </FormGroup>

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

                            <FormGroup
                                label="password_confirmation"
                                name="password_confirmation"
                                required
                                single-column
                                :errors="errors"
                            >
                                <FormTextInput
                                    id="password_confirmation"
                                    v-model="form.password_confirmation"
                                    type="password"
                                    class="block w-full"
                                    required
                                    autofocus
                                    autocomplete="name"
                                />
                            </FormGroup>
                        </template>
                        <template #actions>
                            <BaseButton color="blue">Register</BaseButton>
                        </template>
                    </FormSection>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped></style>
