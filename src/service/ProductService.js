import $api from "../plugins/axios";

export default {
    createProduct(newProduct) {
        return $api.post('/product/add-product', newProduct)
    },
    getAllProducts() {
        return $api.post('/product/get-all-products')
    }
}