<template>
  <!-- <Gameboard msg="Tile gameboard"></Gameboard> -->
  <Gameboard id="app" msg="Tile gameboard"></Gameboard>
</template>

<script>
import Gameboard from './components/Gameboard.vue'

export default {
  name: 'App',
  components: {
    Gameboard
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
