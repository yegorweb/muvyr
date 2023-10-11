<script setup>
import { ref } from 'vue'
// date, title, фасовка, точка, ее адрес
let productRequests = ref([
    {
        date: '10/11/2023',
        orderDate: '13/11/2023',
        goods: [
            { title: 'Сыр мягкий Мувырский', price: '250 руб', count: 100 },
            { title: 'Сметана', price: '100 руб', count: 130 },
        ],
        packaging: '500 г, 250 г',
        shopTitle: 'Погода в доме',
        shopAddress: 'г. Ижевск, ул. 9 января, 213,',
        sum: '38000 руб'
    },
    {
        date: '14/11/2023',
        orderDate: '17/11/2023',
        goods: [
            { title: 'Сметана', price: '100 руб', count: 120 },
            { title: 'Сыр мягкий Мувырский', price: '250 руб', count: 100 },
        ],
        packaging: '500 г, 250 г',
        shopTitle: 'Карамель',
        shopAddress: 'г.Ижевск, ул.Ракетная, 24',
        sum: '37000 руб'
    },
    {
        date: '15/11/2023',
        orderDate: '16/11/2023',
        goods: [
            { title: 'Сметана', price: '100 руб', count: 75 },
            { title: 'Сыр мягкий Мувырский', price: '250 руб', count: 200 },
        ],
        packaging: '500 г, 250 г',
        shopTitle: 'Карамель',
        shopAddress: 'г.Ижевск, ул.Ракетная, 24',
        sum: '57500 руб'
    },
])
</script>
<template>
    <v-row>
        <v-col cols="12">
            Журнал заказов молочной продукции
        </v-col>
        <v-col cols="12">
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">
                            Дата заказа
                        </th>
                        <th class="text-left">
                            Дата доставки
                        </th>
                        <th class="text-left">
                            Номенклатура
                        </th>
                        <th class="text-left">
                            Фасовка
                        </th>
                        <th class="text-left">
                            Название точки
                        </th>
                        <th class="text-left">
                            Адрес точки
                        </th>
                        <th class="text-left">
                            Сумма
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="request in productRequests">
                        <td>{{ request.date }}</td>
                        <td>{{ request.orderDate }}</td>
                        <td>
                            <span v-for="good in request.goods" class="mx-2">
                                {{ good.title }} {{ good.price }} x {{ good.count }}
                            </span>
                        </td>
                        <td>{{ request.packaging }}</td>

                        <td>{{ request.shopTitle }}</td>
                        <td>{{ request.shopAddress }}</td>
                        <td>{{ request.sum }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-btn to="/admin/product-form">
                + добавить
            </v-btn>
        </v-col>
    </v-row>
</template>