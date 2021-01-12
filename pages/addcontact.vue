<template>
  <div>
    <!-- Dialog 1 -->
    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar color="accent" dark>
          <v-btn icon dark @click="dialog1 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Messenger</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-form>
          <v-flex>
            <v-toolbar color="primary" class="ma-2">
              <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

              <v-autocomplete
                v-model="searchString"
                :disabled="isUpdating"
                :items="people"
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
                    <img tar>
                  {{ data.item.name }}
                </v-chip>:src="data.item.avatar" />
                  </v-ava
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
                      <v-list-item-subtitle
                        v-if="data.item.group == 'Friends'"
                        v-html="data.item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </template>
              </v-autocomplete>
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-toolbar>
          </v-flex>
        </v-form>
        <!-- generic list of non searched -->
        <div class="ml-1 mr-1">
          <v-list>
            <v-list-item
              v-for="person in people"
              :key="person.name"
              @click="dialog1 = false"
            >
              <v-list-item-avatar>
                <v-img :src="person.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="person.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="person.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
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
          <v-toolbar-title>Twitter</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card>
    </v-dialog>
    <!--- Dialog ends -->
    <div class="text-h6 text-center">Add New Soul</div>
    <v-row no-gutters>
      <v-btn class="mx-2" fab>
        <v-icon>mdi-account-box-multiple</v-icon>
      </v-btn>
      <input type="file" id="file-upload" style="display:none" />

      <v-text-field label="What was this soul's name?" required></v-text-field>
    </v-row>
    <v-select
      :items="items"
      label="How did you know this soul?"
      required
    ></v-select>
    <v-row>
      <v-col style="padding:0px" class="d-flex flex-column " cols="6">
        <SocialMediaButton
          imageurl="/media/images/messenger.PNG"
          @click.native="dialog1 = true"
        >
        </SocialMediaButton>
      </v-col>
      <v-col style="padding:0px" class="d-flex flex-column" cols="6">
        <SocialMediaButton imageurl="/media/images/instagram.PNG">
        </SocialMediaButton>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="padding:0px" class="d-flex flex-column" cols="6">
        <SocialMediaButton imageurl="/media/images/whatsapp.PNG">
        </SocialMediaButton>
      </v-col>
      <v-col style="padding:0px" class="d-flex flex-column" cols="6">
        <SocialMediaButton
          imageurl="/media/images/twitter.PNG"
          @click.native="dialog2 = true"
        >
        </SocialMediaButton>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="padding:0px" class="d-flex flex-column" cols="6">
        <SocialMediaButton imageurl="/media/images/facebook.PNG">
        </SocialMediaButton>
      </v-col>
      <v-col style="padding:0px" class="d-flex flex-column" cols="6">
        <SocialMediaButton imageurl="/media/images/telegram.PNG">
        </SocialMediaButton>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center flex-row">
        <div class="text-left">
          <v-fab-transition>
            <v-btn to="contacts" dark bottom color="accent">
              Cancel
            </v-btn>
          </v-fab-transition>
        </div>
      </v-col>
      <v-col class="d-flex justify-center flex-row">
        <div class="text-right">
          <v-fab-transition>
            <v-btn dark bottom color="secondary">
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
          </v-fab-transition>
        </div>
      </v-col>
    </v-row>
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
      searchString: "",
      isUpdating: false,
      people: [
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
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        },
        {
          name: "Your mum lol",
          group: "Friends",
          subtitle: "Meine Liebe",
          avatar: srcs[5]
        }
      ]
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
