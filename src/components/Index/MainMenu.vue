<script setup>
import {ref} from 'vue'
import MinimalBadge from 'src/components/Index/MinimalBadge.vue'

const emit = defineEmits(['selectionChange'])
const selection = ref()

function handleClick(selected){
  emit('selectionChange', selected)
  selection.value = selected

}

</script>

<template>
  <div class="fit flex justify-center items-end">
    <h1 class="bg-title">{{selection}}</h1>

    <MinimalBadge icon="sym_s_menu_book" tooltip="Menu de la semaine" @click= "()=> handleClick('consulter')" />
    <MinimalBadge icon="sym_s_edit_calendar" tooltip="Planifier les menus"  @click= "()=> handleClick('planifier')"/>
    <MinimalBadge icon="sym_s_manufacturing" tooltip="Paramétrer"  @click= "()=> handleClick('parametrer')" />
  </div>
</template>
