import $api from "../plugins/axios";

export default {
    createProduct(newProduct) {
        return $api.post('/product/add-product', newProduct)
    }
}