<script setup>
import MinimalBadge from 'src/components/Index/MinimalBadge.vue'
const emit = defineEmits(['selectionChange'])

</script>

<template>
  <div class="fit flex justify-center items-end">
    <MinimalBadge icon="sym_s_menu_book" tooltip="Menu de la semaine" @click= "emit('selectionChange', 'menu')"/>
    <MinimalBadge icon="sym_s_cooking" tooltip="Liste des plats" @click= "emit('selectionChange', 'plats')" />
    <MinimalBadge icon="sym_s_grocery" tooltip="Liste des ingrédients"@click= "emit('selectionChange', 'ingredients')" />
  </div>
</template>
