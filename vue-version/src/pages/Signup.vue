<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form @submit.prevent="handleSignup" class="space-y-4">
        <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded"/>
        <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded"/>
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" class="w-full p-2 border rounded"/>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
      </form>
      <p class="mt-4 text-center text-gray-600">
        Already have an account? 
        <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const handleSignup = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match")
    return
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    alert("Signup successful!")
    router.push('/dashboard')
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}
</script>
