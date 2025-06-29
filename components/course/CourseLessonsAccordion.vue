<script setup>
import { ChevronUpIcon, ChevronDownIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
import { ref, computed } from 'vue'

const props = defineProps({
  sections: Array,
  openSection: Number
})
const emit = defineEmits(['update:openSection'])

// Создаем локальную реактивную копию секций
const localSections = ref(JSON.parse(JSON.stringify(props.sections)))

const toggleSection = (idx) => emit('update:openSection', props.openSection === idx ? -1 : idx)

// Функция для перехода к лекции
const goToLecture = (sectionIdx, lectureIdx, childIdx = null) => {
  // Устанавливаем активную лекцию
  localSections.value.forEach((section, sIdx) => {
    section.lectures.forEach((lecture, lIdx) => {
      lecture.active = false
      if (lecture.children) {
        lecture.children.forEach((child, cIdx) => {
          child.active = false
        })
      }
    })
  })
  
  if (childIdx !== null) {
    // Активируем подлекцию
    localSections.value[sectionIdx].lectures[lectureIdx].children[childIdx].active = true
  } else {
    // Активируем основную лекцию
    localSections.value[sectionIdx].lectures[lectureIdx].active = true
  }
  
  console.log('Переход к лекции:', {
    section: localSections.value[sectionIdx].title,
    lecture: childIdx !== null 
      ? localSections.value[sectionIdx].lectures[lectureIdx].children[childIdx].title
      : localSections.value[sectionIdx].lectures[lectureIdx].title
  })
}

// Функция для переключения состояния лекции
const toggleLecture = (sectionIdx, lectureIdx) => {
  localSections.value[sectionIdx].lectures[lectureIdx].completed = !localSections.value[sectionIdx].lectures[lectureIdx].completed
}

// Функция для переключения состояния подлекции
const toggleChildLecture = (sectionIdx, lectureIdx, childIdx) => {
  localSections.value[sectionIdx].lectures[lectureIdx].children[childIdx].completed = !localSections.value[sectionIdx].lectures[lectureIdx].children[childIdx].completed
}
</script>
<template>
  <aside class="w-full bg-white">
    <!-- Заголовок Course Contents -->
    <div class="px-6 py-4 border-b border-[#E5E7EB]">
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-xl font-bold text-[#1D2026]">Course Contents</h2>
        <span class="text-[#22C55E] text-sm font-medium">15% completed</span>
      </div>
      <!-- Progress bar -->
      <div class="w-full bg-[#E5E7EB] rounded-full h-2">
        <div class="bg-[#22C55E] h-2 rounded-full" style="width: 15%"></div>
      </div>
    </div>
    
    <div class="space-y-0 text-[16px]">
      <div v-for="(section, idx) in localSections" :key="section.title">
        <button
          class="w-full flex justify-between items-center px-6 py-4 bg-white border-b border-[#F1F3F4] transition-colors duration-150 hover:bg-[#F8F9FA]"
          @click="toggleSection(idx)"
        >
          <div class="flex items-center gap-3 cursor-pointer">
            <svg v-if="openSection === idx" class="w-4 h-4 text-[#4E5566]" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="#4E5566" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else class="w-4 h-4 text-[#4E5566]" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="#4E5566" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-[#1D2026] font-medium text-base text-left">{{ section.title }}</span>
          </div>
          <div class="flex items-center gap-4 text-[#8C94A3] text-sm">
            <div class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6" stroke="#8C94A3" stroke-width="1"/>
                <polygon points="6,6 10,8 6,10" fill="#8C94A3"/>
              </svg>
              <span>{{ section.info?.split('•')[0]?.trim() || '4 lectures' }}</span>
            </div>
            <div class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6" stroke="#FFA500" stroke-width="1"/>
                <path d="M8 4v4l2 2" stroke="#FFA500" stroke-width="1" stroke-linecap="round"/>
              </svg>
              <span>{{ section.info?.split('•')[1]?.trim() || '51m' }}</span>
            </div>
            <div class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M3 8l3 3 7-7" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ section.percent || '25% finish' }} <span class="text-[#B0B3B8]">(1/4)</span></span>
            </div>
          </div>
        </button>
        <div v-if="openSection === idx && section.lectures && section.lectures.length" class="bg-white">
          <div class="px-6 py-2">
            <div v-for="(lecture, lectureIdx) in section.lectures" :key="lectureIdx" class="mb-2">
              <!-- Основная лекция -->
              <div class="flex items-center justify-between py-2 ml-4" :class="lecture.active ? 'bg-[#E8F1FF] px-3 rounded' : 'px-3 rounded'">
                <div class="flex items-center">
                  <!-- Чекбокс -->
                  <div 
                    class="w-5 h-5 mr-3 border-2 rounded flex items-center justify-center cursor-pointer transition-colors duration-150" 
                    :class="lecture.completed ? 'bg-[#2467EC] border-[#2467EC]' : 'bg-white border-[#D1D5DB] hover:border-[#2467EC]'"
                    @click.stop="toggleLecture(idx, lectureIdx)"
                  >
                    <svg v-if="lecture.completed" class="w-3 h-3 text-white" fill="none" viewBox="0 0 16 16">
                      <polyline points="3,8 7,12 13,4" fill="none" stroke="white" stroke-width="2"/>
                    </svg>
                  </div>
                  <span 
                    :class="[
                      lecture.completed ? 'text-[#1D2026] font-semibold' : 'text-[#4E5566]',
                      'cursor-pointer hover:text-[#2467EC] transition-colors duration-150'
                    ]"
                    @click="goToLecture(idx, lectureIdx)"
                  >
                    {{ lecture.title }}
                  </span>
                </div>
                <!-- <span class="text-[#8C94A3] text-sm">{{ lecture.duration }}</span> -->
              </div>
              
              <!-- Подлекции с отступом -->
              <div v-if="lecture.children && lecture.children.length" class="ml-12">
                <div v-for="(child, childIdx) in lecture.children" :key="childIdx" class="flex items-center justify-between py-2" :class="child.active ? 'bg-[#E8F1FF] px-3 rounded' : 'px-3 rounded'">
                  <div class="flex items-center">
                    <!-- Чекбокс для подлекции -->
                    <div 
                      class="w-5 h-5 mr-3 border rounded flex items-center justify-center cursor-pointer transition-colors duration-150" 
                      :class="child.completed ? 'bg-[#2467EC] border-[#2467EC]' : 'bg-white border-[#D1D5DB] hover:border-[#2467EC]'"
                      @click.stop="toggleChildLecture(idx, lectureIdx, childIdx)"
                    >
                      <svg v-if="child.completed" class="w-3 h-3 text-white" fill="none" viewBox="0 0 16 16">
                        <polyline points="3,8 7,12 13,4" fill="none" stroke="white" stroke-width="2"/>
                      </svg>
                    </div>
                    <span 
                      class="text-[#4E5566] cursor-pointer hover:text-[#2467EC] transition-colors duration-150"
                      @click="goToLecture(idx, lectureIdx, childIdx)"
                    >
                      {{ child.title }}
                    </span>
                  </div>
                  <span class="text-[#8C94A3] text-sm">{{ child.duration }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template> 