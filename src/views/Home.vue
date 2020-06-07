<template>
  <div class="home">
    <Top v-bind:topText="'E-WALLET'"
    v-bind:botText="'active card'"/>

    <Card v-bind:numbers = "activeNumbers"
    v-bind:name = "activeName"
    v-bind:thruDate = "activeThruDate"
    v-bind:vendor = "activeVendor"
    :key = "cardKey"
    class = "card"/>

    <CardStack
    class = "cardStack"
    v-on:update-active-card-display = "setActiveCardProps"/>
    
    <router-link to = "/addcard" class = "router-link">
      <button>ADD A NEW CARD</button>
    </router-link>
  </div>
</template>

<script>
import Top from "@/components/Top.vue"
import Card from "@/components/Card.vue"
import CardStack from "@/components/CardStack.vue"

export default {
  name: 'Home',
  data: function() { return {
    activeNumbers: this.$store.state.cards[this.$store.state.activeCard].numbers,
    activeName: this.$store.state.cards[this.$store.state.activeCard].name,
    activeThruDate: this.$store.state.cards[this.$store.state.activeCard].thruDate,
    activeVendor: this.$store.state.cards[this.$store.state.activeCard].vendor,
    cardKey: 0
    
  }},
  components: {
    Top,
    Card,
    CardStack
  },
  methods: {
    setActiveCardProps() {
      this.activeNumbers = this.$store.state.cards[this.$store.state.activeCard].numbers
      this.activeName = this.$store.state.cards[this.$store.state.activeCard].name
      this.activeThruDate = this.$store.state.cards[this.$store.state.activeCard].thruDate
      this.activeVendor = this.$store.state.cards[this.$store.state.activeCard].vendor
      this.cardKey += 1
      console.log("updated display card")
    }
  }
}
</script>

<style scoped>
  .card {
    margin-bottom: 15rem;
  }

  button {
    color: black;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    border: solid;
    font-weight: bold;
    margin-top: 2rem;
    font-size: 1rem;
    min-width: 80%;
  }
  .router-link {
    min-width: 80%;
  }
</style>
