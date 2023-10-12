<script setup>
import { ref } from "vue";
let list = ref([{
    data: '10.10.2023',
    name: 'Фестиваль коней',
    eventType: 'фестиваль',
    organizer: 'Мувыр'
},
{
    data: '13.10.2023',
    name: 'Фестиваль свиней',
    eventType: 'фестиваль',
    organizer: 'Мувыр'
},
{
    data: '16.10.2023',
    name: 'Фестиваль возрожденных деревень',
    eventType: 'фестиваль',
    organizer: 'Мувыр'
},
{
    data: '18.10.2023',
    name: 'Фестиваль огурца',
    eventType: 'фестиваль',
    organizer: 'ГлазовКультура'
},])
</script>
<template>
    <v-row>
        <v-col cols="12">
            Журнал мероприятий
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
                            Название
                        </th>
                        <th class="text-left">
                            Тип мероприятия
                        </th>
                        <th class="text-left">
                            Организатор
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list">
                        <td>{{ item.data }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.eventType }}</td>
                        <td>{{ item.organizer }}</td>
                    </tr>
                </tbody>
            </v-table>

        </v-col>
    </v-row>
</template>