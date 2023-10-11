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

                return response.data._id
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
        },
        async uploadPropertyImages(images) {
            try {
                let response = await PropertyService.uploadPropertyImages(images)

                return response
            } catch (error) {
                console.log(error);
            }
        },
        async bookProperty(bookForm, property) {
            try {
                let response = await PropertyService.bookProperty(bookForm, property)
                return response
            } catch (error) {
                console.log(error);
            }
        },
        async getById(_id) {
            try {
                let response = await PropertyService.getById(_id)

                return response.data
            } catch (error) {
                console.log(error);
            }
        }
    }
})