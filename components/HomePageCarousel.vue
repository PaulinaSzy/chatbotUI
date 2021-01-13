<template>
  <v-carousel :show-arrows="false" height="100vh">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      height="100vh"
    >
      <v-row
        class="fill-height"
        align="end"
        justify="center"
        background="secondary"
      >
        <div
          class="justify-center text-center mx-8 mb-16"
          background="secondary"
        >
          {{ slides[i] }}
          <div id="button" class="text-center mt-4" background="secondary">
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
          src: "/media/images/instructions1.PNG"
        },
        {
          src: "/media/images/instructions2.PNG"
        },
        {
          src: "/media/images/instructions3.PNG"
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
