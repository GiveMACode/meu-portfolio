import { createRouter, createWebHistory } from 'vue-router';

// Importe os componentes corretamente
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProjectsList from '../views/ProjectsList.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/projects', name: 'ProjectsList', component: ProjectsList },
  { path: '/contact', name: 'ContactPage', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
