<template>
  <form class="chat-field">
    <input class="form-control me-1" type="text" placeholder="메세지를 입력하세요">
    <button type="submit" v-on:click="sendMsg()" class="btn btn-primary btn-send">Send</button>
  </form>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import HomeView from '@/views/HomeView.vue';

export default defineComponent({
  name: 'ChatField',
  methods: {
    sendMsg() {
      console.log();
    }
  }
});
</script>

<style>
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