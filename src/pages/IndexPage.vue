<script setup>
import EdgeCard from 'src/components/global/EdgeCard.vue'


const menuUrl = './menus.jpg'
const platUrl ='plat.jpg'
const ingredientUrl = '/ingredients.jpg'



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
