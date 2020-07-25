<template>
  <div>
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <a href="home" class="nav_title"><v-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/717px-NASA_logo.svg.png"
          class="mr-5"
          contain
          height="80"
          width="80"
          max-width="80"
         
        /></a>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav 
        dense
        
      >
        <v-list-item-group
        >
          <v-list-item>
            <v-btn
              text
              to="/apod"
            >
              <span class="mr-1">Apod</span>
              <v-icon>mdi-account</v-icon> 
            </v-btn>
            <v-btn
              text
              to="/rover"
            >
              <span class="mr-1">Rover</span>
              <v-icon>mdi-account</v-icon> 
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              @click="logout"
            >
              <span class="mr-1">{{ !!currentUser ? 'Logout' : 'Login' }}</span>
              <v-icon>mdi-lock</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              text
              to="/"
            >
              <span class="mr-1">Home</span>
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapState, mapActions } from 'vuex'
 export default {
    data: () => ({
      drawer: false,
    }),
    methods: {
    ...mapActions(['setCurrentUser']),
    logout() {
      Firebase.auth().signOut().then(() => {
        this.setCurrentUser(this.user)
        this.$router.push('/')
      })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }  
  }
</script>
<style scoped>
.nav_title{
  text-decoration: none;
}

</style>
