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
            title: "Introduction to Webflow Platform",
            duration: '03:45',
            completed: true,
            children: []
          },
          {
            title: "Webflow vs Traditional Coding",
            duration: '03:46',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '2. Sign up in Webflow',
        duration: '05:12',
        completed: false,
        children: [
          {
            title: "Creating Your Account",
            duration: '02:30',
            completed: false,
            children: []
          },
          {
            title: "Choosing the Right Plan",
            duration: '02:42',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '3. Teaser of Webflow',
        duration: '08:24',
        completed: false,
        children: [
          {
            title: "Interface Overview",
            duration: '04:15',
            completed: false,
            children: []
          },
          {
            title: "Building Your First Element",
            duration: '04:09',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '4. Figma Introduction',
        duration: '06:18',
        completed: false,
        children: [
          {
            title: "What is Figma?",
            duration: '02:45',
            completed: false,
            children: []
          },
          {
            title: "Figma to Webflow Workflow",
            duration: '03:33',
            completed: false,
            children: []
          }
        ]
      }
    ],
    open: true,
    info: '4 lectures • 27m',
    percent: '25% finish',
  },
  { 
    title: 'Secret of Good Design', 
    lectures: [
      {
        title: '1. Design Principles Fundamentals',
        duration: '12:45',
        completed: false,
        children: [
          {
            title: "Typography Basics",
            duration: '06:20',
            completed: false,
            children: []
          },
          {
            title: "Color Theory",
            duration: '06:25',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '2. Layout and Composition',
        duration: '15:30',
        completed: false,
        children: [
          {
            title: "Grid Systems",
            duration: '08:15',
            completed: false,
            children: []
          },
          {
            title: "White Space Usage",
            duration: '07:15',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '3. Visual Hierarchy',
        duration: '11:20',
        completed: false,
        children: [
          {
            title: "Creating Focus Points",
            duration: '05:45',
            completed: false,
            children: []
          },
          {
            title: "Contrast and Emphasis",
            duration: '05:35',
            completed: false,
            children: []
          }
        ]
      }
    ],
    info: '52 lectures • 5h 49m' 
  },
  { 
    title: 'Practice Design Like an Artist', 
    lectures: [
      {
        title: '1. Sketching Techniques',
        duration: '09:15',
        completed: false,
        children: [
          {
            title: "Wireframing Basics",
            duration: '04:30',
            completed: false,
            children: []
          },
          {
            title: "Rapid Prototyping",
            duration: '04:45',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '2. Design Inspiration Sources',
        duration: '07:42',
        completed: false,
        children: [
          {
            title: "Dribbble and Behance",
            duration: '03:50',
            completed: false,
            children: []
          },
          {
            title: "Creating Mood Boards",
            duration: '03:52',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '3. Design System Creation',
        duration: '18:30',
        completed: false,
        children: [
          {
            title: "Component Libraries",
            duration: '09:15',
            completed: false,
            children: []
          },
          {
            title: "Style Guides",
            duration: '09:15',
            completed: false,
            children: []
          }
        ]
      }
    ],
    info: '43 lectures • 51m' 
  },
  { 
    title: 'Web Development (webflow)', 
    lectures: [
      {
        title: '1. Webflow Interface Deep Dive',
        duration: '14:25',
        completed: false,
        children: [
          {
            title: "Navigator Panel",
            duration: '07:10',
            completed: false,
            children: []
          },
          {
            title: "Style Panel",
            duration: '07:15',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '2. HTML Structure in Webflow',
        duration: '16:45',
        completed: false,
        children: [
          {
            title: "Div Blocks and Containers",
            duration: '08:20',
            completed: false,
            children: []
          },
          {
            title: "Semantic HTML Elements",
            duration: '08:25',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '3. CSS Styling in Webflow',
        duration: '22:30',
        completed: false,
        children: [
          {
            title: "Flexbox Layouts",
            duration: '11:15',
            completed: false,
            children: []
          },
          {
            title: "CSS Grid Implementation",
            duration: '11:15',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '4. Responsive Design',
        duration: '19:20',
        completed: false,
        children: [
          {
            title: "Breakpoints Setup",
            duration: '09:40',
            completed: false,
            children: []
          },
          {
            title: "Mobile-First Approach",
            duration: '09:40',
            completed: false,
            children: []
          }
        ]
      }
    ],
    info: '137 lectures • 10h 6m' 
  },
  { 
    title: 'Secrets of Making Money Freelancing', 
    lectures: [
      {
        title: '1. Finding Your First Clients',
        duration: '13:15',
        completed: false,
        children: [
          {
            title: "Building a Portfolio",
            duration: '06:30',
            completed: false,
            children: []
          },
          {
            title: "Networking Strategies",
            duration: '06:45',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '2. Pricing Your Services',
        duration: '10:45',
        completed: false,
        children: [
          {
            title: "Value-Based Pricing",
            duration: '05:20',
            completed: false,
            children: []
          },
          {
            title: "Creating Packages",
            duration: '05:25',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '3. Client Communication',
        duration: '14:00',
        completed: false,
        children: [
          {
            title: "Project Proposals",
            duration: '07:00',
            completed: false,
            children: []
          },
          {
            title: "Managing Revisions",
            duration: '07:00',
            completed: false,
            children: []
          }
        ]
      }
    ],
    info: '21 lectures • 38m' 
  },
  { 
    title: 'Advanced', 
    lectures: [
      {
        title: '1. Custom Code Integration',
        duration: '16:30',
        completed: false,
        children: [
          {
            title: "HTML Embeds",
            duration: '08:15',
            completed: false,
            children: []
          },
          {
            title: "Custom CSS",
            duration: '08:15',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '2. Webflow CMS',
        duration: '20:45',
        completed: false,
        children: [
          {
            title: "Creating Collections",
            duration: '10:20',
            completed: false,
            children: []
          },
          {
            title: "Dynamic Content",
            duration: '10:25',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '3. E-commerce Setup',
        duration: '18:15',
        completed: false,
        children: [
          {
            title: "Product Pages",
            duration: '09:10',
            completed: false,
            children: []
          },
          {
            title: "Payment Integration",
            duration: '09:05',
            completed: false,
            children: []
          }
        ]
      }
    ],
    info: '39 lectures • 1h 31m' 
  },
  { 
    title: 'What\'s Next', 
    lectures: [
      {
        title: '1. Publishing Your Website',
        duration: '12:20',
        completed: false,
        children: [
          {
            title: "Domain Setup",
            duration: '06:10',
            completed: false,
            children: []
          },
          {
            title: "SEO Basics",
            duration: '06:10',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '2. Website Maintenance',
        duration: '08:45',
        completed: false,
        children: [
          {
            title: "Regular Updates",
            duration: '04:20',
            completed: false,
            children: []
          },
          {
            title: "Performance Optimization",
            duration: '04:25',
            completed: false,
            children: []
          }
        ]
      },
      {
        title: '3. Growing Your Skills',
        duration: '15:30',
        completed: false,
        children: [
          {
            title: "Advanced Webflow Features",
            duration: '07:45',
            completed: false,
            children: []
          },
          {
            title: "Continuing Education",
            duration: '07:45',
            completed: false,
            children: []
          }
        ]
      }
    ],
    info: '7 lectures • 1h 17m' 
  },
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
          <div class="flex w-full max-lg:flex-col lg:flex-row gap-4">
    <!-- Курсы столбец: на мобиле первый, на xl справа -->
    <div class="max-lg:order-1 lg:order-2">
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
    <!-- Видео столбец: на мобиле второй, на xl слева -->
    <div class="max-lg:order-2 lg:w-[60%] lg:order-1">
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
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style> 