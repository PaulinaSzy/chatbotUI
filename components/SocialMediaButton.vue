<template>
  <v-btn
    :color="changeBackgroundColor ? 'accent' : 'primary'"
    @click="changeBackgroundColor = !changeBackgroundColor"
    class="ma-5 white--text font-weight-bold"
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
    }
  }
};
</script>

<style></style>
