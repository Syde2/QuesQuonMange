<script setup>

const props = defineProps({
  content: Object

})

</script>

<template>
  <q-card class="card flat square  ">
    <q-card-section horizontal class="fit" >

      <q-card-section class="col-10">
        <div>lorem2</div>
        <div>lorem3</div>
      </q-card-section>


      <q-card-section class="title col-2 ">
        {{ props.content.jour }}
      </q-card-section>

    </q-card-section>
  </q-card>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 1.8rem;
  writing-mode: vertical-rl;
  text-orientation: use-glyph-orientation;
}

.card{
  background-color: rgba(251, 251, 251, 0.05);
  backdrop-filter: blur(5px);
  height: 100%;
}
</style>
