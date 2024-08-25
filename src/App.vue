<template>
  <div>
    <NavbarPage />
    <HomePage />
    <AboutPage />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import NavbarPage from './components/NavbarPage.vue';

export default {
  components: {
    HomePage,
    AboutPage,
    NavbarPage,
  }
}
</script>
