<template>
    <div>
      <AboutPage />
      <ProjectsList />
    </div>
  </template>
  
  <script>
  import AboutPage from './AboutPage.vue';
  import ProjectsList from './ProjectsList.vue';
  
  export default {
    components: {
      AboutPage,
      ProjectsList
    }
  }
  </script>
  