<template>
    <div class = "body">
        <input type="text" placeholder="CARD NUMBER" v-model = "numbers" v-on:input = "updateCard">
        <input type="text" placeholder="CARDHOLDER NAME" v-model = "name" v-on:input = "updateCard">
        <div class = "underContainer">
            <input type="text" placeholder="VALID THRU" class = "smallInput" v-model = "validThru" v-on:input = "updateCard">
            <input type="text" placeholder="CCV" class = "smallInput" v-model = "ccv" v-on:input = "updateCard">
        </div>
        <select v-model="vendor" v-on:click = "updateCard">
            <option disabled value = "0">Please select one</option>
            <option value = "1">Bitcoin</option>
            <option value = "2">Ninja</option>
            <option value = "3">Blockchain</option>
            <option value = "4">Evil</option>
        </select>
        <router-link to = "/" class = "router-link">
            <button v-on:click = "addCard">ADD CARD</button>
        </router-link>
    </div>
</template>

<script>
export default {
    data: function() { return {
        numbers: "",
        name: "",
        validThru: "",
        ccv: "",
        vendor: 0
    }},
    methods: {
        updateCard() {
            this.$store.commit("SET_TEMPLATE_CARD", {numbers: this.numbers, name: this.name, thruDate: this.validThru, ccv: this.ccv, vendor: this.vendor})
            this.$emit("update-template-card")
        },
        addCard() {
            this.$store.commit("ADD_NEW_CARD", {numbers: this.numbers, name: this.name, thruDate: this.validThru, ccv: this.ccv, vendor: Number(this.vendor)})
        }
    }
}
</script>

<style scoped>
    .body {
        display: flex; 
        flex-direction: column;
    }

    .underContainer {
        display: grid;
        grid-template-areas: "e e";
    }

    input {
        margin: 0.5rem;
        padding: 0.5rem;
        border-width: thin;
        border-style: solid;
    }

    select {
        margin: 0.5rem;
        padding: 0.5rem;
        border-width: thin;
        border-style: solid;
    }

    .smallInput {
        max-width: 38vw;
    }

    button {
        color: white;
        background-color: black;
        padding: 1rem;
        border-radius: 0.5rem;
        border: none;
        margin-top: 2rem;
        font-size: 1rem;
        font-weight: bold;
        min-width: 80%;
    }
    .router-link {
        min-width: 80%;
    }
</style>