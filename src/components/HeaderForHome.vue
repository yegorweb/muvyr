<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()
</script>

<template>
    <div class="d-flex w-100 justify-space-between align-center">
        <div class="d-flex align-center cursor-pointer" @click="router.push('/')">
            <img src="@/assets/logo.svg" alt="">
            
            <span class="logo-text">МУВЫР</span>
        </div>
        <v-icon size="large" class="text-white">mdi-menu</v-icon>
    </div>
</template>

<style scoped>
.logo-text {
    font-family: Marmelad;
    color: #FFFFFF;
    margin-left: 18px;
    font-size: 26px;
}
</style>