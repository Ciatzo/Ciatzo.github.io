import { createRouter, createWebHistory } from "vue-router";
import BioView from "@/Views/BioView.vue";
import ResumeView from "@/Views/ResumeView.vue";
import ContactView from "@/Views/ContactView.vue";

const router = createRouter({
    history: createWebHistory(),
  
    routes: [
      {
        path: "/",
        name: "home",
        component: BioView,
        meta: {
          title: "Home",
        },
      },
      {
        path: "/resume",
        name: "resume",
        component: ResumeView,
        meta: {
          title: "Resume",
        },
      },
      {
        path: "/contact",
        name: "contact",
        component: ContactView,
        meta: {
          title: "Contact",
        },
      }
    ],
  });
  
  //change page tite based on route
  router.beforeEach((to, from, next) => {
    document.title = `Cian Jansen | ${to.meta.title}`;
    next();
  });
  
  export default router;
  