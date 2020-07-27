<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue-grey darken-4">
        <strong class="subheading">Get connected with me on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn icon flat>
           <a href=""><i class="fab fa-twitter fa-2x" style="color:white;"></i></a>
        </v-btn>
        <v-btn icon flat class="ml-2">
          <a href="https://www.linkedin.com/in/david-caldera-1ba82761/" target="_blank" style="color:white;"><i class="fab fa-linkedin-in fa-2x"></i></a>
        </v-btn>
        <v-btn icon flat class="ml-2">
          <a href="https://www.instagram.com/dacehell/?hl=es-la" target="_blank" style="color:white;"><i class="fab fa-instagram fa-2x"></i></a>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Dacehell</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
      name: 'Footer'
    // data: () => ({
    //   icons: [
    //     'mdi-facebook',
    //     'mdi-twitter',
    //     'mdi-linkedin',
    //     'mdi-instagram',
    //   ],
    // }),
  }
</script>