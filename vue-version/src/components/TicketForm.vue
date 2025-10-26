<template>
  <form @submit.prevent="handleSubmit" class="space-y-3 p-6 border rounded shadow">
    <input v-model="title" type="text" placeholder="Ticket Title" class="w-full p-2 border rounded"/>
    <textarea v-model="description" placeholder="Description" class="w-full p-2 border rounded"></textarea>
    <select v-model="status" class="w-full p-2 border rounded">
      <option value="open">Open</option>
      <option value="in-progress">In Progress</option>
      <option value="closed">Closed</option>
    </select>
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Submit Ticket
    </button>
  </form>
</template>


<script setup>
import { ref } from 'vue'
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const title = ref('')
const description = ref('')
const status = ref('open')

const handleSubmit = async () => {
  try {
    await addDoc(collection(db, 'tickets'), {
      title: title.value,
      description: description.value,
      status: status.value,
      createdAt: serverTimestamp()
    })
    title.value = ''
    description.value = ''
    status.value = 'open'
    alert('Ticket created successfully!')
  } catch (err) {
    console.error(err)
    alert('Error creating ticket')
  }
}
</script>
