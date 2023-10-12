<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { useProduct } from '@/store/product'
import { useProperty } from '@/store/property'

await useProduct().getAllProducts()
await useProperty().getAllProperty()
</script>

<template>
  <v-app>
    <Header />

    <v-main style="padding-bottom: 80px;">
      <router-view v-slot="{ Component }">
        <transition name="fade" :duration="{ enter: 200, leave: 100 }">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    
    <Footer />
  </v-app>
</template>
