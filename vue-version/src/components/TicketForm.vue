<template>
  <v-card class="pa-6" elevation="3">
    <h3 class="text-h6 font-weight-bold mb-4">{{ formTitle }}</h3>

    <v-form @submit.prevent="handleSubmit">
      <v-text-field label="Title" v-model="ticketData.title" required></v-text-field>
      <v-textarea label="Description" v-model="ticketData.description" required></v-textarea>
      <v-select
        label="Priority"
        :items="['Low', 'Medium', 'High']"
        v-model="ticketData.priority"
        required
      ></v-select>
      <v-select
        label="Status"
        :items="['Open', 'Pending', 'Resolved']"
        v-model="ticketData.status"
        required
      ></v-select>

      <v-row class="mt-4" justify="end">
        <v-btn color="grey" class="mr-2" @click="$emit('cancel')">Cancel</v-btn>
        <v-btn color="primary" type="submit">{{ buttonLabel }}</v-btn>
      </v-row>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  ticket: Object,
  formTitle: {
    type: String,
    default: 'Create Ticket'
  },
  buttonLabel: {
    type: String,
    default: 'Submit'
  }
})

const emit = defineEmits(['submit', 'cancel'])

const ticketData = ref({
  title: '',
  description: '',
  priority: '',
  status: ''
})

watch(
  () => props.ticket,
  (newVal) => {
    if (newVal) ticketData.value = { ...newVal }
  },
  { immediate: true }
)

const handleSubmit = () => {
  emit('submit', ticketData.value)
}
</script>
