<script setup>
import{ ref, reactive} from 'vue'

 const nom = defineModel('nom')
 const description = defineModel('description')
 const illustration = defineModel('illustration')



</script>

<template>

  <q-form class="flex column q-gutter-md">


  <q-input filled v-model="nom" />
  <q-input filled v-model="description" />
  <q-input filled v-model="illustration" />




</q-form>


</template>
