<template>
  <div class="border p-4 rounded shadow bg-white">
    <h3 class="font-bold text-lg">{{ ticket.title }}</h3>
    <p>{{ ticket.description }}</p>
    <span class="text-sm text-gray-500">{{ ticket.status }}</span>
  </div>
</template>

<script setup>
defineProps({
  ticket: Object
})
</script>
