<template>
    <button
        class="gameboard_button"
        type="button"
        v-on:click="select($event, row, col)"
    >
        row: {{ row }}, col: {{ col }}
    </button>
</template>

<script>
export default {
    props: {
        row: Number,
        col: Number,
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
};
</script>

<style scoped>
.gameboard_button {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
