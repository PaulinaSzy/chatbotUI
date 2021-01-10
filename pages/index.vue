<template>
  <v-row justify="center" align="center">
    <v-carousel :show-arrows="false" height="650px">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-row class="fill-height" align="end" justify="center">
          <div class="justify-center" style="margin-bottom:60px">
            {{ slides[i] }}
            <div id="button" class="text-center mt-4">
              <v-btn>Start</v-btn>
            </div>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
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
        <v-card>
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

  name: "homeCarousel",

  data() {
    return {
      elementVisible: true,
      items: [
        {
          src: "/media/images/instructions.jpg"
        },
        {
          src: "/media/images/instructions.jpg"
        },
        {
          src: "/media/images/instructions.jpg"
        }
      ],
      slides: [
        "Grieving over a lost one?",
        "With Soulify you can get reconnect with the dead",
        "So you never have to truly say goodbye..."
      ],

      created() {
        setTimeout(() => (this.elementVisible = false), 3000);
      }
    };
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
