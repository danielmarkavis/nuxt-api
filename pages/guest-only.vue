<script lang="ts" setup>
definePageMeta({
    middleware: ['guest'],
    layout: false,
})
</script>

<template>
    <div>
        <NuxtLayout name="custom" title="Guest Only">
            <h1 class="text-white">Page: Guest</h1>
        </NuxtLayout>
    </div>
</template>

<style scoped></style>
