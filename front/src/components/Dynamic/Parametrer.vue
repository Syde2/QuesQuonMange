<script setup>
import {ref} from 'vue'

const toggle =ref(true)
</script>

<template>
  <div class="q-pa-md flex column q-gutter-md  flex-center" >
    <q-btn label="Ajouter un nouveau plat"  color="secondary" />
    <q-btn label="Voir la liste des plats"  color="secondary" to="plats" />
  </div>
</template>
