<script setup>
import BackButton from '@/components/BackButton.vue';

import { ref } from "vue"

let events = ref([
  {
    image: "https://sun9-65.userapi.com/impg/-Bj-2slpXfEHvSGy0agNK-zz3yY5VP1Tpv1ngw/QCNApf_PDIY.jpg?size=853x1280&quality=95&sign=51cce17f2df938e0537543ab03239a35&type=album",
    title: "Фестиваль возрожденных деревень",
    eventType: "фестиваль",
    description:
      `<p>Фестиваль возрожденных деревень - это площадка, где представлены все
сферы жизни деревни - быт, культура, работа. В рамках фестиваля будут
представлены тематические площадки, секции, экскурсии:</p>
      <b>«Быт»</b><p>- жилой дом, усадьба - устройство дома, архитектура, интерьер, печь, наличники, мебель;</p><p>- животное и хозяйственное подворье</p>
      <b>«Культура»</b>
      <p>- народный костюм;</p>
      <p>- декоративно-прикладное искусство, ремесла;</p>
      <p>- исполнительское мастерство (танец, пение, сказительство, музыкальные
инструменты, театр/сказки);</p>
      <p>- обряды;</p>
      <p>- народные игры;</p>
      <p>- физическая культура (спортивные игры).</p>
      
      <b>«Работа»</b>

      <p>- земледелие, обработка земли;</p>
      <p>- растениеводство;</p>
      <p>- пчеловодство;</p>
      <p>- молочная ферма;</p>
      <p>- ремесленные мастерские (деревообработка, кузнечное дело, ткачество,
гончарное дело);</p>
      <p>- механизация, ИТ (трактора, дроны и тд);</p>
      <p>- конный транспорт;</p>
      <p>- рыбалка.</p>
    `,
    date: "10/11/2023",
    price: "бесплатно",
    ageLimit: "6+",
    organizer: "Мувыр"
  },
  {
    image: "https://sun9-64.userapi.com/-GFnN8CH6E4d4rq4SAgA8F_CEueR71kE5q0c0g/BjLQo40t14A.jpg",
    title: "Фестиваль коней",
    eventType: "фестиваль",
    description:
      `<p>Фестиваль коней - это площадка, где представлены все
сферы жизни деревни - быт, культура, работа. В рамках фестиваля будут
представлены тематические площадки, секции, экскурсии:</p>
      <b>«Быт»</b><p>- жилой дом, усадьба - устройство дома, архитектура, интерьер, печь, наличники, мебель;</p><p>- животное и хозяйственное подворье</p>
      <b>«Культура»</b>
      <p>- народный костюм;</p>
      <p>- декоративно-прикладное искусство, ремесла;</p>
      <p>- исполнительское мастерство (танец, пение, сказительство, музыкальные
инструменты, театр/сказки);</p>
      <p>- обряды;</p>
      <p>- народные игры;</p>
      <p>- физическая культура (спортивные игры).</p>
      
      <b>«Работа»</b>

      <p>- земледелие, обработка земли;</p>
      <p>- растениеводство;</p>
      <p>- пчеловодство;</p>
      <p>- молочная ферма;</p>
      <p>- ремесленные мастерские (деревообработка, кузнечное дело, ткачество,
гончарное дело);</p>
      <p>- механизация, ИТ (трактора, дроны и тд);</p>
      <p>- конный транспорт;</p>
      <p>- рыбалка.</p>
    `,
    date: "10/11/2023",
    price: "бесплатно",
    ageLimit: "6+",
    organizer: "Мувыр"
  },
])

</script>

<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <back-button></back-button>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center" style="font-size: 35px;">
        <span style="font-family: 'Dela Gothic One';">Мероприятия</span>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="10" lg="8" v-for="event of events">
        <v-card class="h-100 d-flex flex-column">
          <v-row>
            <v-col cols="12" md="6" lg="4">
              <v-img style="border-radius: 0 0 12px 0;" :src="event.image"></v-img>
            </v-col>
            <v-col cols="12" md="6" lg="8">
              <div class="pa-4">
                <h2>{{ event.title }}</h2>
                <div class="">Тип события: {{ event.eventType }}</div>
                <div v-html="event.description" class="my-3"></div>
                <div>Организатор: {{ event.organizer }}</div>
                <div>Дата: {{ event.date }}</div>
                <div>Цена: {{ event.price }}</div>
                <div>{{ event.ageLimit }}</div>
              </div>
            </v-col>
          </v-row>
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