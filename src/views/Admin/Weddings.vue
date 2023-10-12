<script setup>
import { ref } from "vue";

let weddingRequests = ref([
    {
        date: '10.10.2023',
        event: 'Свадьба на 41 человека',
        email: "oneemail@gmail.com",
        phone: "89127528877",
    },
    {
        date: '18.10.2023',
        event: 'Юбилей 31 человека',
        email: "anotheremail@gmail.com",
        phone: "89127627768",
    },
    {
        date: '10.11.2023',
        event: 'Корпоратив 19 человек',
        email: "anotheroneemail@gmail.com",
        phone: "89124627711",
    },
])
</script>
<template>
    <v-row>
        <v-col cols="12">
            Журнал свадеб
        </v-col>
        <v-col cols="12">
            <v-btn to="/admin/product-form">
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
                            Дата Мероприятия
                        </th>
                        <th class="text-left">
                            Событие
                        </th>
                        <th class="text-left">
                            Email
                        </th>
                        <th class="text-left">
                            Телефон
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in weddingRequests">
                        <td>{{ item.date }}</td>
                        <td>{{ item.event }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</template>