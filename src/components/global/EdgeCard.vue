<script setup>

</script>


<template>

<div class="box_parent ">
    <div class="box2 reverse">
      <h3> Menu </h3>
    </div>
    <div class="box2 background">

    </div>
    <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="flt_tag">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
            </filter>
        </defs>
    </svg>
</div>



</template>

<style>
.box2
{
    width: 322px;
    background-color: #faebd7;
    height: 229px;
    clip-path: polygon(100% 100%,0% 100%,0% 62px,100% 0%);
    margin: 0 auto;
    overflow: scroll;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;



}
.reverse{
  rotate: 180deg;
  background-image: linear-gradient(
  45deg,
  hsl(34deg 78% 91%) 0%,
  hsl(40deg 79% 90%) 10%,
  hsl(45deg 80% 90%) 20%,
  hsl(49deg 81% 89%) 30%,
  hsl(52deg 81% 88%) 40%,
  hsl(55deg 82% 87%) 50%,
  hsl(55deg 69% 88%) 60%,
  hsl(54deg 54% 88%) 70%,
  hsl(54deg 38% 89%) 80%,
  hsl(53deg 20% 89%) 90%,
  hsl(0deg 0% 90%) 100%
);
}
.reverse h3{
  transform: scale(-1, -1);
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}
.background{
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

.flt_svg {
    visibility: hidden;
    position: absolute;
    width: 0px;
    height: 0px;
}

.box_parent
{
    filter: url('#flt_tag');
    cursor: pointer;

}


</style>
