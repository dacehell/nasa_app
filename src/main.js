import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Firebase from 'firebase'
import firebaseConfig from '../config/firebase'

Firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false
Vue.use(VueSweetalert2);

let app= ''
Firebase.auth().onAuthStateChanged(()=>{
 if(!app){
  app = new Vue({   
   vuetify,    
   router,
   store,
   render: h => h(App)
  }).$mount('#app')
 } 
})