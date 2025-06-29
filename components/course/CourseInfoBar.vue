<script setup>
import { 
    PlayCircleIcon,
    ClockIcon,
} from '@heroicons/vue/24/outline'
import FolderNotchOpen from '~/assets/images/svg/FolderNotchOpen.svg'
</script>

<template>
    <div class="bg-[#F5F7FA] border-b">
        <div class="max-w-[1856px] mx-auto px-8 py-3">
            <div class="flex max-md:flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
                <div class="flex items-center gap-4">
                  <button class="w-11 h-11 bg-[#2467EC] flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <div>
                    <h1 class="text-[18px] font-semibold text-[#1D2026] leading-tight">Complete Website Responsive Design: from Figma to Webflow to Website Design</h1>
                    <div class="flex items-center gap-6 text-[15px] text-[#4E5566] mt-1">
                      <span class="flex items-center"><img src="~/assets/images/svg/FolderNotchOpen.svg" class="w-5 h-5 mr-1" alt="Sections" /> 6 Sections</span>
                      <span class="flex items-center"><PlayCircleIcon class="w-5 h-5 text-[#7B61FF] mr-1" /> 202 lectures</span>
                      <span class="flex items-center"><ClockIcon class="w-5 h-5 text-[#FF9C41] mr-1" /> 19h 37m</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 text-[15px]">
                  <button class="px-5 py-2 border bg-white border-gray-300 hover:bg-gray-100 text-[#2467EC] font-medium">Write A Review</button>
                  <button class="px-5 py-2 bg-[#2467EC] text-white hover:bg-blue-700 font-medium">Next Lecture</button>
                </div>
            </div>
        </div>
    </div>
</template> 