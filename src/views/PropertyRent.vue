<script setup>
import { onMounted } from "vue";
import { useProperty } from '../store/property'
import { ref } from "vue";

let propertyStore = useProperty()

let properties = ref([]);

onMounted(async () => {
    await propertyStore.getAllProperty();
    properties.value = propertyStore.property
})
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4" md="3" v-for="card in properties">
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
