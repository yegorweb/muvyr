<script setup>
import { onMounted } from "vue";
import { useProduct } from '../store/product'
import { ref } from "vue";

let productStore = useProduct()

let products = ref([]);

onMounted(async () => {
  await productStore.getAllProducts();
  products.value = productStore.products
})
</script>

<template>
  <div>

    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="card in products">
          <v-card class="h-100 d-flex flex-column">
            <v-col class="pa-0">
              <div
                :style="`aspect-ratio: 1/1; background: url(${card.image}) 50% 50% no-repeat; background-size: cover;`">
              </div>
            </v-col>

            <div class="w-100 h-100 pa-4 d-flex flex-column justify-space-between">
              <div>
                <h3>{{ card.name }}</h3>
                {{ card.description }}
              </div>
              <div class="mt-3">
                <div>Цена:
                  <b>{{ card.price }} руб</b>
                </div>
                <div v-if="card.mass?.length">Вес:
                  <b>{{ card.mass }}</b>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center" cols="12">
          <h3>Карта магазинов</h3>
        </v-col>
      </v-row>
    </v-container>
    <div style="overflow: hidden;"><a href="https://yandex.ru/maps/44/izhevsk/?utm_medium=mapframe&utm_source=maps"
        style="color:#eee;font-size:12px;position:absolute;top:0px;">Ижевск</a><a
        href="https://yandex.ru/maps/44/izhevsk/?ll=53.287342%2C56.880897&mode=usermaps&source=constructorLink&um=constructor%3Ab01ee8bc4a574f41b741e1503477625cbfa738f229e7bf365d7f5af115ae0982&utm_medium=mapframe&utm_source=maps&z=12"
        style="color:#eee;font-size:12px;position:absolute;top:14px;">Карта Ижевска с улицами и номерами домов —
        Яндекс Карты</a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=53.287342%2C56.880897&mode=usermaps&source=constructorLink&um=constructor%3Ab01ee8bc4a574f41b741e1503477625cbfa738f229e7bf365d7f5af115ae0982&utm_source=share&z=12"
        frameborder="0" allowfullscreen="true" height="450" style="position: relative; width: 100%"></iframe>
    </div>
  </div>
</template>
<style scoped>
.v-card {
  border-radius: 12px !important;
  -webkit-box-shadow: 0px 10px 40px 5px rgba(34, 60, 80, 0.1) !important;
  -moz-box-shadow: 0px 10px 40px 5px rgba(34, 60, 80, 0.1) !important;
  box-shadow: 0px 10px 40px 5px rgba(34, 60, 80, 0.1) !important;
}
</style>
