import $api from "../plugins/axios";

export default {
    createProperty(newProperty) {
        return $api.post("/property/add-property", newProperty)
    },
}