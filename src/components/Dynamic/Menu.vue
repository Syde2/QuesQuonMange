<script setup>
import {computed } from 'vue'
import MenuCard from '../Menu/MenuCard.vue';

const defaultMenu = [
  {jour:'Lundi'},
  {jour:'Mardi'},
  {jour:'Mercredi'},
  {jour:'Jeudi'},
  {jour:'Vendredi'},
  {jour:'Samedi'},
  {jour:'Dimanche'},
]

function Massonry(index){
  switch (index) {
    case 3:
      return 'col-md-2'
      break;
    case 6:
      return 'col-md-2'
      break;

    default:
    return 'col-md-3'
      break;
  }
}

</script>

<template>
  <div class="row  fit q-pa-md q-gutter-x-md ">
    <div class="col-12 " :class="Massonry(index)"  v-for=" (each, index) in defaultMenu" :key="each.jour" >
      <MenuCard :content="each" />
    </div>
  </div>
</template>


<style scoped lang="scss">
.col-12 {
  height: 20vh;
}
</style>
