<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let router = useRouter()

let drawer = ref(false)
</script>

<template>
    <v-app-bar elevation="0">
        <v-container>
            <div class="w-100 d-flex justify-space-between align-center">
                <Transition name="slide-fade-reverse" appear>
                    <div class="d-flex align-center cursor-pointer" @click="router.push('/')">
                        <img src="@/assets/logo.svg" style="height: 40px;" alt="">

                        <span class="logo-text" style="user-select: none;">МУВЫР</span>
                    </div>
                </Transition>

                <Transition name="slide-fade" appear>
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer" :ripple="false"></v-app-bar-nav-icon>
                </Transition>
            </div>
        </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right" temporary>
        <v-list>
            <v-list-item class="cursor-pointer" to="/info" exact :ripple="false">
                Деревня Мувыр
            </v-list-item>
            <v-list-item class="cursor-pointer" to="/excursions" exact :ripple="false">
                Экскурсии
            </v-list-item>
            <v-list-item class="cursor-pointer" to="/transport-rent" exact :ripple="false">
                Прокат
            </v-list-item>
            <v-list-item class="cursor-pointer" to="/property-rent" exact :ripple="false">
                Бронирование
            </v-list-item>
            <v-list-item class="cursor-pointer" to="/milk" exact :ripple="false">
                Молоко
            </v-list-item>
            <v-list-item class="cursor-pointer" to="/events" exact :ripple="false">
                Мероприятия
            </v-list-item>
            <v-list-item class="cursor-pointer" to="/wedding" exact :ripple="false">
                Свадьбы 
            </v-list-item>
            <v-list-item class="cursor-pointer" to="/contacts" exact :ripple="false">
                Контакты 
            </v-list-item>
            <v-list-item class="cursor-pointer" to="/investors" exact :ripple="false">
                Инвесторам 
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
.logo-text {
    font-family: Marmelad;
    color: #000000;
    margin-left: 18px;
    font-size: 26px;
}
.v-navigation-drawer{
    height: 50% !important;
}
</style>