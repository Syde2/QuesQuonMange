<script setup>
import MenuItem from 'src/components/Menu/MenuItem.vue'

const props = defineProps({
  content: Object

})

</script>

<template>
  <q-card class="card flat square ">
    <q-card-section horizontal class="row fit" >
      <q-card-section class="col-10 q-pa-md">
        <MenuItem  label="Pates au Saumon" icon="sym_s_set_meal" />
        <MenuItem  label=" Lasagnes" />


      </q-card-section>

      <q-card-section class="title col-2  ">
        {{ props.content.jour }}
      </q-card-section>

    </q-card-section>
  </q-card>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 1.6rem;
  writing-mode: vertical-rl;
  text-orientation: use-glyph-orientation;
}

.card{
  background-color: rgba(251, 251, 251, 0.05);
  backdrop-filter: blur(5px);
  height: 150px;
}
</style>
