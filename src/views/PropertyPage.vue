<script setup>
import { onMounted, ref } from 'vue';
import { useProperty } from '../store/property'
import { useRouter } from 'vue-router';

const router = useRouter()

const propertyStore = useProperty()

let property = ref({})

onMounted(async () => {
    property.value = await propertyStore.getById(router.currentRoute.value.query._id)
})
</script>
<template>
    <div>
        {{ property }}
    </div>
</template>