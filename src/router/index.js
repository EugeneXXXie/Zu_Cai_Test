import { createRouter, createWebHistory } from 'vue-router'
// import App from '../App.vue'
import testPage from "../views/testPage.vue";
import HomeView from "../views/HomeView.vue";
// nogisg ==>单场进球数缩写

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testPage',
      name: 'testPage',
      component: testPage
    }
  ]
})


export default router
