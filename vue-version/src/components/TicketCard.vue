<template>
  <v-card class="pa-4 mb-4" elevation="2">
    <v-row align="center" justify="space-between">
      <v-col cols="12" md="8">
        <h3 class="text-h6 font-weight-bold mb-1">{{ ticket.title }}</h3>
        <p class="text-body-2 mb-2">{{ ticket.description }}</p>
        <v-chip color="primary" variant="flat" size="small" class="mr-2">
          {{ ticket.status }}
        </v-chip>
        <v-chip color="orange" variant="flat" size="small">
          {{ ticket.priority }}
        </v-chip>
      </v-col>

      <v-col cols="12" md="4" class="text-end">
        <v-btn icon color="blue" variant="text" @click="$emit('edit', ticket)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="red" variant="text" @click="$emit('delete', ticket)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
defineProps({
  ticket: Object
})

defineEmits(['edit', 'delete'])
</script>
