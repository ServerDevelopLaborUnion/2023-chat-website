<template>
  <div class="chat d-inline-flex" :class="{other}">
    <div class="chat-row">
      <img src="/user-icon.png" id="user-icon" >
      <div class="text-col">
        <p id="user-name" v-if="username">{{ username }}</p>
        <p id="user-name" v-else>나</p>
        <div class="content">{{ msg }}</div>
      </div>
    </div>
    <div class="chat-blank"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChatBox',
    props: {
      username: String,
      msg: String,
      other: Boolean
    },
});
</script>