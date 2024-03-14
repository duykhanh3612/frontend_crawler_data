// productvlist.vue
<script setup>
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProductList from '@/components/ProductList.vue';
import eventBus from "@/eventBus";
</script>
<template>
  <div class="w-full">
    <div class="header"><Header /></div>
    
    <div class="main-content justify-center flex">
      <ProductList />
    </div>

    <div class="footer"><Footer /></div>
  </div>
</template>
