import { defineStore } from 'pinia'
import PropertyService from '@/service/PropertyService'

export const useProperty = defineStore('property', {
    state: () => ({
        propertyArray: []
    }),
    getters: {
    },
    actions: {
        async createProperty(newProperty) {
            try {
                let response = await PropertyService.createProperty(newProperty)

                return response.data
            } catch (error) {
                console.log(error);
            }
        },
    }
})