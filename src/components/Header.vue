<script setup>

</script>

<template>
    <v-app-bar elevation="0">
        <v-container>
            <v-row class="justify-space-between align-center">
                <div class="d-flex align-center">
                    <img src="@/assets/logo.svg" style="height: 40px;" alt="">
                    
                    <span class="logo-text">МУВЫР</span>
                </div>
                
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-row>
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