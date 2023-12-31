<script setup>
import { Notification, NotificationGroup } from 'notiwind'
</script>

<template>
    <NotificationGroup group="messages">
        <div
            class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
        >
            <div class="w-full max-w-sm">
                <Notification
                    v-slot="{ notifications }"
                    enter="transform ease-out duration-300 transition"
                    enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                    enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    move="transition duration-500"
                    move-delay="delay-300"
                >
                    <div
                        v-for="notification in notifications"
                        :key="notification.id"
                        class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-level-0 rounded-lg shadow-lg"
                    >
                        <div
                            class="flex items-center justify-center w-12 white"
                            :class="{
                                'bg-green-500': notification.type === 'success',
                                'bg-red-500': notification.type === 'error',
                              }"
                        >
                            <svg
                                v-if="notification.type === 'success'"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                class="w-6 h-6"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clip-rule="evenodd"
                                />
                            </svg>

                            <svg
                                v-if="notification.type === 'error'"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                class="w-6 h-6"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>

                        <div class="px-4 py-2 -mx-3">
                            <div class="mx-3">
                                <span
                                    class="font-semibold"
                                    :class="{
                                        'text-green-500': notification.type === 'success',
                                        'text-red-500': notification.type === 'error',
                                    }"
                                >{{ notification.title }}</span>
                                <p class="text-sm text-sub">
                                    {{ notification.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </Notification>
            </div>
        </div>
    </NotificationGroup>
</template>