<!-- <template>
  <aside class="menu">
    <ul class="menu-list">
      <li><a @click="selectFlag('')">Home</a></li>
      <li><a @click="selectFlag('Name Match')">Name Match</a></li>
      <li><a @click="selectFlag('Hunter')">Hunter</a></li>
      <li><a @click="selectFlag('FI')">Field Invest.</a></li>
    </ul>
  </aside>
</template>

<script>
import { useApplicationStore } from '../stores/index';

export default {
  name: 'Sidebar',
  setup() {
    const store = useApplicationStore();

    const selectFlag = (flag) => {
      store.setFlag(flag);
    };

    return {
      selectFlag,
    };
  },
};
</script>

<style scoped>
.menu {
  padding: 20px;
}
</style> -->

<template>
    <aside class="menu">
      <ul class="menu-list">
        <li><a @click="selectFlag('')">Home</a></li>
        <li><a @click="selectFlag('Name Match')">Name Match</a></li>
        <li><a @click="selectFlag('Hunter')">Hunter</a></li>
        <li><a @click="selectFlag('FI')">Field Invest.</a></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    methods: {
      selectFlag(flag) {
        this.$emit('flag-selected', flag);
      }
    }
  };
  </script>
  
  <style scoped>
  .menu {
    padding: 20px;
  }
  </style>
  