<template>
  <div>
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
      <v-spacer></v-spacer>
        
      <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        label="Theme Dark"
        class="ml-3"
      >
      </v-switch>
        <v-btn icon flat class="ml-3 right"><a href="https://github.com/dacehell" target="_blank"><i class="fab fa-github fa-2x" style="color:white;"></i></a></v-btn>
        <v-btn
              class="ml-3"
              text
              outlined
              color="white"
              @click="logout"
            >
              <span class="mr-2">{{ !!currentUser ? 'Login' : 'Logout' }}</span>
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
/* .right{
  display: flex;
  justify-items: right !important;
} */
</style>
