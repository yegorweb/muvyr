<script setup>
import BackButton from '@/components/BackButton.vue';
</script>

<template>
  <v-container>
    <back-button></back-button>
    
    <v-row>
      <v-col cols="12" class="text-center" style="font-size: 35px;">
        <span style="font-family: 'Dela Gothic One';">Инвесторам</span>
      </v-col>
    </v-row>

    <v-table class="mt-2">
      <thead>
        <tr>
          <th>Отчёт</th>
          <th style="width: 60%;">Ссылка</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Отчёт за 2022 год</td>
          <td><a href="https://google.com" target="_blank">https://google.com</a></td>
        </tr>
        
        <tr>
          <td>Отчёт за 2021 год</td>
          <td><a href="https://google.com" target="_blank">https://google.com</a></td>
        </tr>
        
        <tr>
          <td>Отчёт за 2020 год</td>
          <td><a href="https://google.com" target="_blank">https://google.com</a></td>
        </tr>
        
        <tr>
          <td>Отчёт за 2019 год</td>
          <td><a href="https://google.com" target="_blank">https://google.com</a></td>
        </tr>
        
        <tr>
          <td>Отчёт за 2018 год</td>
          <td><a href="https://google.com" target="_blank">https://google.com</a></td>
        </tr>
        
        <tr>
          <td>Отчёт за 2017 год</td>
          <td><a href="https://google.com" target="_blank">https://google.com</a></td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
