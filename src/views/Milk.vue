<script setup>
import { ref } from "vue";
let cards = []
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="card in cards">
        <v-card class="h-100 d-flex flex-column">
          <v-col class="pa-0">
            <div :style="`aspect-ratio: 1/1; background: url(${card.image}) 50% 50% no-repeat; background-size: cover;`">
            </div>
          </v-col>

          <div class="w-100 h-100 pa-4 d-flex flex-column justify-space-between">
            <div>
              <h3>{{ card.name }}</h3>
              {{ card.description }}
            </div>
            <div class="mt-3">
              <div>Цена:
                <b>{{ card.price }} руб</b>
              </div>
              <div v-if="card.mass?.length">Вес:
                <b>{{ card.mass }}</b>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.v-card {
  border-radius: 12px !important;
  -webkit-box-shadow: 0px 10px 40px 5px rgba(34, 60, 80, 0.1) !important;
  -moz-box-shadow: 0px 10px 40px 5px rgba(34, 60, 80, 0.1) !important;
  box-shadow: 0px 10px 40px 5px rgba(34, 60, 80, 0.1) !important;
}
</style>
