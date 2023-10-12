import { defineStore } from 'pinia'
import ProductService from '@/service/ProductService'
import { ref } from 'vue'

export const useProduct = defineStore('product', () => {
    let products = ref([])

    async function createProduct(newProduct) {
        try {
            let response = await ProductService.createProduct(newProduct)

            return response.data._id
        } catch (error) {
            console.log(error);
        }
    }

    async function getAllProducts() {
        try {
            let response = await ProductService.getAllProducts()
            products.value = response.data

            return
        } catch (error) {
            console.log(error);
        }
    }

    async function getAllOrders() {
        try {
            let response = await ProductService.getAllOrders()
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    async function createOrder(order) {
        try {
            let response = await ProductService.createOrder(order)
        } catch (error) {
            console.log(error);
        }
    }    

    return { products, createProduct, getAllProducts, createOrder, getAllOrders }
})