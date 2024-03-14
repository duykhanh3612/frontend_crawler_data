<!-- App.vue -->
<script setup>
import { RouterView } from 'vue-router'
import "./assets/main.css"
</script>

<template>
  <div class="app">
    <!-- Other content or components -->

    <!-- Include the RouterView to dynamically render components based on the current route -->
    <RouterView />

    <!-- Other content or components -->
  </div>
</template>

<style>
.app {
  display: flex;
  justify-content: center;
  background-color: azure;
}
</style>
