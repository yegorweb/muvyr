import { defineStore } from 'pinia'
import PropertyService from '@/service/PropertyService'

export const useProperty = defineStore('property', {
    state: () => ({
        property: []
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
        async getAllProperty() {
            try {
                let response = await PropertyService.getAllProperty()
                this.property = response.data

                return
            } catch (error) {
                console.log(error);
            }
        }
    }
})