<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-toolbar color="accent" dark>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>Your contacts</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <!-- <v-list subheader>
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
      </v-list> -->
    </v-card>

    <v-btn class="add mx-2" fab dark color="accent" to="/addcontact">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
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
    ]
  })
};
</script>

<style>
.add {
  position: fixed;
  bottom: 30px;
  right: 10px;
}
</style>
