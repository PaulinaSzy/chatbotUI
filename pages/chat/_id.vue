<template>
  <div v-if="participants !== undefined">
    <chatbox :participants="participants" :titleImageUrl="image" />
  </div>
  <div v-else>
    <p>No participants</p>
  </div>
</template>

<script>
import chatbox from "../../components/chatbox.vue";
import { mapState } from "vuex";

// console.console.log(this.participants);

export default {
  created() {
    const currentContact = this.contacts.find(con => con.name === this.name);

    this.participants.push({
      ...currentContact,
      name: "Soul of " + currentContact.name
    });
  },
  data() {
    return {
      participants: []
    };
  },
  computed: {
    ...mapState(["contacts"]),

    name() {
      return this.$route.params.id;
    },

    image() {
      return this.contacts.find(con => con.name === this.name).imageurl;
    }

    // participants() {
    //   return this.participants.push({
    //     name: contact.name,
    //     imageurl: contact.imageurl
    //   });
    // }
  },
  components: { chatbox }
};
</script>

<style></style>
