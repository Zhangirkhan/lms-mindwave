<template>
  <div class="bg-black aspect-video flex items-center justify-center text-white relative">
    <img src="https://images.unsplash.com/photo-1590272456521-44aa31a23376?q=80&w=2500&auto=format&fit=crop" alt="Video thumbnail" class="object-cover w-full h-full">
    <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 text-white opacity-80 hover:opacity-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 12l-6.75 4.5v-9l6.75 4.5z" />
        </svg>
      </button>
    </div>
    <div class="absolute bottom-4 left-4 right-4 text-sm">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <span class="text-white">1:25 / 9:15</span>
        </div>
        <div class="flex items-center space-x-4">
          <!-- icons -->
        </div>
      </div>
      <div class="w-full bg-gray-600 rounded-full h-1 mt-2">
        <div class="bg-[#2467EC] h-1 rounded-full" style="width: 15%"></div>
      </div>
    </div>
  </div>
</template> 