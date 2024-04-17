<script setup>
const props = defineProps({
  list : Array
})
</script>

<template>
  <div class="q-pa-md">
    <q-list bordered separator v-for="each in list" :key="list.id">
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label caption >{{each.id}}</q-item-label>
          <q-item-label >{{ each.nom }}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>
