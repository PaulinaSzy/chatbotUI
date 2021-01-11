<template>
  <v-btn
    :style="{ 'background-image': 'url(' + imageurl + ')' }"
    :color="changeBackgroundColor ? 'accent' : 'primary'"
    @click="changeBackgroundColor = !changeBackgroundColor"
    class="button ma-5 white--text font-weight-bold"
    height="150"
    large
  >
    {{ value }}
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
    value: {
      type: String
    },
    imageurl: {
      type: String
    }
  }
};
</script>

<style></style>
