<script setup>

const props = defineProps({
  content: Object

})

</script>

<template>
  <q-card class="card flat square">
    <q-card-section horizontal class="fit flex justify-end " >

      <q-card-section class="">
        <q-item class="q-pa-md  full-width"  style="border: 1px solid white; border-radius: 5px;" >
          Lorem ipsum dolor sit amet.
        </q-item>
        <q-item class="q-pa-md  full-width" style="border: 1px solid white; border-radius: 5px;"   >
          Lorem ipsum dolor sit amet.
        </q-item>
      </q-card-section>

      <q-card-section class="title">
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
  width: 5rem;
  justify-self: end;
}

.card{
  background-color: rgba(251, 251, 251, 0.05);
  backdrop-filter: blur(5px);
  height: 100%;
}
</style>
