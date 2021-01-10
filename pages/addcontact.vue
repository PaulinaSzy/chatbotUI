<template>
  <div>
    <v-row no-gutters>
      <v-btn class="mx-2" fab>
        <v-icon>mdi-account-box-multiple</v-icon>
      </v-btn>
      <input type="file" id="file-upload" style="display:none" />

      <v-text-field label="Name" required></v-text-field>
    </v-row>
    <v-select :items="items" label="Relationship" required></v-select>

    <v-row>
      <v-col class="d-flex flex-column" cols="6">
        <SocialMediaButton :value="smbutton.fb" imageurl="/media/images/v.png">
        </SocialMediaButton>
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
    <div class="text-right">
      <v-fab-transition>
        <v-btn color="pink" dark bottom right>
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </div>
</template>

<script>
import SocialMediaButton from "../components/SocialMediaButton.vue";
export default {
  components: { SocialMediaButton },
  data() {
    return {
      // changeBackgroundColor: true,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      smbutton: {
        fb: "Facebook",
        insta: "Instagram",
        wa: "Whatsapp",
        twit: "Twitter",
        tel: "Telegram",
        oth: "Other"
      },
      items: ["Mum", "Dad", "Sister", "Brother", "Friend"]
    };
  }
};
</script>

<style></style>
