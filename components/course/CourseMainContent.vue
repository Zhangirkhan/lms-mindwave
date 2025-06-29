<script setup>
import { 
    PlayCircleIcon,
    ChevronUpIcon,
    CheckCircleIcon,
    ChevronDownIcon,
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import CourseVideoPlayer from './CourseVideoPlayer.vue'
import CourseLectureInfo from './CourseLectureInfo.vue'
import CourseTabs from './CourseTabs.vue'
import CourseLessonsAccordion from './CourseLessonsAccordion.vue'

const tabs = [
  { name: 'Описание лекции', key: 'desc' },
  { name: 'Теория', key: 'theory' },
  { name: 'Практика', key: 'practice' },
  { name: 'Упражнения', key: 'exercises' },
  { name: 'Тесты', key: 'tests' },
  { name: 'Заметки', key: 'notes' },
  { name: 'Комментарии', key: 'comments' },
  { name: 'Рефлексия', key: 'reflection' },
]
const activeTab = ref('desc')

const sections = [
  {
    title: 'Getting Started',
    lectures: [
      {
        title: '1. What is Webflow?',
        duration: '07:31',
        completed: true,
        active: true,
        children: [
          {
            title: "What's is Webflow?",
            duration: '07:31',
            completed: false,
            children: [
              {
                title: 'Подкатегория 1',
                duration: '03:12',
                completed: false,
                children: []
              },
              {
                title: 'Подкатегория 2',
                duration: '02:45',
                completed: false,
                children: []
              }
            ]
          },
          {
            title: "What's is Webflow?",
            duration: '07:31',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '2. Sign up in Webflow',
        duration: '07:31',
        completed: false,
        children: [
          {
            title: "What's is Webflow?",
            duration: '07:31',
            completed: false,
            children: []
          }
        ]
      }
    ],
    open: true,
    info: '4 lectures • 51m',
    percent: '25% finish',
  },
  { title: 'Secret of Good Design', lectures: [], info: '52 lectures • 5h 49m' },
  { title: 'Practice Design Like an Artist', lectures: [], info: '43 lectures • 51m' },
  { title: 'Web Development (webflow)', lectures: [], info: '137 lectures • 10h 6m' },
  { title: 'Secrets of Making Money Freelancing', lectures: [], info: '21 lectures • 38m' },
  { title: 'Advanced', lectures: [], info: '39 lectures • 1h 31m' },
  { title: 'What\'s Next', lectures: [], info: '7 lectures • 1h 17m' },
]
const openSection = ref(0)

const goals = [
  { title: 'Цель 1: Понимание концепции литералов в Oracle SQL', desc: 'Мы начнем с самого начала и будем двигаться шаг за шагом.' },
  { title: 'Цель 2: Понимание концепции литералов в Oracle SQL', desc: 'Мы начнем с самого начала и будем двигаться шаг за шагом.' },
  { title: 'Цель 3: Понимание концепции литералов в Oracle SQL', desc: 'Мы начнем с самого начала и будем двигаться шаг за шагом.' },
  { title: 'Цель 4: Понимание концепции литералов в Oracle SQL', desc: 'Мы начнем с самого начала и будем двигаться шаг за шагом.' },
  { title: 'Цель 5: Понимание концепции литералов в Oracle SQL', desc: 'Мы начнем с самого начала и будем двигаться шаг за шагом.' },
]
const openGoal = ref(-1)

const exercises = [
  {
    text: "Напишите программу, которая выводит фразу 'Hello, world!' на экран используя функцию print().",
    example: "print('Hello, world!')",
    result: "Hello, world!"
  },
  {
    text: "Напишите программу, которая выводит фразу 'Hello, world!' на экран используя функцию print().",
    example: "print('Hello, world!')",
    result: "Hello, world!"
  },
  {
    text: "Напишите программу, которая выводит фразу 'Hello, world!' на экран используя функцию print().",
    example: "print('Hello, world!')",
    result: "Hello, world!"
  },
  {
    text: "Напишите программу, которая выводит фразу 'Hello, world!' на экран используя функцию print().",
    example: "print('Hello, world!')",
    result: "Hello, world!"
  },
]
</script>
<template>
  <div class="grid lg:grid-cols-[60%_40%] gap-8">
    <!-- Первый столбец: видео, вкладки, контент (65%) -->
    <div class="bg-white min-h-screen p-0 w-full">
      <CourseVideoPlayer />
      <CourseLectureInfo />
      <CourseTabs :tabs="tabs" v-model="activeTab">
        <template #default="{ activeTab }">
          <div class="min-h-[200px]">
            <template v-if="activeTab === 'desc'">
              <h3 class="text-xl font-bold mb-4 text-[#1D2026]">Описание лекций</h3>
              <div class="space-y-4 text-[#4E5566]">
                <p>Мы ответим на все, что вам нужно для создания вашего первого веб-сайта. От создания первой страницы до загрузки вашего сайта в интернет. Мы будем использовать самые популярные и бесплатный инструмент веб-дизайна под названием Visual Studio Code. Есть файлы упражнений, которые вы можете скачать и работать вместе со мной. В конце каждого видео у меня есть вопросы, которые вы можете попробовать, чтобы проверить свои знания на практике. Мы узнаем о том, как работать с Git и GitHub, и как решать самые распространенные проблемы. Мы углубимся во все интересные языки. Также как создание собственного мобильного веб-браузера с нуля, изучаем основы JavaScript и jQuery.</p>
                
                <p>Если это звучит слишком сложно - не волнуйтесь, этот курс предназначен для людей, которые новички в веб-дизайне и никогда не изучали решения. Мы начнем с самого начала и будем двигаться шаг за шагом.</p>
              </div>
              
              <div class="mt-6 space-y-2 text-[#4E5566]">
                <div v-for="(goal, idx) in goals" :key="goal.title">
                  <button
                    class="w-full flex items-center gap-2 p-2 text-left transition-colors duration-150 hover:bg-[#F5F7FA]"
                    @click="openGoal = openGoal === idx ? -1 : idx"
                  >
                    <span class="w-5 flex items-center justify-center">
                      <svg v-if="openGoal !== idx" width="16" height="16" viewBox="0 0 16 16" fill="none"><polygon points="6,4 10,8 6,12" fill="#4E5566"/></svg>
                      <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none"><polygon points="4,6 8,10 12,6" fill="#4E5566"/></svg>
                    </span>
                    <span class="text-[16px]">{{ goal.title }}</span>
                  </button>
                  <transition name="fade">
                    <div v-if="openGoal === idx" class="pl-7 pr-2 pb-2 pt-1 text-[#4E5566]">
                      {{ goal.desc }}
                    </div>
                  </transition>
                </div>
              </div>
            </template>
            <template v-else-if="activeTab === 'theory'">
              <h3 class="text-xl font-bold mb-4 text-[#1D2026]">Теория</h3>
              <p class="text-[#4E5566]">Фейковый текст: теоретический материал по теме лекции. Здесь может быть текст, формулы, схемы и ссылки на дополнительные ресурсы.</p>
            </template>
            <template v-else-if="activeTab === 'practice'">
              <h3 class="text-xl font-bold mb-4 text-[#1D2026]">Практика</h3>
              <p class="text-[#4E5566]">Фейковый текст: практические задания и упражнения для закрепления материала.</p>
            </template>
            <template v-else-if="activeTab === 'exercises'">
              <h3 class="text-2xl font-bold mb-6 text-[#1D2026]">Упражнения</h3>
              <div class="space-y-8">
                <div v-for="(ex, idx) in exercises" :key="idx" class="">
                  <div class="mb-2 text-[16px] text-[#1D2026]">
                    <span class="font-semibold">{{ idx + 1 }}. </span>{{ ex.text }}
                    <span class="font-semibold"> Пример решения:</span>
                    <code class="bg-[#F5F7FA] px-1 py-0.5 rounded text-[#2467EC] ml-1">{{ ex.example }}</code>
                    <span class="font-semibold ml-2">Ожидаемый результат:</span>
                    <span class="ml-1">{{ ex.result }}</span>
                  </div>
                  <input type="text" class="w-full border border-[#E5E7EB] rounded-none px-4 py-3 text-[16px] bg-[#FAFAFA] placeholder-[#B0B3B8]" placeholder="Last name" />
                </div>
              </div>
            </template>
            <template v-else-if="activeTab === 'tests'">
              <h3 class="text-xl font-bold mb-4 text-[#1D2026]">Тесты</h3>
              <ol class="list-decimal pl-6 text-[#4E5566]">
                <li>Фейковый тестовый вопрос 1</li>
                <li>Фейковый тестовый вопрос 2</li>
                <li>Фейковый тестовый вопрос 3</li>
              </ol>
            </template>
            <template v-else-if="activeTab === 'notes'">
              <h3 class="text-xl font-bold mb-4 text-[#1D2026]">Заметки</h3>
              <p class="text-[#4E5566]">Фейковый текст: здесь вы можете хранить свои заметки по лекции.</p>
            </template>
            <template v-else-if="activeTab === 'comments'">
              <h3 class="text-xl font-bold mb-4 text-[#1D2026]">Комментарии</h3>
              <p class="text-[#4E5566]">Фейковый текст: комментарии студентов и преподавателя.</p>
            </template>
            <template v-else-if="activeTab === 'reflection'">
              <h3 class="text-xl font-bold mb-4 text-[#1D2026]">Рефлексия</h3>
              <p class="text-[#4E5566]">Фейковый текст: ваши мысли и выводы после прохождения лекции.</p>
            </template>
          </div>
        </template>
      </CourseTabs>
    </div>
    <!-- Второй столбец: уроки (35%) -->
    <div class="bg-white min-h-screen p-0 w-full flex flex-col">
      <CourseLessonsAccordion :sections="sections" v-model:openSection="openSection" />
      <!-- Список курсов, пока скрыт -->
      <div class="hidden mt-8" id="course-list">
        <h3 class="text-xl font-bold mb-4 text-[#1D2026]">Другие курсы</h3>
        <ul class="space-y-2">
          <li class="p-4 bg-[#F5F7FA] rounded text-[#1D2026]">Курс 1: Основы Python</li>
          <li class="p-4 bg-[#F5F7FA] rounded text-[#1D2026]">Курс 2: Веб-разработка</li>
          <li class="p-4 bg-[#F5F7FA] rounded text-[#1D2026]">Курс 3: Дизайн интерфейсов</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style> 