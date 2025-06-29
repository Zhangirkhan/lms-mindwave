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
    <button class="flex items-center space-x-2 p-3 hover:bg-gray-100 text-gray-600">
      <span>Категория</span>
      <ChevronDownIcon class="w-4 h-4" />
    </button>
    
    <div class="absolute z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white mt-1 shadow-lg border flex"
         :class="hoveredCategory?.subcategories?.length ? 'w-[800px]' : 'w-[320px]'"
         @mouseleave="hoveredCategory = null">
      
      <!-- Левая колонка - Категории -->
      <div class="w-80 border-r border-gray-200">
        <div class="px-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border-b border-gray-200">
          Категории
        </div>
        <div class="py-2 max-h-80 overflow-y-auto">
          <div
            v-for="cat in categories" 
            :key="cat.name"
            class="px-4 py-3 text-sm cursor-pointer transition-colors flex justify-between items-center"
            :class="{
              'bg-blue-50 text-blue-700': hoveredCategory === cat,
              'text-gray-700 hover:bg-gray-100': hoveredCategory !== cat
            }"
            @mouseenter="hoveredCategory = cat"
          >
            <span>{{ cat.name }}</span>
            <span v-if="cat.subcategories?.length" class="text-xs text-gray-400 bg-gray-200 px-2 py-1 rounded-full">
              {{ cat.subcategories.length }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Правая колонка - Подкатегории (показывается только если есть подкатегории) -->
      <div v-if="hoveredCategory?.subcategories?.length" class="w-96">
        <div class="px-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border-b border-gray-200">
          {{ hoveredCategory.name }}
        </div>
        <div class="py-2 max-h-80 overflow-y-auto">
          <div 
            v-for="sub in hoveredCategory.subcategories" 
            :key="sub" 
            class="px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors"
          >
            {{ sub }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 