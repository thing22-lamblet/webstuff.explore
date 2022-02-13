<template>
  <!-- <Gameboard msg="Tile gameboard"></Gameboard> -->
  <Gameboard id="app" :game_model="game_model" gameName="Chesster"></Gameboard>
</template>

<script>
/* eslint-disable no-unused-vars */
import Gameboard from "./components/Gameboard.vue";
import {defaultPieceLocations, PIECE_TYPES, GAME_STATES,makePieceLocation } from "./ChessLogic.js";

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
        currentGameState: this.INIT,
        pieceLocations: undefined,
        setupBoard: function() {
            // Initializes the state of pieceLocations for play.
            console.log("setupBoard called, currentGameState is $`this.currentGameState`");
            this.pieceLocations=defaultPieceLocations();
        },
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
