<template>
  <NavBar></NavBar>
  <main class="container-fluid">
    <div class="chat-box">
      <ChatBox msg="채팅 내용" username="곽석현" other="true"></ChatBox>
      <ChatBox msg="내가보낸거"></ChatBox>
    </div>
  </main>
  <div class="chat-field">
    <input class="form-control me-1" type="text" placeholder="메세지를 입력하세요">
    <button type="submit" class="btn btn-primary btn-send">Send</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'
import ChatBox from '@/components/ChatBox.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
    ChatBox,
  },
});
</script>

<style>
  main {
    flex: 1;
    overflow-y: auto;
    max-height: calc(100vh - 120px);
  }
  .chat-box {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: end;
    padding: 1rem;
    flex-grow: 0;
  }
  .chat {
    align-items: center;
    flex-direction: row-reverse;
    margin-top: 1rem;
  }
  .chat-blank {
    display: flex;
    flex-grow: 1;
  }
  .chat.other {
    flex-direction: row;
  }
  .text-col {
    margin-left: 1rem;
  }
  .chat.other > .chat-row > .text-col {
    margin-right: 1rem;
    margin-left: 0;
  }
  .chat-row {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    border: 2px solid rgba(200, 200, 200, 50);
    border-radius: 10px;
    padding: 5px;
  }
  .chat.other > .chat-row {
    flex-direction: row;
  }
  #user-icon {
    width: 30px;
    height: 30px;
    margin: 10px;
    border-radius: 100%;
    object-fit: cover;
    border: 1px solid rgba(200, 200, 200, 50)
  }
  #user-name {
    color:dimgray;
    text-align: right;
    font-size: x-small;
    margin: 0px;
  }
  .chat.other .text-col > #user-name {
    text-align: left;
  }
  .content {
    font-size: medium;
    text-align: right;
  }
  .chat.other .text-col > .content {
    text-align: left;
  }
  .chat-field {
    position: absolute;
    display: flex;
    height: 60px;
    width: 100%;
    padding: 10px;
    bottom: 0px;
    border-top: solid 1px rgba(0, 0, 0, 25);
  }
</style>