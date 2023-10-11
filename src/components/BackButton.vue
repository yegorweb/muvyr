<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()
</script>

<template>
    <div @click="router.back()" class="d-flex align-center cursor-pointer pt-2 pb-2">
        <v-icon>mdi-arrow-left</v-icon>

        <div style="margin-left: 8px; font-size: 18px; font-weight: 400;">
            назад
        </div>
    </div>
</template>