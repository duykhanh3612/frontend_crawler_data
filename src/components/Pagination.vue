<template>
  <div class="pagination mb-16 flex justify-center items-center">
    <button @click="prevPage" :disabled="currentPage === 1" class="page-button px-4 py-2 rounded-md bg-blue-500 text-white mr-2" :class="{ 'hidden': currentPage <= 1 }">
      Trang trước
    </button>
    <span class="current-page">{{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages" class="page-button px-4 py-2 rounded-md bg-blue-500 text-white ml-2" :class="{ 'hidden': currentPage >= totalPages }">
      Trang sau
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
      // Chuyển đổi giá trị sang kiểu Number
      coerce(value) {
        return parseInt(value, 10);
      },
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    prevPage() {

      this.$emit('update-page', this.currentPage - 1);
      console(this.$emit('update-page', this.currentPage - 1));
    },
    nextPage() {
      this.$emit('update-page', this.currentPage + 1);
    },
  },
};
</script>
