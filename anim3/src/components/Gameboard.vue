<template>
  <div class="gameboard">
      Gameboard
    <h1>{{ msg }}</h1>
    <h1>{{ foo }}</h1>
    <div class="boardframe">
        <div v-for='row in boardTileCount.y' :key='row' class='c_row'>
            <div v-for='col in boardTileCount.x' :key='col' class='c_cell'>
                cell {{ `${row}, ${col}` }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gameboard',
  props: {
    msg: String
  },
  data() {
    return {
        boardTileCount: { x:8, y:8 },
        foo: "hello"
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
