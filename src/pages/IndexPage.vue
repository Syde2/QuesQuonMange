<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import MinimalBadge from 'src/components/Badges/MinimalBadge.vue'
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
const $q = useQuasar()

const splitterModel = computed(() => {
      return $q.screen.lt.md
        ? 0
        : 40
    })

</script>

<template>
  <q-page class="flex flex-center q-gutter-x-md">


    <q-splitter v-model="splitterModel" horizontal dark style="height: 100vh; width: 100vw;"
      separator-style="height:2px" separator-class="full-width bg-contrast">

      <template te v-slot:before>
        <div class="fit flex justify-center items-end">
          <MinimalBadge icon="sym_s_menu_book" tooltip="Menu de la semaine" @click="currentSelection = 'menu'" />
          <MinimalBadge icon="sym_s_cooking" tooltip="Liste des plats" @click="currentSelection = 'plats'" />
          <MinimalBadge icon="sym_s_grocery" tooltip="Liste des ingrédients"
            @click="currentSelection = 'ingredients'" />
        </div>

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

<style scoped>
/* .bar {
  border-bottom: 3px solid;
  width: 90vw !important;

} */


</style>

