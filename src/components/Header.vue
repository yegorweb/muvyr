<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()
</script>

<template>
    <v-app-bar elevation="0">
        <v-container>
            <div class="w-100 d-flex justify-space-between align-center">
                <div class="d-flex align-center cursor-pointer" @click="router.push('/')">
                    <img src="@/assets/logo.svg" style="height: 40px;" alt="">
                    
                    <span class="logo-text">МУВЫР</span>
                </div>
                
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </div>
        </v-container>
    </v-app-bar>
</template>

<style>
.logo-text {
    font-family: Marmelad;
    color: #000;
    margin-left: 18px;
    font-size: 26px;
}
</style>