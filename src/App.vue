<!-- <script setup>
</script>

<template>
  <div>
    <h1>This is Backoffice application</h1>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>


<script setup>
console.log('Hello from App.vue!');
</script> -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';
import { useApplicationStore } from './stores/index';

export default {
  name: 'App',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useApplicationStore();

    const checkAuthentication = () => {
      if (!store.isAuthenticated && route.path !== '/login') {
        router.push('/login');
      }
    };

    onMounted(checkAuthentication);
    watch(() => store.isAuthenticated, checkAuthentication);
    watch(() => route.path, checkAuthentication);

    return {};
  }
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
</style>
