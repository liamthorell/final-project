import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/courses",
    name: "Courses",
    component: () =>
      import(/* webpackChunkName: "Courses" */ "../views/Courses.vue"),
  },
  {
    path: "/play",
    name: "Play",
    component: () => import(/* webpackChunkName: "Play" */ "../views/Play.vue"),
  },
  {
    path: "/play/tic-tac-toe",
    name: "TicTacToe",
    component: () =>
      import(
        /* webpackChunkName: "TicTacToe" */ "../views/Games/TicTacToe.vue"
      ),
  },
  {
    path: "/play/game-clicker",
    name: "GameClicker",
    component: () =>
      import(
        /* webpackChunkName: "TicTacToe" */ "../views/Games/GameClicker.vue"
      ),
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});

export default router;
