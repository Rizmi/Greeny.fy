import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home/Home.vue';
import Solutions from '../components/Solutions/Solutions.vue';
import Projects from '../components/Projects/Projects.vue';
import Feedback from '../components/Feedback/Feedback.vue';
import Forum from '../components/Forum/Forum.vue';

const routes = [
  { path: '/', name: 'Home', component: Home }, //Index or Home
  { path: '/solutions', name: 'Solutions', component: Solutions }, //Page Solutions
  { path: '/projects', name: 'Projects', component: Projects }, //Page Projects
  { path: '/feedback', name: 'Feedback', component: Feedback }, //Page Feedback
  { path: '/forum', name: 'Forum', component: Forum }, //Page Forum
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
