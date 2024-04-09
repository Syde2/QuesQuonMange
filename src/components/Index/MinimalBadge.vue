<script setup>

const props = defineProps({
  icon : String,
  tooltip:String,
  color:String,

})

</script>

<template>
  <div class="q-px-md">
  <q-btn flat round size="lg" >
    <q-tooltip  :delay="700" class=" text-body2" transition-show="fade" transition-hide="fade" >  {{ props.tooltip }} </q-tooltip>
    <q-avatar round size="xl" >

      <q-icon  :name=props.icon >
      </q-icon>
      <!-- <q-badge floating color="teal">new</q-badge> -->
    </q-avatar>
  </q-btn>
</div>
</template>
