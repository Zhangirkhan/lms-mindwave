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
        <div class="max-w-[1856px] mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <!-- Logo and Search -->
                <div class="flex items-center space-x-6 flex-1">
                    <img src="~/assets/images/svg/new-logo.svg.svg" alt="Logo" class="h-10">
                    
                    <!-- Search bar -->
                    <div class="flex items-center border border-gray-200 flex-1 max-w-2xl">
                        <CategoryDropdown :categories="categories" />
                        <div class="flex items-center border-l border-gray-200 px-4 text-gray-500 flex-1">
                            <MagnifyingGlassIcon class="w-5 h-5" />
                            <input 
                                type="text" 
                                placeholder="Поиск" 
                                class="bg-transparent text-gray-900 focus:outline-none ml-2 w-full"
                            >
                        </div>
                    </div>
                </div>

                <!-- User Actions -->
                <div class="flex items-center space-x-4 text-gray-700">
                    <button class="relative hover:text-blue-600 transition-colors">
                        <BellIcon class="w-6 h-6" />
                        <span class="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
                    </button>
                    
                    <button class="hover:text-blue-600 transition-colors">
                        <HeartIcon class="w-6 h-6" />
                    </button>
                    
                    <button class="relative hover:text-blue-600 transition-colors">
                        <ShoppingCartIcon class="w-6 h-6" />
                        <span class="absolute -top-1 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
                    </button>
                    
                    <div class="relative group">
                        <button class="hover:opacity-80 transition-opacity">
                            <img class="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40" alt="User">
                        </button>
                        <div class="absolute right-0 mt-2 w-48 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div class="py-1">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Профиль</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Мои курсы</a>
                                <hr class="my-1 border-gray-200">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Выйти</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
