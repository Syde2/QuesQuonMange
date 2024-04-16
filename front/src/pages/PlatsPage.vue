<script setup>
import { api } from 'src/boot/axios'
import { ref, onBeforeMount } from 'vue';
import DynamicForm from 'src/components/Form/DynamicForm.vue'

const plats = ref()
const model = ref({})



onBeforeMount(async () => {
  const request = await api.get('plats');
  plats.value = request.data['hydra:member']
})

 function handleSubmit(){
  console.log('SUBMIT')
 api.post("/plats", model.value)
 .then(()=> model.value = {} )
 .catch(err=> console.error(err.response.data) )

}


</script>

<template>
  <q-page class="flex flex-center column">

    <div class="flex column">

      <DynamicForm @submit="handleSubmit" v-model:nom="model.nom" v-model:description="model.description"
        v-model:illustration="model.illustration" />



    </div>





  </q-page>
</template>
