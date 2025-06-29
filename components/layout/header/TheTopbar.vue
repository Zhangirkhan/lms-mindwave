<script setup>
import TopbarDropdown from './TopbarDropdown.vue'
import NavItem from './NavItem.vue'

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
</script>

<template>
    <!-- Topbar -->
    <div class="bg-[#1D2026] text-[14px]">
        <div class="max-w-[1856px] mx-auto px-8 flex justify-between items-center h-12">
            <nav class="flex items-center space-x-8 h-full">
                <NavItem
                    v-for="item in navItems"
                    :key="item.text"
                    :href="item.href"
                    :active="item.active"
                >
                    {{ item.text }}
                </NavItem>
            </nav>
            <div class="flex items-center space-x-4">
                <TopbarDropdown title="Инструктор" :items="instructorItems" />
                <TopbarDropdown title="Русский" :items="languageItems" />
            </div>
        </div>
    </div>
</template>