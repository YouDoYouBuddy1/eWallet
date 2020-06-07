<template>
    <div class = "body">
        <div class = "stack"
        v-for="(card, index) in cards"
        v-bind:key = "index">
            <Card v-if="index != $store.state.activeCard"
            v-on:click.native="setActiveCard(index, card)"
            v-bind:numbers = "card.numbers"
            v-bind:name = "card.name"
            v-bind:thruDate = "card.thruDate"
            v-bind:vendor = "card.vendor"
            class = "card"/>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue"

export default {
    data: function() {return{
        cards: this.$store.state.cards
    }},
    components: {
        Card
    },
    methods: {
        setActiveCard(value) {
            this.$store.commit('SET_ACTIVE_CARD', value)
            this.$emit("update-active-card-display")
        }
    }
}
</script>

<style scoped>
    .body {
        background-color: white;
    }
    .stack {
        display: grid;
        grid-template-areas: "p";
    }
    .card {
        margin-top: -13.5rem;
    }
</style>