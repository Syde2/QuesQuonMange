<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const splitterModel = computed(() => {
  return $q.screen.lt.md
    ? 0
    : 35
})

</script>

<template>
  <q-splitter v-model="splitterModel" horizontal dark style="height: 100vh; width: 100vw;" separator-style="height:2px"
    separator-class="full-width bg-contrast">

    <template v-slot:before>
      <slot name="top"></slot>

    </template>

    <template v-slot:separator>
      <!-- <q-avatar color="primary" text-color="white" size="40px" icon="drag_indicator" /> -->
    </template>


    <template v-slot:after>
      <slot name="bottom"></slot>

    </template>

  </q-splitter>
</template>
