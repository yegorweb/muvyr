<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()
</script>

<template>
    <v-footer style="max-height: 40px !important;" class="wrapper">
        <v-container class="pt-0 pb-0">
            <v-row class="justify-center">
                <v-col cols="auto">
                    <h3 @click="router.push('/contacts')" class="link">
                        Контакты
                    </h3>
                </v-col>

                <v-col cols="auto">
                    <h3 @click="router.push('/investors')" class="link">
                        Инвесторам
                    </h3>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<style lang="scss" scoped>
.wrapper {
    z-index: 4;
    width: 100vw;
    padding: 40px 0;
    background: #242424;
}
.link {
    font-family: 'Dela Gothic One';
    color: #FFFFFF;
    padding: 4px;
    cursor: pointer;
}
</style>