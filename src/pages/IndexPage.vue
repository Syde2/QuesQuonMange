<script setup>
import EdgeCard from 'src/components/global/EdgeCard.vue'
</script>

<template>
  <q-page class="flex flex-center q-gutter-x-md">
    <div class="flex fit justify-evenly" style=" transform: scale(0.7)">
      <EdgeCard path="/menu" imageUrl= "menus.jpg" label="Menu" color="var(--nord4)"  />
      <EdgeCard path="/ingredients" imageUrl="ingredients.jpg" label="Ingredients" color="var(--nord13)" />
      <EdgeCard path="/plats" imageUrl='plat.jpg'  label="Plats"  color="var(--nord12)" />
    </div>

  </q-page>
</template>
