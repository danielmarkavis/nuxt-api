<script setup lang="ts">
import {onMounted, ref} from 'vue';

defineProps<{
    modelValue: string | number | null;
}>();

defineEmits(['update:modelValue']);

const input = ref<HTMLInputElement | null>(null);

// onMounted(() => {
//     if (input.value?.hasAttribute('autofocus')) {
//         input.value?.focus();
//     }
// });
//
// defineExpose({focus: () => input.value?.focus()});
</script>

<template>
    <input
        :value="modelValue"
        v-bind="$attrs"
        type="email"
        id="email"
        name="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
</template>
