<template>
  <v-btn
    :background-image="'/media/images/v.png'"
    :color="changeBackgroundColor ? 'accent' : 'primary'"
    class="button ma-5 white--text font-weight-bold"
    :style="{ 'background-image': `url('${imageurl}')` }"
    height="150"
    large
    @click.stop="dialog = true"
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

<style>
/* .button {
  background-image: url("/media/images/v.png");
} */
</style>
