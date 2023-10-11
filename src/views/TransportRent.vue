<script setup>
import BackButton from "@/components/BackButton.vue";
import { ref } from "vue";
let transports = ref([{
  title: 'Прокат велосипедов',
  image: "https://thumb.tildacdn.com/tild3063-3938-4463-b761-656430626635/-/cover/432x475/center/center/-/format/webp/b036r3OXf0E.jpg",
  description: "150 руб - 30 мин., 250 руб -1 час., 1000 руб - сутки",
  price: "150р."
},
{
  title: 'Прокат электромобилей',
  image: "https://thumb.tildacdn.com/tild3532-3830-4962-b662-343065336262/-/cover/432x475/center/center/-/format/webp/Screenshot_20230611-.jpg",
  description: "150 руб - 5 мин., 200 руб - 10 мин. Возраст: от 1 до 8 лет, до 45 кг.",
  price: "150р."
},
{
  title: 'Прокат батута',
  image: "https://sun9-50.userapi.com/vAyegDoSMqF9eoA33e9byZfaQx1G6d1h_Ww6WQ/UL3yvZPcYwE.jpg",
  description: "10 мин. Маленький батут (на территории базы отдыха) - не более 80 кг Большой батут (на катке) - до 100 кг",
  price: "150р."
},
{
  title: 'Катание на лошадях',
  image: "https://thumb.tildacdn.com/tild6231-3832-4235-b038-343233303065/-/cover/432x475/center/center/-/format/webp/yAxFckiyj3Q.jpg",
  description: "Катание на пони: 100 руб - 35 мин. Катание верхом: 500 руб - 35 мин.",
  price: "500р."
}])
</script>
<template>
  <v-container>
    <back-button></back-button>
    
    <v-row>
      <v-col cols="12" class="text-center" style="font-size: 35px;">
        <span style="font-family: 'Dela Gothic One';">Прокат</span>
      </v-col>
      <v-col cols="12" sm="6" lg="3" v-for="card in transports">
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
