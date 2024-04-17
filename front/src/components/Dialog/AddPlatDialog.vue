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
 api.post("/plats", model.value)
 .then(()=> model.value = {} )
 .catch(err=> console.error(err.response.data) )

}


</script>

<template>
  <q-dialog v-model="model">
    <q-card class="q-pa-md bg-primary shadows-10 " style="width: 700px; max-width: 80vw;">
      <q-card-section>

        <DynamicForm @submit="handleSubmit" v-model:nom="model.nom" v-model:description="model.description"
          v-model:illustration="model.illustration" />

      </q-card-section>
    </q-card>
  </q-dialog>

</template>
