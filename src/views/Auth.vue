<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router"

let email = ref('******')
let password = ref('**********')

let router = useRouter()
function login() {
    localStorage.setItem('isAuth', 'true')
    router.push('/admin')
}
</script>
<template>
    <v-form @submit.prevent="login">
        <v-row class="d-flex justify-center">
            <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="email" label="email"></v-text-field>
                <v-text-field v-model="password" label="пароль"></v-text-field>

                <v-btn type="submit">вход</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>