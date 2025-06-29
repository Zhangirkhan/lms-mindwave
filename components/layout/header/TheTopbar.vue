<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import TopbarDropdown from './TopbarDropdown.vue'
import NavItem from './NavItem.vue'

const isMenuOpen = ref(false)

const instructorItems = [
  { text: 'Профиль', href: '#' },
  { text: 'Мои курсы', href: '#' },
  { text: 'Выйти', href: '#' }
]

const languageItems = [
  { text: 'Русский', href: '#' },
  { text: 'English', href: '#' }
]

const navItems = [
  { text: 'Главная', href: '#', active: true },
  { text: 'Курсы', href: '#', active: false },
  { text: 'Подписки', href: '#', active: false },
  { text: 'Мероприятия', href: '#', active: false }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
    <!-- Desktop Topbar -->
    <div class="bg-[#1D2026] text-[14px]">
        <div class="max-w-[1856px] mx-auto px-8 flex justify-between items-center h-12">
            <!-- Desktop Navigation -->
            <nav class="max-lg:hidden md:flex items-center space-x-8 h-full">
                <NavItem
                    v-for="item in navItems"
                    :key="item.text"
                    :href="item.href"
                    :active="item.active"
                >
                    {{ item.text }}
                </NavItem>
            </nav>
            
            <!-- Mobile Menu Button -->
            <div class="min-md:hidden">
                <button 
                    @click="toggleMenu"
                    class="p-2 hover:bg-[#2a2f38] rounded transition-colors text-white"
                >
                    <Bars3Icon v-if="!isMenuOpen" class="w-5 h-5 xxxs:w-6 xxxs:h-6" />
                    <XMarkIcon v-else class="w-5 h-5 xxxs:w-6 xxxs:h-6" />
                </button>
            </div>
            
            <!-- Desktop Dropdowns -->
            <div class="max-lg:hidden md:flex items-center space-x-4">
                <TopbarDropdown title="Инструктор" :items="instructorItems" />
                <TopbarDropdown title="Русский" :items="languageItems" />
            </div>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
        v-if="isMenuOpen" 
        class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="closeMenu"
    ></div>

    <!-- Mobile Menu Panel -->
    <div 
        class="lg:hidden fixed top-0 right-0 h-full bg-[#1D2026] text-white transform transition-transform duration-300 z-50"
        :class="[
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
            'w-full xxxs:w-80 xs:w-80 sm:w-80'
        ]"
    >
        <!-- Menu Header with User Info -->
        <div class="p-4 border-b border-[#2a2f38] bg-gradient-to-r from-[#1D2026] to-[#2a2f38]">
            <div class="flex justify-between items-center mb-3">
                <h3 class="text-lg font-semibold">Меню</h3>
                <button 
                    @click="closeMenu"
                    class="p-2 hover:bg-[#2a2f38] rounded transition-colors"
                >
                    <XMarkIcon class="w-6 h-6" />
                </button>
            </div>
            <!-- User Profile Section -->
            <div class="flex items-center space-x-3">
                <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40" alt="User">
                <div>
                    <div class="text-sm font-medium text-white">Иван Иванов</div>
                    <div class="text-xs text-[#8C94A3]">ivan@example.com</div>
                </div>
            </div>
        </div>

        <!-- Menu Content -->
        <div class="flex flex-col h-full overflow-y-auto">
            <!-- Main Navigation Section -->
            <div class="py-4 border-b border-[#2a2f38]">
                <div class="px-4 mb-3">
                    <h4 class="text-xs font-semibold text-[#8C94A3] uppercase tracking-wider">Навигация</h4>
                </div>
                <div class="space-y-1 px-2">
                    <a 
                        v-for="item in navItems"
                        :key="item.text"
                        :href="item.href"
                        @click="closeMenu"
                        class="flex items-center px-3 py-3 rounded-lg text-[14px] transition-colors"
                        :class="item.active 
                            ? 'bg-[#2467EC] text-white shadow-lg' 
                            : 'text-[#8C94A3] hover:text-white hover:bg-[#2a2f38]'"
                    >
                        <span class="w-2 h-2 rounded-full mr-3" 
                              :class="item.active ? 'bg-white' : 'bg-[#4E5566]'"></span>
                        {{ item.text }}
                    </a>
                </div>
            </div>

            <!-- Profile & Account Section -->
            <div class="py-4 border-b border-[#2a2f38]">
                <div class="px-4 mb-3">
                    <h4 class="text-xs font-semibold text-[#8C94A3] uppercase tracking-wider">Мой аккаунт</h4>
                </div>
                <div class="space-y-1 px-2">
                    <a 
                        v-for="item in instructorItems"
                        :key="item.text"
                        :href="item.href"
                        @click="closeMenu"
                        class="flex items-center px-3 py-3 rounded-lg text-[14px] text-[#8C94A3] hover:text-white hover:bg-[#2a2f38] transition-colors"
                    >
                        <svg class="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path v-if="item.text === 'Профиль'" fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            <path v-else-if="item.text === 'Мои курсы'" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path v-else fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                        </svg>
                        {{ item.text }}
                    </a>
                </div>
            </div>

            <!-- Settings Section -->
            <div class="py-4 border-b border-[#2a2f38]">
                <div class="px-4 mb-3">
                    <h4 class="text-xs font-semibold text-[#8C94A3] uppercase tracking-wider">Настройки</h4>
                </div>
                <div class="space-y-1 px-2">
                    <a 
                        v-for="item in languageItems"
                        :key="item.text"
                        :href="item.href"
                        @click="closeMenu"
                        class="flex items-center px-3 py-3 rounded-lg text-[14px] text-[#8C94A3] hover:text-white hover:bg-[#2a2f38] transition-colors"
                    >
                        <svg class="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd" />
                        </svg>
                        {{ item.text }}
                        <span v-if="item.text === 'Русский'" class="ml-auto text-xs bg-[#2467EC] px-2 py-1 rounded-full">Активен</span>
                    </a>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="py-4 flex-1">
                <div class="px-4 mb-3">
                    <h4 class="text-xs font-semibold text-[#8C94A3] uppercase tracking-wider">Быстрые действия</h4>
                </div>
                <div class="space-y-1 px-2">
                    <a href="#" @click="closeMenu" class="flex items-center px-3 py-3 rounded-lg text-[14px] text-[#8C94A3] hover:text-white hover:bg-[#2a2f38] transition-colors">
                        <svg class="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        Мои достижения
                    </a>
                    <a href="#" @click="closeMenu" class="flex items-center px-3 py-3 rounded-lg text-[14px] text-[#8C94A3] hover:text-white hover:bg-[#2a2f38] transition-colors">
                        <svg class="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                        Помощь и поддержка
                    </a>
                </div>
            </div>

            <!-- Menu Footer -->
            <div class="p-4 border-t border-[#2a2f38] bg-[#1a1e24]">
                <div class="text-xs text-[#8C94A3] text-center">
                    © 2024 Платформа обучения
                </div>
            </div>
        </div>
    </div>
</template>