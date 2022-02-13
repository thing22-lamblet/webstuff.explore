<template>
  <!-- <Gameboard msg="Tile gameboard"></Gameboard> -->
  <Gameboard id="app" :game_model="game_model" gameName="Chesster"></Gameboard>
</template>

<script>
import Gameboard from "./components/Gameboard.vue";

export default {
  name: "App",
  components: {
    Gameboard
  },
  data() {
    return {
      game_model: {
        title: "Wololololo",
        boardDimensions: { rows: 8, cols: 8 },
        isOddSquare: function(row, col) {
          let Funky_shoe = (row%2);
          let Funky_poo = (col%2);
          if (Funky_poo) {return Funky_shoe}
          else {return !Funky_shoe;}


        }
      }
    };
  }
};
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
