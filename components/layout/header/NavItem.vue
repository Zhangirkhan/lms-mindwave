<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <a 
    :href="href" 
    class="h-full flex items-center border-t-2"
    :class="active 
      ? 'text-white border-[#2467EC]' 
      : 'text-[#8C94A3] border-transparent hover:border-[#2467EC] hover:text-white'"
  >
    <slot />
  </a>
</template> 