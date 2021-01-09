<template>
  <div>
    <v-row no-gutters>
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        prepend-icon="mdi-Avatar"
      ></v-file-input>

      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
    </v-row>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Relationship"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-row>
      <v-col class="d-flex flex-column" cols="6">
        <SocialMediaButton :value="smbutton.fb"> </SocialMediaButton>
      </v-col>
      <v-col class="d-flex flex-column" cols="6">
        <SocialMediaButton :value="smbutton.insta"> </SocialMediaButton>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column" cols="6">
        <SocialMediaButton :value="smbutton.twit"> </SocialMediaButton>
      </v-col>
      <v-col class="d-flex flex-column" cols="6">
        <SocialMediaButton :value="smbutton.wa"> </SocialMediaButton>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column" cols="6">
        <SocialMediaButton :value="smbutton.tel"> </SocialMediaButton>
      </v-col>
      <v-col class="d-flex flex-column" cols="6">
        <SocialMediaButton :value="smbutton.oth"> </SocialMediaButton>
      </v-col>
    </v-row>

    <!-- <v-fab-transition>
      <v-btn v-show="!hidden" color="pink" dark absolute bottom right>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-fab-transition> -->
  </div>
</template>

<script>
import SocialMediaButton from "../components/SocialMediaButton.vue";
export default {
  components: { SocialMediaButton },
  data() {
    return {
      changeBackgroundColor: true,
      smbutton: {
        fb: "Facebook",
        insta: "Instagram",
        wa: "Whatsapp",
        twit: "Twitter",
        tel: "Telegram",
        oth: "Other"
      }
    };
  }
};
</script>

<style></style>
