<script setup>
import { computed } from 'vue'
const props = defineProps({
  tabs: Array,
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const setTab = (key) => emit('update:modelValue', key)
</script>
<template>
  <div class="mt-8 border-b border-[#222]">
    <nav class="flex space-x-8 text-[14px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent border-t border-b border-[#E9EAF0]" style="scrollbar-width: thin;">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="setTab(tab.key)"
        class="focus:outline-none whitespace-nowrap relative flex flex-col items-center justify-center px-3"
        style="width:129.43px;height:62px;gap:10px;padding-top:20px;padding-bottom:20px;"
        :class="[
          modelValue === tab.key
            ? 'border-b-2 border-[#2467EC] font-semibold text-[#1D2026] bg-[#F5F7FA]'
            : 'text-[#4E5566] hover:text-[#2467EC] hover:border-b-2 hover:border-[#2467EC]'
        ]"
      >
        {{ tab.name }}
      </button>
    </nav>
    <div class="mt-6">
      <slot :active-tab="modelValue" />
    </div>
  </div>
</template>
<style scoped>
nav::-webkit-scrollbar {
  height: 6px;
}
nav::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}
nav::-webkit-scrollbar-track {
  background: transparent;
}
</style> 