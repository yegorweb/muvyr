import $api from "../plugins/axios";

export default {
    createProduct(newProduct) {
        return $api.post('/product/add-product', newProduct)
    },
    uploadProductImage(images) {
        return $api.post('/product/upload-product-image', images)
    }
}