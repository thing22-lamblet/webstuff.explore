<template>
  <div class="gameboard_cell" v-on:click='console.alert("foo")'>
      row: {{row}}, col: {{col}}
  </div>
</template>

<script>
export default {
    //name: 'GameboardCell',
    props: {
        row: Number,
        col: Number
    },
    data() {
        return {
            state: 'none'
        }
    }
}
</script>
