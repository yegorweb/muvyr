<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <Header />
          <v-main>
            <router-view />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

