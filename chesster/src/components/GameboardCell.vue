<template>
    <button
        :class='bg_style'
        type="button"
        v-on:click="select($event, row, col)"
    >
        col: {{ col }}<br />
        row: {{ row }}
    </button>
</template>

<script>
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
        }
    }
};
</script>

<style scoped>
.gameboard_button {
    width: 100%;
    height: 100%;
    display: block;
}
.dark_square {
    background-color: rgba(164, 224, 235, 0.513);
}
.light_square {
    background-color: rgb(235, 223, 62);
}
</style>
