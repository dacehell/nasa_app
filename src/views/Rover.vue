<template>
  <div class="fondo">
    <app-bar></app-bar>
    <Drawer/>
        <v-parallax
        class="mt-16"
        dark
        src="https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg"
      >
        <v-layout
          align-center
          column
          justify-center
        >
          <h1 class="display-2 font-weight-bold mb-3">Rovers NASA</h1>
          <h4 class="subheading">Mars photo album</h4>
        </v-layout>
      </v-parallax>
        <v-container>
          <v-form class="mt-15">
            <v-label dark>Sun Days</v-label>
              <v-text-field
                v-model="sol"
                single-line
                type="number"
                required
                label="Sol days"
                solo
              />
              <v-select
                v-model="rover"
                :items="rovers"
                label="Rover"
                required
                solo
                chips
              ></v-select>
              <v-btn color="#00BFA5" dark class="mr-4" @click="getRoverInfo">
                Rovers
              <v-icon right>party_mode</v-icon>
              </v-btn>
          </v-form>
    
          <div v-if="cameras" class="mt-6">
          <v-simple-table fixed-header height="200px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Camera</th>
                      <th class="text-left">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(count, camera) in camerasCount" :key="camera">
                      <td>{{ camera }}</td>
                      <td>{{ count }}</td>
                    </tr>
                  </tbody>
                </template>
            </v-simple-table>
      </div>
    </v-container>
    <v-container>
     <v-row>
       <v-col cols="12" class="col-lg-4 col-md-6 col-sm-12"  v-for="photo in roverData.photos"
      :key="photo.id">
          <v-hover>
            <template v-slot="{ hover }">
          <v-card
              class="mx-auto"
              max-width="600"
              :elevation="hover ? 24 : 6"
              
            >
            <v-img class="white--text align-end" height="300px" :src="photo.img_src">
              <v-card-title>{{ photo.camera.full_name }}</v-card-title>
                <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular indeterminate color="grey"></v-progress-circular>
                            </v-row>
                </template>
              </v-img>
              <v-card-subtitle class="pb-0">{{ photo.earth_date }}</v-card-subtitle>
              <v-card-text class="text--primary">
              <div>{{ photo.id }}</div>
             </v-card-text>
            </v-card>
          </template>
        </v-hover>
       </v-col>
     </v-row>
   </v-container>
   <Footer/>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import AppBar from "@/components/AppBar";
import Drawer from "@/components/Drawer"
import Footer from "@/components/Footer"
export default {
  data() {
    return {
      sol: "1000",
      rover: "Curiosity",
      rovers: ["Curiosity", "Spirit", "Opportunity"]
    };
  },
  computed: {
    ...mapState(["roverData"]),
    ...mapGetters(["cameras"]),
    camerasCount() {
      let summary = {};
      this.cameras.map(camera => {
        summary[camera] = (summary[camera] || 0) + 1;
      });
      return summary;
    }
  },
  methods: {
    ...mapActions(["getRoverData"]),
    getRoverInfo() {
      const payload = { sol: this.sol, rover: this.rover };
      this.getRoverData(payload);
    }
  },
  components: {
    AppBar,
    Drawer,
    Footer
  }
};
</script>

<style scoped>
  .fondo {
  background-image: linear-gradient(to right, #83082d 0%, #c4ad2f 100%);
}
</style>