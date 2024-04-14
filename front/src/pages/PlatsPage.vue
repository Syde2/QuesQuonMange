<script setup>
import { api } from 'src/boot/axios'
import { ref, onBeforeMount } from 'vue';
import DynamicForm from 'src/components/Form/DynamicForm.vue'

const plats = ref()
api.get('plats')

onBeforeMount(async () => {
  const request = await api.get('plats');
  plats.value = request.data['hydra:member']
})
const model = ref({})



</script>

<template>
  <q-page class="flex flex-center">

    <div class="flex column">
      {{ model }}

      <DynamicForm v-model:nom="model.nom" v-model:description="model.description"
        v-model:illustration="model.illustration" />




    </div>


  </q-page>
</template>
