import { defineStore } from 'pinia'
import PropertyService from '@/service/PropertyService'
import { ref } from 'vue'

export const useProperty = defineStore('property', () => {
    let property = ref([])

    async function createProperty(newProperty) {
        try {
            let response = await PropertyService.createProperty(newProperty)

            return response.data._id
        } catch (error) {
            console.log(error);
        }
    }

    async function getAllProperty() {
        try {
            let response = await PropertyService.getAllProperty()
            property.value = response.data

            return
        } catch (error) {
            console.log(error);
        }
    }

    async function uploadPropertyImages(images) {
        try {
            let response = await PropertyService.uploadPropertyImages(images)

            return response
        } catch (error) {
            console.log(error);
        }
    }

    async function bookProperty(bookForm, property) {
        try {
            let response = await PropertyService.bookProperty(bookForm, property.value)
            return response
        } catch (error) {
            console.log(error);
        }
    }

    async function getById(_id) {
        try {
            let response = await PropertyService.getById(_id)

            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    return { property, createProperty, getAllProperty, uploadPropertyImages, bookProperty, getById }
})