<!-- Layout.vue -->
<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<!-- App.vue -->
<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Layout from '@/layouts/Layout.vue';

export default {
  components: {
    Layout
  }
};
</script>
