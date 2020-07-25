<template>
  <div class="fondo">
    <app-bar></app-bar>
    <v-main>
      <v-parallax src="https://i.pinimg.com/originals/c8/35/d0/c835d0402b0ba3d1d72c8eb2c46c72cf.jpg"></v-parallax>
      <v-container>
        <v-row>
        <v-col cols="12"  class="d-flex justify-center align-center col-lg-6 col-md-12" sm="12">
          <v-date-picker
            :elevation="20"
            v-model="date"
            v-bind:max="today"
            color="#4527A0"
            header-color="#4527A0"
            @click:date="getInfo"
          ></v-date-picker>
        </v-col>
        <v-col cols="12" class="mx-auto col-lg-6" sm="12">
          <v-hover v-slot:default="{ hover }">
          <v-card class="mx-auto" max-width="600" :elevation="20">
            <v-img
              v-if="apod.media_type == 'image'"
              class="white--text align-end"
              height="300px"
              :src="apod.url"
              
            >
              <v-card-title>{{ apod.title }}</v-card-title>
              <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            APOD
          </div>
        </v-expand-transition>
            </v-img>
            <iframe class="responsive" v-else width="320" height="240" :src="apod.url"></iframe>
            <v-card-subtitle class="pb-0 mb-5">{{ apod.date }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ apod.explanation }}</div>
            </v-card-text>
            <v-card-actions> </v-card-actions>
          </v-card>
          </v-hover>
        </v-col>
      </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
      date: new Date().toISOString().substr(0, 10),
    };
  },
  computed: {
    ...mapState(["apod"])
  },
  components: {
    AppBar
  },
  methods: {
    ...mapActions(["getApod"]),
    getInfo() {
      this.getApod(this.date);
    }
  }
};
</script>

<style scoped>
.fondo {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.responsive {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>