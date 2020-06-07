<template>
    <div class = "body"
    v-bind:style = "{'background-color': bgColor}">
        <section class = "topContainer">
            <img v-bind:src="vendorChip" alt="" class = "chip">
            <img v-bind:src = "vendorIcon" alt="" class = "vendor">
        </section>
        <h3 v-bind:style = "{color : textColor}">{{numbers}}</h3>
        <section class = "bottomText">
            <p class = "cardHolderName" v-bind:style = "{color : textColor}">Cardholder name</p>
            <p class = "validThru" v-bind:style = "{color : textColor}">Valid thru</p>
        </section>
        <section class = "bottomInfo">
            <h4 class = "name" v-bind:style = "{color : textColor}">{{name}}</h4>
            <h4 class = "thruDate" v-bind:style = "{color : textColor}">{{thruDate}}</h4>
        </section>
    </div>
</template>

<script>
export default {
    data: function() { return {
        bgColor: this.$store.state.vendorColors[this.$props.vendor],
        textColor: this.$store.state.vendorTextColors[this.$props.vendor],
        vendorIcon: this.$store.state.vendorIcons[this.$props.vendor],
        vendorChip: this.$store.state.vendorChips[this.$props.vendor]
    }},
    props: {
        numbers: String,
        name: String,
        thruDate: String,
        vendor: Number
    }
}
</script>

<style scoped>
    .body {
        border-radius: 3%;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    }
    .topContainer {
        display: grid;
        grid-template-areas: "e e";
    }
    .vendor {
        justify-self: flex-end;
        margin: 1rem;
    }
    .chip {
        justify-self: flex-start;
        margin: 1rem;
    }

    h3 {
        font-size: 2rem;
        margin: 1rem;
    }

    .bottomText {
        display: grid;
        grid-template-areas: "e e";
    }
    .cardHolderName {
        justify-self: flex-start;
        margin: 0.5rem;
    }
    .validThru {
        justify-self: flex-end;
        margin: 0.5rem;
    }

    .bottomInfo {
        display: grid;
        grid-template-areas: "e e";
    }
    .name {
        justify-self: flex-start;
        margin: 0.5rem;
    }
    .thruDate {
        justify-self: flex-end;
        margin: 0.5rem;
    }

</style>