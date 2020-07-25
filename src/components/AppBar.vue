<template>
  <div>
    <!-- <v-app-bar
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
    </v-navigation-drawer> -->


    <v-app-bar
    absolute
    dark
    shrink-on-scroll
    src="https://thewallpaper.co//wp-content/uploads/2019/09//space-galaxy-planet-k-scientific-ox-wallpaper-full-hd-smart-devices-stars-mac-ultrahd-green-jpg.jpg"
    scroll-target="#scrolling-techniques-2"
  >
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to right,#E2231A 38%, rgba(238,146,33,0.48)"
        ></v-img>
      </template>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container>
      <v-row align="center">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/717px-NASA_logo.svg.png"
          class="mr-5"
          contain
          height="100"
          width="100"
          max-width="100"
          @click="$vuetify.goTo(0)"
        />

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          class="hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>

        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
        <v-btn
              text
              @click="logout"
            >
              <span class="mr-1">{{ !!currentUser ? 'Logout' : 'Login' }}</span>
              <v-icon>mdi-lock</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
 export default {
   name:'AppBar',
    computed: {
    ...mapState(['currentUser']),
    ...mapGetters(['links']),
  }, 
    methods: {
    ...mapActions(['setCurrentUser']),
    logout() {
      Firebase.auth().signOut().then(() => {
        this.setCurrentUser(this.user)
        this.$router.push('/')
      })
    },
    ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },
  },
   
  }
</script>
<style scoped>
.nav_title{
  text-decoration: none;
}

</style>
