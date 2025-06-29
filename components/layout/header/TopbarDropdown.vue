<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="relative group">
    <button class="flex items-center space-x-1 text-[#8C94A3] group-hover:text-white h-12">
      <span>{{ title }}</span>
      <ChevronDownIcon class="w-4 h-4" />
    </button>
    <div class="hidden group-hover:block absolute right-0 mt-0 w-48 bg-white shadow-lg py-1 z-50">
      <a v-for="item in items" :key="item.text" :href="item.href" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{{ item.text }}</a>
    </div>
  </div>
</template> 