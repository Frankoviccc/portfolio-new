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
import FormSection from "@/components/form-section/fs-form-section.vue";
import FormInput from "@/components/form-input/fs-form-input.vue";
import Row from "@/components/row/fs-row.vue";
import Content from "@/components/content/fs-content.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/projects', component: Projects },
  { path: '/projects/:slug', component: Content },
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
app.component("article-collection", ArticleCollection);
app.component("article-item", ArticleItem);
app.component("slide-collection", SlideCollection);
app.component("slide", Slide);
app.component("experience-collection", ExperienceCollection);
app.component("experience-item", ExperienceItem);
app.component("collaborate", Collaborate);
app.component("message", Message);
app.component("form-section", FormSection);
app.component("form-input", FormInput);
app.component("row", Row);
app.component("content", Content);

app.use(router);
app.use(StoryblokVue,{
  accessToken: 'xFSXR4U3SqvkfQrtkTNpqwtt',
  use: [apiPlugin],
  apiOptions: {
    region: ''
  },
});

app.mount('#app');