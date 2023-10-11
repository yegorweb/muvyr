<script setup>
import { onMounted, ref } from 'vue';
import { useProperty } from '../store/property'
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

const router = useRouter()

const propertyStore = useProperty()

let property = ref({})

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

            </v-col>
        </v-row>
    </v-container>
</template>