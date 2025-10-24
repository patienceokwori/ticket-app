<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="primary" dark flat>
      <v-toolbar-title class="font-weight-bold">TicketApp</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/tickets">Tickets</v-btn>
      <v-btn text to="/login">Login</v-btn>
      <v-btn text to="/signup">Sign Up</v-btn>
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.v-app-bar {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
