<template>
  <v-btn
    :style="{ 'background-image': `url('${imageurl}')` }"
    :color="changeBackgroundColor ? 'accent' : 'primary'"
<<<<<<< HEAD
    class="button white--text font-weight-bold"
    height="170"
    width="170"
=======
    @click="changeBackgroundColor = !changeBackgroundColor"
    class="button ma-5 white--text font-weight-bold"
    height="150"
>>>>>>> 1e15a0929a8ce7c79bed01b489883b7da9abbf13
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
