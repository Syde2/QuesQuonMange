<script setup>
import { ref } from 'vue'
import { gsap, timeline } from 'boot/gsap'

const props = defineProps({
  imageUrl: {
    type: String,
    default: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  label: {
    type: String,
    default: 'Label'
  },
  color: String
})
const image = `url(${props.imageUrl})`
const menu = ref(false)
const element = ref()



function onEnter(el, done) {
  element.value =el
   timeline.fromTo(el, {
    y:10,
    yoyo: true,
    repeat:-1,
    ease: "power1.inOut",
    duration:1,
  },
  {
    y:-10,
    yoyo: true,
    repeat:-1,
    ease: "power1.inOut",
    duration:1,
    onComplete: done,
  }

  )
}

function handleHover() {
 menu.value = true
 timeline.resume()
}

function handleMouseOut(){
  timeline.pause()
  menu.value = false
}

function handleClick(){
  timeline.to(element, {
    scaleX:1, width:100
  })

}


</script>

<template>
  <Transition @enter="onEnter" :css="false">
    <div :key="menu"  @mouseover="handleHover" @mouseleave="handleMouseOut" @click="handleClick" class="box_parent ">
      <div class="box2 reverse">
        <h2> {{ props.label }} </h2>
      </div>
      <div class="box2 background">

      </div>
      <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="flt_tag">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 29 -8"
              result="flt_tag" />
            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  </Transition>
</template>

<style lang="scss">
.box2 {
  width: 20rem;
  background-color: v-bind(color);
  height: 229px;
  clip-path: polygon(100% 100%, 0% 100%, 0% 62px, 100% 0%);
  margin: 0 auto;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}

.reverse {
  rotate: 180deg;

}

.reverse h2 {
  transform: scale(-1, -1);

}

.background {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: v-bind(image);
}

.flt_svg {
  visibility: hidden;
  position: absolute;
  width: 0px;
  height: 0px;
}

.box_parent {
  filter: url('#flt_tag');
  cursor: pointer;

}
</style>
