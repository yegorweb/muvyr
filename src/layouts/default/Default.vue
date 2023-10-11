<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
  <v-app>
    <Header />
      <v-main>
        <Transition name="fade">
          <router-view />
        </Transition>
      </v-main>
  </v-app>
</template>
