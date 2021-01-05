<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="accent" dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>New Chat</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list subheader>
      <v-subheader>Recently accessed</v-subheader>

      <v-list-item v-for="chat in recent" :key="chat.title" :href="chat.href">
        <v-list-item-avatar>
          <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="chat.title"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon :color="chat.active ? 'accent' : 'grey'">
            mdi-message-outline
          </v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>Other</v-subheader>

      <v-list-item v-for="chat in previous" :key="chat.title" :href="chat.href">
        <v-list-item-avatar>
          <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="chat.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    recent: [
      {
        active: true,
        avatar:
          "https://aktivist.pl/wp-content/uploads/2015/04/Amy-Winehouse-1050x788.jpg",
        title: "Amy Winehouse",
        href: "/chat"
      }
      // {
      //   avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      //   title: "Mike Carlson",
      //   href: "/chat"
      // },
      // {
      //   avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      //   title: "Cindy Baker",
      //   href: "/chat"
      // },
      // {
      //   avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      //   title: "Ali Connors",
      //   href: "/chat"
      // }
    ],
    previous: [
      {
        title: "Travis Howard",
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        href: "/chat"
      }
    ]
  })
};
</script>

<style></style>
