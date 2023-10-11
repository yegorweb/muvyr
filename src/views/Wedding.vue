<script setup>
import BackButton from '@/components/BackButton.vue';
import { ref } from 'vue';
let bookEventDialog = ref(false)
</script>

<template>
  <v-container>
    <back-button></back-button>
    
    <v-row>
      <v-col cols="12" class="text-center" style="font-size: 35px;">
        <span style="font-family: 'Dela Gothic One';">Свадьбы</span>
      </v-col>
      <v-col cols="12">
        <v-btn @click="bookEventDialog = true">Заказать</v-btn>
        <v-dialog v-model="bookEventDialog" width="1024">
          <v-card class="pa-4" title="Заказать мероприятие">
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
              <v-btn variant="text" @click="bookEventDialog = false">
                Закрыть
              </v-btn>
              <v-btn variant="text" @click="bookEventDialog = false">
                отправить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
