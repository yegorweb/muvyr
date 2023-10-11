import { defineStore } from 'pinia'
import ProductService from '@/service/ProductService'

export const useProduct = defineStore('product', {
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
        async uploadProductImage(images) {
            try {
                let response = await ProductService.uploadProductImage(images)

                return response
            } catch (error) {
                console.log(error);
            }
        }
    }
})