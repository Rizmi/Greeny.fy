import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home/Home.vue';
import Solutions from '../components/Solutions/Solutions.vue';
import Events from '../components/Events/Events.vue';
import Feedback from '../components/Feedback/Feedback.vue';
import Contact from '../components/Contact/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home }, //Index or Home
  { path: '/solutions', name: 'Solutions', component: Solutions }, //Page Solutions
  { path: '/events', name: 'Events', component: Events }, //Page Events
  { path: '/feedback', name: 'Feedback', component: Feedback }, //Page Feedback
  { path: '/contact', name: 'Contact', component: Contact }, //Page Contact
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
