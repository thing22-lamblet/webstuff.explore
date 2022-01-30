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
          let odd_col = col % 2;
          let odd_row = row % 2;
          if (odd_row) {
              return odd_col;
          }
          else {
              return ! odd_col;
          }

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
