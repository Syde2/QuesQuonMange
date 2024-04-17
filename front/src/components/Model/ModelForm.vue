<script setup>
import{ ref, reactive} from 'vue'

 const nom = defineModel('nom')
 const description = defineModel('description')
 const illustration = defineModel('illustration')



</script>

<template>

<q-form class="flex column q-gutter-md ">
  <q-input  standout="bg-primary text-grey" label="nom" v-model="nom" />
  <q-input  standout="bg-primary text-grey" label="description" v-model="description" />
  <q-input  standout="bg-primary text-grey" label="illustration" v-model="illustration" />
  <q-btn type="submit"  label="submit"  class="self-start" />
</q-form>


</template>
