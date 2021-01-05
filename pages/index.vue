<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to Ghostify
        </v-card-title>
        <v-card-text>
          <p>We let you get in touch with people who passed away</p>
        </v-card-text>
        <v-img src="/media/imag es/hug.png"> </v-img>
        <!-- <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://www.lancaster.ac.uk/media/lancaster-university/content-assets/images/news/hero-images/deathinfacebookageweb.jpg"
        ></v-img> -->
        <v-card-actions>
          <v-spacer />
          <v-btn color="accent" nuxt to="/contacts">
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>
