<template>
    <button
        :class='bg_style'
        type="button"
        v-on:click="select($event, row, col)"
    >
        col: {{ col }}<br />
        row: {{ row }}<br />
    </button>
</template>

<script>
/* eslint-disable no-unused-vars */
import {PIECE_TYPES} from '../ChessLogic.js'
export default {
    props: {
        row: Number,
        col: Number,
        game_model: Object
    },
    data() {
        return {
            state: "none",
        };
    },
    methods: {
        select: function (event, row, col) {
            // https://stackoverflow.com/a/36968187/237059  On event hookups
            const targetId = event?.currentTarget.id;
            console.log(`btn.targetId=${targetId},row=${row},col=${col}`);
        }
    },
    computed: {
        bg_style() {
            let is_odd=this.game_model.isOddSquare(this.row,this.col);
            return "gameboard_button " + (is_odd ?  "dark_square": "light_square") ;
        },
    }
};
</script>

<style scoped>
.gameboard_button {
    width: 100%;
    height: 100%;
    display: block;
    font-size: .5em;
}
.dark_square {
    background-color: black;
    color:white;
}
.light_square {
    background-color: white;
    color: black;
}
</style>
