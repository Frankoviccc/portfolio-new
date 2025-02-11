import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';
import Home from "@/pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import Blog from "@/pages/Blog.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";
import Page from "@/components/page.vue";
import Hero from "@/components/hero/fs-hero.vue";
import ArticleCollection from "@/components/article-collection/fs-article-collection.vue";
import ArticleItem from "@/components/article-item/fs-article-item.vue";
import SlideCollection from "@/components/slide-collection/fs-slide-collection.vue";
import Slide from "@/components/slide/fs-slide.vue";
import ExperienceCollection from "@/components/experience-collection/fs-experience-collection.vue";
import ExperienceItem from "@/components/experience-item/fs-experience-item.vue";
import Collaborate from "@/components/collaborate/fs-collaborate.vue";
import Message from "@/components/message/fs-message.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
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

app.component("page", Page);
app.component("hero", Hero);
app.component("article_collection", ArticleCollection);
app.component("article_item", ArticleItem);
app.component("slide_collection", SlideCollection);
app.component("slide", Slide);
app.component("experience_collection", ExperienceCollection);
app.component("experience_item", ExperienceItem);
app.component("collaborate", Collaborate);
app.component("message", Message);

app.use(router);
app.use(StoryblokVue,{
  accessToken: 'xFSXR4U3SqvkfQrtkTNpqwtt',
  use: [apiPlugin],
  apiOptions: {
    region: ''
  },
});

app.mount('#app');