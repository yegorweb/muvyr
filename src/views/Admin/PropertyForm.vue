<script setup>
import { reactive } from 'vue'

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const options = reactive({
    theme: 'snow',
    modules: {
        clipboard: {
            allowed: {
                tags: ['a', 'b', 'strong', 'u', 's', 'i', 'p', 'br', 'ul', 'ol', 'li', 'span'],
                attributes: ['href', 'rel', 'target', 'class']
            },
            keepSelection: true,
            substituteBlockElements: true,
            magicPasteLinks: true,
            hooks: {
                uponSanitizeElement(node, data, config) {
                    console.log(node);
                },
            },
        },
    },
})

let form = reactive({
    title: '',
    // описание: локация, телевизор, холодильник, туалет, 
    description: '',
    // кол-во мест,
    peopleCount: null,
    // name - взрослый, детский; amount - цена
    price: null,
    images: '',
})
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
                <QuillEditor theme="snow" ref="quill" contentType="html" v-model:content="form.description" :toolbar="[
                    ['bold', 'italic', 'underline'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ color: ['#000000', '#ED413E'] }],
                    [{ align: [] }],
                ]" :options="options">

                </QuillEditor>
            </v-col>
        </v-row>
        <v-row class="d-flex">
            <v-col cols="6">
                Количество человек
                <v-text-field v-model="form.peopleCount"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex">
            <v-col cols="6">
                Цена
                <v-text-field v-model="form.price"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">

            </v-col>
        </v-row>
    </v-container>
</template>