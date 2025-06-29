<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  PlayIcon, 
  PauseIcon, 
  SpeakerWaveIcon, 
  SpeakerXMarkIcon,
  ArrowsPointingOutIcon,
  Cog6ToothIcon
} from '@heroicons/vue/24/outline'

const videoRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(1)
const isMuted = ref(false)
const isFullscreen = ref(false)
const showControls = ref(true)
const controlsTimeout = ref(null)

// Форматирование времени
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

// Управление воспроизведением
const togglePlay = () => {
  if (videoRef.value) {
    if (isPlaying.value) {
      videoRef.value.pause()
    } else {
      videoRef.value.play()
    }
  }
}

// Управление звуком
const toggleMute = () => {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted
    isMuted.value = videoRef.value.muted
  }
}

// Изменение громкости
const changeVolume = (event) => {
  const newVolume = event.target.value / 100
  volume.value = newVolume
  if (videoRef.value) {
    videoRef.value.volume = newVolume
  }
}

// Перемотка
const seek = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const pos = (event.clientX - rect.left) / rect.width
  const newTime = pos * duration.value
  if (videoRef.value) {
    videoRef.value.currentTime = newTime
  }
}

// Полноэкранный режим
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    videoRef.value?.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// Скрытие контролов
const hideControlsAfterDelay = () => {
  if (controlsTimeout.value) {
    clearTimeout(controlsTimeout.value)
  }
  controlsTimeout.value = setTimeout(() => {
    if (isPlaying.value) {
      showControls.value = false
    }
  }, 3000)
}

const showControlsTemporarily = () => {
  showControls.value = true
  hideControlsAfterDelay()
}

// События видео
const onLoadedMetadata = () => {
  duration.value = videoRef.value?.duration || 0
}

const onTimeUpdate = () => {
  currentTime.value = videoRef.value?.currentTime || 0
}

const onPlay = () => {
  isPlaying.value = true
  hideControlsAfterDelay()
}

const onPause = () => {
  isPlaying.value = false
  showControls.value = true
}

// Клавиатурные сокращения
const onKeydown = (event) => {
  switch (event.code) {
    case 'Space':
      event.preventDefault()
      togglePlay()
      break
    case 'KeyM':
      toggleMute()
      break
    case 'KeyF':
      toggleFullscreen()
      break
    case 'ArrowLeft':
      if (videoRef.value) {
        videoRef.value.currentTime -= 10
      }
      break
    case 'ArrowRight':
      if (videoRef.value) {
        videoRef.value.currentTime += 10
      }
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement
  })
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  if (controlsTimeout.value) {
    clearTimeout(controlsTimeout.value)
  }
})
</script>

<template>
  <div 
    class="relative bg-black aspect-video group cursor-pointer"
    @mousemove="showControlsTemporarily"
    @click="togglePlay"
  >
    <!-- Видео элемент -->
    <video
      ref="videoRef"
      class="w-full h-full object-cover"
      @loadedmetadata="onLoadedMetadata"
      @timeupdate="onTimeUpdate"
      @play="onPlay"
      @pause="onPause"
      preload="metadata"
    >
      <!-- Используем демо видео или ваш локальный файл -->
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
      <!-- Если хотите локальное видео, замените на: -->
      <!-- <source src="/videos/sample-video.mp4" type="video/mp4"> -->
      Ваш браузер не поддерживает видео.
    </video>

    <!-- Overlay для паузы -->
    <div 
      v-if="!isPlaying" 
      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
    >
      <div class="bg-black bg-opacity-50 rounded-full p-4">
        <PlayIcon class="w-16 h-16 text-white" />
      </div>
    </div>

    <!-- Контролы -->
    <div 
      v-show="showControls || !isPlaying"
      class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300"
    >
      <!-- Прогресс бар -->
      <div 
        class="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer hover:h-2 transition-all duration-200"
        @click="seek"
      >
        <div 
          class="h-full bg-[#2467EC] rounded-full transition-all duration-200"
          :style="{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }"
        ></div>
      </div>

      <!-- Контролы -->
      <div class="flex items-center justify-between text-white">
        <!-- Левая часть -->
        <div class="flex items-center space-x-4">
          <!-- Play/Pause -->
          <button @click.stop="togglePlay" class="hover:text-[#2467EC] transition-colors">
            <PlayIcon v-if="!isPlaying" class="w-6 h-6" />
            <PauseIcon v-else class="w-6 h-6" />
          </button>

          <!-- Время -->
          <div class="text-sm font-medium">
            {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
          </div>

          <!-- Громкость -->
          <div class="flex items-center space-x-2">
            <button @click.stop="toggleMute" class="hover:text-[#2467EC] transition-colors">
              <SpeakerWaveIcon v-if="!isMuted && volume > 0" class="w-5 h-5" />
              <SpeakerXMarkIcon v-else class="w-5 h-5" />
            </button>
            <input
              type="range"
              min="0"
              max="100"
              :value="isMuted ? 0 : volume * 100"
              @input="changeVolume"
              @click.stop
              class="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            >
          </div>
        </div>

        <!-- Правая часть -->
        <div class="flex items-center space-x-4">
          <!-- Настройки -->
          <button class="hover:text-[#2467EC] transition-colors">
            <Cog6ToothIcon class="w-5 h-5" />
          </button>

          <!-- Полный экран -->
          <button @click.stop="toggleFullscreen" class="hover:text-[#2467EC] transition-colors">
            <ArrowsPointingOutIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Подсказки управления -->
    <div class="absolute top-4 right-4 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
      Space: Play/Pause | M: Mute | F: Fullscreen | ←/→: Seek
    </div>
  </div>
</template>

<style scoped>
/* Кастомный стиль для слайдера громкости */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2467EC;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2467EC;
  cursor: pointer;
  border: none;
}
</style> 