<script setup></script>
<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="8">
                <v-list nav>
                    <v-container>
                        <v-row class="pa-0">
                            <v-col cols="12">Кабинет администратора</v-col>
                        </v-row>
                        <v-row class="d-flex pa-0">
                            <v-col cols="4">
                                <v-list-item class="cursor-pointer" to="/admin">
                                    Домики
                                </v-list-item>
                            </v-col>
                            <v-col cols="4">
                                <v-list-item class="cursor-pointer" to="/admin/product">
                                    Молоко
                                </v-list-item>
                            </v-col>
                            <v-col cols="4">
                                <v-list-item class="cursor-pointer" to="/admin/property-fo">
                                    Мероприятия
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="8">
                <router-view />
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss" scoped></style>