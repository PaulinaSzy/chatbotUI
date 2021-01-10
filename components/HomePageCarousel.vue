<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-row class="fill-height" align="end" justify="center">
        <div class="justify-center" style="margin-bottom:60px">
          {{ slides[i] }}
          <div id="button" class="text-center mt-4">
            <v-btn v-show="i == 2" to="/contacts">Start</v-btn>
          </div>
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "homeCarousel",

  data() {
    return {
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
      ]
    };
  }
};
</script>

<style></style>
