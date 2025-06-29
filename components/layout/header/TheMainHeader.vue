<script setup>
import { 
    ChevronDownIcon, 
    MagnifyingGlassIcon, 
    BellIcon, 
    HeartIcon, 
    ShoppingCartIcon
} from '@heroicons/vue/24/outline'
import CategoryDropdown from './CategoryDropdown.vue'

const categories = [
  {
    name: 'Разработка программного обеспечения',
    subcategories: [
      'Разработка веб-приложений',
      'Язык программирования Python',
      'Язык программирования Java',
      'Язык программирования C++',
      'Разработка мобильных приложений',
      'DevOps',
      'Data Science',
      'Искусственный интеллект и машинное обучение',
      'Кибербезопасность'
    ]
  },
  { name: 'Дизайн и графика', subcategories: [
      'Графический дизайн',
      'UX/UI дизайн',
      '3D моделирование',
      'Анимация',
      'Веб-дизайн'
    ] },
  { name: 'Академические предметы', subcategories: [] },
  { name: 'Иностранные языки', subcategories: [] },
  { name: 'Профессиональные навыки', subcategories: [] },
  { name: 'Личностное развитие', subcategories: [] },
  { name: 'ИТ и технологии', subcategories: [] },
  { name: 'Наука и техника', subcategories: [] },
  { name: 'Здоровье и спорт', subcategories: [] }
]
</script>

<template>
    <header class="bg-white border-b">
        <div class="max-w-[1856px] mx-auto px-8">
        <div class="flex items-center justify-between h-20">
        <!-- Logo and Search -->
        <div class="flex items-center space-x-8">
            <div class="flex items-center space-x-2">
                <img src="~/assets/images/svg/new-logo.svg.svg" alt="Logo" class="h-10">
            </div>
            <div class="md:flex items-center border border-gray-200 text-[14px]">
                 <CategoryDropdown :categories="categories" />
                 <div class="flex items-center border-l border-gray-200 px-3 text-[#4E5566] ml-[10px]">
                     <MagnifyingGlassIcon class="w-5 h-5" />
                     <input type="text" placeholder="Поиск" class="bg-transparent text-[#1D2026] focus:outline-none ml-2 w-80">
                 </div>
            </div>
        </div>

        <!-- User Actions -->
        <div class="flex items-center space-x-6 text-[#1D2026]">
            <a href="#" class="relative hover:text-[#2467EC]">
                <BellIcon class="w-6 h-6" />
                <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white"></span>
            </a>
            <a href="#" class="relative hover:text-[#2467EC]">
                <HeartIcon class="w-6 h-6" />
            </a>
            <a href="#" class="relative hover:text-[#2467EC]">
                <ShoppingCartIcon class="w-6 h-6" />
                <span class="absolute -top-1 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </a>
            <div class="relative group">
                <button class="flex items-center space-x-2">
                    <img class="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40" alt="User avatar">
                </button>
                <div class="absolute right-0 mt-2 w-48 bg-white shadow-lg border hidden group-hover:block hover:block z-50">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Профиль</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Мои курсы</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Выйти</a>
                </div>
            </div>
        </div>
        </div>
    </div>
    </header>
</template>
