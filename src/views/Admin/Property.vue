<script setup>
import { onMounted, ref } from 'vue'

import { useProperty } from '../../store/property'

let propertyStore = useProperty()

let list = ref([{
    data: '10.10.2023',
    name: 'Дом 1',
    period: '12.10.20023 - 16.10.2023',
    customer: 'Савелий Шутов',
    email: 'savelyyyysutov@gmail.com',
    phone: '89336949791',
},
{
    data: '13.10.2023',
    name: 'Дом 3',
    period: '18.10.20023 - 21.10.2023',
    customer: 'Гриша Дзюин',
    email: 'grishaaaadzy@gmail.com',
    phone: '8923231131',
},
{
    data: '16.10.2023',
    name: 'Дом 2',
    period: '19.10.20023 - 21.10.2023',
    customer: 'Роман Грачев',
    email: 'romagrach@gmail.com',
    phone: '88908988081',
},
{
    data: '21.10.2023',
    name: 'Дом 1',
    period: '22.10.20023 - 23.10.2023',
    customer: 'Егор Князев',
    email: 'egorkaknazz@gmail.com',
    phone: '89336322291',
}])

onMounted(async () => {
    await propertyStore.getAllProperty();
})
</script>
<template>
    <v-container>
        <v-row><v-table>
                <thead>
                    <tr>
                        <th class="text-left">
                            Дата заявки
                        </th>
                        <th class="text-left">
                            Название
                        </th>
                        <th class="text-left">
                            Период
                        </th>
                        <th class="text-left">
                            Имя покупателя
                        </th>
                        <th class="text-left">
                            Почта
                        </th>
                        <th class="text-left">
                            Телефон
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list">
                        <td>{{ item.data }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.period }}</td>
                        <td>{{ item.customer }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone }}</td>
                    </tr>
                </tbody>
            </v-table></v-row>
        <v-row class="mt-3">
            <v-col cols="12">
                <v-btn to="/admin/property-form">
                    добавить обьект
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>