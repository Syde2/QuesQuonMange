<script setup>
const props = defineProps({
  label : String,
  link:{
    type:String,
    default:"/test"
  },
  icon : {
    type:String,
    default:'sym_s_food_bank'
  }
})
</script>

<template >
  <q-item clickable :to="props.link" >
    <q-item-section thumbnail>
      <q-icon color="accent" :name=props.icon />
    </q-item-section>
    <q-item-section class="text-contrast"> {{ props.label }} </q-item-section>
  </q-item>
</template>
