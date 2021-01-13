<template>
  <v-btn
    :style="{
      'background-image': 'url(' + imageurl + ')',
      'background-position': 'center',
      'background-size': 'cover'
    }"
    :color="changeBackgroundColor ? 'secondary' : 'primary'"
    @click="changeBackgroundColor = !changeBackgroundColor"
    class="button ma-5 white--text font-weight-bold"
    height="150"
    large
  >
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      changeBackgroundColor: false
    };
  },
  props: {
    imageurl: {
      type: String
    }
  }
};
</script>

<style></style>
