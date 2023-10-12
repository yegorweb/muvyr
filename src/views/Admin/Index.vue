<script setup>
import BackButton from '@/components/BackButton.vue';
import { useRouter } from "vue-router"


let router = useRouter()
</script>
<template>
    <v-container>

        <v-row class="d-flex justify-center">
            <v-col cols="12">
                <back-button></back-button>
            </v-col>
            <v-col cols="12">
                <v-list nav>
                    <v-container>
                        <v-row class="pa-0">
                            <v-col cols="12">Кабинет администратора</v-col>
                        </v-row>
                        <v-row class="d-flex pa-0">
                            <v-col cols="12"
                                style="display: flex; flex-direction: row; overflow-x: scroll; font-weight: bold">
                                <v-list-item class="cursor-pointer mr-2" to="/admin"
                                    :active="router.currentRoute.value.path == '/admin'">
                                    Домики
                                </v-list-item>
                                <v-list-item class="cursor-pointer mr-2" to="/admin/product">
                                    Молоко
                                </v-list-item>
                                <v-list-item class="cursor-pointer mr-2" to="/admin/excursions">
                                    Экскурсии
                                </v-list-item>
                                <v-list-item class="cursor-pointer mr-2" to="/admin/transport-rent">
                                    Прокат
                                </v-list-item>
                                <v-list-item class="cursor-pointer mr-2" to="/admin/weddings">
                                    Свадьбы
                                </v-list-item>
                                <v-list-item class="cursor-pointer mr-2" to="/admin/event">
                                    Мероприятия
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12">
                <router-view />
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss" scoped></style>