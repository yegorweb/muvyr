<script setup>
import { ref } from 'vue';


let excursions = ref([{
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
/*
{
    total: number,
    excursion: id,
    date: number
}
*/
</script>

<template>
    <v-row>
        <v-col cols="12">
            Журнал экскурсий
        </v-col>
        <v-col cols="12">
            <v-btn>
                + добавить
            </v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">
                            Название
                        </th>
                        <th class="text-left">
                            Цена
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="excursion in excursions">
                        <td>{{ excursion.title }}</td>
                        <td>{{ excursion.price }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
    <!--
     <v-dialog @submit.prevent="status = false" v-model="status" activator="parent">
        <v-container>
            <v-col cols="12" md="8" lg="6" class="pa-0">
                <v-card class="w-100 rounded-lg">
                    <h6 class="w-100 text-center">Мы провели экскурсию</h6>

                    <v-form class="mt-2">
                        <v-row>
                            <v-col>
                                <v-select v-model="excursion" :items="productStore.products" item-title="name"
                                    item-value="_id" />
                            </v-col>

                            <v-col>
                                <VueDatePicker v-model="date" />
                            </v-col>

                            <v-col>
                                <v-text-field v-model="total" type="number" />
                            </v-col>
                        </v-row>

                        <v-btn type="submit">
                            Отправить
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-container>
    </v-dialog> -->
</template>