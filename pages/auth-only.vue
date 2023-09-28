<script lang="ts" setup>
import {useAuthStore} from "~/Stores/useAuthStore";

definePageMeta({
    // middleware: ['auth'],
    layout: false,
})

const auth = useAuthStore();

const permissions = ref<Array<object>|null>(null);

const getPermissions = async () => {
    const {data} = await useApiFetch('/api/permissions')
    return data.value;
}

let perms = getPermissions();

perms.then(function(result) {
    console.log(result);
    permissions.value = result;
})
// console.log(permissions.value);
</script>

<template>
    <div>
        <NuxtLayout name="custom" title="Auth Only">
            <h1 class="text-white">Page: Auth</h1>
            <template v-for="permission in permissions">
                <div class="text-white">
                    {{permission.name}}
                </div>
            </template>
        </NuxtLayout>
  </div>
</template>

<style scoped></style>
