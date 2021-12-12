<template>
  <div class="gameboard">
    <h1>{{ game_model['title'] }}</h1>
    <div class="boardframe">
        <div v-for='col in game_model.boardDimensions.cols' :key='col' class='c_row'>
            <div v-for='row in game_model.boardDimensions.rows' :key='row' class='c_cell'>
                <GameboardCell :game_model='game_model' :row='row' :col='col' ></GameboardCell>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import GameboardCell from './GameboardCell.vue'

export default {
  name: 'Gameboard',
  props: {
    game_model: Object
  },
  components: {
      GameboardCell
  },
  data() {
    return {
        foo: "Chess?"
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.boardframe {
    display: grid;
    grid-template-columns: repeat(8,1fr);
}
div.c_cell {
    aspect-ratio: 1;
    border-style: solid;
    border-width: thin;
}
</style>
