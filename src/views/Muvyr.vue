<script setup>
import { useAppStore } from '@/store/app';
import { useRouter } from 'vue-router';

let app = useAppStore()
setTimeout(() => app.sawAnimation(), 100)

let router = useRouter()
</script>

<template>
  <div class="wrapper">
    <video autoplay muted loop preload="none" id="myVideo">
      <source src="https://storage.yandexcloud.net/goroda-img/temp-plakat-city/video.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

    <v-container style="position: absolute; bottom: 0; left: 0; top: 0; right: 0;">
      <div class="w-100 h-100 d-flex flex-column justify-space-between align-start" style="gap: 18px;">
        <div></div>
        
        <div class="w-100">
          <v-row class="justify-center">
            <v-col cols="auto">
              <Transition :name="app.saw_animation ? '' : 'slide-down'" appear>
                <div class="gray-container title">
                  Возрождённая деревня
                </div>
              </Transition>
            </v-col>
          </v-row>
        </div>

        <Transition :name="app.saw_animation ? '' : 'slide-up'" appear>
          <div class="list gray-container d-flex flex-column">
            <div :class="app.saw_animation ? '' : 'list-item-anim'" @click="router.push('/info')">Дер. МУВЫР</div>
            <div :class="app.saw_animation ? '' : 'list-item-anim'" @click="router.push('/milk')">МОЛОКО</div>
            <div :class="app.saw_animation ? '' : 'list-item-anim'" @click="router.push('/transport-rent')">ПРОКАТ</div>
            <div :class="app.saw_animation ? '' : 'list-item-anim'" @click="router.push('/wedding')">СВАДЬБЫ</div>
            <div :class="app.saw_animation ? '' : 'list-item-anim'" @click="router.push('/excursions')">ЭКСКУРСИИ</div>
            <div :class="app.saw_animation ? '' : 'list-item-anim'" @click="router.push('/events')">МЕРОПРИЯТИЯ</div>
            <div :class="app.saw_animation ? '' : 'list-item-anim'" @click="router.push('/property-rent')">БРОНИРОВАНИЕ</div>
          </div>
        </Transition>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: calc(100vh - 60px);
  background: url(/startImg.webp) 50% top 80px no-repeat;
  background-size: cover;
  position: relative;
}
.list {
  margin-bottom: 20px;
}
.list > * {
  color: #fff;
  font-family: 'Marmelad';
  font-size: clamp(1rem, 0.294rem + 2.9412vw, 1.625rem);
  cursor: pointer;
  line-height: 1.5;
  user-select: none;
  transition: all .15s;

  &:hover {
    color: #afd4b0;
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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%; 
  min-height: 100%;
}
</style>