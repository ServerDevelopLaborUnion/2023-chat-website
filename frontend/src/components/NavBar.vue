<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/sdlu.webp" alt="Logo" width="30" height="30" class="d-inline-block align-middle">
                SDLU WebChat
            </a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search User" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
    props: {
        msg: String,
    },
});
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
    margin: 40px 0 0;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    display: inline-block;
    margin: 0 10px;
    }
    a {
    color: #42b983;
    }
</style>
  