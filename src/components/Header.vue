// homeview.vue
<template>
  <header class="bg-blue-500 p-4 text-white">
    <div class="container mx-auto flex justify-between items-center">
      <h2 class="text-lg" @click="navigateToHome">MPK</h2>
      <nav class="flex space-x-4">
        <router-link to="/login" class="text-white">Log In</router-link>
        <!-- Add other menu links as needed -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: 'home' });
    }
  }
}
</script>
