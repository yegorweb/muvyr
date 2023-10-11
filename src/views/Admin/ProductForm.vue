<script setup>
import { reactive, ref } from 'vue'
import ImageCropper from '../../components/ImageCropper.vue'

import { useRouter } from 'vue-router';

import { useProperty } from '@/store/property';

const router = useRouter()

let propertyStore = useProperty()

let visibleCropperModal = ref(false)
let previews = ref([])
let blobImages = []

function deletePreview(preview) {
    let i = previews.value.indexOf(preview)
    if (i != -1) {
        previews.value.splice(i, 1)
        blobImages.splice(i, 1)
    }
}

function addPreview(blob) {
    visibleCropperModal.value = false;
    blobImages.push(blob);

    let reader = new FileReader();

    reader.readAsDataURL(blob);
    reader.onloadend = function () {
        let base64data = reader.result;
        previews.value.push(base64data);
    };
}

let form = reactive({
    title: '',
    // описание
    description: '',
    // объём, масса
    mass: '',
    price: '',
    image: '',
})
async function submit() {
    console.log(form);
    return
    let _id = await propertyStore.createProperty(form)

    let imagesFormData = new FormData();
    for (let i = 0; i < blobImages.length; i++) {
        imagesFormData.append(
            "poster-image",
            new File([blobImages[i]], _id + "_" + i + ".jpg"),
            _id + "_" + i + ".jpg"
        );
    }
    propertyStore.uploadPropertyImages(imagesFormData).then(() => {
        console.log('фотографии загружены')
    })
    router.push('/admin')
}
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                Название
                <v-text-field v-model="form.title"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex">
            <v-col cols="12">
                Описание
                <v-textarea v-model="form.description"></v-textarea>
            </v-col>
        </v-row>
        <v-row class="d-flex">
            <v-col cols="6">
                Масса/Объём
                <v-text-field v-model="form.mass"></v-text-field>
            </v-col>
            <v-col cols="6">
                Цена
                <v-text-field v-model="form.price"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex">
            <v-col cols="12" md="4">
                <v-btn> добавить фото
                    <v-dialog v-model="visibleCropperModal" activator="parent">
                        <v-row class="justify-center">
                            <v-col cols="12" md="8" lg="6">
                                <v-card class="pa-4 rounded-lg">
                                    <ImageCropper @addImage="addPreview" />

                                    <v-card-actions>
                                        <v-btn @click="visibleCropperModal = false" color="error" class="ml-auto">
                                            закрыть
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-dialog>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="preview in previews" class="d-flex" cols="12" sm="6" md="4">
                <v-img :src="preview" width="200" class="my-2">
                    <v-overlay :open-on-click="true" contained class="align-center justify-center" activator="parent">
                        <v-btn color="error" @click="deletePreview(preview)" icon>
                            <span class="mdi mdi-delete"></span>
                        </v-btn>
                    </v-overlay>
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <v-btn @click="submit">отправить</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>