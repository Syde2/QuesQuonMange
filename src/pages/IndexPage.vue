<script setup>
import EdgeCard from 'src/components/global/EdgeCard.vue'

const menuUrl = 'https://images.unsplash.com/photo-1524237492620-14fcdd03ce16?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const platUrl = 'https://plus.unsplash.com/premium_photo-1675676486598-733979a2218f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const ingredientUrl = 'https://plus.unsplash.com/premium_photo-1677619680770-4feb47c4ebcc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'



</script>

<template>
  <q-page class="flex flex-center q-gutter-x-md">
    <div class="flex fit justify-evenly" style=" transform: scale(0.7)">
      <EdgeCard  :imageUrl=menuUrl label="Menu" color="var(--nord4)" />
      <EdgeCard class="" label="Ingredients" :imageUrl=ingredientUrl color="var(--nord13)" />
      <EdgeCard class="" label="Plats" :imageUrl=platUrl color="var(--nord12)" />
    </div>



  </q-page>
</template>
