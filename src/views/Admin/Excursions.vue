<script setup>
import { useProduct } from '@/store/product';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import { watch } from 'vue';
import { ref } from 'vue';

let productStore = useProduct()

let excursion = ref(null)
let total = ref(0)
let date = ref(Date.now())
watch(date, (value) => {
    date.value = new Date(value).getMilliseconds()
})

let status = ref(false)

/*
{
    total: number,
    excursion: id,
    date: number
}
*/
</script>

<template>
    <v-btn>
        Добавить экскурсию
    </v-btn>

     <v-dialog @submit.prevent="status = false" v-model="status" activator="parent">
        <v-container>
            <v-col cols="12" md="8" lg="6" class="pa-0">
                <v-card class="w-100 rounded-lg">
                    <h6 class="w-100 text-center">Мы провели экскурсию</h6>

                    <v-form class="mt-2">
                        <v-row>
                            <v-col>
                                <v-select
                                    v-model="excursion"
                                    :items="productStore.products"
                                    item-title="name"
                                    item-value="_id"
                                />
                            </v-col>

                            <v-col>
                                <VueDatePicker v-model="date" />
                            </v-col>

                            <v-col>
                                <v-text-field
                                    v-model="total"
                                    type="number"
                                />
                            </v-col>
                        </v-row>

                        <v-btn type="submit">
                            Отправить
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-container>
    </v-dialog>
</template>