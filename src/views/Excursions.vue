<script setup>
import BackButton from "@/components/BackButton.vue";
import { ref } from "vue";
let excusrions = ref([{
  title: 'Экскурсия по возрожденной деревне с питанием',
  image: "https://thumb.tildacdn.com/tild3063-3938-4463-b761-656430626635/-/cover/432x475/center/center/-/format/webp/b036r3OXf0E.jpg",
  description: "",
  price: "700 руб"
}, {
  title: "Фотосессия с лошадью",
  image: "https://sun9-64.userapi.com/-GFnN8CH6E4d4rq4SAgA8F_CEueR71kE5q0c0g/BjLQo40t14A.jpg",
  description: "",
  price: "500 руб"
},
{
  title: "Рыбалка",
  image: "https://sun9-46.userapi.com/RAz8cKI90MOy4xU2M9ecBFQ55HSqF84GRoDPDQ/fLnehLCR9ak.jpg",
  descirption: "",
  price: "300 руб"
},
{
  title: "Сап-бординг",
  image: "https://sun9-73.userapi.com/0vani0UeASwTDRb1pW-vMOPjR9xjlkzuZPFqSg/mik_ohO0H7o.jpg",
  description: "",
  price: "500 руб"
}
])
</script>
<template>
  <v-container>
    <back-button></back-button>

    <v-row>
      <v-col cols="12" class="text-center" style="font-size: 35px;">
        <span style="font-family: 'Dela Gothic One';">Экскурсии</span>
      </v-col>
      <v-col cols="12" sm="4" md="3" v-for="card in excusrions">
        <v-card class="h-100 d-flex flex-column">
          <v-col class="pa-0">
            <div :style="`aspect-ratio: 1/1; background: url(${card.image}) 50% 50% no-repeat; background-size: cover;`">
            </div>
          </v-col>

          <div class="w-100 h-100 pa-4 d-flex flex-column justify-space-between">
            <div>
              <h3 style="line-height: 1.3;">{{ card.title }}</h3>
              <div class="mt-1">
                {{ card.description }}
              </div>
            </div>

            <div class="w-100">
              <div class="mt-2">Цена:
                <b>{{ card.price }}</b>
              </div>
  
              <v-btn class="w-100 mt-3 text-black rounded-lg elevation-0" variant="outlined" :ripple="false">
                Заказать
              </v-btn>
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