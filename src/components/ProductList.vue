<template>
  <div class="container w-11/12 m-10 p-7">  
    <Search @search="handleSearch" />
    <div class="product-container mt-8 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="product in products" :key="product.id" class="product-item w-full rounded-xl border-gray-50">
        <div class="product-frame w-full h-full bg-white rounded-lg shadow-md hover:shadow-lg">
          <img :src="product.urlImg" alt="Product Image" class="product-image object-cover rounded-t-xl" :class="{ 'highlighted-product': product.id === 'idOfHighlightedProduct' }" />
          <div class="product-details p-2">
            <div class="product-header flex justify-between items-center mb-2">
              <h2 class="product-title text-sm font-semibold clamp-2">{{ product.name }}</h2>
              <div class="badge text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded">CHÍNH HÃNG</div>
              <hr>
            </div>
            <div class="flex items-center">
              <span v-for="star in Array.from({ length: 5 }, (_, index) => index + 1)" :key="star" class="text-yellow-500">
                {{ star <= Math.round(product.rate) ? '⭐' : '☆' }}
              </span>
            </div>
            <p class="original-price">{{ formatPrice(product.price) }}</p>

            <a :href="product.urlproduct" target="_blank" class="product-link text-blue-500 hover:underline">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination mt-4 flex justify-center items-center">
      <button @click="prevPage" :disabled="currentPage === 1" class="page-button px-4 py-2 rounded-md bg-blue-500 text-white mr-2">
        Trang trước
      </button>
      <span class="current-page">{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="page-button px-4 py-2 rounded-md bg-blue-500 text-white ml-2">
        Trang sau
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, watchEffect } from 'vue';
import Search from './Search.vue';
import { useRouter } from 'vue-router';

// Move API endpoint to a centralized configuration or constant
const API_ENDPOINT = 'http://127.0.0.1:8000/api/products';

const router = useRouter();
const products = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const searchQuery = ref('');

onMounted(fetchData);

// Watch for route changes and update data accordingly
watchEffect(() => {
  fetchData();
});

async function fetchData() {
  try {
    const page = router.currentRoute.value.query.page || 1;
    const searchValue = searchQuery.value || '';

    const response = await axios.get(`${API_ENDPOINT}?page=${page}&search=${searchValue}`);

    products.value = response.data.data;
    totalPages.value = response.data.last_page;
    currentPage.value = page;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    // Optionally, handle errors by displaying a user-friendly message
  }
}


function saveCurrentPageToStorage() {
  localStorage.setItem('currentPage', currentPage.value);
}

function getCurrentPageFromStorage() {
  return parseInt(localStorage.getItem('currentPage'));
}

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    saveCurrentPageToStorage();
    router.push({ query: { page: currentPage.value } });
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    saveCurrentPageToStorage();
    router.push({ query: { page: currentPage.value } });
  }
}


function handleSearch({ query, page }) {
  searchQuery.value = query;
  currentPage.value = page;
  router.push({ name: 'home', query: { page } });
}

</script>

<style>
.product-item {
  max-width: 100%;
  margin: 0 auto;
}

.product-frame {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-container {
  gap: 10;
}

.highlighted-product {
  height: 500px;
}

.product-details {
  padding: 1rem;
}

.product-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.product-item:hover {
  transform: scale(1.02);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}

.clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  max-height: 3.6em;
  line-height: 1.8em;
  white-space: normal;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background-color: #eee; /* Set a background color for the placeholder */
}
</style>