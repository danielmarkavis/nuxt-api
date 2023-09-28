<script lang="ts" setup>
definePageMeta({
    middleware: ['guest'],
    layout: false,
})
</script>

<template>
    <div>
        <NuxtLayout name="custom" title="Guest Only">
            Page: foo
        </NuxtLayout>
    </div>
</template>

<style scoped></style>
