<template>
    <nav>
      <ul>
        <li><a href="HomePage.vue">Home</a></li>
        <li><a href="AboutPage.vue">About</a></li>
        <li><a href="ContactPage.vue">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarPage',
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  li {
    margin-right: 1rem;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  