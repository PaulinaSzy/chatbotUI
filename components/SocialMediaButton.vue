<template>
  <v-btn
    :color="changeBackgroundColor ? 'accent' : 'primary'"
    class="button ma-5 white--text font-weight-bold"
    height="170"
    width="170"
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
    }
  }
};
</script>

<style>
.button {
  background-image: url("/media/images/v.png");
}
</style>
