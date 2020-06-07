<template>
  <div class="addCard">
    <Top
    v-bind:topText = "'ADD A NEW BANK CARD'"
    v-bind:botText = "'NEW CARD'"/>
    
    <Card v-bind:numbers = "templateCard.numbers"
    v-bind:name = "templateCard.name"
    v-bind:thruDate = "templateCard.thruDate"
    v-bind:vendor = "Number(templateCard.vendor)"
    :key = "templateKey"
    class = "card"/>

    <CardForm
    v-on:update-template-card = "updateCard"
    class = "CardFrom"/>

  </div>
</template>

<script>
import Top from "@/components/Top.vue"
import Card from "@/components/Card.vue"
import CardForm from "@/components/CardForm.vue"

export default {
  data: function() { return {
    templateCard: this.$store.state.templateCard,
    templateKey: 0
  }},
  components: {
    Top,
    Card,
    CardForm
  },
  methods: {
    updateCard() {
      this.templateCard = this.$store.state.templateCard
      this.templateKey += 1
    }
  }
}
</script>

<style>
  .CardFrom {
    margin-top: 3rem;
  }
</style>
