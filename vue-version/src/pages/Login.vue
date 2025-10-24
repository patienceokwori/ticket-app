<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-6" width="400">
      <h2 class="text-center mb-4">Login</h2>

      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        outlined
        dense
        clearable
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        outlined
        dense
        clearable
        required
      ></v-text-field>

      <v-btn
        color="primary"
        block
        class="mt-4"
        @click="handleLogin"
      >
        Login
      </v-btn>

      <p class="text-center mt-3">
        Don't have an account?
        <router-link to="/signup" class="text-decoration-none">
          Sign up
        </router-link>
      </p>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Form data
const email = ref("");
const password = ref("");

// Handle login
const handleLogin = () => {
  if (email.value && password.value) {
    // Temporary simple check
    router.push("/dashboard");
  } else {
    alert("Please enter your email and password.");
  }
};
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}

a {
  color: #1976d2;
}
</style>
