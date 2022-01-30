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

        },
        PIECE_TYPES: { NONE:0, PAWN:1, ROOK:2, KNIGHT:3, BISHOP:4, QUEEN:5, KING:6 },
        GAME_STATES: { INIT:0, TURN_1:1, TURN_2:2, DONE:99 },
        currentGameState: this.INIT,
        setupBoard: function() {
            console.log("setupBoard called, currentGameState is $`this.currentGameState`");
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
