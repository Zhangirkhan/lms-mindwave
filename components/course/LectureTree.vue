<template>
  <ul>
    <li
      v-for="lecture in lectures"
      :key="lecture.title"
      :class="[
        'flex items-center justify-between rounded mb-1 transition select-none',
        { 
          'bg-[#E8F1FF]': lecture.active,
          'font-bold text-[#1D2026]': level === 0,
          'font-normal text-[#4E5566]': level > 0
        }
      ]"
      :style="{ minHeight: '48px' }"
      @click="$emit('set-active', lecture)"
    >
      <div class="flex items-center" :style="{ marginLeft: `${level * 24}px` }">
        <!-- Кастомный чекбокс -->
        <span
          class="inline-flex items-center justify-center w-6 h-6 mr-3"
          :class="{
            'border-2 border-[#2467EC] bg-white': lecture.active,
            'border border-[#D1D5DB] bg-white': !lecture.active
          }"
          style="border-radius: 4px;"
        >
          <svg v-if="lecture.completed" width="16" height="16" viewBox="0 0 16 16">
            <polyline points="3,8 7,12 13,4" fill="none" stroke="#2467EC" stroke-width="2"/>
          </svg>
        </span>
        <span :class="[{ 'text-[#1D2026]': level === 0, 'text-[#4E5566]': level > 0, 'font-bold': level === 0, 'font-normal': level > 0 }]">
          {{ lecture.title }}
        </span>
      </div>
      <span class="text-[#8F95A5] mr-2">{{ lecture.duration }}</span>
      <LectureTree v-if="lecture.children && lecture.children.length" :lectures="lecture.children" :level="level + 1" @set-active="$emit('set-active', $event)" />
    </li>
  </ul>
</template>
<script setup>
defineProps({
  lectures: Array,
  level: { type: Number, default: 0 }
})
</script> 