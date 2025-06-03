import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home/Home.vue';
import Solutions from '../components/Solutions/Solutions.vue';
import Projects from '../components/Projects/Projects.vue';
import Calculator from '../components/Calculator/Calculator.vue';
import Forum from '../components/Forum/Forum.vue';

const routes = [
  { path: '/', name: 'Home', component: Home }, //Index or Home
  { path: '/solutions', name: 'Solutions', component: Solutions }, //Page Solutions
  { path: '/projects', name: 'Projects', component: Projects }, //Page Projects
  { path: '/calculator', name: 'Calculator', component: Calculator }, //Page Calculator
  { path: '/forum', name: 'Forum', component: Forum }, //Page Forum
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
