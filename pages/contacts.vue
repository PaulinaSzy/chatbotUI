<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-toolbar color="accent" dark>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>Search from your Souls</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="ma-4">
        <v-list subheader>
          <v-list-item v-for="contact in contacts" :key="contact.name">
            <!-- <v-list-item-avatar>
              <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
            </v-list-item-avatar> -->

            <v-list-item-content>
              <v-list-item-title v-text="contact.name"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon :color="'accent'">
                mdi-message-outline
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </div>
    </v-card>

    <!-- <v-alert class="alert" type="info">You have no Souls Add a new one</v-alert> -->

    <div
      v-show="contactListEmpty && alertVisible"
      class="bubble pa-4 justify-center text-right"
    >
      <p class="font-weight-bold text-lg">
        <span class color="#fff">You have no Souls...</span>
      </p>
      <p>
        <span>Add a new one! </span>
      </p>
    </div>

    <v-btn
      :class="'add mx-2' + (contactListEmpty ? ' blinking' : '')"
      fab
      dark
      color="accent"
      to="/addcontact"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    // contacts: [],
    recent: [
      {
        active: true,
        avatar:
          "https://aktivist.pl/wp-content/uploads/2015/04/Amy-Winehouse-1050x788.jpg",
        title: "Amy Winehouse",
        href: "/chat"
      }
    ],
    alertVisible: true
  }),
  created() {
    setTimeout(() => (this.alertVisible = true), 1500);
  },
  computed: {
    // ...mapState(["contacts"])
    contacts() {
      return this.$store.state.contacts;
    },
    contactListEmpty() {
      return this.contacts.length === 0;
    }
  }
};
</script>

<style>
.add {
  position: fixed;
  bottom: 30px;
  right: 10px;
  width: 200px;
  height: 50px;
  background-color: magenta;
  padding: 15px;
  text-align: center;
  line-height: 50px;
}
.add.blinking {
  animation: blink 1s linear infinite;
  animation-delay: 3s;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

p span {
  display: block;
  font-size: 1.4rem;
}

.alert {
  position: fixed;
}

.bubble {
  position: fixed;
  width: 250px;
  height: 120px;
  padding: 0px;
  color: white;
  background: #b57ef2;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  bottom: 120px;
  right: 30px;
}

.bubble:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 20px 0 20px 20px;
  border-color: transparent #b57ef2;
  display: block;
  width: 0;
  z-index: 1;
  right: -20px;
  top: 40px;
}
</style>
