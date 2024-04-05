<script setup>
import EdgeCard from 'src/components/global/EdgeCard.vue'
import { gsap, timeline } from 'boot/gsap'
import {ref} from 'vue'

const menuUrl = 'https://images.unsplash.com/photo-1524237492620-14fcdd03ce16?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const platUrl = 'https://plus.unsplash.com/premium_photo-1675676486598-733979a2218f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const ingredientUrl = 'https://plus.unsplash.com/premium_photo-1677619680770-4feb47c4ebcc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const menu =ref()

function onBeforeEnter(el) {
  timeline.delay(0.5)
}
function onEnter(el, done) {
  timeline.from(el, {
    x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45,


    onComplete: done,
  })

}
function handleClick(e){
  timeline.from(menu.value, {
    x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45,


  })


}


</script>

<template>
  <q-page class="flex flex-center q-gutter-x-md">
    <Transition appear @before-enter="onBeforeEnter" @enter="onEnter" :css="false">
      <div class="flex fit justify-evenly">
        <EdgeCard ref="menu" @click="handleClick" class="" :imageUrl=menuUrl label="Menu" color="var(--nord4)" />
        <EdgeCard class="" label="Ingredients" :imageUrl=ingredientUrl color="var(--nord13)" />
        <EdgeCard class="" label="Plats" :imageUrl=platUrl color="var(--nord12)" />
      </div>


    </Transition>

  </q-page>
</template>
