<template>
  <v-app light>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-img src="/media/images/header.png"></v-img>
      <v-spacer />
    </v-app-bar>
    <!-- <v-main class="ma-0 pa-0">
      <v-container class="ma-0 pa-0"> -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app class="d-none d-sm-flex">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-home",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Contacts",
          to: "/contacts"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Chat",
          to: "/chat"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Add New Contact",
          to: "/addcontact"
        },
        {
          icon: "mdi-chart-bubble",
          title: "trials",
          to: "/trial"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Soulify"
    };
  }
};
</script>
