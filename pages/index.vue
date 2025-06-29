<script setup>
import TheHeader from '~/components/layout/TheHeader.vue'
import CourseInfoBar from '~/components/course/CourseInfoBar.vue'
import CourseMainContent from '~/components/course/CourseMainContent.vue'
import TheFooter from '~/components/layout/TheFooter.vue'
</script>

<template>
  <div class="bg-white text-[16px]">
    <TheHeader />
    <CourseInfoBar />

    <!-- Main Content -->
    <main class="w-full px-8 py-8">
      <CourseMainContent />
    </main>

    <TheFooter />
  </div>
</template>

<style>
/* Custom styles if needed */
</style> 