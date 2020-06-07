import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{numbers: "1234 1234 1234 1234", name: "Fabian Berger", thruDate: "23/4", ccv: "321", vendor: 1},
    {numbers: "1234 1234 1234 1234", name: "Fabian Berger", thruDate: "23/4", ccv: "321", vendor: 2},
    {numbers: "1234 1234 1234 1234", name: "Fabian Berger", thruDate: "23/4", ccv: "321", vendor: 3},
    {numbers: "1234 1234 1234 1234", name: "Fabian Berger", thruDate: "23/4", ccv: "321", vendor: 4}],
    templateCard: {numbers: "XXXX XXXX XXXX", name: "", thruDate: "YY/MM", ccv: "", vendor: 0},
    activeCard: 0,
    vendorIcons: [require("@/assets/vendor-bitcoin.svg"),require("@/assets/vendor-bitcoin.svg"),require("@/assets/vendor-ninja.svg"),require("@/assets/vendor-blockchain.svg"),require("@/assets/vendor-evil.svg")],
    vendorChips: [require("@/assets/chip-dark.svg"),require("@/assets/chip-dark.svg"),require("@/assets/chip-light.svg"),require("@/assets/chip-light.svg"),require("@/assets/chip-light.svg")],
    vendorColors: ["#A5BECD","#FFE65A","#191E3C","#A041D7","#D72D2D"],
    vendorTextColors: ["#191E3C","#191E3C","#EDFFF7","#EDFFF7","#EDFFF7"]
  },
  mutations: {
    SET_ACTIVE_CARD(state, value) {
        state.activeCard = value
    },
    SET_TEMPLATE_CARD(state, temp) {
      state.templateCard = temp
    },
    ADD_NEW_CARD(state, card) {
      state.cards.push(card)
      console.log("added card")
    }
  },
  actions: {

  },
  getters: {

  }
})