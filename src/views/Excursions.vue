<script setup>
import { ref } from "vue";
let transports = ref([{
  title: 'Экскурсия по возрожденной деревне с питанием',
  image: "https://thumb.tildacdn.com/tild3063-3938-4463-b761-656430626635/-/cover/432x475/center/center/-/format/webp/b036r3OXf0E.jpg",
  description: "",
  price: "700р."
},])
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center" style="font-size: 35px;">
        <span style="font-family: 'Dela Gothic One';">Экскурсии</span>
      </v-col>
      <v-col cols="12" sm="4" md="3" v-for="card in transports">
        <v-card class="h-100 d-flex flex-column">
          <v-col class="pa-0">
            <div :style="`aspect-ratio: 1/1; background: url(${card.image}) 50% 50% no-repeat; background-size: cover;`">
            </div>
          </v-col>

          <div class="w-100 h-100 pa-4 d-flex flex-column justify-space-between">
            <div>
              <h3>{{ card.title }}</h3>
              <div class="mt-1">
                {{ card.description }}
              </div>
            </div>
            <div>Цена:
              <b>{{ card.price }}</b>
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