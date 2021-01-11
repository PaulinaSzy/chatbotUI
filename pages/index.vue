<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <transition name="fade">
        <div v-show="elementVisible" class="popup">
          <v-card class="popupcontent">
            <v-card-title class="headline">
              Welcome to Ghostify
            </v-card-title>
            <v-card-text>
              <p>We let you get in touch with people who passed away</p>
            </v-card-text>
            <v-img src="/media/images/bike.jpg"> </v-img>

            <v-btn color="accent" nuxt to="/contacts">
              Explore
            </v-btn>
          </v-card>
        </div>
      </transition>
      <div>
        <HomePageCarousel> </HomePageCarousel>
      </div>
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
  },

  data() {
    return {
      elementVisible: true
    };
  },
  created() {
    setTimeout(() => (this.elementVisible = false), 3000);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.popup {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(230, 56, 56, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
.popupcontent {
  position: absolute;
  width: 600px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
