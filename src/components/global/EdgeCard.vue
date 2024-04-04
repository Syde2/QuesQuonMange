<script setup>

</script>


<template>

<div class="box_parent">
    <div class="box2">
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
    clip-path: polygon(100% 100%,0% 100%,0% 92px,100% 0%);
    margin: 0 auto;
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
}

</style>
