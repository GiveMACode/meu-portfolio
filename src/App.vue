<template>
  <div>
    <HomePage />
    <AboutPage />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';

export default {
  components: {
    HomePage,
    AboutPage
  }
}
</script>
