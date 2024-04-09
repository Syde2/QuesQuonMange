<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import HorizontalSplitter from 'src/components/Index/HorizontalSplitter.vue'
import MainMenu from 'src/components/Index/MainMenu.vue'
import MenuSymbol from 'src/components/Badges/MenuSymbol.vue'
import IngredientsSymbol from 'src/components/Badges/IngredientsSymbol.vue';
import PlatsSymbol from 'src/components/Badges/PlatsSymbol.vue';

const currentSelection = ref('menu')
const dynamicComponent = computed(() => {
  switch (currentSelection.value) {
    case 'menu':
      return MenuSymbol
      break;
    case 'ingredients':
      return IngredientsSymbol
      break;
    case 'plats':
      return PlatsSymbol
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
