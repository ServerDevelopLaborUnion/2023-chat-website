<template>
  <NavBar></NavBar>
  <div class="container-fluid">
    <div class="chat-box">
      <div class="chat d-inline-flex other">
        <img src="/user-icon.png" id="user-icon" >
        <div class="chat-col">
          <p id="user-name">곽석현</p>
          <div class="content">채팅의 내용</div>
        </div>
      </div>
      <div class="chat d-inline-flex">
        <img src="/user-icon.png" id="user-icon">
        <div class="chat-col">
          <p id="user-name">나</p>
          <div class="content">채팅의 내용</div>
        </div>
      </div>
    </div>
    <div class="chat-field">
      <input class="form-control me-1" type="text" placeholder="메세지를 입력하세요">
      <button type="submit" class="btn btn-primary btn-send">Send</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar
  },
});
</script>

<style>
  .chat-box {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: end;
    padding: 1rem;
  }
  .chat {
    align-items: center;
    flex-direction: row-reverse;
    margin-top: 1rem;
    border: 2px solid rgba(200, 200, 200, 50);
    border-radius: 10px;
  }
  .chat.other {
    flex-direction: row;
  }
  .chat-col {

  }
  #user-icon {
    width: 30px;
    height: 30px;
    margin: 15px;
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
  .chat.other > .chat-col > #user-name {
    text-align: left;
  }
  .content {
    font-size: medium;
  }

  .chat-field {
    display: flex;
    width: 100%;
    padding: 10px;
  }
</style>