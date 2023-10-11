<script setup>
import { onMounted, ref, reactive } from "vue";
import { useProperty } from '../store/property'

import VueDatePicker from '@vuepic/vue-datepicker'
import "@vuepic/vue-datepicker/dist/main.css";

let propertyStore = useProperty()

let properties = ref([]);
let bookModal = ref(false)

let bookForm = reactive({
    email: '',
    phone: '',
    peopleCount: '',
    startBooking: null,
    endBooking: null
})

function sendRequest(property) {
    bookForm.startBooking = new Date(bookForm.startBooking).toLocaleDateString()
    bookForm.endBooking = new Date(bookForm.endBooking).toLocaleDateString()

    propertyStore.bookProperty(bookForm, property)
}

onMounted(async () => {
    await propertyStore.getAllProperty();
    properties.value = propertyStore.property
})
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4" md="3" v-for="card in  properties ">
                <v-card class="h-100 d-flex flex-column">
                    <v-col class="pa-0">
                        <div
                            :style="`aspect-ratio: 1/1; background: url(${card.images[0]}) 50% 50% no-repeat; background-size: cover;`">
                        </div>
                    </v-col>

                    <div class="w-100 h-100 pa-4 d-flex flex-column justify-space-between">
                        <div>
                            <h3>{{ card.title }}</h3>
                        </div>
                        <div class="mt-3">
                            <div>Кол-во мест:
                                <b>{{ card.peopleCount }} чел</b>
                            </div>
                            <div>Цена:
                                <b>{{ card.price }} руб</b>
                            </div>
                        </div>
                    </div>
                    <v-btn @click="bookModal = true">заказать</v-btn>

                    <v-dialog width="500" v-model="bookModal">
                        <v-card title="Заказать" class="pa-4">
                            <v-row>
                                <v-col cols="12">
                                    Ваш email
                                    <v-text-field v-model="bookForm.email"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    Телефон
                                    <v-text-field v-model="bookForm.phone"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    Количество людей
                                    <v-text-field v-model="bookForm.peopleCount"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    Начало бронирования
                                    <VueDatePicker locale="ru" v-model="bookForm.startBooking" class="mb-1"
                                        minutes-grid-increment="2" input-class-name="dp-custom-input"
                                        placeholder="дата и время" :transitions="{
                                            open: 'fade',
                                            close: 'fade',
                                        }" />
                                </v-col>
                                <v-col cols="12">
                                    Конец бронирования
                                    <VueDatePicker locale="ru" v-model="bookForm.endBooking" class="mb-1"
                                        minutes-grid-increment="2" input-class-name="dp-custom-input"
                                        placeholder="дата и время" :transitions="{
                                            open: 'fade',
                                            close: 'fade',
                                        }" />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn @click="sendRequest(card)">отправить</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-dialog>
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
