<template>
  <div>
    <beautiful-chat
      class="chatbox"
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showEdition="true"
      :showDeletion="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      participants: [
        {
          id: "user1",
          name: "Ghost of Amy",
          imageUrl:
            "https://aktivist.pl/wp-content/uploads/2015/04/Amy-Winehouse-1050x788.jpg"
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl:
        "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [
        {
          type: "text",
          author: `me`,
          data: { text: `Hey Amy? How are you doing?` }
        },
        {
          type: "text",
          author: `user1`,
          data: {
            text: `oh man so much stuff to do, i'm literally dead at this point`
          }
        }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#34495e",
          text: "#ecf0f1"
        },
        launcher: {
          bg: "#34495e"
        },
        messageList: {
          bg: "#2c3e50"
        },
        sentMessage: {
          bg: "#7f8c8d",
          text: "#ecf0f1"
        },
        receivedMessage: {
          bg: "#95a5a6",
          text: "#ecf0f1"
        },
        userInput: {
          bg: "#34495e",
          text: "#ecf0f1"
        },
        userList: {
          bg: "#2c3e50",
          text: "#ecf0f1"
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "support",
          type: "text",
          data: { text }
        });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
      axios.post("http://0.0.0.0:5000/reply", message).then(response => {
        console.log(response);
      });
    },

    //   this.$http.get('http://api.openweathermap.org/data/2.5/find?q=stockholm&type=like&appid=[API KEY]').then((data) => {
    // this.weather = data;
    // console.log(this.weather);
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      // DO NOTHING because our page should always have the chat
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      console.log("Emit typing event");
    },
    editMessage(message) {
      const m = this.messageList.find(m => m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  }
};
</script>

<style>
.chatbox .sc-chat-window {
  height: calc(100% - 50px);
}
</style>
