<script setup>
// Импортируем иконки для соцсетей
</script>

<template>
    <footer class="bg-[#1D2026] text-[#8C94A3] mt-16 text-[14px]">
        <div class="max-w-[1856px] mx-auto px-8 py-12">
            <div class="grid md:grid-cols-4 gap-8">
                <!-- Логотип и описание -->
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                      <svg class="h-8 w-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="white"></path>
                        <path d="M20 6L34 20L20 34L6 20L20 6Z" fill="#1D2026"></path>
                      </svg>
                      <span class="font-bold text-xl text-white">MINDWAVE</span>
                    </div>
                    <p class="text-[#8C94A3] mb-6 leading-relaxed">
                        Курсы для всех возрастов и интересов: программирование, иностранные языки и многое другое. Стартуйте обучение вместе с нами!
                    </p>
                    <div class="flex space-x-4">
                        <!-- Instagram -->
                        <a href="#" class="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg class="w-5 h-5 text-[#8C94A3]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <!-- TikTok -->
                        <a href="#" class="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg class="w-5 h-5 text-[#8C94A3]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <!-- Быстрая навигация -->
                <div>
                    <h4 class="font-bold text-white mb-4 text-[14px]">БЫСТРАЯ НАВИГАЦИЯ</h4>
                    <ul class="space-y-2 text-[14px]">
                        <li><a href="#" class="text-[#8C94A3] hover:text-white transition-colors">Главная</a></li>
                        <li>
                            <a href="#" class="text-[#8C94A3] hover:text-white transition-colors flex items-center">
                                Курсы 
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </li>
                        <li><a href="#" class="text-[#8C94A3] hover:text-white transition-colors">Подписки</a></li>
                        <li><a href="#" class="text-[#8C94A3] hover:text-white transition-colors">Контакты</a></li>
                    </ul>
                </div>
                
                <!-- Поддержка -->
                <div>
                    <h4 class="font-bold text-white mb-4 text-[14px]">ПОДДЕРЖКА</h4>
                    <ul class="space-y-2 text-[14px]">
                        <li><a href="#" class="text-[#8C94A3] hover:text-white transition-colors">Центр помощи</a></li>
                        <li><a href="#" class="text-[#8C94A3] hover:text-white transition-colors">Частые вопросы</a></li>
                        <li><a href="#" class="text-[#8C94A3] hover:text-white transition-colors">Условия и положения</a></li>
                        <li><a href="#" class="text-[#8C94A3] hover:text-white transition-colors">Политика конфиденциальности</a></li>
                    </ul>
                </div>
                
                <!-- О нас -->
                <div>
                    <h4 class="font-bold text-white mb-4 text-[14px]">О НАС</h4>
                    <div class="text-[#8C94A3] text-[14px] leading-relaxed">
                        <p class="mb-1">ТОО "MINDWAVE"</p>
                        <p class="mb-1">Адрес: Казахстан, г. Алматы,</p>
                        <p class="mb-1">Микрорайон Аккент, дом 41, кв/офис 20</p>
                        <p>БИН (ИИН): 241040011849</p>
                    </div>
                </div>
            </div>
            
            <!-- Копирайт -->
            <div class="mt-12 text-center border-t border-[#4E5566] pt-8">
                <p class="text-[#8C94A3] text-[14px]">
                    ©Copyrighted & Designed by 
                    <a href="#" class="text-[#2467EC] font-semibold hover:text-white transition-colors">MindWave</a>
                </p>
            </div>
        </div>
    </footer>
</template> 