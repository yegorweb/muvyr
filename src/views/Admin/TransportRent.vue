<script setup>
import { ref } from "vue";
let list = ref([{
    name: 'Прокат велосипедов',
    customer: 'Иван Шутов',
    time: '1 час',
    data: '12.10.2023',
    totalPrice: '150р.'
},
{
    name: 'Прокат велосипедов',
    customer: 'Савелий Шутов',
    time: '2 час',
    data: '10.10.2023',
    totalPrice: '300р.'
},
{
    name: 'Прокат электромобилей',
    customer: 'Георгий Дзюин',
    time: '3 час',
    data: '8.10.2023',
    totalPrice: '450р.'
},
{
    name: 'Прокат батута',
    customer: 'Егор Арбузов',
    time: '2 час',
    data: '4.10.2023',
    totalPrice: '550р.'
},])
</script>
<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Дата
                </th>
                <th class="text-left">
                    Название обьекта
                </th>
                <th class="text-left">
                    Пользователь
                </th>
                <th class="text-left">
                    Время пользования
                </th>
                <th class="text-left">
                    Итоговая цена
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list">
                <td>{{ item.data }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.customer }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.totalPrice }}</td>
            </tr>
        </tbody>
    </v-table>
    <v-row>
        <v-col cols="12" class="mt-3">
            <v-btn to="/admin/product-form">
                создать Объект проката
            </v-btn>
        </v-col>
    </v-row>
</template>