<script setup>
import { ref } from 'vue';
let dialog = ref(false)
</script>

<template>
  <v-container><v-row justify="center">
      <v-btn @click="dialog = true">Заказать</v-btn>
      <v-dialog v-model="dialog" persistent width="1024">
        <v-card>
          <v-card-title class="text-center">
            <span class="text-h5">Заказать мероприятие</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Электроная почта" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Мероприятие" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="телефон" required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Дата и время" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="text" @click="dialog = false">
              Закрыть
            </v-btn>
            <v-btn variant="text" @click="dialog = false">
              отправить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row></v-container>
</template>
