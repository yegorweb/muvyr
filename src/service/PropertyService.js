import $api from "../plugins/axios";

export default {
    createProperty(newProperty) {
        return $api.post("/property/add-property", newProperty)
    },
    getAllProperty() {
        return $api.post('/property/get-all-property')
    },
    uploadPropertyImages(images) {
        return $api.post('/property/upload-property-images', images)
    }
}