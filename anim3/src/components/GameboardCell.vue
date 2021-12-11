<template>
  <div class="gameboard_cell">
      gmcell
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
