<template>
  <div class="gameboard_cell" v-on:click="select()">
      <button type="button" v-on:click="select($event,row,col)">
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
            console.log(`targetId=${targetId},row=${row},col=${col}`);
        }
    }
}
</script>
