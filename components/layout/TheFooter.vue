<script setup>
import { 
    CameraIcon,
    VideoCameraIcon,
    ArrowRightIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
    <footer class="bg-[#1D2026] text-[#8C94A3] mt-16 text-[14px]">
        <div class="max-w-[1856px] mx-auto px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                      <svg class="h-8 w-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0L40 20L20 40L0 20L20 0Z" fill="white"></path><path d="M20 6L34 20L20 34L6 20L20 6Z" fill="#18192F"></path></svg>
                      <span class="font-bold text-xl text-white">MINDWAVE</span>
                    </div>
                    <p>Курсы для всех возрастов и интересов: программирование, иностранные языки и многое другое. Стартуйте обучение вместе с нами!</p>
                    <div class="flex space-x-4 mt-4">
                        <a href="#" class="w-8 h-8 bg-gray-700 flex items-center justify-center hover:bg-gray-600 rounded-full"><CameraIcon class="w-5 h-5" /></a>
                        <a href="#" class="w-8 h-8 bg-gray-700 flex items-center justify-center hover:bg-gray-600 rounded-full"><VideoCameraIcon class="w-5 h-5" /></a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-white mb-4">БЫСТРАЯ НАВИГАЦИЯ</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-white">Главная</a></li>
                        <li><a href="#" class="hover:text-white flex items-center">Курсы <ArrowRightIcon class="w-4 h-4 ml-1" /></a></li>
                        <li><a href="#" class="hover:text-white">Подписки</a></li>
                        <li><a href="#" class="hover:text-white">Контакты</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 class="font-bold text-white mb-4">ПОДДЕРЖКА</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-white">Центр помощи</a></li>
                        <li><a href="#" class="hover:text-white">Частые вопросы</a></li>
                        <li><a href="#" class="hover:text-white">Условия и положения</a></li>
                        <li><a href="#" class="hover:text-white">Политика конфиденциальности</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-white mb-4">О НАС</h4>
                    <p>ТОО "MINDWAVE"<br>Адрес: Казахстан, г. Алматы, Микрорайон Аккент, дом 41, кв/офис 20<br>БИН (ИИН): 241040011849</p>
                </div>
            </div>
            <div class="mt-12 text-center border-t border-gray-700 pt-8">
                ©Copyrighted & Designed by <a href="#" class="text-white font-semibold">MindWave</a>
            </div>
        </div>
    </footer>
</template> 