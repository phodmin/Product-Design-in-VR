<template>
  <div class="app">
    <nav>
      <div class="logo">
        <h2>RealView App</h2>
      </div>
      <div class="nav-links">
      <simple-upload />
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Team</a>
        <a href="#">FAQ</a>
        
        <simple-login />
        
      </div>
    </nav>
    <div class="main-content">
      <MainComp />
      
    </div>
  </div>
</template>

<script>
import MainComp from './components/MainComp.vue';
import SimpleUpload from './components/SimpleUpload.vue';
import SimpleLogin from './components/SimpleLogin.vue';
import { mainScene } from '@/mainComp/mainScene';

export default {
  name: 'App',
  components: {
    MainComp,
    SimpleUpload,
    SimpleLogin
  },
  mounted() {
    const canvas = document.querySelector("canvas");
    new mainScene(canvas);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.logo h2 {
  font-size: 32px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

.nav-links {
  display: flex;
  align-items: center;
}

.main-content {
  height: calc(100% - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

.canvas-container {
  position: relative;
  width: 100%;
}

canvas {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
