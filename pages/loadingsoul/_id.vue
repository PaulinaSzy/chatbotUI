<template>
  <div class="popup justify-center">
    <v-img src="/media/images/loadinganimation.GIF"> </v-img>

    <div class="text">
      <p class="font-weight-black">Learning about {{ contact.name }}'s</p>
      <transition-group tag="div" class="img-slider" name="slide">
        <div v-for="number in [currentItem]" v-bind:key="number">
          <p class="item">{{ items[Math.abs(currentItem) % items.length] }}</p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    setTimeout(() => this.$router.push("/contacts"), 3000);
  },
  item1visible: true,
  data() {
    return {
      items: [
        "favourite things",
        "most used emojis",
        "most common typos",
        "weird jokes",
        "favourite puns",
        "most used GIFs",
        "most popular selfies"
      ],
      currentItem: 0
    };
  },
  computed: {
    ...mapState(["contacts"]),

    name() {
      return this.$route.params.id;
    },

    contact() {
      return this.contacts.find(con => con.name === this.name);
    }
  },
  mounted() {
    setInterval(() => {
      this.currentItem = this.currentItem + 1;
    }, 3000);
  },
  methods: {
    changeVisibility: function(element) {
      element.visible = !element.visible;
    }
  }
};
</script>

<style scoped>
.item {
  position: absolute;
}

.text {
  position: fixed;
  bottom: 100px;
  left: 80px;
  z-index: 10;
  color: white;
  font-size: 22px;
  text-align: center;

  /* font-family: "Roboto"; */
  font-family: Arial, Helvetica, sans-serif;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(150%, 0);
}
.slide-leave-to {
  transform: translate(-150%, 0);
}

.img-slider {
  /* overflow: hidden; */
  /* position: relative;
  height: 200px;
  width: 400px; */
}

.img-slider .item {
  position: absolute;
  top: 100%;
  /* left: 0; */
  /* bottom: 0; */
  /* right: 0; */
}

.popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
</style>
