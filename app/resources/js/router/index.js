import Vue from "vue";
import VueRouter from "vue-router";
import publicRouter from "@/app/public/public.router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { 
      path: "/api" 
    }, 
    ...publicRouter
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
