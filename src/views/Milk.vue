<script setup>
import { useProduct } from '../store/product'
import { ref } from "vue";
import { useCart } from "@/store/cart";
import BackButton from "@/components/BackButton.vue";

import VueDatePicker from '@vuepic/vue-datepicker'
import "@vuepic/vue-datepicker/dist/main.css";

let productStore = useProduct()
let cartStore = useCart()

let products = ref(productStore.products);

let date = ref(null)

async function submit() {
  let total = []
  cartStore.cart.map(item => total.push(`${item.mass} x ${item.amount}`))
  total = total.join(', ')

  await productStore.createOrder({
    date: new Date().toLocaleDateString(),
    orderDate: new Date(date.value).toLocaleDateString(),
    goods: cartStore.cart,
    packaging: total,
    shopTitle: 'Карамель',
    shopAddress: 'г.Ижевск, ул.Ракетная, 24',
    sum: cartStore.total
  }).then(() => {
    date.value = null
    cartStore.dropCart()
  })
}
</script>

<template>
  <div>
    <v-container>
      <back-button></back-button>
      
      <v-row>
        <v-col cols="12" class="text-center" style="font-size: 35px;">
          <span style="font-family: 'Dela Gothic One';">Молоко</span>
        </v-col>
      </v-row>

      <v-row class="align-center justify-end">
        <v-col cols="auto">
          <div class="d-flex align-center font-weight-medium">
            Сумма заказа: {{ cartStore.total }} руб
          </div>
        </v-col>

        <v-col cols="auto" class="d-flex align-center">
          <div>
            <VueDatePicker v-model="date" locale="ru" minutes-grid-increment="2" input-class-name="dp-custom-input"
              placeholder="дата доставки" :transitions="{
                open: 'fade',
                close: 'fade',
              }" />
          </div>

          <v-btn @click="submit" variant="outlined" class="ml-4" :disabled="!date">заказать</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in products">
          <v-card class="h-100 d-flex flex-column">
            <v-col class="pa-0">
              <div
                :style="`aspect-ratio: 1/1; background: url(${card.image}) 50% 50% no-repeat; background-size: cover;`">
              </div>
            </v-col>

            <div class="w-100 h-100 pl-4 pt-4 pr-4 d-flex flex-column justify-space-between">
              <div>
                <h3>{{ card.title }}</h3>
                <div style="line-height: 1.3;">{{ card.description }}</div>
              </div>

              <div class="mt-3">
                <div>Цена:
                  <b>{{ card.price }}</b>
                </div>
                <div v-if="card.mass?.length">
                  <b>{{ card.mass }}</b>
                </div>
              </div>

              <div class="w-100 d-flex flex-column align-stretch justify-end" style="height: 60px;">
                <v-btn class="w-100 mt-3 mb-3 text-black rounded-lg elevation-0" variant="outlined" :ripple="false"
                  v-if="!cartStore.cart.some(item => item._id === card._id)" @click="cartStore.addItem(card)">
                  Добавить
                </v-btn>

                <v-row v-else class="justify-center align-center">
                  <v-col cols="auto">
                    <v-btn variant="plain" :ripple="false" icon="mdi-minus"
                      @click="cartStore.amountDown(card._id)"></v-btn>
                  </v-col>

                  <v-col cols="3" class="text-center" style="font-family: 'Dela Gothic One';">
                    {{ cartStore.cart.find(milk => milk._id === card._id).amount }}
                  </v-col>

                  <v-col cols="auto">
                    <v-btn variant="plain" :ripple="false" icon="mdi-plus" @click="cartStore.amountUp(card._id)"></v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-center mt-10" cols="12">
          <h2>Карта магазинов</h2>
        </v-col>
      </v-row>
    </v-container>

    <div style="overflow: hidden;">
      <a href="https://yandex.ru/maps/44/izhevsk/?utm_medium=mapframe&utm_source=maps"
        style="color:#eee;font-size:12px;position:absolute;top:0px;">
        Ижевск
      </a>
      <a href="https://yandex.ru/maps/44/izhevsk/?ll=53.287342%2C56.880897&mode=usermaps&source=constructorLink&um=constructor%3Ab01ee8bc4a574f41b741e1503477625cbfa738f229e7bf365d7f5af115ae0982&utm_medium=mapframe&utm_source=maps&z=12"
        style="color:#eee;font-size:12px;position:absolute;top:14px;">Карта Ижевска с улицами и номерами домов —
        Яндекс Карты
      </a>
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
