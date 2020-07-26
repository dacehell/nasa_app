<template>
  <div>
    <v-app>
      <v-img :src="apod.url" min-height="100%">
        <v-container style="height:100vh;" class="d-flex justify-center align-center" >
          <v-card elevation="15" id="container" color="#90CAF9">
          <v-card-title class="pb-0"> 
          <h1 class="mx-auto">NASA APP</h1>
          </v-card-title>
          <v-card-text>
          <v-form>
          <v-text-field label="User"
          prepend-icon="mdi-account-circle"
          v-model='user'
          outlined
          class="mt-5"
          />
          <v-text-field label="Password" :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          v-model='password'
          outlined
          />
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        
        <v-spacer></v-spacer>
        <v-btn  rounded color="info" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
    </v-container>
    </v-img>
  </v-app>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Firebase from 'firebase'
export default {
  name: 'App',

  data: () => ({
    user: '',
    password: '',
    showPassword: false
  }),
  computed: {
    ...mapState(["apod"])
  },
  methods: {
    ...mapActions(["getApod"]),
    login(){
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(() =>{
        this.$router.push('/apod')
        alert(`Bienvenido ${this.user}`)
      }).catch(() =>{
        alert(`Algo salio mal u.u`)
      })
    }
  },
  
  created() {
    this.getApod();
  }
};
</script>
