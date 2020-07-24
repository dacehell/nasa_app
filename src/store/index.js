import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod?"
//const RoverEndpoint = "https://api.nasa.gov/mars-photos/api/v1/rovers"
const KEY = "Ff1M6akMgv2nZaH9gaSAZkaGMrTib0Rnk9hgzFAk"


export default new Vuex.Store({
  state: {
    apod: {},
    roverData:{
      photos:[]
    }
  },
  mutations: {
    GET_APOD(state, apod){ state.apod = apod},
  },
  actions: {
    getApod({commit}, date = null) {
      let queryDate = date ? date : new Date().toISOString().substr(0, 10);

    fetch(`${APOD_ENDPOINT}&date=${queryDate}?api_key=${KEY}`)
    .then((response) => {
      commit('GET_APOD', response.data)
    })
    .catch(() => {
      let backup = { url: 'https://apod.nasa.gov/apod/image/2007/NEOWISEBelowBigDipper-7-16-2020-TomMasterson1081.jpg' }
      commit('GET_APOD', backup)
    })
    
  },
  modules: {
  }
}
})