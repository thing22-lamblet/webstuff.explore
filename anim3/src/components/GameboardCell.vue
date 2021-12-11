<template>
  <div class="gameboard_cell" v-on:click="select_div($event,row,col)">
      <button type="button" v-on:click="undefined">
        row: {{row}}, col: {{col}}
      </button>
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
    },
    methods: {
        select: function(event,row,col) {
            // https://stackoverflow.com/a/36968187/237059  On event hookups

            const targetId = event?.currentTarget.id;
            console.log(`btn.targetId=${targetId},row=${row},col=${col}`);
        },
        select_div: function(event,row,col) {
            // https://stackoverflow.com/a/36968187/237059  On event hookups

            const targetId = event?.currentTarget.id;
            console.log(`div.targetId=${targetId},row=${row},col=${col}`);
        }
    }
}
</script>

<style>
.gameboard_cell button {
    width:100%;
    height:100%;
    display:block;
}
</style>
