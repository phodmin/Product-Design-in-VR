<template>
  <div class="maincomp">
    <canvas></canvas>
  </div>
</template>

<script>
import { mainScene } from '@/mainComp/mainScene';

export default {
  name: 'MainComp',
  mounted() {
    const canvas = document.querySelector("canvas");
    new mainScene(canvas);
  }
}
</script>

<style>
.maincomp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
