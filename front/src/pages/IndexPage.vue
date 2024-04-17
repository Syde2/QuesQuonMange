<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import HorizontalSplitter from 'src/components/Index/HorizontalSplitter.vue'
import MainMenu from 'src/components/Index/MainMenu.vue'
import * as D from 'src/components/Dynamic'

const currentSelection = ref()
const dynamicComponent = computed(() => {
  switch (currentSelection.value) {
    case 'consulter':
      return D.Menu
      break;
    case 'planifier':
      return D.Planifier
      break;
    case 'parametrer':
      return D.Parametrer
      break;


    default:
      break;
  }
})


</script>

<template>
  <q-page class="flex flex-center">
    <HorizontalSplitter>
      <template v-slot:top>
        <MainMenu @selection-change = "(selection)=>currentSelection = selection " />
      </template>
      <template v-slot:bottom>
        <component :is=dynamicComponent />
      </template>
    </HorizontalSplitter>

  </q-page>
</template>
