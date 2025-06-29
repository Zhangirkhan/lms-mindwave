# 🛠 Руководство по разработке

## Архитектура проекта

### Компонентная структура

```
components/
├── course/                    # Компоненты курсов
│   ├── CourseVideoPlayer.vue  # Видео плеер с кастомными контролами
│   ├── CourseLessonsAccordion.vue # Список лекций с прогрессом
│   ├── CourseInfoBar.vue      # Информационная панель курса
│   ├── CourseLectureInfo.vue  # Информация о лекции
│   ├── CourseTabs.vue         # Табы контента
│   └── CourseMainContent.vue  # Основной контент курса
└── layout/
    ├── header/                # Компоненты хедера
    │   ├── TheMainHeader.vue  # Основной хедер с поиском
    │   ├── TheTopbar.vue      # Верхняя панель навигации
    │   ├── CategoryDropdown.vue # Выпадающее меню категорий
    │   ├── TopbarDropdown.vue # Универсальный dropdown
    │   └── NavItem.vue        # Элемент навигации
    ├── TheHeader.vue          # Обертка для хедера
    └── TheFooter.vue          # Футер сайта
```

## 🎨 Дизайн система

### Цвета
```css
--primary: #1D2026;           /* Основной темный */
--secondary: #4E5566;         /* Вторичный серый */
--accent: #2467EC;            /* Акцентный синий */
--topbar-inactive: #8C94A3;   /* Неактивные элементы */
--success: #22C55E;           /* Успех/завершено */
```

### Типографика
```css
font-family: 'Inter', sans-serif;
font-size-menu: 14px;         /* Меню и навигация */
font-size-body: 16px;         /* Основной текст */
```

### Breakpoints
```javascript
'xxxs': '320px',    // iPhone SE
'xxs': '375px',     // iPhone 12/13/14
'xs': '425px',      // Large phones
'sm': '640px',      // Tablets
'md': '768px',      // Small desktop
'lg': '1024px',     // Desktop
'xl': '1280px',     // Large desktop
'2xl': '1536px'     // Extra large
```

## 📱 Responsive подход

### Mobile First
Используется подход Mobile First с прогрессивным улучшением:

```html
<!-- Базовые стили для мобильных -->
<div class="flex-col">
  <!-- Контент для мобильных -->
</div>

<!-- Адаптация для больших экранов -->
<div class="flex-col lg:flex-row">
  <!-- Контент адаптируется на lg+ -->
</div>
```

### Порядок элементов
```html
<!-- Мобильные: курсы сверху, видео снизу -->
<!-- Десктоп: видео слева, курсы справа -->
<div class="flex max-xl:flex-col xl:flex-row">
  <div class="order-1 xl:order-2">Курсы</div>
  <div class="order-2 xl:order-1">Видео</div>
</div>
```

## 🎥 Видео плеер

### Основные функции
- HTML5 video с кастомными контролами
- Автоскрытие контролов через 3 секунды
- Клавиатурные сокращения
- Полноэкранный режим
- Управление громкостью с слайдером

### События
```javascript
// Основные события видео
onLoadedMetadata()  // Загрузка метаданных
onTimeUpdate()      // Обновление времени
onPlay()           // Начало воспроизведения  
onPause()          // Пауза
```

### Клавиатурные сокращения
- `Space` - Play/Pause
- `M` - Mute/Unmute
- `F` - Fullscreen
- `←/→` - Перемотка на 10 секунд

## 🔧 Разработка компонентов

### Соглашения по именованию
- **Компоненты**: PascalCase (`CourseVideoPlayer.vue`)
- **Props**: camelCase (`openSection`)
- **Events**: kebab-case (`update:openSection`)
- **CSS классы**: Tailwind utilities

### Структура компонента
```vue
<script setup>
// 1. Импорты
import { ref } from 'vue'

// 2. Props и emits
const props = defineProps({...})
const emit = defineEmits([...])

// 3. Реактивные данные
const localState = ref(...)

// 4. Computed свойства
const computedValue = computed(...)

// 5. Методы
const handleClick = () => {...}

// 6. Lifecycle hooks
onMounted(() => {...})
</script>

<template>
  <!-- Шаблон с семантической структурой -->
</template>

<style scoped>
/* Кастомные стили только если необходимо */
</style>
```

## 🎯 Состояние приложения

### Локальное состояние
Используется для компонентов:
```javascript
const isOpen = ref(false)
const currentTab = ref('desc')
```

### Глобальное состояние (Pinia)
```javascript
// stores/main.ts
export const useMainStore = defineStore('main', {
  state: () => ({
    user: null,
    currentCourse: null
  })
})
```

## 🧪 Тестирование

### Рекомендуемые инструменты
- **Vitest** - для unit тестов
- **@vue/test-utils** - для тестирования компонентов
- **Playwright** - для E2E тестов

### Пример теста
```javascript
import { mount } from '@vue/test-utils'
import CourseVideoPlayer from '@/components/course/CourseVideoPlayer.vue'

describe('CourseVideoPlayer', () => {
  it('should toggle play state', async () => {
    const wrapper = mount(CourseVideoPlayer)
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.isPlaying).toBe(true)
  })
})
```

## 🚀 Деплой

### Подготовка к продакшену
```bash
# Сборка
npm run build

# Предпросмотр
npm run preview
```

### Переменные окружения
```bash
# .env
NUXT_PUBLIC_API_URL=https://api.example.com
NUXT_SECRET_KEY=your-secret-key
```

## 📝 Код стайл

### ESLint правила
- Используйте `const` вместо `let` где возможно
- Предпочитайте стрелочные функции
- Используйте деструктуризацию
- Избегайте `any` в TypeScript

### Tailwind CSS
- Используйте утилитарные классы
- Группируйте связанные классы
- Используйте responsive префиксы последовательно
- Избегайте кастомного CSS где возможно

## 🔍 Отладка

### Vue DevTools
Установите Vue DevTools для отладки:
- Состояние компонентов
- События
- Производительность

### Полезные команды
```bash
# Анализ bundle
npm run analyze

# Проверка типов
npm run type-check

# Линтинг
npm run lint
```

## 📚 Ресурсы

- [Nuxt 3 Documentation](https://nuxt.com/)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/) 