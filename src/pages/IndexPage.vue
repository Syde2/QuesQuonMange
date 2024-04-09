<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import IconsSelector from 'src/components/Badges/IconsSelector.vue'
import MenuSymbol from 'src/components/Badges/MenuSymbol.vue'
import IngredientsSymbol from 'src/components/Badges/IngredientsSymbol.vue';
import PlatsSymbol from 'src/components/Badges/PlatsSymbol.vue';

const $q = useQuasar()
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
const splitterModel = computed(() => {
      return $q.screen.lt.md
        ? 0
        : 35
    })


</script>

<template>
  <q-page class="flex flex-center">
    <q-splitter v-model="splitterModel" horizontal dark style="height: 100vh; width: 100vw;"
      separator-style="height:2px" separator-class="full-width bg-contrast">

      <template v-slot:before>
        <IconsSelector @selection-change = "(selection)=>currentSelection = selection " />
      </template>

      <template v-slot:separator>
        <!-- <q-avatar color="primary" text-color="white" size="40px" icon="drag_indicator" /> -->
      </template>


      <template v-slot:after>
          <component :is=dynamicComponent />
      </template>

    </q-splitter>
  </q-page>
</template>
