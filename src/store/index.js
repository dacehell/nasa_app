import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod?api_key=Ff1M6akMgv2nZaH9gaSAZkaGMrTib0Rnk9hgzFAk"
const ROVER_ENDPOINT = "https://api.nasa.gov/mars-photos/api/v1/rovers"
const KEY = "Ff1M6akMgv2nZaH9gaSAZkaGMrTib0Rnk9hgzFAk"

export default new Vuex.Store({
  state: {
    currentUser:null,
      apod: {},
      articles: require('../data/articles.json'),
    drawer: false,
    items: [
      {
        text: 'Apod',
        href: '/apod',
      },
      {
        text: 'Rover',
        href: '/rover',
      },
    ],
      roverData: {
      photos: [],
        },
    
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    SET_CURRENT_USER(state, user) { state.currentUser = user },
    GET_APOD(state, apod) { state.apod = apod },
    GET_ROVER(state, info) { state.roverData = info },
  },
  actions: {
    setCurrentUser({commit}, user) {commit('SET_CURRENT_USER', user)},
    getApod({ commit }, date = null) {
      let queryDate = date ? date : new Date().toISOString().substr(0, 10)
      axios
        .get(`${APOD_ENDPOINT}&date=${queryDate}`)
        .then((response) => {
          commit('GET_APOD', response.data)
        })
        .catch(() => {
          let backup = { url: 'https://apod.nasa.gov/apod/image/2007/NEOWISEBelowBigDipper-7-16-2020-TomMasterson1081.jpg' }
          commit('GET_APOD', backup)
        })
    },
    getRoverData({ commit }, { sol, rover }) {
      axios
        .get(`${ROVER_ENDPOINT}/${rover}/photos?api_key=${KEY}&sol=${sol}&page=1`)
        .then((response) => {
          commit('GET_ROVER', response.data)
        })
    }
  },
  getters: {
    cameras(state) {
      return state.roverData.photos.map((photo) => {
        return photo.camera.name
      })
    },
    categories: state => {
      const categories = []

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) continue

        const text = article.category

        categories.push({
          text,
          href: '#!',
        })
      }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    },

  },
  modules: {
  }
})