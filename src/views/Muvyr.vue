<script setup>
import HeaderForHome from '@/components/HeaderForHome.vue'
import { useRouter } from 'vue-router';

let router = useRouter()
</script>

<template>
  <div class="wrapper">
    <video autoplay muted loop id="myVideo">
      <source src="https://storage.yandexcloud.net/goroda-img/temp-plakat-city/video.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

    <v-container style="height: 100vh !important; position: relative; bottom: 0; left: 0; top: 0; right: 0;">
      <div class="w-100 h-100 d-flex flex-column justify-space-between align-start">
        <div></div>
        
        <div class="w-100">
          <v-row class="justify-center">
            <v-col cols="auto">
              <div class="gray-container title">
                Возрождённая деревня
              </div>
            </v-col>
          </v-row>
        </div>

        <div class="list gray-container d-flex flex-column">
          <div @click="router.push('/')">Дер. МУВЫР</div>
          <div @click="router.push('/milk')">МОЛОКО</div>
          <div @click="router.push('/transport-rent')">ПРОКАТ</div>
          <div @click="router.push('/wedding')">СВАДЬБЫ</div>
          <div @click="router.push('/excursions')">ЭКСКУРСИИ</div>
          <div @click="router.push('/events')">МЕРОПРИЯТИЯ</div>
          <div @click="router.push('/property-rent')">БРОНИРОВАНИЕ</div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
.wrapper {
  min-height: 100dvh;
  min-width: 100vw;
  background: #1d421e;
  position: relative;
}
.list {
  margin-bottom: 20px;
}
.list > * {
  color: #fff;
  font-family: 'Marmelad';
  font-size: clamp(1rem, -0.0294rem + 2.9412vw, 1.625rem);
  cursor: pointer;
  line-height: 1.5;
  user-select: none;
  transition: all .15s;

  &:hover {
    color: #96c097;
  }
}
.gray-container {
  padding: 16px;
  background: rgba($color: #000000, $alpha: 0.35);
  border-radius: 12px;
}
.title {
  padding: 16px;
  line-height: 1;
  font-family: 'Dela Gothic One', cursive;
  user-select: none;
  font-size: clamp(1.75rem, -3.6029rem + 15.2941vw, 5rem);
  color: #FFFFFF;
  text-align: center;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}
</style>