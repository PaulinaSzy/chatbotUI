<template>
  <div>
<<<<<<< HEAD
    <!-- Dialog 1 -->
    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog1 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Facebook</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form>
          <v-flex>
            <v-autocomplete
              v-model="searchString"
              :disabled="isUpdating"
              :items="people"
              color="blue"
              label="Search for friends"
              item-text="name"
              item-value="name"
              clearable
              append-icon="mdi-search"
              :open-on-click="true"
            >
              <template slot="no-data">
                <v-list-tile>
                  <v-list-tile-title>
                    Search for your contacts
                  </v-list-tile-title>
                </v-list-tile>
              </template>

              <!-- <template slot="selection" slot-scope="data">
                <v-chip
                  :selected="data.selected"
                  close
                  class=""
                  @input="data.parent.selectItem(data.item)"
                >
                  <v-avatar>
                    <img :src="data.item.avatar" />
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template> -->
              <template slot="item" slot-scope="data">
                <!--                   <template v-if="typeof data.item !== 'object'">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                  </template> -->
                <template>
                  <v-list-item-avatar
                    :item="data.item.group == 'Friends'"
                    :size="data.item.group == 'Friends' ? 50 : 40"
                    class="rounded-circle"
                    @click="dialog1 = false"
                  >
                    <img :src="data.item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.name"
                      @click="dialog1 = false"
                    ></v-list-item-title>
                    <v-list-item-sub-title
                      v-if="data.item.group == 'Friends'"
                      v-html="data.item.subtitle"
                    ></v-list-item-sub-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-flex>
        </v-form>
      </v-card>
    </v-dialog>
    <!--- Dialog ends -->
    <!-- Dialog 2 -->
    <v-dialog
      v-model="dialog2"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog2 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Facebook</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog2 = false">
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
    </v-dialog>
    <!--- Dialog ends -->
    <div class="text-h6 text-center">Add New Soul</div>
=======
>>>>>>> 1e15a0929a8ce7c79bed01b489883b7da9abbf13
    <v-row no-gutters>
      <v-btn class="mx-2" fab>
        <v-icon>mdi-account-box-multiple</v-icon>
      </v-btn>
      <input type="file" id="file-upload" style="display:none" />

<<<<<<< HEAD
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="What was this soul's name?"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
    </v-row>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="How did you know her?"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
=======
      <v-text-field label="Name" required></v-text-field>
    </v-row>
    <v-select :items="items" label="Relationship" required></v-select>

>>>>>>> 1e15a0929a8ce7c79bed01b489883b7da9abbf13
    <v-row>
      <v-col class="d-flex justify-center " cols="6">
        <SocialMediaButton :value="smbutton.fb" @click.native="dialog1 = true">
        </SocialMediaButton>
      </v-col>
      <v-col class="d-flex flex-column" cols="6">
        <SocialMediaButton
          :value="smbutton.insta"
          @click.native="dialog2 = true"
        >
        </SocialMediaButton>
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
    let srcs = {
      1: "https://randomuser.me/api/portraits/women/14.jpg",
      2: "https://randomuser.me/api/portraits/women/6.jpg",
      3: "https://randomuser.me/api/portraits/women/41.jpg",
      4: "https://randomuser.me/api/portraits/women/23.jpg",
      5: "https://randomuser.me/api/portraits/women/15.jpg"
    };
    return {
      items: ["Family", "Friend", "Partner", "Other"],
      changeBackgroundColor: true,
      dialog1: false,
      dialog2: false,
      smbutton: {
        fb: "Facebook",
        insta: "Instagram",
        wa: "Whatsapp",
        twit: "Twitter",
        tel: "Telegram",
        oth: "Other"
      },
<<<<<<< HEAD
      searchString: "",
      isUpdating: false,
      people: [
        { header: "Friends" },
        {
          name: "Catarina Allen",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[1]
        },
        {
          name: "Stephan Hofmann",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[2]
        },
        {
          name: "Roosa Kallionpaa",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[3]
        },
        {
          name: "Miguel Aires",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[4]
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        }
      ]
=======
      items: ["Mum", "Dad", "Sister", "Brother", "Friend"]
>>>>>>> 1e15a0929a8ce7c79bed01b489883b7da9abbf13
    };
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },
  methods: {
    hello() {
      console.log(this.searchString);
    }
  }
};
</script>

<style></style>
