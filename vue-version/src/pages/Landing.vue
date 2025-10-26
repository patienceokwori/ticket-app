<template>
  <div class="relative bg-gradient-to-b from-blue-100 to-white overflow-hidden">
    <!-- Decorative Circle -->
    <div class="absolute top-[-50px] left-[-50px] w-40 h-40 bg-blue-300 rounded-full opacity-50"></div>

    <!-- Hero Section -->
    <section class="max-w-[1440px] mx-auto px-6 py-24 text-center relative z-10">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">TicketMaster App</h1>
      <p class="text-lg md:text-xl mb-8 text-gray-700">Manage your tickets efficiently and effortlessly.</p>
      <div class="flex justify-center gap-4">
        <router-link to="/login" class="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">Login</router-link>
        <router-link to="/signup" class="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Get Started</router-link>
      </div>
    </section>

    <!-- Wave SVG -->
    <svg class="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="#ffffff" d="M0,64L80,101.3C160,139,320,213,480,234.7C640,256,800,224,960,213.3C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </div>
</template>

<style scoped>
</style>
