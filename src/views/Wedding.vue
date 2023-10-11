<script setup>
import BackButton from '@/components/BackButton.vue';
import { ref } from 'vue';
let bookEventDialog = ref(false)
let images = ref([{
  image: 'https://sun9-45.userapi.com/impg/YvoyfjBZYHJhaUWqKAexxzN8Nqub4umbFeNWrg/a6RI9SKvS30.jpg?size=1440x2160&quality=95&sign=12c628bc4977f7501dbc9e92a8882446&type=album'
},
{
  image: 'https://sun9-56.userapi.com/impg/SjA1isW9wUIdq73NXpr-iWZNHauwtaaiyZiwhQ/NfU2LDQGzMA.jpg?size=1440x2160&quality=95&sign=23a43a2cda02c609214045a14703dd33&type=album'
},
{
  image: 'https://sun9-46.userapi.com/impg/Z_RSgVqtGYh-5PmxqyXoqmu_sRT1N3kxIa1YeA/e-DTT6WFaIw.jpg?size=1440x2160&quality=95&sign=d32e4f94b7d59ddced3c5f916b15619e&type=album'
},
{
  image: 'https://sun9-42.userapi.com/impg/2iHTMy4umZRinW7P-9SKL1XPBRvVBg_KDi0_kg/PfW0pFuq880.jpg?size=1440x2160&quality=95&sign=370eb9ebf3d177be0d27407d8866c8e6&type=album'
},
{
  image: 'https://sun9-45.userapi.com/impg/4J8-Fw7wy5DwRUL4G3KpgJKZhCNblU8k5VzrUg/9IIoVP_58hY.jpg?size=1440x2160&quality=95&sign=e093df16df0e069c7aa6d09bb2c1dbe6&type=album'
},
{
  image: 'https://sun9-56.userapi.com/impg/--TUu3JiFavjfEVxUu5IoUCUsjHArtfffUD0jw/ye2_ow7ONcg.jpg?size=1440x2160&quality=95&sign=00140807a8973070df79a0e411f42740&type=album'
},
{
  image: 'https://sun9-29.userapi.com/impg/OIHclMgAOQFPmo8RTr84WDTHHzlGf5KShtEx_Q/A4RlUkrS_O0.jpg?size=1440x2160&quality=95&sign=03504340752ebcfa730d62fc84d5ebf8&type=album'
},
{
  image: 'https://sun9-36.userapi.com/impg/NyGNC3UPYM2jddWFmVXFbumRqa0npXTZ-qMBYQ/encLihfuM2c.jpg?size=1439x2160&quality=95&sign=a17df75cbb8a21f677dff4704e5f877c&type=album'
},
{
  image: 'https://sun9-19.userapi.com/impg/ANLYOfDqXOJrD9eaxSm9_3kKpYLY200FoaML2w/oSuQESK9sFs.jpg?size=1439x2160&quality=95&sign=0f807f3a3552e345068b77922a86fc0e&type=album'
},
])
</script>

<template>
  <v-container>
    <back-button></back-button>
    
    <v-row>
      <v-col cols="12" class="text-center" style="font-size: 35px;">
        <span style="font-family: 'Dela Gothic One';">Свадьбы</span>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
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
    <v-row>
      <v-col cols="6" sm="4" md="3" v-for="item in images">
        <v-img :src="item.image" aspect-ratio="1/1" cover></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.v-img {
  border-radius: 12px !important;
}
</style>
