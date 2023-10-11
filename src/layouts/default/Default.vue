<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
  <v-app>
    <Header />
      <v-main>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-main>
  </v-app>
</template>
