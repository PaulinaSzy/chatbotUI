<template>
  <div>
    <v-row>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-subheader>User Controls</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle
                  >Set the content filtering level to restrict apps that can be
                  downloaded</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle
                  >Require password for purchase or use password to restrict
                  purchase</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-subheader>General</v-subheader>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="notifications"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle
                  >Notify me about updates to apps or games that I
                  downloaded</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle
                  >Auto-update apps at any time. Data charges may
                  apply</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="widgets"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle
                  >Automatically add home screen widgets</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row no-gutters>
      <v-btn class="mx-2" fab>
        <v-icon>mdi-account-box-multiple</v-icon>
      </v-btn>
      <input type="file" id="file-upload" style="display:none" />

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
        <SocialMediaButton @click.stop="dialog = true" :value="smbutton.fb">
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
        <v-btn v-show="!hidden" color="pink" dark bottom right>
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
      }
    };
  }
};
</script>

<style></style>
