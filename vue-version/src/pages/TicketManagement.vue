<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Ticket Management</h1>
    <ticket-form />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <ticket-card v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import TicketCard from '@/components/TicketCard.vue'
import TicketForm from '@/components/TicketForm.vue'

const tickets = ref([])

const fetchTickets = async () => {
  const snapshot = await getDocs(collection(db, 'tickets'))
  tickets.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

onMounted(() => fetchTickets())
</script>
