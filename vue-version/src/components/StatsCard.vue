<template>
  <v-card class="pa-4 text-center" elevation="3">
    <h3 class="text-h6 font-weight-bold mb-2">{{ title }}</h3>
    <h1 class="text-h4 font-weight-bold" :style="{ color: color }">
      {{ value }}
    </h1>
  </v-card>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  color: {
    type: String,
    default: '#274C77'
  }
})
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}
</style>
