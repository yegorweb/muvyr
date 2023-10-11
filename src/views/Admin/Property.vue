<script setup>
import { onMounted } from 'vue'

import { useProperty } from '../../store/property'

let propertyStore = useProperty()

onMounted(async () => {
  await propertyStore.getAllProperty();
})
</script>
<template>
    <v-row>
        <v-col cols="12">
            {{ propertyStore.property }}
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-btn to="/admin/property-form">
                + добавить
            </v-btn>
        </v-col>
    </v-row>
</template>