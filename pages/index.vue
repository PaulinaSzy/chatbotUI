<template class="ma-0 pa-0">
  <div class="ma-0 pa-0">
    <transition name="fade">
      <div v-show="elementVisible" class="popup justify-center">
        <div class="popupcontent">
          <!-- <v-card-title class="headline">
            Welcome to Soulify
          </v-card-title> -->
          <v-img src="/media/images/soulify.GIF"> </v-img>
        </div>
      </div>
    </transition>
    <div>
      <HomePageCarousel> </HomePageCarousel>
    </div>
  </div>
</template>

<script>
export default {
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
  background-color: rgba(49, 43, 43, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
.popupcontent {
  position: absolute;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
