<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-6" width="400">
      <h2 class="text-center mb-4">Sign Up</h2>
      <v-text-field label="Full Name"></v-text-field>
      <v-text-field label="Email" type="email"></v-text-field>
      <v-text-field label="Password" type="password"></v-text-field>
      <v-btn color="primary" block>Register</v-btn>
      <p class="text-center mt-3">
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </v-card>
  </v-container>
</template>

<script setup>
</script>
