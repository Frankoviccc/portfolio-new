import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';
import Home from "@/pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import Blog from "@/pages/Blog.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/blog', component: Blog },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);
app.use(router);
app.use(StoryblokVue,{
  accessToken: 'xFSXR4U3SqvkfQrtkTNpqwtt',
  use: [apiPlugin],
  apiOptions: {
    region: ''
  },
});

app.mount('#app');