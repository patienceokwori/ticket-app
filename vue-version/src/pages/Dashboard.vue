<template>
  <div class="max-w-[1440px] mx-auto p-4">
    <h2 class="text-2xl font-bold mb-6">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 bg-white shadow rounded">Total Tickets: {{ total }}</div>
      <div class="p-4 bg-white shadow rounded text-green-600">Open: {{ open }}</div>
      <div class="p-4 bg-white shadow rounded text-gray-600">Closed: {{ closed }}</div>
    </div>
    <router-link to="/tickets" class="mt-4 inline-block text-blue-500 hover:underline">Manage Tickets</router-link>
    <button @click="logout" class="ml-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'vue-router';

const router = useRouter();
const total = ref(0);
const open = ref(0);
const closed = ref(0);

const fetchTickets = async () => {
  const querySnapshot = await getDocs(collection(db, "tickets"));
  const tickets = querySnapshot.docs.map(doc => doc.data());
  total.value = tickets.length;
  open.value = tickets.filter(t => t.status === 'open').length;
  closed.value = tickets.filter(t => t.status === 'closed').length;
};

const logout = async () => {
  await signOut(auth);
  router.push('/login');
};

onMounted(fetchTickets);
</script>
