<template>
  <div class="home">
    <v-main>
        <app-bar></app-bar>
    </v-main>
    
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'Home',
  components: {
    AppBar
  }
}
</script>
