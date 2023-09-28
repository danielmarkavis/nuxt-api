<script lang="ts" setup>
definePageMeta({
    middleware: ['auth'],
    layout: false,
})

const permissions = ref<Array<object>|null>(null);

const getPermissions = async () => {
    const {data} = await useApiFetch('/api/permissions')
    //     .then((response) => {
    //     if (response.ok) {
    //         return response.json()
    //     }
    //     return Promise.reject(response)
    // }).then(() => {
    //     console.log("Success");
    // }).catch((response) => {
    //     console.log("An error occurred " + response.status);
    // });

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
            Page: Auth2
            <template v-for="permission in permissions">
                <div>
                    {{permission.name}}
                </div>
            </template>
        </NuxtLayout>
  </div>
</template>

<style scoped></style>
