<script setup>
import { onMounted, ref, reactive } from 'vue';
import { useProperty } from '../store/property'
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

import VueDatePicker from '@vuepic/vue-datepicker'
import "@vuepic/vue-datepicker/dist/main.css";

const router = useRouter()
const propertyStore = useProperty()

let bookForm = reactive({
    email: '',
    phone: '',
    peopleCount: '',
    startBooking: null,
    endBooking: null
})

let bookModal = ref(false)
let property = ref({})

function sendRequest() {
    bookForm.startBooking = new Date(bookForm.startBooking).toLocaleDateString()
    bookForm.endBooking = new Date(bookForm.endBooking).toLocaleDateString()

    propertyStore.bookProperty(bookForm, property.value)
}

onMounted(async () => {
    property.value = await propertyStore.getById(router.currentRoute.value.query._id);
})
</script>
<template>
    <v-container>
        <back-button></back-button>

        <v-row v-if="property._id">
            <v-col cols="12" md="6">
                <v-carousel class="h-100" hide-delimiter-background hide-delimiters show-arrows="hover">
                    <v-carousel-item v-for="item in property.images">
                        <v-img :src="item"></v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="12" md="6">
                <b>{{ property.title }}</b>
                <span v-html="property.description"></span>
                <div>
                    Колличество человек: <b>{{ property.peopleCount }}</b>
                </div>
                <div>
                    Цена: <b>{{ property.price }}</b>
                </div>
                <div v-if="property.bookedBy.length > 0">
                    Даты: <br />
                    <v-chip v-for="book in property.bookedBy" style="font-size: 17px;">
                        <b>
                            {{ book.startBooking }}
                        </b>
                        -
                        <b>
                            {{ book.endBooking }}
                        </b>
                    </v-chip>
                </div>
                <div class="mt-6">
                    <v-btn @click="bookModal = true">заказать</v-btn>
                </div>
            </v-col>
        </v-row>

        <v-dialog v-model="bookModal">
            <v-container class="d-flex justify-center">
                <v-col cols="12" md="8" lg="4" class="pa-0">
                    <v-card class="pt-4 pb-6 pr-6 pl-6 rounded-lg">
                        <h3 class="w-100 text-center">
                            Заказать
                        </h3>
    
                        <v-row class="mt-2">
                            <v-col cols="12">
                                Ваш email
                                <v-text-field variant="outlined" density="compact" v-model="bookForm.email" hide-details></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                Телефон
                                <v-text-field variant="outlined" density="compact" v-model="bookForm.phone" hide-details></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                Количество людей
                                <v-text-field variant="outlined" density="compact" v-model="bookForm.peopleCount" hide-details></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                Начало бронирования
                                <VueDatePicker locale="ru" v-model="bookForm.startBooking" class="mb-1"
                                    minutes-grid-increment="2" input-class-name="dp-custom-input" placeholder="дата и время"
                                    :transitions="{
                                        open: 'fade',
                                        close: 'fade',
                                    }" />
                            </v-col>
                            <v-col cols="12">
                                Конец бронирования
                                <VueDatePicker locale="ru" v-model="bookForm.endBooking" class="mb-1"
                                    minutes-grid-increment="2" input-class-name="dp-custom-input" placeholder="дата и время"
                                    :transitions="{
                                        open: 'fade',
                                        close: 'fade',
                                    }" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="auto">
                                <v-btn variant="outlined" :ripple="false" @click="sendRequest">отправить</v-btn>
                            </v-col>

                            <v-col cols="auto">
                                <v-btn @click="bookModal = false" :ripple="false" variant="plain">закрыть</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-container>
        </v-dialog>
    </v-container>
</template>