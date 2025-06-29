<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const hoveredCategory = ref(null)
</script>

<template>
  <div class="relative group">
    <button class="flex items-center space-x-2 p-3 hover:bg-gray-100 text-[#4E5566]">
      <span>Категория</span>
      <ChevronDownIcon class="w-4 h-4" />
    </button>
    <div class="absolute z-10 hidden group-hover:block hover:block bg-white mt-1 shadow-lg border flex w-[600px] min-h-full"
         @mouseleave="hoveredCategory = null">
      <!-- Main categories -->
      <div class="py-2 w-64">
        <template v-for="cat in categories" :key="cat.name">
          <div
            class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
            @mouseenter="hoveredCategory = cat"
          >
            <span>{{ cat.name }}</span>
            <span v-if="cat.subcategories && cat.subcategories.length">&#8250;</span>
          </div>
        </template>
      </div>
      <!-- Subcategories -->
      <div v-if="hoveredCategory && hoveredCategory.subcategories && hoveredCategory.subcategories.length" class="py-2 w-72 bg-white shadow-lg">
        <div v-for="sub in hoveredCategory.subcategories" :key="sub" class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
          {{ sub }}
        </div>
      </div>
    </div>
  </div>
</template> 