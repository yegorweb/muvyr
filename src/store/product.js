import { defineStore } from 'pinia'
import ProductService from '@/service/ProductService'

export const useProperty = defineStore('property', {
    state: () => ({
        products: []
    }),
    getters: {
    },
    actions: {
        async createProduct(newProduct) {
            try {
                let response = await ProductService.createProduct(newProduct)

                return response.data._id
            } catch (error) {
                console.log(error);
            }
        },
        async getAllProducts() {
            try {
                let response = await ProductService.getAllProducts()
                this.product = response.data

                return
            } catch (error) {
                console.log(error);
            }
        },
    }
})