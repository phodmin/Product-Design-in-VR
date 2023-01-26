<template>
  <div class="section">
    <div class="container">
     
      <mainComp />
      <simple-upload />

    </div>
  </div>
</template>

<script>
import mainComp from './components/mainComp.vue';
import SimpleUpload from './components/SimpleUpload.vue';
export default {
  name: 'App',
  components: {
    mainComp,
    SimpleUpload
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
