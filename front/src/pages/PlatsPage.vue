<script setup>
import { ref, onBeforeMount } from 'vue';
import { getAllPlats } from 'src/composables/ApiProvider';
import ModelList from 'src/components/Model/ModelList.vue';
const plats = ref()



onBeforeMount(async () => {
  plats.value =await getAllPlats()
})


</script>

<template>
  <q-page class="flex flex-center column">

    <div class="flex column">
      <ModelList :list="plats" />



    </div>





  </q-page>
</template>
