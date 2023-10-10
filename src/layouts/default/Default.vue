<script setup>
import { ref } from "vue";
let drawer = ref(false)
</script>
<template>
  <v-app>
    <v-app-bar flat>
      <v-container>
        <v-row>
          <v-app-bar-title>
            Деревня Мувыр
          </v-app-bar-title>
          <v-icon class="d-none d-sm-block ma-2" icon="mdi-menu" @click.stop="drawer = !drawer"></v-icon>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right" temporary elevation="0">
      <v-list nav>
        <v-list-item class="cursor-pointer" prepend-icon="mdi-post" to="/" exact :ripple="false">
          Главная
        </v-list-item>
        <v-list-item class="cursor-pointer" prepend-icon="mdi-post" to="/excursions" exact :ripple="false">
          Экскурсии
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

